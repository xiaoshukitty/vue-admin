// 加载MySQL模块
var mysql = require('mysql');

// 创建MySQL连接池
var db = mysql.createPool({
    connectionLimit: 10, // 设置连接池最大连接数
    host: '127.0.0.1', //服务器地址
    post: 3306, //数据库端口
    user: 'root', //数据库登陆就名
    password: 'sh001220', //数据库登陆密码
    database: 'test' //数据库名
});

// db.getConnection(function (err, connection) { // 测试链接是否成功
//     if (err) {
//         console.log('与MySQL数据库建立连接失败！');
//         console.log('错误信息为：' + err);
//     } else {
//         console.log('与MsSQL数据库建立连接成功！');
//     }
// });

//每5秒向数据库发送一个请求避免断开数据库连接---称为 ”保活“

function query(sql, callback) {
    db.getConnection((err, connection) => { // 测试链接是否成功
        if (err) {
            console.log('与MySQL数据库建立连接失败！');
            console.log('错误信息为：' + err);
            callback(err, null);
        } else {
            console.log('与MsSQL数据库建立连接成功！');
            // 执行查询
            connection.query(sql, (err, results) => {
                // 释放连接
                connection.release();
                callback(err, results);
            });
        }
    });
}
// 定时任务
setInterval(() => {
    const sql = 'SELECT 1';
    query(sql, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            // console.log('查询结果：', results);
        }
    });
}, 5000);


module.exports = db; //导出