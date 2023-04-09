// 加载Express模块
var express = require('express');

// 引入连接池
const db = require('../utils/db');

// 加载MD5模块
const md5 = require('md5');

// 创建路由
const userInfo = express.Router();

// 用户信息
userInfo.post('/userInfo/userList', (req, res) => {
    const {
        name: userName,
        age: userAge,
    } = req.body;

    var page = parseInt(req.query.page) || 1;
    var pagesize = parseInt(req.query.pagesize) || 2;

    let sql = 'SELECT * FROM userInfo WHERE 1=1 ';
    if (userName !== '') sql = sql + " and name = '" + userName + "'"
    if (userAge !== '') sql = sql + " and age= '" + userAge + "'"

    db.query(sql, (err, results) => {
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

//添加信息
userInfo.post('/add', (req, res) => {
    const {
        name: userName,
        age: userAge
    } = req.body;
    const sql = 'INSERT INTO userInfo(name,age) VALUES(?,?)';

    db.query(sql, [userName, userAge], (err, results) => {
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

// 更新数据
userInfo.post('/userInfo/updataUserInfo', (req, res) => {
    const {
        name: userName,
        age: userAge,
        id: userId
    } = req.body;

    let sql = 'UPDATE userInfo SET name=?,age=? WHERE id=?';

    db.query(sql, [userName, userAge, userId], (err, results) => {
        if (err) {
            return console.log(err.message)
        }
        res.send({
            status: 200,
            msg: '更新数据成功',
            data: results
        })
    })
})

// 删除用户数据
userInfo.post('/userInfo/deleteUserInfo', (req, res) => {
    const {
        id: userId
    } = req.body;

    let sql = 'DELETE FROM userInfo WHERE id=?';
    db.query(sql, [userId], (err, results) => {
        if (err) {
            return console.log(err.message)
        }
        res.send({
            status: 200,
            msg: '删除数据成功',
            data: results
        })
    })
})

// 导入
module.exports = userInfo;

/**
 * 
// // 获取用户信息数据
// userInfo.get('/getInfo', (req, res) => {
//     const sql = 'select * from userInfo'
//     db.query(sql, (err, results) => {
//         // 失败
//         if (err) {
//             return console.log(err.message)
//         }
//         res.send({
//             code: 200,
//             msg: '获取数据成功',
//             data: results
//         })
//     })
// })
 */