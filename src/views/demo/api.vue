<template>
<Page class="page-index">
  <div class="index-hd">
    <img class="index-logo" src="~assets/kind/api.png" alt="">
    <p class="index-desc">{{ desc }}</p>
  </div>
  <div class="index-bd">
    <div class="kind-list">
      <div class="item"
        v-for="(item, index) in list"
        :class="{'is-show': !!item.open}"
        :key="item.title"
        :data-index="index"
        :data-path="item.path"
        @click="clickToggle($event)">
        <div class="item-hd">
          <div class="text">{{ item.title }}</div>
          <img class="item-icon" :src="`${listMap[item.icon]}`" alt="">
        </div>
        <div class="item-bd" v-if="item.list">
          <div class="link-box">
            <router-link
              class="link"
              v-for="it in item.list"
              :to="`/demo/${it.path}`"
              :data-status="it.status"
              @click.native="goNext"
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
import { api } from '@/config/docs'
import Icon from '@root/packages/Icon'
import Toast from '@root/packages/Toast'
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
  feedback: load('feedback'),
  page: load('page'),
  device: load('device'),
  network: load('network'),
  media: load('media'),
  location: load('location'),
  business: load('business'),
}

api.forEach((item) => {
  item.open = false
})

export default {
  name: 'Api',

  components: {
    [Icon.name]: Icon,
  },

  data() {
    return {
      listMap,
      list: api,
      desc: '以下为 API 接口示例，具体属性参数详见开发文档。',
    }
  },

  filters: {
    upperFirst(value) {
      return upperFirst(camelCase(value))
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
    clickToggle($event) {
      const target = $event.currentTarget
      const path = target.getAttribute('data-path')
      const index = target.getAttribute('data-index')
      if (path !== 'z-index') {
        this.list[index].open = !this.list[index].open
      } else {
        this.$router.push({
          name: 'z-index',
        })
      }
    },
    goNext($event) {
      // 结合 路由导航守卫（beforeRouteEnter 或 beforeEach）实现拦截 router-link 跳转
      $event.stopPropagation()
      // $event.preventDefault()

      const target = $event.currentTarget
      const status = target.getAttribute('data-status')
      if (status === 'todo') {
        Toast('开发未完成', 1000, null, false)
        return false
      }
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


