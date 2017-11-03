import packages from '../packages'

// const { Button } = packages
// console.log(Button)

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(packages).forEach((key) => {
    const item = packages[key]
    if (item.name) {
      Vue.component(item.name, item)
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '1.0.0'

export default Object.assign({}, packages, {
  install,
  version,
})
