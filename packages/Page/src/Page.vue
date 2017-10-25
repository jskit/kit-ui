<template>
  <section class="transition-box">
    <slot></slot>
  </section>
</template>

<script>
/**
 * Page
 * @module packages/Page
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [tag] - 指定html标签
 * @help 参看 router-link
 * @help https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 *
 * @example
 * <Page tag="div">
 *   ...
 * </Page>
 */
export default {
  name: 'Page',
  computed: {
    // style () {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    classes () {
      // 是否要让 Page 上添加的样式加入到内层上
      // console.log(1111)
      // return [
      //   this.class,
      // ]
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

.transition-box
  // position absolute
  z-index 0
  width 100%
  height 100%
  overflow-x hidden
  overflow-y scroll
  transition all .3s cubic-bezier(.55,0,.1,1)

</style>
