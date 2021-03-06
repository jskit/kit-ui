<template>
  <span class="badge">
    <slot></slot>
    <sup
      v-if="text"
      v-show="!hidden && text"
      :class="classes"
      :style="styles"
      @click="onClick"
    >{{badgeText}}</sup>
  </span>
</template>

<script>
/**
 * Badge 徽章
 * @module packages/Badge
 * @desc 图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。
 * TODO: 实现应该使用外层包裹，何处引用简单一包裹，直接定位 OK，不必再去定位了
 * @rules
 *   - 当用户有必要知晓每条更新时，应该使用数字型，eg：社交中的一对一的消息通知。
 *   - 当用户只需知道大致有内容更新时，应该使用红点型，eg：社交中的群消息通知。
 * @API
 * @param {string} [type] - 设置 Badge 类型
 * @param {string} [status] - 设置 Badge 状态，如 success processing(进行中，如呼吸灯) error
 * @param { string|number } [text] 展示的数字或文案，当为数字时候，大于 max 时显示为 ${max}+，为 0 时隐藏
 * @param { number } [max = 999] 展示封顶的数字值
 * @param {boolean} [dot] - 是否为点样式，不展示内容，只有一个小红点
 * @param {string} [size = xs] - 尺寸，接受 xs, lg
 *
 * @param {string} [shape] - 形状，圆的还是方的或点
 * @param {string} [color] - 传入背景颜色值
 * @param {string} [textColzor] - 传入文本颜色值
 * 以上三个可收纳为扩展一个 style 属性即可
 * @param {string} [style] - 自定义样式
 * TODO: @param {string} [link] - 支持外链
 *
 * @example
 * <Badge color="error">错误</Badge>
 * <Badge color="#333">30</Badge>
**/

import PropTypes from 'vue-types'

export default {
  name: 'KitBadge',

  props: {
    prefixCls: PropTypes.string.def('badge'),
    type: String,
    size: String,
    status: String,
    text: PropTypes.oneOfType([
      String,
      Number,
    ]),
    max: PropTypes.number.def(99),
    dot: Boolean,
    hidden: Boolean,
    color: String,
    textColor: String,
    shape: PropTypes.oneOf([
      'dot',
      'circle',
      'radius',
      'square',
    ]).def('circle'),
  },

  beforeCreate() {
    if (!this.$parent.badges) {
      this.$parent.badges = []
    }
    this.$parent.badges.push(this)
  },

  ready() {
    console.log(this.text)
  },

  filters: {
    // overflow(value) {
    //   debugger
    // },
  },

  computed: {
    badgeText() {
      const { text, max } = this.$props
      const overflowCount = Number(max)
      const textNum = Number(text)
      // text 展示的数字或文案，当为数字时候，大于 max 时显示为 ${max}+，为 0 时隐藏
      // return (typeof text === 'number' && text > max) ? `${max}+` : text;
      // /* eslint no-self-compare: 0 */
      return (!Number.isNaN(textNum) && text > overflowCount) ? `${overflowCount}+` : text
    },
    styles() {
      return [
        this.color ? { backgroundColor: this.color } : {},
        this.textColor ? { color: this.textColor } : {},
      ]
    },
    classes() {
      const parent = this.$parent
      const {
        prefixCls,
        status,
        shape,
        dot,
      } = this.$props
      return {
        [`${prefixCls}-text`]: true,
        'is-dot': dot,
        // 'badge-single': this.text && this.text.length === 1,
        [`${prefixCls}-${status}`]: status,
        [`is-${shape}`]: !dot && shape,
        [`is-selected`]: parent.badges.indexOf(this) === parent.activeKey,
      }
    },
  },

  methods: {
    onClick() {
      this.$emit('click', this.$parent.badges.indexOf(this))
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

// .doc-content {
//   .badge {
//     margin: 5px;
//   }
// }
//
.badge-todo  .badge-text { color: #fff; background: $color-info; }
.badge-doing .badge-text { color: #fff; background: $color-warning;}
.badge-done  .badge-text { color: #fff; background: $color-success; }
</style>
