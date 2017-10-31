import packages from '../packages'

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return
  // locale.use(opts.locale)
  // locale.i18n(opts.i18n)
  Object.keys(packages).forEach((key) => {
    const item = packages[key]
    if (item.name) {
      Vue.component(item.name, item)
    }
  })
  // packages.map(Component => {
  //   Vue.component(Component.name, Component)
  // })
  // Vue.prototype.$loading = packages.Loading
  // Vue.$toast = Vue.prototype.$toast = packages.Toast
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

var version = '1.0.0'

export default Object.assign({}, packages, {
  install,
  version: version,
})
