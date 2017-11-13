
/**
 * Create a cached version of a pure function.
 */
export function cached(fn) {
  var cache = Object.create(null)
  return function cachedFn (str) {
    var hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

// import { kebabCase, camelCase, snakeCase } from 'lodash'
// 以下简单转化命名格式

/**
 * Camelize a hyphen-delimited string.
 * camelCase 小驼峰命名
 */
var camelizeRE = /-(\w)/g
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : '' })
})

/**
 * Converts the first character of string to upper case.
 * 首字母大写
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
})

/**
 * Hyphenate a camelCase string.
 * kebabCase 连字符命名 eg: kebab-case
 */
var hyphenateRE = /\B([A-Z])/g
export const hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})

export const upperFirst = capitalize
export const kebabCase = hyphenate
export const camelCase = camelize

export function merge(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {}
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        const value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}
