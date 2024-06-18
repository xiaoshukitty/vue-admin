/**
 * chatGPT接口接入
 */
// 导入 express 模块
let express = require('express');

//引入链接池
const db = require('../utils/db');

// 创建路由
const chatGPT = express.Router();

const axios = require('axios');

require('dotenv').config();


chatGPT.post('/chatGPT/chat', async (req, res) => {
    const userMessage = req.body.message;
    // const userMessage = '正则写一个手机号';

    console.log('openai接口收到消息：', process.env.OPENAI_API_KEY);

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: userMessage,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 0.5
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

        console.log('response---', response);

        res.json({
            response: response.data.choices[0].text.trim()
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Something went wrong'
        });
    }
});




module.exports = chatGPT;