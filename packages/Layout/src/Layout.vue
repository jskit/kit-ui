<template>
  <div :class="classes"><slot></slot></div>
</template>

<script>
/**
 * Layout 布局
 * @module packages/Layout
 * @desc 协助进行页面级整体布局。
 * @rules https://ant.design/components/layout-cn/
 * 尺寸: 一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。
 *   - 顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。
 *   - 顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。
 *   - 顶部导航高度的范围计算公式为：48+8n。
 *   - 侧边导航宽度的范围计算公式：200+8n。
 * 交互 视觉
 *
 * 布局容器 Layout 可以放在任何父容器中，其下可以嵌套 Header Sider Content Footer 或 Layout
 * Header Content Footer 的 API 与 Layout 相同
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Layout></Layout>
 */
import PropTypes from 'vue-types'

export default {
  name: 'Layout',

  props: {
    prefixCls: PropTypes.string.def('layout'),
    row: Boolean,
  },

  computed: {
    classes () {
      const {
        prefixCls,
        row,
      } = this.$props

      return {
        [`${prefixCls}-flex`]: true,
        [`${prefixCls}-flex-row`]: row,
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
