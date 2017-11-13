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
          <div class="text">{{ item.title }} {{ item.icon | upperFirst }}</div>
          <img class="item-icon" :src="`${listMap[item.icon]}`" alt="">
        </div>
        <div class="item-bd">
          <div class="link-box">
            <router-link
              class="link"
              :to="`/demo/${it.path}`"
              v-for="it in item.list"
              :key="it.path">
              <div class="link-text" v-html="itTitle(it.title)"></div>
              <KitIcon :type="iconType(it.status)" class="link-arrow" :class="{[`is-${it.status}`]: true}" />
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
import { camelCase, upperFirst } from '@/utils'
const typeMap = {
  todo: 'cross',
  doing: 'warning-circle-o',
  done: 'check',
}
function load(name) {
  return require(`@/assets/kind/${name}.png`)
}
const listMap = {
  layout: load('layout'),
  nav: load('nav'),
  form: load('form'),
  feedback: load('feedback'),
  complex: load('complex'),
  business: load('business'),
  other: load('content'),
  search: load('layout'),
  zIndex: load('z-index'),
}

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
      listMap: listMap,
      list: components,
      desc: '以下为组件 demo，样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见开发文档。',
    }
  },

  filters: {
    upperFirst(value) {
      return upperFirst(value)
    },
    splitTitle(value) {
      },
  },

  computed: {

  },

  methods: {
    itTitle(value) {
      const name = value.split(' ')
      const cName = upperFirst(camelCase(name[0]))
      return `${cName} <small>${name.slice(1).join(' ')}</small>`
    },
    iconType(type) {
      return typeMap[type]
    },
    clickToggle(event) {
      const index = event.currentTarget.getAttribute('data-index')
      this.list[index].open = !this.list[index].open
    },
  },
}
</script>

<style lang="stylus" scope>
.link-arrow {
  &.is-todo {
    color: #f04134;
  }
  &.is-doing {
    color: #ffbf00;
  }
  &.is-done {
    color: #00a854;
  }
}

</style>


