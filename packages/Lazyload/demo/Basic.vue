<template>
  <Page class="page-lazyload">
    <p>使用全局引用，直接使用即可</p>
    <p>LazyLoad 的使用参见文档 [vue-lazyload 官方文档](https://github.com/hilongjw/vue-lazyload)</p>
    <h4>图片</h4>
    <img
      v-for="(img, index) in imageList"
      v-lazy="img"
      :key="index"
    />
    <h4>背景</h4>
    <div
      v-for="(img, index) in backgroundImageList"
      v-lazy:background-image="img"
      :key="index"
    />
    <h4>组件</h4>
    <div
      v-for="(img, index) in backgroundImageList"
      v-lazy:background-image="img"
      :key="index"
    />

  </Page>
</template>

<script>

export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ],
      backgroundImageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg'
      ],
      componentImageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/100a7845756a70af2df513bdd1307d0e.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/8a4f5be8289cb3a7434fc19a3de780a2.jpg'
      ],
    }
  },

  methods: {
    handleComponentShow() {
      console.log('component show')
    },
  },
}
</script>

<style lang="stylus" scope>
.page-lazyload {
  padding: 16px;

  img[lazy],
  div[lazy] {
    padding: 15px;
    width: 100%;
    height: 250px;
    margin: 10px 0;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
