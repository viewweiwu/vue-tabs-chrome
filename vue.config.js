const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  css: {
    extract: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-tabs-chrome/'
    : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.128:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('examples/assets'))
    config.module
      .rule('js').include
      .add('/packages')
      .end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options
    //   })
  }
}
