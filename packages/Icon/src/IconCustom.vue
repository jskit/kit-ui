<template>
  <i :class="classes" :style="styles"><slot></slot></i>
</template>

<script>
/**
 * Iconfont 图标字体
 * @module packages/Iconfont
 * @desc 语义化的矢量字体图标。
 * @rules 每个图标请使用语义化的命名，部分规则如下
 *   - 实心和描线图标保持同名，用 -o 来区分，比如 question-circle（实心） 和 question-circle-o（描线）；
 *   - 命名顺序：[图标名]-[形状?]-[描线?]-[方向?]。
 * @note ? 为可选
 * @param {string} [type] 组件样式，可选 primary, error, success, warning
 * @param {string} [color] - 传入颜色值
 * @param {string} [size] - 尺寸，接受 normal, small, large
 *
 * @example
 * <Iconfont type="link" />
 * <Iconfont type="string" color="red" />
**/
import PropTypes from 'vue-types'
export default {
  name: 'IconFont',

  props: {
    prefixCls: PropTypes.string.def('icon-custom'),
    type: PropTypes.string.isRequired,
    spin: Boolean,
    size: [Number, String],
    shape: PropTypes.oneOf([
      'circle',
      'radius',
      'square',
    ]),
  },

  computed: {
    classes () {
      const {
        prefixCls,
        type,
        spin,
        shape,
        reverse,
      } = this.$props

      return {
        // icon: true,
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${reverse}`]: reverse,
        [`is-${shape}`]: shape,
        [`is-spin`]: spin,
      }
    },
    styles() {
      const {
        size,
        color,
        bg,
      } = this.$props

      return {
        fontSize: `${size}px`,
        bg: bg,
        color: color,
      }
    },
  },
}
</script>

<style lang="stylus" scope>
// @import "../../style/fn";

// 使用 iconfont 字体，可覆盖自定义
</style>
