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
    // sql 语句
    let sql = 'SELECT * FROM memo WHERE 1=1';
    console.log('sql---', sql)
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
module.exports = memo;