// const UglifyPlugin = require('uglifyjs-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin'); //引入gzip压缩插件
const path = require('path')
module.exports = {
  publicPath: './', // 公共路径 默认为"/"，建议使用"./"相对路径
  // lintOnSave:false,//注释警告
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
    //     changeOrigin: true, //是否允许跨域
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
    if (process.env.NODE_ENV === 'production') {}
    return { // 此处配置webpack.config.js的相关配置
      plugins: [
        // new CompressionPlugin({ // gzip 压缩
        //   // filename: '[path].gz[query]', //  使得多个.gz文件合并成一个文件，这种方式压缩后的文件少，建议使用
        //   algorithm: 'gzip', // 官方默认压缩算法也是gzip
        //   test: /\.js$|\.css$|\.html$|\.ttf$|\.eot$|\.woff$/, // 使用正则给匹配到的文件做压缩，这里是给html、css、js以及字体（.ttf和.woff和.eot）做压缩
        //   threshold: 10240, //以字节为单位压缩超过此大小的文件，使用默认值10240吧
        //   minRatio: 0.8, // 最小压缩比率，官方默认0.8
        //   //是否删除原有静态资源文件，即只保留压缩后的.gz文件，建议这个置为false，还保留源文件。以防：
        //   deleteOriginalAssets: false
        // })
      ],
      performance: {},
    }
  },
  chainWebpack: config => {
    /* svg 相关配置 */
    // svg图标加载
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'src/icons/svg'))
      .end()

    config.module
      .rule('icons') // 定义一个名叫 icons 的规则
      .test(/\.svg$/) // 设置 icons 的匹配正则
      .include.add(path.join(__dirname, 'src/icons/svg')) // 设置当前规则的作用目录，只在当前目录下才执行当前规则
      .end()
      .use('svg-sprite') // 指定一个名叫 svg-sprite 的 loader 配置
      .loader('svg-sprite-loader') // 该配置使用 svg-sprite-loader 作为处理 loader
      .options({ // 该 svg-sprite-loader 的配置
        symbolId: 'icon-[name]'
      })
      .end()
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '测试文件'
        return args
      })
  },
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV == 'production') {
  //     // 为生产环境修改配置
  //     config.mode = 'production'
  //     // 将每个依赖包打包成单独的js文件
  //     let optimization = {
  //       minimizer: [new UglifyPlugin({
  //         uglifyOptions: {
  //           warnings: false, //若是打包错误，则注射这一行
  //           compress: {
  //             drop_console: true,
  //             drop_debugger: false,
  //             pure_funcs: ['console.log']
  //           }
  //         },
  //         sourceMap: false, //不打印日志
  //         parallel: true, //开启并 加快打包速度]
  //       })]
  //     }
  //     Object.assign(config, {
  //       optimization
  //     })
  //   } else {
  //     // 为开发环境修改配置
  //     config.mode = 'development'
  //   }
  // },
  // css: {
  //   loaderOptions: {
  //     sass: { //配置全局 sass
  //       prependData:`@import './src/common/css/global.scss'`
  //     }
  //   }
  // }
}