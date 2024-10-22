/**
 * 可以使用 npm run uncomment 去掉注释 ，需要在注释前加上 @uncomment 标记 才可以 
 */
const fs = require('fs');
const path = require('path');

// 需要修改的文件目录路径，支持多文件
const targetDirectories = [
    path.resolve(__dirname, '../')
]


// 查找并解除注释的标记，例如： const commentMark = '';
const commentMark = '// @uncomment';

//当前路径
const currentPath = __filename;


// 递归遍历给定目录，获取该目录下所有文件的完整路径，包括子目录中的文件。
const getAllFiles = (dirPath, arrayOfFiles) => {
    // 获取目录中的文件和子目录
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    // 遍历目录中的文件和子目录
    files.forEach((file) => {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            // 递归查找子目录
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
        } else {
            // 将文件路径添加到数组中
            arrayOfFiles.push(path.join(dirPath, file));
        }
    })

    return arrayOfFiles;
}


//读取文件内容，查找符合 // @uncomment 标记的注释，并通过 replace 去除注释符号。
const processFile = (filePath) => {

    // 读取文件内容
    let fileContent = fs.readFileSync(filePath, 'utf8');

    //如果文件包含标记注释才进行替换
    if (fileContent.includes(commentMark)) {
        // 将符合条件的注释行去掉注释符号
        fileContent = fileContent.replace(new RegExp(`${commentMark}\\s*`, 'g'), '');
        // 写回文件
        fs.writeFileSync(filePath, fileContent, 'utf-8');
        console.log(`Updated: ${filePath}`);
    }
}

// 遍历目标目录下所有文件，指定要处理的多个目录，比如 src 和 目录下的所有 .js 和 .vue 文件。
targetDirectories.forEach((dir) => {
    const allFiles = getAllFiles(dir);

    // 使用 filter 返回不包含所有 currentPath 的新数组
    const newAllFiles = allFiles.filter(item => item != currentPath);

    // 遍历所有文件
    newAllFiles.forEach((file) => {
        // 仅处理 .js 或 .vue 文件 endsWith() 检测字符串是否以指定的子字符串结尾的方法
        if (file.endsWith('.js') || file.endsWith('.vue')) {
            // 过滤掉当前目录
            processFile(file);
        }
    });
})