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

    // 查询数据库中是否存在该用户
    const sql = `SELECT * FROM login WHERE username='${username}' AND password='${password}'`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
            res.json({
                code: 1,
                message: '用户名或密码错误'
            });
        } else {
            // 验证成功，生成token并返回
            const payload = {
                username: username
            }; // 按照需求设置payload
            // const secretKey = '147258'; // 按照需求设置密钥
            const secretKey = '123456';
            const token = jwt.sign(payload, secretKey, {
                expiresIn: '1h'
            }); // 生成token，设置过期时间1小时

            // 将token返回给客户端
            res.json({
                token: token,
                code: 200,
                message: '登录成功'
            });
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

module.exports = login;