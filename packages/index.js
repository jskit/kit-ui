import version from './version'
import Alert from './Alert'
import Badge from './Badge'
import Button from './Button'
import Cell from './Cell'
import Debug from './Debug'
import Divider from './Divider'
import Flex from './Flex'
import Group from './Group'
import Icon from './Icon'
import Layout from './Layout'
import Lazyload from './Lazyload'
import Loading from './Loading'
import Notification from './Notification'
import Page from './Page'
import QrCode from './QrCode'
import Spin from './Spin'
import Switch from './Switch'
import Toast from './Toast'
import XElement from './XElement'
import XHeader from './XHeader'

const packages = {
  Alert,
  Badge,
  Button,
  Cell,
  Debug,
  Divider,
  Flex,
  Group,
  Icon,
  Layout,
  Lazyload,
  Loading,
  Notification,
  Page,
  QrCode,
  Spin,
  Switch,
  Toast,
  XElement,
  XHeader,
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
  Alert,
  Badge,
  Button,
  Cell,
  Debug,
  Divider,
  Flex,
  Group,
  Icon,
  Layout,
  Lazyload,
  Loading,
  Notification,
  Page,
  QrCode,
  Spin,
  Switch,
  Toast,
  XElement,
  XHeader,
}

export default {
  version,
  install,
}
