// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'

import KitDoc from 'kit-doc'
import {
  Page,
  Group,
} from '../packages'
// import KitUI, { Lazyload } from '../packages'
// import configLazyload from './config/lazyload'
// import './utils/rem'

Vue.use(KitDoc)
Vue.component(Page.name, Page)
Vue.component(Group.name, Group)
// Vue.use(Lazyload, {
//   ...configLazyload,
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),

  // template: '<App/>',
  // components: { App }
})
