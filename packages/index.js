/*
使用 webpack 的 require.context 实现“去中心化”管理
require.context(directory, useSubdirectories, regExp)
  require.context 有三个参数：
  directory：说明需要检索的目录
  useSubdirectories：是否检索子目录
  regExp: 匹配文件的正则表达式
**/

// require.context 不能使用太新的语法，不支持会报错
const modules = require.context('./', true, /^(?!(_|\.md|style))\.\/([A-Z]+([a-zA-Z])+){1}\/$/)
const components = []
// At build-time cache will be populated with all required modules.
// 返回对象
export default modules.keys().reduce((module, key) => {
  // export default 语法导出不友好，特殊处理
  const componentName = key.replace('.', '').replace('/', '')
  components.push(components)
  module[componentName] = modules(key).default
  return module
}, {})


// // At build-time cache will be populated with all required modules.
// const cache = {}
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
