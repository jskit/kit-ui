
import { camelCase, upperFirst } from 'lodash'
import { components } from '@/config/docs'

function lazyLoad(page) {
  return () => import(/* webpackChunkName: "demo" */ `./${page}`)
}

const Index = lazyLoad('index')
const isComming = {
  template: `
    <div>demo isComming</div>
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
      const isPackage = page.status !== 'todo'
      routes.push({
        name: `demo/${page.path}`,
        path: `${page.path}`,
        component: isPackage ? () => import(`@root/packages/${path}/demo/Basic`) : isComming,
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
