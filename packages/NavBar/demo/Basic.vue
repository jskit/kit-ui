<template>
  <Page class="page-navbar">
    <KitNavBar title="标题" />
    <KitNavBar title="主标题" subTitle="副标题" />

    <KitNavBar title="标题超长的话就会隐藏，也可以开启滚动标题">
      <router-link class="navbar-item" to="/" slot="left">返回</router-link>
      <router-link class="navbar-item" to="/" slot="right">首页</router-link>
    </KitNavBar>

    <KitNavBar title="标题超长的话就会隐藏，也可以开启滚动标题">
      <router-link class="navbar-item" to="/" slot="left">返回</router-link>
      <router-link class="navbar-item" to="/" slot="right">电话</router-link>
      <router-link class="navbar-item" to="/" slot="right">首页</router-link>
    </KitNavBar>

    <KitNavBar :header="header" title="通过数据自动生成 header"></KitNavBar>

    <p>TODO:还需要支持 header 位置限制下拉选择、tab 切换、搜索框等功能</p>
  </Page>
</template>

<script>
import NavBar from '../../NavBar'

export default {
  components: {
    [NavBar.name]: NavBar,
  },

  data() {
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
  computed: {},
  ready() {
    console.log(111)
  },
  attached() {},
  methods: {
    // header: function(){
    //   return this.header1;
    // },
  },
}
</script>

<style lang="stylus" scope>
.page-navbar {
  .navbar {
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
