var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var webpackBaseConfig = require('../build/webpack.base.conf.js')

process.env.NODE_ENV = 'production'

module.exports = merge(webpackBaseConfig, {
  entry: {
    main: './packages/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib',
    filename: 'kit-ui.js',
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
