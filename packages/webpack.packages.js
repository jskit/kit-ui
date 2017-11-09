var fs = require('fs-extra')
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var webpackBaseConfig = require('../build/webpack.base.conf.js')
// node packages --out-dir lib

// 清空 lib 目录
fs.emptyDirSync(path.resolve(__dirname, '../lib'))

process.env.NODE_ENV = 'production'

module.exports = merge(webpackBaseConfig, {
  entry: {
    app: './packages/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib',
    filename: 'index.js',
    library: 'kit-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
})
