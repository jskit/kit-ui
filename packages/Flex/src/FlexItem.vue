<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
/**
 * FlexItem
 * @module packages/FlexItem
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [tag] - 指定html标签
 *
 * @example
 * <FlexItem>
 *   ...
 * </FlexItem>
 */
import PropTypes from 'vue-types'
export default {
  name: 'FlexItem',
  props: {
    prefixCls: PropTypes.string.def('flex-item'),
  },
  computed: {
    classes() {
      const { prefixCls } = this.$props
      return {
        [`${prefixCls}`]: true,
      }
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
