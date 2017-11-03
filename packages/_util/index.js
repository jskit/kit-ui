
// 一些公共方法

export function noop() { }

export const typeMaps = {
  info: `info-circle`,
  success: `check-circle`,
  warning: `warning-circle`,
  error: `cross-circle`,
}

function filterMap(arr, all = typeMaps) {
  if (typeof arr === 'string') {
    return typeMaps[arr]
  }
  return arr.reduce((item, key) => {
    // const name = key.replace('.', '').replace(/\//g, '')
    item[key] = all[key]
    return item
  }, {})
}

export const alertTypes = ['info', 'success', 'warning', 'error']
export const alertTypesMap = filterMap(alertTypes)

const toastTypeMaps = {
  loading: `loading`,
  success: `check`,
  fail: `warning`,
}
export const toastTypes = ['loading', 'success', 'fail']
export const toastTypesMap = filterMap(toastTypes, toastTypeMaps)
