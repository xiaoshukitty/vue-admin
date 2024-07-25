// 导入 express 模块
let express = require('express');

//引入链接池
const db = require('../utils/db');

// 创建路由
const wxMsg = express.Router();
const axios = require('axios');

// 用户信息
const user = {
    appid: 'wxaa27f5ce3a59d0f8', // 填写你自己的appid ( 微信公众平台获取 )
    secret: '7de5d1c82dc7187a856bc720aac604bc', // 填写你自己的appsecret密钥 ( 微信公众平台获取 )
    openid: ''
}
// 模板ID - template_id
const temp_id = 'Pbur9QdHiyABD54MGFrDUKhiLMHKOUOQLSWhMMePbQ4' // 填写你申请选用的模板id

// 获取Openid请求接口
wxMsg.post('/wxMsg/getOpenId', (req, res) => {
    // 客户端发来：code
    let data = req.body.code;
    // 获取Openid函数
    getOpenid(data, (result) => {
        // 保存openid待用
        user.openid = result.data.openid;
        res.send({
            'request': 'ok',
            code: 200
        })
    })
})

// 发送订阅消息接口
wxMsg.post('/wxMsg/sendTempMsg', (req, res) => {
    // 客户端发来：code
    console.log("客户端发来：", req.body)
    let formInfo = req.body.formInfo;
    sendTempMsg(formInfo, (result) => {
        console.log('订阅消息发送结果：', result.data)
        res.send({
            'request': 'ok',
            code: 200
        })
    })

})


// 获取Openid处理函数 - 通过code获取openid
function getOpenid(data, success) {
    axios({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + user.appid + '&secret=' + user.secret + '&js_code=' + data + '&grant_type=authorization_code',
            method: 'GET',
        })
        .then((res) => {
            // 成功返回 openid 
            user.openid = res.data.openid;
            success(res)
        })
        .catch((err) => {
            console.log(err);
        })
}


// 发送订阅消息函数处理
function sendTempMsg(formInfo, success) {
    // 获取接口调用凭据
    getAccessToken((res) => {
        // 订阅模板
        var temp = {
            "touser": user.openid,
            "template_id": temp_id,
            "data": {
                "thing3": {
                    "value": formInfo.storeName
                },
                "thing9": {
                    "value": formInfo.orderName
                },
                "thing6": {
                    "value": formInfo.dishes
                },
                "amount5": {
                    "value": formInfo.moeny
                },
                "time2": {
                    "value": formInfo.submitDate
                },
            },
            "miniprogram_state": "developer",
            "lang": "zh_CN"
        }
        console.log("模板信息", temp)
        let token = res.data.access_token
        console.log('获取到的access_token:', token);
        // 发送订阅API
        let url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' + token
        axios({
            url,
            method: 'POST',
            data: temp
        }).then((res) => {
            success(res)
        }).catch((err) => {
            console.log(err)
        })
    })
}

// 获取access_token函数
function getAccessToken(success) {
    // 获取小程序全局唯一后台接口调用凭据，token有效期为7200s，开发者需要进行妥善保存。
    let url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + user.appid + '&secret=' + user.secret
    axios({
        url,
        method: 'GET',
    }).then((res) => {
        console.log(res.data.access_token) // access_token
        success(res)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = wxMsg;