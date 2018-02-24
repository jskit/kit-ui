const fs = require('fs')

const dir = '/Users/jack/github/jskit/kit-ui'

async function start() {
  // 会自动解出 resolve的参数
  const dirs = await promisify(readDir, './packages/')
  await promisify(createDir, dirs)
}
/* eslint no-return-await: 0 */
function readDir(path, cb) {
  fs.readdir(path, (err, files) => {
    if (!err) {
      cb(null, files)
    }
  })
}


async function createDir(dirs, cb) {
  let existDir
  dirs.forEach(async (item) => {
    existDir = await promisify(isDir, item)
    await promisify(create, existDir, item)
  })
}

async function isDir(item, cb) {
  let result
  fs.stat(item, async (err, state) => {
    console.log(item, state && state.isDirectory())
    if (err) {
      console.log(err)
      return
    }
    if (result = state.isDirectory()) {
      cb(result)
    }
  })
}

async function create(just, item, cb) {
  if (just) {
    fs.mkdir(dir + item, (error, status) => {
      if (error) {
        console.log(error)
        return
      }
      cb(null, status)
      console.log(status)
    })
  }
}

/* eslint no-unused-vars: 0 */
function promisify(api, ...args) {
  // return (...args) => {
  // 返回promise对象
  return new Promise((resolve, reject) => {
    // 调用的方法的参数增加了cb
    api.apply(global, [...args, (err, res) => {
      return err ? reject(err) : resolve(res)
    }])
  })
// }
}


start()
