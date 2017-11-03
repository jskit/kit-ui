<template>
  <section class="tpl-demo">
    <transition :name="transition">
      <router-view class="page-demo"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'tpl-demo',
  data() {
    return {
      transition: 'slide-left',
    }
  },
  // watch $route 决定使用哪种过渡
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
// html,
// body,
// #app,
// .transition-box {
//   height: 100%;
// }
body {
  min-width: initial;
  width: 100%;
}
.tpl-demo {

  .indexicon {
    font-size: 22px;
    color: #26a2ff;
    display: inline-block;
    width: 30px;
    vertical-align: middle;

    &.icon-swipe {
      font-size: 26px;
    }

    &.icon-checklist {
      font-size: 18px;
    }
  }
}

.index-hd
  padding: 40px
  text-align: center

.index-bd
  padding: 0 16px 20px

.index-ft
  padding-bottom: 1px
  text-align: center

.index-logo
  size: 40px

.index-desc
  margin-top: 8px
  color: #888
  font-size: 13px

.kind-list
  .item
    margin: 10px 0
    border-radius: 2px
    overflow: hidden
    background-color: #fff

  .item-hd
    padding: 16px
    display: flex
    align-items: center
    transition: opacity 0.3s

  .text
    flex: 1

  .item-icon
    size: 30px
</style>

