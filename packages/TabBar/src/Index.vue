<template>
  <div
  class="kit-tabbar kit-hairline--top-bottom"
  :class="{ 'kit-tabbar--fixed': fixed }"
  >
    <slot></slot>
  </div>
</template>

<script>
/**
 * TabBar 名称
 * @module packages/TabBar
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <KitTabbar>xxx</KitTabbar>
 */
import PropTypes from 'vue-types'

export default {
  name: 'KitTabbar',

  props: {
    prefixCls: PropTypes.string.def('kit-'),
    fixed: PropTypes.bool,
    value: Number,
  },

  data() {
    return {
      items: [],
    }
  },

  watch: {
    items() {
      this.setActiveItem()
    },
    value() {
      this.setActiveItem()
    },
  },

  methods: {
    setActiveItem() {
      this.items.forEach((item, index) => {
        item.active = index === this.value
      })
    },
    onChange(active) {
      this.$emit('input', active)
      this.$emit('change', active)
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
