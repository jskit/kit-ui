import Vue from 'vue'
import vToast from './Toast'

let instance

const defaultOptions = {
  visible: true,
  mask: true,
  type: 'text',
  duration: 3000,
  clear: () => {
    instance.visible = false
  },
}

const createInstance = () => {
  if (!instance) {
    const ToastConstructor = Vue.extend(vToast)
    instance = new ToastConstructor({
      el: document.createElement('div'),
    })
    document.body.appendChild(instance.$el)
  }
}

const Toast = (options = {}) => {
  createInstance()

  options = typeof options === 'string' ? { message: options } : options
  // options = { ...defaultOptions, ...options }
  options = Object.assign({}, defaultOptions, options)
  Object.assign(instance, options)

  clearTimeout(instance.timer)

  if (options.duration !== 0) {
    instance.timer = setTimeout(() => {
      instance.clear()
    }, options.duration)
  }

  return instance
}

const createMethod = type => {
  return (options = {}) => {
    return Toast(Object.assign({}, {
      type,
      message: typeof options === 'string' ? options : options.message,
    }, options))
  }
}
// const createMethod = type => (options = {}) => Toast({
//   type,
//   message: typeof options === 'string' ? options : options.message,
//   ...options,
// })

Toast.info = createMethod()
Toast.loading = createMethod('loading')
Toast.success = createMethod('success')
Toast.fail = createMethod('fail')
Toast.offline = createMethod('offline')
Toast.hide = () => {
  instance && instance.clear()
}

export default Toast
