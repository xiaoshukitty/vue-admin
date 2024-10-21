/**
 * 可以使用 npm run uncomment 去掉注释 ，需要在注释前加上 @uncomment 标记 才可以 
 */
const fs = require('fs');
const path = require('path');


// 你要修改的目标文件路径，可以根据需求指定多个文件,当前是 main.js 文件
const filePath = path.resolve(__dirname, '../main.js');

// 读取文件内容
let fileContent = fs.readFileSync(filePath, 'utf-8');

// 查找并替换带有特定标记的注释
// 将 // @uncomment 放开的代码解除注释
fileContent = fileContent.replace(/\/\/\s*@uncomment\s/g, '');
// 将代码恢复为注释
// fileContent = fileContent.replace(/console\.log\((.*)\)/g, '// @uncomment console.log($1)');

// 写回文件
fs.writeFileSync(filePath, fileContent, 'utf-8');

console.log(`File ${filePath} has been updated!`);