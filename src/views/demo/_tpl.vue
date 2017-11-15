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
    $route(to, from) {
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
  font-size: 16px;
  line-height: 1.6;

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

    &:first-child
      margin-top: 0;

    &.is-show
      .item-hd
        opacity: .2;
      .item-bd
        height: auto;
      .link-box
        opacity: 1;
        transform: translateY(0);

  .img
    width: 30px;
    height: 30px;

  .item-hd
    padding: 16px
    display: flex
    align-items: center
    transition: opacity 0.3s

  .item-bd
    height: 0;
    overflow: hidden;

  .text
    flex: 1

  .item-icon
    size: 30px

.link-box
  opacity: 0;
  position: relative;
  background-color: #FFFFFF;
  line-height: 1.41176471;
  font-size: 16px;

  transform: translateY(-50%);
  transition: .3s;

  .link
    padding: 10px 15px;
    position: relative;
    display: flex;
    align-items: center;

    &:before
      content: " ";
      position: absolute;
      left: 16px;
      top: 0;
      right: 16px;
      height: 1px;
      border-top: 1px solid #D8D8D8;
      color: #D8D8D8;

    &:first-child:before
      display: none;

  .link-text
    flex: 1;

  .link-arrow
    margin-right: 8px;
    position: relative;

    &:after
      content: " ";
      display: inline-block;
      height: 9px;
      width: 9px;
      border-width: 1px 1px 0 0;
      border-color: #888888;
      border-style: solid;
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: absolute;
      top: 50%;
      margin-top: -4px;
      right: 14px;

</style>

