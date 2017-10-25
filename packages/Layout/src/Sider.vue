<template>
  <div :class="classes" :style="styles">
    <div :class="innerClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * VSider 布局
 * @module packages/VSider
 * @desc 协助进行页面级整体布局。
 * @rules https://ant.design/components/layout-cn/
 *
 * VHeader VContent VFooter 的 API 与 Layout 相同
 * @param {string} [type] - 显示类型
 *
 * @example
 * <VSider></VSider>
 */
import PropTypes from 'vue-types'
export default {
  name: 'VSider',

  props: {
    prefixCls: PropTypes.string.def('layout'),
  },

  computed: {
    classes () {
      const {
        prefixCls,
      } = this.$props

      return {
        [`${prefixCls}-sider`]: true,
      }
    },
    styles () {
      const { width, flex } = { width: 200, flex: '0 0 200px' }
      return {
        width: `${width}px`,
        flex: flex,
      }
    },
    innerClasses () {
      const {
        prefixCls,
      } = this.$props

      // this.$parent.classes += `${prefixCls}-flex-has-sider`

      return {
        [`${prefixCls}-sider-children`]: true,
      }
    },
  },
}
</script>

<style lang="stylus">

</style>
