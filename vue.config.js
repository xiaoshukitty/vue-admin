module.exports = {
  publicPath: './', // 公共路径 默认为"/"，建议使用"./"相对路径
  devServer: { // 本地服务器配置(npm run serve)
    port: 8080, // 配置端口
    host: 'localhost', // 域名
    https: false, // 是否开启https
    open: true, // 是否在开启服务器后自动打开浏览器访问该服务器
    compress: true, // 开启压缩


    // 设置请求反向代理
    // proxy: {
    //   '/api': { // 要代理的接口的匹配字符
    //     target: process.env.BASE_URL, // 接口域名
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
    //         实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
    //        */
    //       '^/api': ''
    //     }
    //   }
    // }
    // 反向代理，则在 axios 配置的时候，请求baseURL必须设置为字符串'/'，否则 proxy 会匹配不到'/api'导致代理失败。
  },
  lintOnSave: false, // 取消lint语法检测，此处可不配置
  outputDir: 'dist', // build打包输出目录
  assetsDir: 'assets', // 静态文件输出目录，基于dist
  indexPath: 'index.html', // 输出html文件名
  productionSourceMap: false, // 取消.map文件的打包，加快打包速度
  configureWebpack: (config) => {
    // process.env为环境变量，分别对应.env.development文件和.env.production文件 此处表示加快开发环境打包速度
    if (process.env.NODE_ENV === 'production') {
      // return {
      //   optimization: {
      //     minimizer: [
      //       new TerserPlugin({
      //         sourceMap: false,
      //         terserOptions: {
      //           compress: {
      //             drop_console: true, // 生产环境去掉console.log
      //           }
      //         }
      //       })
      //     ]
      //   }
      // }
    }
    return { // 此处配置webpack.config.js的相关配置
      plugins: [],
      performance: {}
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '测试文件'
        return args
      })
  }
}