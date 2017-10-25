<template>
  <div :class="classes"><slot></slot></div>
</template>

<script>
/**
 * VFooter 布局
 * @module packages/VFooter
 * @desc 协助进行页面级整体布局。
 * @rules https://ant.design/components/layout-cn/
 *
 * VHeader VContent VFooter 的 API 与 Layout 相同
 * @param {string} [type] - 显示类型
 *
 * @example
 * <VFooter></VFooter>
 */
import PropTypes from 'vue-types'
export default {
  name: 'VFooter',

  props: {
    prefixCls: PropTypes.string.def('layout'),
  },

  computed: {
    classes () {
      const {
        prefixCls,
      } = this.$props

      return {
        [`${prefixCls}-footer`]: true,
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
