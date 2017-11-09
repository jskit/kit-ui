
/*
使用 webpack 的 require.context 实现“去中心化”管理
require.context(directory, useSubdirectories, regExp)
  require.context 有三个参数：
  directory：说明需要检索的目录
  useSubdirectories：是否检索子目录
  regExp: 匹配文件的正则表达式
**/

function camelCase(name) {
  return name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-(\w)/g, (m, n) => {
      return n.toUpperCase()
    })
}

const req = require.context('./packages', true, /^\.\/[^_][\w-]+\/style\/index\.js?$/)
const regEntry = /^\.\/([^_][\w-]+)\/index\.js?$/
const packages = req.keys().reduce((module, key) => {
  // export default 语法导出不友好，特殊处理
  const v = req(module)
  if (v && v.default) {
    v = v.default
  }
  const match = module.match(regEntry)
  if (match && match[1]) {
    if (match[1] === 'message' || match[1] === 'notification') {
      // message & notification should not be capitalized
      exports[match[1]] = v
    } else {
      exports[camelCase(match[1])] = v
    }
  }
})

module.exports = require('./packages')

// // At build-time cache will be populated with all required modules.
// const cache = {}
// 返回对象
// const packages = modules.keys().reduce((module, key) => {
//   const componentName = key.replace('.', '').replace('/', '')
//   module[componentName] = modules(key).default
//   return module
// }, {})
// function importAll (r) {
//   /* eslint no-return-assign: 0 */
//   // debugger
//   console.log(r.keys())
//   return r.keys().forEach(function (module) {
//     const key = module.replace('./', '')
//     return cache[key] = r(module).default
//   })
// }
// require.context 不能使用太新的语法，不支持会报错

// 返回数组
// export default importAll(modules)
