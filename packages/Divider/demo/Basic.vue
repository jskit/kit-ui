<template>
  <Page class="page-demo">
    <div class="page-header">
      <h3>分割线 <small>Divider</small></h3>
    </div>
    <div class="content">
      <div class="box">
        <KitDivider content="分割线"></KitDivider>
      </div>
      <div class="box">
        <KitDivider
          :line='3'
          lineColor="green"
          color="blue"
          size="16"
        >自定义</KitDivider>
      </div>
      <div class="box">
        <p>gap 控制四个位置的间隔距离</p>
        <KitDivider gap="20">gap="20"</KitDivider>
        <KitDivider gap="20,1">gap="20,1"</KitDivider>
        <KitDivider gap="10,30">gap="10,30"</KitDivider>
        <KitDivider gap="20,10,5,50">gap="20,10,5,50"</KitDivider>
      </div>
    </div>
  </Page>
</template>

<script>
import Divider from '../../Divider'
export default {
  components: {
    [Divider.name]: Divider,
  },
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    console.log(111)
  },
  attached: function () {},
  methods: {},
}
</script>

<style lang="stylus" scope>
.page-demo {
  .content{
    padding: 16px;
  }
  .box {
    margin-bottom: 16px;
  }
}
</style>
