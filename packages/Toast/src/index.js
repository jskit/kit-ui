import Vue from 'vue'
import vToast from './Toast'
import { noop } from '../../_util'

let instance

const defaultOptions = {
  type: 'text',
  duration: 2,
  visible: true,
  mask: true,
  // 不要使用箭头函数，会改变作用域
  clear: function clear() {
    instance.visible = false
    this.onClose()
  },
  onClose: function onClose() {
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

const Toast = (options = {}, duration = 2, onClose = noop, mask = true) => {
  createInstance()
  // console.log(arguments)
  // TODO: 还要精简
  if (typeof options === 'string') {
    // 默认参数缺省时适配
    options = {
      message: options,
      duration,
      onClose,
      mask,
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
    }, options.duration * 1000)
  }

  return instance
}

const createMethod = type => {
  return (options = {}, duration = 2, onClose = noop, mask = true) => {
    if (typeof options === 'string') {
      options = {
        message: options,
        duration,
        onClose,
        mask,
      }
    }
    return Toast(Object.assign({}, {
      type,
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
Toast.fail = createMethod('fail')
Toast.success = createMethod('success')
Toast.offline = createMethod('offline')
Toast.loading = createMethod('loading')
Toast.hide = () => {
  instance && instance.clear()
}

export default Toast
