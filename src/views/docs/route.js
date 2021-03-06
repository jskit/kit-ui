import { camelCase, upperFirst } from 'lodash'
// import packages from '@root/packages'
import { components } from '@/config/docs'

function lazyLoad(page) {
  return () => import(/* webpackChunkName: "docs" */ `./${page}`)
}

const tplDocs = lazyLoad('_tpl')
const isComming = lazyLoad('is-comming.md')
// const Index = lazyLoad('quickstart.md')
const Index = () => import(/* webpackChunkName: "docs" */ `@root/README.md`)

// const isComming = {
//   template: `
//     <router-view></router-view>
//   `,
// }

const registerRoute = (list) => {
  const routes = []
  list.map(item => item.list.map((page) => {
    const path = upperFirst(camelCase(page.path))
    // const isPackage = packages.indexOf(path) > -1
    const isPackage = page.status !== 'todo'
    routes.push({
      name: `components/${page.path}`,
      path: `${page.path}`,
      component: isPackage ? () => import(`@root/packages/${path}/readme.md`) : isComming,
      meta: {
        title: page.title,
        desc: page.desc,
      },
    })
    return false
  }))

  return routes
}

export default [{
  // 使用默认子路由，则父路由的 name 就得去掉
  // 否则使用 `:to="{name: 'demo'"` 会导致默认子路由不会render
  path: '/components',
  component: tplDocs,
  children: [
    {
      path: '/',
      redirect: {
        name: 'intro',
      },
    },
    {
      path: 'readme',
      alias: 'docs',
      component: Index,
      meta: {
        title: 'Kit-UI',
      },
    },
    {
      path: 'intro',
      name: 'intro',
      component: lazyLoad('intro.md'),
      meta: {
        title: '介绍',
      },
    },
    {
      path: 'quickstart',
      name: 'quickstart',
      component: lazyLoad('quickstart.md'),
      meta: {
        title: '快速上手',
      },
    },
    {
      path: 'practical-projects',
      component: lazyLoad('practical-projects.md'),
      meta: {
        title: '项目实战',
      },
    },
    {
      path: 'customize-theme',
      component: lazyLoad('customize-theme.md'),
      meta: {
        title: '定制主题',
      },
    },
    {
      path: 'i18n',
      component: lazyLoad('i18n.md'),
      meta: {
        title: '国际化',
      },
    },
    {
      path: 'changelog',
      component: () => import(/* webpackChunkName: "docs" */ `@root/CHANGELOG.md`),
      meta: {
        title: '更新日志',
      },
    },
    ...registerRoute(components),
    // { path: '*', redirect: { name: 'docs' }},
    // { path: '/*', redirect: '/' },
    { path: '*', component: isComming },
  ],
}]
