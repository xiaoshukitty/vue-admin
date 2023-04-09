/**
 * 备忘录
 */
// 导入 express 模块
let express = require('express');

//引入链接池
const db = require('../utils/db');

// 创建路由
const memo = express.Router();

// 获取备忘录列表(可做筛选)
memo.post('/memo/getMemoList', (req, res) => {
    const {
        create_date: data
    } = req.body;
    // sql 语句
    let sql = 'SELECT * FROM memo WHERE 1=1 ';
    if (data !== undefined) sql = sql + " and create_date = '" + data + "'"

    db.query(sql, (err, results) => {
        if (err) {
            throw new Error('getMemoList No Mistake')
        }
        res.send({
            status: 200,
            msg: '成功',
            data: results
        })
    })
})

// 添加备忘录
memo.post('/memo/addMemoList', (req, res) => {
    const {
        create_date,
        weather,
        content
    } = req.body;

    const sql = 'INSERT INTO memo(create_date,weather,content) VALUES(?,?,?)';
    db.query(sql, [create_date, weather, content], (err, resulte) => {
        if (err) {
            return console.log(err.message);
        }
        res.send({
            status: 200,
            msg: '添加数据成功',
            data: resulte
        })
    })
})

// 更新备忘录数据
memo.post('/memo/updataMemoList', (req, res) => {
    const {
        create_date,
        weather,
        content,
        id,
    } = req.body;

    const sql = 'UPDATE memo SET create_date=?,weather=?,content=? WHERE id=?'

    db.query(sql, [create_date, weather, content, id], (err, results) => {
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

// 删除备忘录
memo.post('/memo/delMemoList', (req, res) => {
    const {
        id
    } = req.body;

    const sql = 'DELETE FROM memo WHERE id=?';

    db.query(sql, [id], (err, results) => {
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
module.exports = memo;