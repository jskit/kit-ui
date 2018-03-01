<template>
  <div :class="[`${prefixCls}loading`, `${prefixCls}loading--` + type]">
    <span :class="[`${prefixCls}loading__spinner`, `${prefixCls}loading__spinner--` + type, `${prefixCls}loading__spinner--` + color]"></span>
  </div>
</template>

<script>
/**
 * Loading 名称
 * @module packages/Loading
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <KitLoading>xxx</KitLoading>
 */
import PropTypes from 'vue-types'
export default {
  name: 'KitLoading',

  props: {
    prefixCls: PropTypes.string.def('kit-'),
    type: PropTypes.oneOf([
      'gradient-circle',
      'circle',
    ]).def('gradient-circle'),
    color: PropTypes.oneOf([
      'black',
      'white',
    ]).def('black'),
  },

  computed: {
    // classes() {
    //   const {
    //     prefixCls,
    //     type,
    //     size,
    //     shape,
    //     block,
    //     hollow,
    //     disabled,
    //   } = this.$props

    //   return {
    //     [`${prefixCls}`]: true,
    //     [`${prefixCls}-${type}`]: type,
    //     [`${prefixCls}-${size}`]: size,
    //     [`is-${shape}`]: shape,
    //     'is-hollow': hollow,
    //     'is-block': block,
    //     'disabled': disabled,
    //   }
    // },
    // styles() {
    //   const {
    //     size,
    //     color,
    //     bg,
    //   } = this.$props
    //   var sizeStyle = {}
    //   if (size) {
    //     // var size = '280, 70'
    //     // var size = '280 70'
    //     // console.log(size.split(/\s*,\s*| +/))
    //     const [width, height = width] = size.split(/\s*,\s*| +/)
    //     sizeStyle = {
    //       width: width, // svg 不需要单位
    //       height: height,
    //     }
    //   }
    //   return {
    //     // fontSize: `${size}px`,
    //     backgroundColor: !!bg,
    //     color: !!color,
    //     ...sizeStyle,
    //   }
    // },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
