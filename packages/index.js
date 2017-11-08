/*
使用 webpack 的 require.context 实现“去中心化”管理
require.context(directory, useSubdirectories, regExp)
  require.context 有三个参数：
  directory：说明需要检索的目录
  useSubdirectories：是否检索子目录
  regExp: 匹配文件的正则表达式
**/

// require.context 不能使用太新的语法，不支持会报错
// webpack 老版本不支持这种新语法，建议使用最新版3.7+
// const reqModules = require.context('./', true, /^(?!(_|\.md|style))\.\/([A-Z]+([a-zA-Z])+){1}\/$/)
// // 返回对象
// const packages = reqModules.keys().reduce((modules, key) => {
//   const componentName = key.replace('.', '').replace(/\//g, '')
//   modules[componentName] = reqModules(key).default || reqModules(key)
//   return modules
// }, {})

// // 这里可以封装一个方法，返回 N 个单独的 module
// console.info("现有组件:")
// console.info(Object.keys(packages))
// export default packages


// // At build-time cache will be populated with all required modules.
// const cache = {}
// function importAll (r) {
//   /* eslint no-return-assign: 0 */
//   // debugger
//   console.log(r.keys())
//   return r.keys().forEach(function (module) {
//     const key = module.replace('./', '')
//     return cache[key] = r(module).default
//   })
// }
// require.context 不能使用太新的语法，不支持会报错

// 返回数组
// export default importAll(reqModules)


// 使用 require.context 还是不完美，暂时使用下面方法替换
// 引用顺序按字母排序
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
import Layout from './Layout'
import Page from './Page'
import QrCode from './QrCode'
import Spin from './Spin'
import Switch from './Switch'
import Toast from './Toast'
import XElement from './XElement'
import XHeader from './XHeader'
// import Spinner from './Spinner'
// import TabItem from './TabItem'
// import TabContainerItem from './TabContainerItem'
// import TabContainer from './TabContainer'
// import Search from './Search'
// import CheckList from './CheckList'
// import Radio from './Radio'
// import LoadMore from './LoadMore'
// import ActionSheet from './ActionSheet'
// import Popup from './Popup'
// import Swipe from './Swipe'
// import SwipeItem from './SwipeItem'
// import Range from './Range'
// import Picker from './Picker'
// import Progress from './Progress'
// import Toast from './Toast'
// import Indicator from './Indicator'
// import MessageBox from './MessageBox'
// import InfiniteScroll from './InfiniteScroll'
// import Lazyload from './lazyload'
// import DatetimePicker from './datetime-picker'
// import IndexList from './index-list'
// import IndexSection from './index-section'
// import PaletteButton from './palette-button'
// import './src/assets/font/iconfont.css'
// import locale from './locale'

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
  Page,
  QrCode,
  Spin,
  Switch,
  Toast,
  XElement,
  XHeader,
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(packages).forEach((key) => {
    const item = packages[key]
    if (item.name) {
      Vue.component(item.name, item)
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '1.0.0'
export default {
  install,
  version,
}

export {
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
  Page,
  QrCode,
  Spin,
  Switch,
  Toast,
  XElement,
  XHeader,
}

// Spinner,
  // TabItem,
  // TabContainerItem,
  // TabContainer,
  // Tabbar,
  // Search,
  // Checklist,
  // Radio,
  // Loadmore,
  // Actionsheet,
  // Popup,
  // Swipe,
  // SwipeItem,
  // Range,
  // Picker,
  // Progress,
  // Toast,
  // Indicator,
  // MessageBox,
  // InfiniteScroll,
  // Lazyload,
  // DatetimePicker,
  // IndexList,
  // IndexSection,
  // PaletteButton,

  // Pagination,
  // Dialog,
  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  // Menu,
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
  // Input,
  // InputNumber,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Switch,
  // Select,
  // Option,
  // OptionGroup,
  // Button,
  // ButtonGroup,
  // Table,
  // TableColumn,
  // DatePicker,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,
  // Form,
  // FormItem,
  // Tabs,
  // TabPane,
  // Tag,
  // Tree,
  // Alert,
  // Slider,
  // Icon,
  // Row,
  // Col,
  // Upload,
  // Progress,
  // Spinner,
  // Badge,
  // Card,
  // Rate,
  // Steps,
  // Step,
  // Carousel,
  // Scrollbar,
  // CarouselItem,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // CollapseTransition,
