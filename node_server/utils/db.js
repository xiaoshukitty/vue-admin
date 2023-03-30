// 加载MySQL模块
var mysql = require('mysql');

// 创建MySQL连接池
var db = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1', //服务器地址
    post: 3306, //数据库端口
    user: 'root', //数据库登陆就名
    password: 'sh001220', //数据库登陆密码
    database: 'test' //数据库名
});

db.getConnection(function (err, connection) { // 测试链接是否成功
    if (err) {
        console.log('与MySQL数据库建立连接失败！');
        console.log('错误信息为：' + err);
    } else {
        console.log('与MsSQL数据库建立连接成功！');
    }
});


module.exports = db; //导出