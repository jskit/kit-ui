
import { camelCase, upperFirst } from 'lodash'
import { components } from '@/config/docs'

function lazyLoad(page) {
  return () => import(/* webpackChunkName: "demo" */ `./${page}`)
}

const Index = lazyLoad('index')
const isComming = {
  template: `
    <div>isComming</div>
  `,
}
// const viewTpl = {
//   template: `
//     <router-view></router-view>
//   `,
// }

const registerRoute = (list) => {
  const routes = []
  list.map(item =>
    item.list.map((page) => {
      const path = upperFirst(camelCase(page.path))
      // const isPackage = packages.indexOf(path) > -1
      // 这里使用 require，要加 default，好坑啊(require 已经是老方法了，新的用 import)
      // const component = isPackage ? () => import(`@root/packages/${path}/demo/Basic`) : isComming // () => import(`@/views/${path}`)
      routes.push({
        name: `demo/${page.path}`,
        path: `${page.path}`,
        component: () => import(`@root/packages/${path}/demo/Basic`),
        meta: {
          title: page.title,
          desc: page.desc,
        },
      })
      return false
    })
  )

  return routes
}

export default {
  // 使用默认子路由，则父路由的 name 就得去掉
  // 否则使用 `:to="{name: 'demo'"` 会导致默认子路由不会render
  path: '/demo',
  component: lazyLoad('_tpl'),
  children: [
    {
      path: '/',
      alias: '/index',
      name: 'demo',
      meta: {
        title: 'Demo 示例',
      },
      component: Index,
    },
    ...registerRoute(components),
    { path: '*', component: isComming },
  ],
}
