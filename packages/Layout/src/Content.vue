<template>
  <div :class="classes"><slot></slot></div>
</template>

<script>
/**
 * VContent 布局
 * @module packages/VContent
 * @desc 协助进行页面级整体布局。
 * @rules https://ant.design/components/layout-cn/
 *
 * VHeader VContent VFooter 的 API 与 Layout 相同
 * @param {string} [type] - 显示类型
 *
 * @example
 * <VContent></VContent>
 */
import PropTypes from 'vue-types'
export default {
  name: 'VContent',

  props: {
    prefixCls: PropTypes.string.def('layout'),
  },

  computed: {
    classes () {
      const {
        prefixCls,
      } = this.$props

      return {
        [`${prefixCls}-content`]: true,
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

</style>
