// 加载Express模块
var express = require('express');

// 引入连接池
const db = require('../utils/db');


const fs = require('fs');
// 创建路由
const pictures = express.Router();

//处理 multipart/form-data 类型的表单数据
const multer = require('multer')

const makeUuid = require('../utils/makeUuid')


const upload = multer({
    storage: multer.diskStorage({
        //设置文件存储位置
        destination: function (req, file, cb) {
            let date = new Date();
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, '0');
            let day = date.getDate();
            // 设置存储路径，由于我的静态资源目录是设置的 public，所以设置在 public 文件下
            let dir = `public/uploads/${file.fieldname}/${year}${month}${day}`;


            console.log('dir--', dir);

            //判断目录是否存在，没有则创建
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                });
            }
            cb(null, dir);
        },
        //设置文件名称
        filename(req, file, cb) {
            // 重命名文件名，防止重复
            let fileName = file.fieldname + '-' + Date.now() + '-' + file.originalname
            cb(null, fileName);
        }
    })
});


// 常用的两方法：多选用 array(),单选用single()
const multipleFile = upload.array('file', 3)


pictures.post('/pictures/update', (req, res, next) => {
    multipleFile(req, res, err => {

        // const sql = `INSERT INTO pic(url) VALUES (?)`;
        // const destination = req.files[0].destination;
        // const filename = req.files[0].filename;
        // const avatarUrl = `${destination}/${filename}`
        // let resData = {
        //     name: filename,
        //     avatarUrl
        // }
        // db.query(sql, [avatarUrl], (err, results) => {

        //     if (err) {
        //         res.json({
        //             code: 500,
        //             msg: '服务器报错，请稍后重试'
        //         })
        //     } else {
        //         res.json({
        //             code: 200,
        //             msg: '成功',
        //             data: results,
        //             resData
        //         })
        //     }
        // })

        for (let i = 0; i < req.files.length; i++) {
            // ?,? => id,url
            let id = makeUuid().toString()
            // 'INSERT INTO memo(create_date,weather,content) VALUES(?,?,?)';
            let sql = `INSERT INTO pic(url) VALUES (?)`
            // 重新设置存储在数据库的 url 地址，去掉前面的public字符串方便读取
            let destination = req.files[i].destination.substring(6)
            let url = `${destination}/${req.files[i].filename}`
            let resData = {
                name: req.files[i].filename,
                url
            }
            console.log('resData---', resData);

            db.query(sql, [url], (err, data) => {
                if (err) {
                    res.json({
                        code: 500,
                        msg: '服务器报错，请稍后重试'
                    })
                } else {
                    res.json({
                        code: 200,
                        msg: '成功',
                        data: data,
                        resData
                    })
                }
            })
        }
    })
})

module.exports = pictures;