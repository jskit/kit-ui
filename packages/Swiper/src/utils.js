import Vue from 'vue'

const extend = Object.assign.bind(Object)

function EventEmitter() {
  this.__events = {}
}
EventEmitter.prototype = {
  on(name, cb) {
    /* eslint no-unused-expressions: 0 */
    this.__events[name] || (this.__events[name] = [])
    this.__events[name].push(cb)
    return this
  },
  emit(name) {
    const arr = this.__events[name]
    /* eslint prefer-rest-params: 0 */
    const argus = Array.prototype.slice.call(arguments, 1)
    const self = this
    if (arr) {
      arr.forEach((cb) => {
        cb.apply(self, argus)
      })
    }
  },
  removeListener(name, fn) {
    /* eslint no-underscore-dangle: 0 */
    if (!this.__events[name]) {
      return
    }
    let index
    if (fn) {
      index = this.__events[name].indexOf(fn)
      if (index > 0) {
        this.__events[name].splice(index, 1)
      }
    } else {
      delete this.__events[name]
    }
  },
}

const isSupportRequestAnimationFrame = !Vue.prototype.$isServer &&
  (window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame)
const isSupportCancelAnimationFrame = !Vue.prototype.$isServer &&
  (window.cancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  window.msCancelAnimationFrame)

const requestAnimationFrame = isSupportRequestAnimationFrame || function a(callback, element) {
  return window.setTimeout(callback, 1000 / 60)
}

const cancelAnimationFrame = isSupportCancelAnimationFrame || function d(id) {
  clearTimeout(id)
}

const bindEvents = (elem, eventNames, fn) => {
  eventNames = eventNames.split(/\s+/)
  eventNames.forEach(eventName => elem.addEventListener(eventName, fn))
}

const removeEvents = (elem, eventNames, fn) => {
  eventNames = eventNames.split(/\s+/)
  eventNames.forEach(eventName => elem.removeEventListener(eventName, fn))
}

export {
  extend,
  EventEmitter,
  requestAnimationFrame,
  cancelAnimationFrame,
  bindEvents,
  removeEvents,
}

