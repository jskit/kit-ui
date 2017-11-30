const fs = require('fs')
const path = require('path')

module.exports = function () {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../../packages'))
  const excludes = [
    '__tests__',
    '_util',
    '_mixin',
    'style',
    'Abc',
    'version',
    'index.js',
    'index.test.js',
    'webpack.packages.js',
    'next.js',
    'README.md',
    '.DS_Store',
  ]
  return dirs.filter(dirName => excludes.indexOf(dirName) === -1)
}
