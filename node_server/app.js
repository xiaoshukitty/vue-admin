// 加载Express模块
var express = require('express');
const http = require('http');
const WebSocket = require('ws');

// 加载bodyParser模块
var bodyParser = require("body-parser");
// 加载CORS模块
var cors = require('cors');

// 引入 信息(info) 路由
const userInfo = require("./routers/userInfo")
// 引入 备忘录(memo) 路由
const memo = require('./routers/memo')
// 引入 登录(login) 路由
const login = require('./routers/login')
//引入 图片库(pictures) 路由
const pictures = require('./routers/pictures')
//引入 菜品(dishes) 路由
const dishes = require('./routers/dishes')
//引入 chatGPT(chatGPT) 路由
const chatGPT = require('./routers/chatGPT')
//引入 wxMsg(wxMsg) 路由
const wxMsg = require('./routers/wxMsg')

// 创建服务器对象
var app = express();
const server = http.createServer(app);

// 创建WebSocket服务器
const wss = new WebSocket.Server({
    server
});

// 引入连接池
const db = require('./utils/db');

// 存储已连接的客户端
const clients = new Set();

// 使用CORS中间件
app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
})); //跨域处理

// 配置跨域请求头

app.all("*", (req, res, next) => {
    //配置请求头信息，包含字符集等等 
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*"); //允许所有跨域请求
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.header("Access-Control-Allow-Origin", req.headers.origin); // 设置允许来自哪里的跨域请求访问（值为*代表允许任何跨域请求，但是没有安全保证）
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"); // 设置允许接收的请求类型
    res.header("Access-Control-Allow-Headers", "Content-Type,request-origin"); // 设置请求头中允许携带的参数
    next();
})

app.use(bodyParser.json()); //用于解析json 会自动选择最为适宜的解析方式
app.use(bodyParser.urlencoded({
    extended: true
})); //Context-Type 为application/x-www-form-urlencoded 时 返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。

// 使用 用户信息(userInfo) 路由
app.use(userInfo)
// 使用 备忘录(memo) 路由
app.use(memo)
// 使用 登录(login) 路由
app.use(login)
// 使用 图片库(pictures) 路由
app.use(pictures)
// 使用 菜品(dishes) 路由
app.use(dishes)
// 使用 chatGPT(chatGPT) 路由
app.use(chatGPT)
// 使用 wxMsg(wxMsg) 路由
app.use(wxMsg)


// 处理WebSocket连接
wss.on('connection', (ws) => {
    console.log('New client connected');
    clients.add(ws);

    // //加载历史消息发送给新连接的客户端
    const historySql = 'SELECT userId, chatMsg, type,timestamp FROM webSocketChatTable ORDER BY timestamp ASC';
    db.query(historySql, (err, results) => {
        if (err) {
            console.error('Error retrieving history messages:', err);
            return;
        }
        results.forEach(msg => {
            const historyMessage = JSON.stringify(msg);
            ws.send(historyMessage);
        })
    })

    // 处理客户端发送的消息
    ws.on('message', (message) => {
        console.log('Received:', message.toString());
        const {
            userId,
            chatMsg,
            type,
            timestamp
        } = JSON.parse(message.toString());
        //将消息存在数据库

        const sql = 'INSERT INTO webSocketChatTable (userId, chatMsg,type,timestamp) VALUES (?,?,?,?)'
        db.query(sql, [userId, chatMsg, 'you', timestamp], (err, result) => {
            if (err) {
                console.error('Error inserting message into database:', err);
                return;
            }
            // 将消息广播给所有连接的客户端
            const broadcastMessage = JSON.stringify({
                userId,
                chatMsg,
                type:'you',
                timestamp
            });
            clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(broadcastMessage);
                }
            });
        })

        // // 将消息广播给所有连接的客户端
        // clients.forEach(client => {
        //     if (client.readyState === WebSocket.OPEN) {
        //         client.send(message);
        //     }
        // });
    });

    // 处理客户端断开连接
    ws.on('close', () => {
        console.log('Client disconnected');
        clients.delete(ws);
    });

    // 发送欢迎消息给新连接的客户端
    // ws.send('Welcome to the chat');
    // ws.send(JSON.stringify({ userId: '234567', message: 'Welcome to the chat', timestamp: new Date() }));
});

// 启动服务器
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// 指定服务器对象监听的端口号
// app.listen(3000, (err) => {
//     if (!err) {
//         console.log('服务器启动成功了')
//     }
// })