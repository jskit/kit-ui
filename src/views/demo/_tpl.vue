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
body {
  min-width: initial;
  width: 100%;
  overflow-y: hidden;
}
.tpl-demo {
  height: 100%;

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
.page-header {
  font-size: 20px;
  margin: 20px 16px;
  // text-align: center;
  display: block;
  line-height: 1.5;

  p{
    margin-bottom: 10px;
    font-size: 12px;
  }
}

.page-part {
  margin-bottom: 15px;
}
.page-block {
  margin: 16px 0;
}
.page-content{
  padding: 0 16px;
}
</style>
