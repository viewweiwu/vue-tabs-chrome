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
  }
}
