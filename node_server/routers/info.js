// 加载Express模块
var express = require('express');

// 引入连接池
const db = require('../utils/db');

// 加载MD5模块
const md5 = require('md5');

// 创建路由
const info = express.Router();

info.get('/getInfo', (req, res) => {
    const sql = 'select * from info'
    db.query(sql, (err, results) => {
        // 失败
        if (err) {
            return console.log(err.message)
        }
        res.send({
            code: 200,
            msg: '获取数据成功',
            data: results
        })
    })
})


info.post('/search', (req, res) => {
    const body = req.body
    const sql = 'select * from info where age like \'' + '%' + body.age + '%' + '\''
    db.query(sql, (err, results) => {
        // 失败
        if (err) {
            return console.log(err.message)
        }
        res.send({
            status: 200,
            msg: '查询数据成功',
            data: results
        })
    })
})


info.post('/add', (req, res) => {
    const body = req.body
    const sql = 'INSERT INTO info(name,age) VALUES(?,?)'
    db.query(sql, [body.name, body.age], (err, results) => {
        // 失败
        if (err) {
            return console.log(err.message)
        }
        res.send({
            status: 200,
            msg: '添加数据成功',
            data: results
        })
    })
})

// 导入
module.exports = info;