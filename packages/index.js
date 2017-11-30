import version from './version'
import ActionSheet from './ActionSheet'
import Alert from './Alert'
import Badge from './Badge'
import Button from './Button'
import Card from './Card'
import Cell from './Cell'
import Debug from './Debug'
import Divider from './Divider'
import Flex from './Flex'
import Group from './Group'
import Icon from './Icon'
import Layout from './Layout'
import Lazyload from './Lazyload'
import Loading from './Loading'
import Modal from './Modal'
import NavBar from './NavBar'
import Notification from './Notification'
import Page from './Page'
import QrCode from './QrCode'
import Search from './Search'
import Spin from './Spin'
import Swiper from './Swiper'
import Switch from './Switch'
import Tab from './Tab'
import Toast from './Toast'
import XElement from './XElement'
import XHeader from './XHeader'

const packages = {
  ActionSheet,
  Alert,
  Badge,
  Button,
  Card,
  Cell,
  Debug,
  Divider,
  Flex,
  Group,
  Icon,
  Layout,
  Lazyload,
  Loading,
  Modal,
  NavBar,
  Notification,
  Page,
  QrCode,
  Search,
  Spin,
  Swiper,
  Switch,
  Tab,
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
  ActionSheet,
  Alert,
  Badge,
  Button,
  Card,
  Cell,
  Debug,
  Divider,
  Flex,
  Group,
  Icon,
  Layout,
  Lazyload,
  Loading,
  Modal,
  NavBar,
  Notification,
  Page,
  QrCode,
  Search,
  Spin,
  Swiper,
  Switch,
  Tab,
  Toast,
  XElement,
  XHeader,
}

export default {
  version,
  install,
}
