/**
 * 菜品
 */
// 导入 express 模块
let express = require('express');

//引入链接池
const db = require('../utils/db');

// 创建路由
const dishes = express.Router();



// 获取菜品列表
dishes.post('/dishes/getDishesList', (req, res) => {
    let sql = 'select * from dishes';
    db.query(sql, (err, result) => {
        if (err) return console.log(err.message);
        res.send({
            code: 200,
            message: '获取菜品列表成功',
            data: result
        })
    })
})



module.exports = dishes;