import Vue from 'vue'
import vToast from './Toast'
import { noop } from '../../_util'

let instance

const defaultOptions = {
  type: 'text',
  duration: 3000,
  visible: true,
  mask: true,
  clear() {
    instance.visible = false
  },
  onClose() {
    // 回调
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

const Toast = (options = {}, duration = 3000, onClose = noop, mask = true) => {
  createInstance()
  if (typeof options === 'string') {
    options = {
      message: options,
      duration: duration,
      onClose: onClose,
      mask: mask,
    }
  }
  // options = { ...defaultOptions, ...options }
  options = Object.assign({}, defaultOptions, options)
  Object.assign(instance, options)

  clearTimeout(instance.timer)

  // 注： duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide
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

Toast.show = createMethod()
Toast.info = createMethod('info')
Toast.success = createMethod('success')
Toast.fail = createMethod('fail')
Toast.offline = createMethod('offline')
Toast.loading = createMethod('loading')
Toast.hide = () => {
  instance && instance.clear()
}

export default Toast
