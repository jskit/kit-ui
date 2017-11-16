<template>
  <Page>
    <p>基本用法</p>
    <KitSwiper
      :auto-play="3000"
      :ratio="2"
    >
      <KitSwiperItem
        v-for="(item, index) in list"
        :key="index"
      >
        <img :src="item" width="100%" />
      </KitSwiperItem>
    </KitSwiper>
    <p>基本用法2，不设置比例，需要外部包裹容器</p>
    <div style="width: 100%; height: 200px;">
      <KitSwiper
        :auto-play="6000"
      >
        <KitSwiperItem
          v-for="(item, index) in list"
          :key="index"
        >
          <img :src="item" width="100%" />
        </KitSwiperItem>
      </KitSwiper>
    </div>
  </Page>
</template>

<script>
import Swiper from '../../Swiper'

const images = [
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=962648241,2773951546&fm=27&gp=0.jpg',
  'http://img.zcool.cn/community/01031c58280f0ea84a0d304f7ffde0.jpg',
]
export default {
  components: {
    [Swiper.name]: Swiper,
    [Swiper.Item.name]: Swiper.Item,
  },
  data() {
    return {
      list: images,
    }
  },
  computed: {},
  methods: {
    handlePageEnd(page, index) {
      console.log(page, index)
    },
  },
}
</script>

<style scope>
.abc-demo .abc{
  margin-right: 0.5rem;
}
</style>
