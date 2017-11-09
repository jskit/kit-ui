<template>
<Page class="page-index">
  <div class="index-hd">
    <img class="index-logo" src="~assets/kind/component.png" alt="">
    <p class="index-desc">{{desc}}</p>
  </div>
  <div class="index-bd">
    <div class="kind-list">
      <div class="item"
        v-for="(item, index) in list"
        :class="{'is-show': !!item.open}"
        :key="item.title"
        :data-index="index"
        @click="clickToggle($event)">
        <div class="item-hd">
          <div class="text">{{ item.title }}</div>
          <img class="item-icon" src="~assets/kind/view.png" alt="">
        </div>
        <div class="item-bd">
          <div class="link-box">
            <router-link
              class="link"
              :to="`/demo/${it.path}`"
              v-for="it in item.list"
              :key="it.path">
              <div class="link-text">{{ it.title }}</div>
              <KitIcon type="check" class="link-arrow" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</Page>
</template>

<script>
import { components } from '@/config/docs'
import Icon from '@root/packages/Icon'
components.forEach(item => {
  item.open = false
})

export default {
  name: 'Component',

  components: {
    [Icon.name]: Icon,
  },

  data() {
    return {
      list: components,
      desc: '以下为组件 demo，样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见开发文档。',
    }
  },

  methods: {
    clickToggle(event) {
      const index = event.currentTarget.getAttribute('data-index')
      console.log(index)
      this.list[index].open = !this.list[index].open
    },
  },
}
</script>

<style lang="stylus">


</style>


