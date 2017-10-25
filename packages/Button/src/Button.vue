<template>
  <button
    :class="classes"
    :type="nativeType"
    :disabled="disabled"
    @click="handleClick"
    >
    <KitIcon v-if="iconType" :type="iconType" />
    <span class="btn-text"><slot></slot></span>
  </button>
</template>

<script>
// if (process.env.NODE_ENV === 'component') {
//   require('ui/packages/font/style.css');
// }

/**
 * Button 按钮
 * @module packages/Button
 * @desc 按钮用于开始一个即时操作
 * @rules
 *   - 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
 * @param {string} [type] - 显示类型，normal, primary, danger
 * @param {boolean} [disabled] - 禁用
 * @param {boolean} [ghost] - 幽灵按钮
 * @param {string} [size] - 尺寸，xs sm md lg
 * @param {string} [nativeType] - 原生 type 属性，button, reset, submit, menu
 * @param {string} [iconfont] - 图标，提供 more、back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .iconfont-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [iconfont] 显示图标
 *
 * @example
 * <Button type="primary" size="large">按钮</Button>
 */
import PropTypes from 'vue-types'
import Icon from '../../Icon'
export default {
  name: 'KitButton',

  components: {
    [Icon.name]: Icon,
  },

  props: {
    prefixCls: PropTypes.string.def('btn'),
    type: PropTypes.oneOf([
      'normal',
      'primary',
      'dashed',
      'warn',
      'danger',
    ]),
    size: PropTypes.oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ]),
    disabled: Boolean,
    hollow: Boolean,
    block: Boolean,
    shape: PropTypes.oneOf([
      'circle',
      'round',
      'radius',
      'square',
    ]),
    nativeType: PropTypes.oneOf([
      'button',
      'menu',
      'reset',
      'submit',
    ]).def('button'),
    loading: Boolean,
    icon: String,
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },


  computed: {
    iconType() {
      return this.loading ? 'loading' : this.icon
    },
    classes() {
      const {
        prefixCls,
        type,
        size,
        shape,
        block,
        hollow,
        disabled,
        loading,
        icon,
      } = this.$props

      const $default = this.$slots.default

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-only-icon`]: !$default && icon && !loading,
        [`is-${shape}`]: shape,
        'is-hollow': hollow,
        'is-block': block,
        'disabled': disabled,
      }
    },
    // styles () {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
  },

}
</script>

<style lang="stylus">
@import "./style";

</style>
