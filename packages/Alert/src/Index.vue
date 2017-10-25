<template>
  <transition :name="`${prefixCls}-slide-up`">
    <div v-show="closing" :class="classes" :style="styles">
      <KitIcon v-if="showIcon" mode="svg" :type="iconType" :class="`${prefixCls}-icon`" />
      <span :class="`${prefixCls}-message`">{{ message }}</span>
      <span v-if="desc" :class="`${prefixCls}-desc`">{{ desc }}</span>
      <a v-if="closable" :class="`${prefixCls}-close-icon`" @click="handleClose($event)">
        <template v-if="closeText">{{ closeText }}</template>
        <KitIcon v-else mode='svg' type='cross' />
      </a>
    </div>
  </transition>
</template>

<script>
/**
 * Alert 警告提示
 * @module packages/Alert
 * @group Feedback
 * @desc 警告提示，展现需要关注的信息。
 * @rules
 *   - 当某个页面需要向用户显示警告的信息时。
 *   - 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
 * @param {string} [type] - 指定警告提示的样式，有四种选择 info、warning、error、success
 * @param {string} [message] - 警告提示内容
 * @param {string} [desc] - 警告提示的辅助性文字介绍
 * @param {boolean} [showIcon] - 是否显示辅助图标
 * @param {boolean} [closable] - 默认不显示关闭按钮
 * @param {string} [closeText] - 自定义关闭按钮
 * @param {boolean} [banner] - 是否用作顶部公告(默认有图标且 type 为 "warning" 样式)
 * @param {function} [onClose] - 关闭时触发的回调函数
 *
 * @example
 * <Alert message="Success Text" type="success" />
 * <Alert message="Warning" type="warning" showIcon />
 */
import PropTypes from 'vue-types'
import Icon from '../../Icon'
function noop() { }
const typeMap = {
  info: `info-circle`,
  success: `check-circle`,
  warning: `warning-circle`,
  error: `cross-circle`,
}
// var closeIcon = {
//   template: '<a @click="handleClose($event)" :class="`${prefixCls}-close-icon`"><slot></slot></a>',
//   props: ['prefixCls', 'handleClose'],
// }
export default {
  name: 'KitAlert',

  components: {
    [Icon.name]: Icon,
  },

  props: {
    prefixCls: PropTypes.string.def('alert'),
    // type: String,
    type: PropTypes.oneOf([
      'success',
      'info',
      'warning',
      'error',
    ]).def('info'),
    closable: Boolean,
    closeText: String,
    message: String,
    desc: String,
    icon: String,
    onClose: PropTypes.func.def(noop),
    showIcon: Boolean,
    banner: Boolean,
  },

  data() {
    return {
      closing: true,
      closed: false,
    }
  },

  computed: {
    iconType() {
      const {
        type,
        desc,
        banner,
      } = this.$props
      // banner 模式默认为警告
      this.type = banner && type === undefined ? 'warning' : type || 'info'
      let iconType = typeMap[type] || 'default'
      // use outline icon in alert with description
      if (desc) {
        iconType += '-o'
      }
      return iconType
    },
    classes() {
      const {
        prefixCls,
        type,
        desc,
        showIcon,
        banner,
      } = this.$props

      // banner 模式默认有 Icon
      const isShowIcon = (banner && showIcon === undefined) ? true : showIcon
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-with-desc`]: !!desc,
        [`${prefixCls}-no-icon`]: !isShowIcon,
        [`${prefixCls}-banner`]: !!banner,
      }
    },
    styles() {
      return [
      ]
    },
  },

  methods: {
    handleClose(e) {
      e.preventDefault()
      const dom = this.$el
      dom.style.height = `${dom.offsetHeight}px`
      this.closing = false
      ;(this.onClose || noop)(e, this)
    },
  },

  // render(h) {
  //   console.log('custom render')
  //   // return this.closable ? (
  //   //   <a onClick={this.handleClose} class={{ [`${this.prefixCls}-close-icon`]: true }}>
  //   //     {this.closeText || <Icon mode='svg' type='cross' />}
  //   //   </a>
  //   // ) : null
  // },
}
</script>

<style lang="stylus">
@import "./style";

</style>
