<template>
  <div class="kit-tabbar-item" :class="{ 'kit-tabbar-item--active': active }" @click="onClick">
    <div class="kit-tabbar-item__icon" :class="{ 'kit-tabbar-item__icon-dot': dot }">
      <slot name="icon" :active="active">
        <KitIcon v-if="icon" :type="icon" />
      </slot>
      <div v-if="info" class="kit-tabbar-item__info">{{ info }}</div>
    </div>
    <div class="kit-tabbar-item__text">
      <slot :active="active"></slot>
    </div>
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
 * <KitTabbarItem>xxx</KitTabbarItem>
 */
import PropTypes from 'vue-types'
import Icon from '../../Icon'

export default {
  name: 'KitTabbarItem',

  components: {
    [Icon.name]: Icon,
  },

  props: {
    prefixCls: PropTypes.string.def('kit-'),
    icon: String,
    dot: Boolean,
    info: String,
  },

  data() {
    return {
      active: false,
    }
  },

  beforeCreate() {
    this.$parent.items.push(this)
  },

  destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1)
  },

  methods: {
    onClick() {
      this.$parent.onChange(this.$parent.items.indexOf(this))
      this.routerLink()
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
