var Components = require('./get-packages')()
var fs = require('fs')
var render = require('json-templater/string')
var uppercamelcase = require('uppercamelcase')
var path = require('path')

var OUTPUT_PATH = path.join(__dirname, '../../packages/index.js')
var IMPORT_TEMPLATE = 'import {{name}} from \'./{{package}}\''
var ISNTALL_COMPONENT_TEMPLATE = '{{name}}'
var MAIN_TEMPLATE = `{{include}}

const packages = {
{{list}}
}

const install = function install(Vue, opts = {}) {
  if (install.installed) return
  Object.keys(packages).forEach((key) => {
    const item = packages[key]
    if (item.name) {
      Vue.component(item.name, item)
    }
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  version,
  install,
{{list}}
}

export default {
  version,
  install,
}
`

console.log(Components)
// delete Components.Abc

var includeComponentTemplate = []
var installTemplate = []
var listTemplate = []

includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
  name: 'version',
  package: 'version',
}))

Components.forEach(name => {
  var componentName = uppercamelcase(name)

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name,
  }))

  // if ([
  //   // directives
  //   // 'Lazyload',
  //   // 'Waterfall',

  //   // // services
  //   // 'Dialog',
  //   // 'Toast',
  //   // 'ImagePreview',
  // ].indexOf(componentName) === -1) {
  //   installTemplate.push(render(ISNTALL_COMPONENT_TEMPLATE, {
  //     name: componentName,
  //     component: name,
  //   }))
  // }

  listTemplate.push(`  ${componentName},`)
})

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  list: listTemplate.join('\n'),
  // components: installTemplate.join('\n'),
  version: process.env.VERSION || require('../../package.json').version,
})

fs.writeFileSync(OUTPUT_PATH, template)
console.log('[build entry] DONE:' + OUTPUT_PATH)

