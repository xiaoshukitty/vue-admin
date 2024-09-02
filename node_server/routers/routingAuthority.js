/**
 * 路由
 */
// 导入 express 模块
let express = require('express');

//引入链接池
const db = require('../utils/db');

// 创建路由
const routingAuthority = express.Router();

module.exports = routingAuthority;
