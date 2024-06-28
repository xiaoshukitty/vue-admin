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
    const name = req.body.name;
    let sql = 'select * from dishes where name like ?';
    db.query(sql, ['%' + name + '%'], (err, result) => {
        if (err) return console.log(err.message);

        // console.log('result---', result.length);
        for (let i = 0; i < result.length; i++) {
            if (result[i].attribute && result[i].attribute != null) {
                result[i].attribute = JSON.parse(result[i].attribute);
            }
        }


        res.send({
            code: 200,
            message: '获取菜品列表成功',
            data: result
        })
    })
})

//添加菜品
dishes.post('/dishes/addDishes', (req, res) => {

    const {
        name,
        food_img,
        price,
        inventory,
        uid,
        attribute
    } = req.body;

    console.log('attribute---', attribute);


    // 下单数据添加到mysql
    const sql = 'INSERT INTO dishes(name,food_img,price,inventory,uid,attribute) VALUES(?,?,?,?,?,?)';

    db.query(sql, [name, food_img, price, inventory, uid, attribute], (err, result) => {
        if (err) return console.log(err.message);
        res.send({
            code: 200,
            message: '添加数据成功',
            data: result
        })
    })
})

// 更新菜单
dishes.post('/dishes/updateDishes', (req, res) => {
    const {
        id,
        name,
        food_img,
        price,
        inventory,
        uid,
        attribute
    } = req.body;

    // 下单数据添加到mysql
    const sql = 'UPDATE dishes SET name=?,food_img=?,price=?,inventory=?,uid=?,attribute=? WHERE id=?';
    db.query(sql, [name, food_img, price, inventory, uid, attribute, id], (err, result) => {
        if (err) return console.log(err.message);
        res.send({
            code: 200,
            message: '更新数据成功',
            data: result
        })
    })
})

//删除菜单
dishes.post('/dishes/deleteDishes', (req, res) => {
    const {
        id,
    } = req.body;

    // 下单数据添加到mysql
    const sql = 'DELETE FROM dishes WHERE id=?';
    db.query(sql, [id], (err, result) => {
        if (err) return console.log(err.message);
        res.send({
            code: 200,
            message: '删除数据成功',
            data: result
        })
    })
})

module.exports = dishes;