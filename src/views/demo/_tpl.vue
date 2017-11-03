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
</style>
