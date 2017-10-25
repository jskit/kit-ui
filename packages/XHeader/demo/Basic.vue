<template>
  <Page class="page-xheader">
    <div class="page-header">
      <h3>示例页面 <small>demo</small></h3>
    </div>
    <XHeader title="标题" />
    <XHeader title="主标题" subTitle="副标题" />

    <XHeader title="标题超长的话就会隐藏，也可以开启滚动标题">
      <router-link class="x-header-item" to="/" slot="left">返回</router-link>
      <router-link class="x-header-item" to="/" slot="right">首页</router-link>
    </XHeader>

    <XHeader title="标题超长的话就会隐藏，也可以开启滚动标题">
      <router-link class="x-header-item" to="/" slot="left">返回</router-link>
      <router-link class="x-header-item" to="/" slot="right">电话</router-link>
      <router-link class="x-header-item" to="/" slot="right">首页</router-link>
    </XHeader>

    <XHeader :header="header" title="通过数据自动生成 header"></XHeader>

    <p>TODO:还需要支持 header 位置限制下拉选择、tab 切换、搜索框等功能</p>
  </Page>
</template>

<script>
export default {
  data: function () {
    return {
      title: '标题',
      header: {
        title: '数据标题',
        left: [
          {
            text: '返回',
            link: '/',
          },
        ],
        right: [
          {
            text: '设置',
            link: '/',
          },
          {
            text: '首页',
            link: '/',
          },
        ],
      },
    }
  },
  components: {},
  computed: {},
  ready: function () {
    console.log(111)
  },
  attached: function () {},
  methods: {
    // header: function(){
    //   return this.header1;
    // },
  },
}
</script>

<style lang="stylus" scope>
.page-xheader {
  .x-header{
    position: static;
    margin-bottom: 16px;
    background: #ddd;

    &-left,
    &-right{
      background: #eee;
    }

    &-item{
      background: #ccc;
    }
  }
}
</style>
