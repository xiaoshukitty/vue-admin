// 加载Express模块
let express = require('express');

// 引入连接池
const db = require('../utils/db');

// 加载MD5模块
const md5 = require('md5');

// 创建路由
const orderList = express.Router();

//获取数据
orderList.get('/orderList/getFoodList', (req, res) => {
    // 查询数据
    // const sql = 'SELECT * FROM order_list';
    const sql = 'SELECT * FROM order_list ORDER BY order_date DESC;'

    db.query(sql, (err, result) => {
        if (err) {
            return console.log(err.message)
        }
        res.send({
            code: 200,
            message: '获取数据成功',
            data: result
        })
    })
})

//添加数据
orderList.post('/orderList/addFood', (req, res) => {
    const {
        order_date,
        order_money,
        order_data
    } = req.body;

    // 下单数据添加到mysql
    const sql = 'INSERT INTO order_list(order_date,order_money,order_data) VALUES(?,?,?)';

    db.query(sql, [order_date, order_money, order_data], (err, result) => {
        // 失败
        if (err) {
            return console.log(err.message)
        }
        res.send({
            code: 200,
            message: '添加数据成功',
            data: result
        })
    })
})

//删除数据
orderList.get('/orderList/deleteFood', (req, res) => {
    const {
        id
    } = req.query;

    // 下单数据添加到mysql
    const sql = 'DELETE FROM order_list WHERE id=?';

    db.query(sql, [id], (err, result) => {
        // 失败
        if (err) {
            return console.log(err.message)
        }
        res.send({
            code: 200,
            message: '删除数据成功',
            data: result
        })
    })
})


module.exports = orderList;