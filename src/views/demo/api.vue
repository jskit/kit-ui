<template>
<Page class="page-index">
  <div class="index-hd">
    <img class="index-logo" src="~assets/kind/api.png" alt="">
    <p class="index-desc">{{desc}}</p>
  </div>
  <div class="index-bd">
    <div class="kind-list">
      <div class="item">
        <div class="item-hd">
          <div class="text">开放接口</div>
          <img class="item-icon" src="~assets/kind/openapi.png" alt="">
        </div>
        <!-- <div class="item-hd">
          <router-link to="/"><div class="text">view</div><Icon type="arrow" /></router-link>
        </div> -->
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">界面</div>
          <img class="item-icon" src="~assets/kind/page.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">设备</div>
          <img class="item-icon" src="~assets/kind/device.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">网络</div>
          <img class="item-icon" src="~assets/kind/network.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">媒体</div>
          <img class="item-icon" src="~assets/kind/media.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">位置</div>
          <img class="item-icon" src="~assets/kind/location.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-hd">
          <div class="text">数据</div>
          <img class="item-icon" src="~assets/kind/storage.png" alt="">
        </div>
      </div>
    </div>
  </div>
</Page>
</template>

<script>
export default {
  name: 'API',
  data () {
    return {
      desc: '以下为API demo，样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见开发文档。',
    }
  },
}
</script>

<style lang="stylus">


</style>

