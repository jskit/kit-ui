<template>
<Page class="page-index">
  <div class="index-hd">
    <img class="index-logo" src="~assets/kind/component.png" alt="">
    <p class="index-desc">{{desc}}</p>
  </div>
  <div class="index-bd">
    <div class="kind-list">
      <div class="item">
        <div class="item-hd">
          <div class="text">布局 Layout</div>
          <img class="item-icon" src="~assets/kind/view.png" alt="">
        </div>
        <!-- <div class="item-hd">
          <router-link to="/"><div class="text">view</div><Icon type="arrow" /></router-link>
        </div> -->
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">导航 Nav</div>
          <img class="item-icon" src="~assets/kind/nav.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">组件 Component</div>
          <img class="item-icon" src="~assets/kind/content.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">交互</div>
          <img class="item-icon" src="~assets/kind/form.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">表单组件</div>
          <img class="item-icon" src="~assets/kind/form.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">手势 Gesture</div>
          <img class="item-icon" src="~assets/kind/media.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">组合组件 Combination</div>
          <img class="item-icon" src="~assets/kind/map.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">其他 Other</div>
          <img class="item-icon" src="~assets/kind/map.png" alt="">
        </div>
      </div>
    </div>
  </div>
</Page>
</template>

<script>
export default {
  name: 'Component',
  data () {
    return {
      desc: '以下为组件 demo，样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见开发文档。',
    }
  },
}
</script>

<style lang="stylus">


</style>


