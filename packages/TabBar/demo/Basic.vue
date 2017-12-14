<template>
  <Page>
    <div class="demo">
      <KitTabbar v-model="active">
        <KitTabbarItem icon="shop">标签</KitTabbarItem>
        <KitTabbarItem icon="chat" dot>标签</KitTabbarItem>
        <KitTabbarItem icon="records" info="5">标签</KitTabbarItem>
        <KitTabbarItem icon="gold-coin" info="20">标签</KitTabbarItem>
      </KitTabbar>
    </div>
    <div class="demo">
      <KitTabbar v-model="active">
        <KitTabbarItem icon="shop">
          <span>自定义</span>
          <template slot="icon" slot-scope="props">
            <img :src="props.active ? icon.active : icon.normal" />
          </template>
        </KitTabbarItem>
        <KitTabbarItem icon="chat" dot>标签</KitTabbarItem>
        <KitTabbarItem icon="records" info="5">标签</KitTabbarItem>
      </KitTabbar>
    </div>
  </Page>
</template>

<script>
import TabBar from '../../TabBar'

export default {
  components: {
    [TabBar.name]: TabBar,
    [TabBar.Item.name]: TabBar.Item,
  },
  data() {
    return {
      active: 0,
      active2: 0,
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png',
      },
    }
  },
  computed: {},
  ready() {
    console.log(111)
  },
  attached() {},
  methods: {},
}
</script>

<style lang="stylus" scope>
.page-demo {
  .demo {
    margin: 30px 0;
  }
  .kit-tabbar {
    position: relative;

    &-item {
      cursor: pointer;
    }
  }
}
</style>
