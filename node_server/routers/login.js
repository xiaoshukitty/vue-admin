/**
 * 登录
 */
// 导入 express 模块
let express = require('express');

//引入链接池
const db = require('../utils/db');

// 创建路由
const login = express.Router();

const md5 = require('md5')

const jwt = require('jsonwebtoken')


// 证token是否存在,以及token是否有效
const verifyToken = (req, res, next) => {
    // 获取请信息中的token
    const token = req.body.token;
    console.log('token---', token);
    // 如果token不存在，则返回错误信息
    if (!token) {
        return res.json({
            code: 401,
            message: '未提供token'
        });
    }
    try {
        // 验证token是否有效
        const decoded = jwt.verify(token, '123456');
        // 将解码后的token信息保存到请求对象中
        req.user = decoded;
        next();
    } catch (err) {
        return res.json({
            code: 403,
            message: 'token验证失败'
        });
    }
}


// 用户登录
login.post('/login/userLogin', (req, res) => {
    const {
        username,
        password,
    } = req.body;

    if (!username || !password) res.json({
        code: 403,
        message: '用户名或密码不能为空'
    });

    // 进行MD5加密
    // const md5Pwd = md5(password);


    // 判断是否有账号
    const sql = "select * from login where USERNAME=?";
    db.query(sql, [username], (err, result) => {
        if (result.length == 0) {
            // 数据库没有该账号
            res.json({
                code: 300,
                message: '该账号不存在'
            })
        } else {
            const sql1 = "select password from login where USERNAME=?";
            db.query(sql1, [username], (err, result) => {
                if (password !== result[0].password) {
                    //密码错误
                    res.json({
                        code: 400,
                        message: '密码错误'
                    })
                } else {
                    // 验证成功，生成token并返回
                    const payload = {
                        username: username
                    }; // 按照需求设置payload
                    // const secretKey = '147258'; // 按照需求设置密钥
                    const secretKey = '123456';
                    const token = jwt.sign(payload, secretKey, {
                        expiresIn: 3600
                    }); // 生成token，设置过期时间1小时

                    //刷新token
                    const refreshToken = jwt.sign(payload, secretKey, {
                        expiresIn: '7d'
                    });

                    // 将token返回给客户端
                    res.json({
                        token: token,
                        refreshToken:refreshToken,
                        code: 200,
                        message: '登录成功'
                    });
                }
            })
        }
    })

})

//退出登录
login.post('/login/logout', verifyToken, (req, res) => {
    // 删除token
    res.clearCookie('token');
    res.json({
        code: 200,
        message: '退出成功'
    });
});

//注册账号
login.post('/login/signIn', (req, res) => {
    const {
        username,
        password,
        phoneNumber,
    } = req.body;
    const sql = 'select * from login where username=?'
    // 判断数据库有没有该账号
    db.query(sql, [username], (err, result) => {
        if (result.length != 0) {
            res.json({
                code: 300,
                message: '该账号已存在，请重新设置！'
            })
        } else {

            // insert into 插入数据
            // 往 login 表中插入数据
            const sql1 = "insert into login (username,password,phoneNumber) values (?,?,?)";
            db.query(sql1, [username, password, phoneNumber], (req, result) => {
                console.log(result.affectedRows, 'result---');
                // result.affectedRows==1 是插入数据成功
                if (result.affectedRows == 1) {
                    res.json({
                        code: 200,
                        message: '注册成功！'
                    })
                }
            })
        }
    })
})

//修改密码
login.post('/login/updatePassword', (req, res) => {
    const {
        password,
        username
    } = req.body;

    const sql = "update login set password=? WHERE username=? "
    db.query(sql, [password, username], (err, result) => {
        console.log('result---', result);
        res.json({
            code: 200,
            message: '更新成功'
        });
    })
})
module.exports = login;