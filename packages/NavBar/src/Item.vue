<template>
  <a
    class="navbar-item"
    :href="link"
    :tag="tag"
    @click="handleClick($event)"
  >
    <i v-if="icon" :class="['iconfont', `icon-${icon}`]"></i>
    <span
      class="navbar-item-text"
      v-if="text"
      v-text="text"
    ></span>
  </a>
</template>

<script>
const noop = () => {}

/**
 * XHeaderItem
 * @module packages/XHeaderItem
 * @desc 顶部导航条左右按钮项
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 默认显示在中间区域，标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <XHeaderItem>
 * </XHeaderItem>
 */
// import PropTypes from 'vue-types'

export default {
  name: 'KitNavBarItem',

  props: {
    link: String,
    tag: String,
    icon: String,
    status: String,
    text: String,
    callback: Function,
  },

  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    // classes() {
    //   return [
    //     { 'is-fixed': this.fixed },
    //   ]
    // },
  },

  methods: {
    handleClick(e) {
      e.preventDefault()
      const fn = this.callback || noop
      return fn.bind(e)
    },
  },
}
</script>

<style lang="stylus">

</style>
