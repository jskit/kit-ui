<template>
  <section class="tpl-docs">
    <kit-doc :simulator="getSimulatorPath" :config="config">
      <router-view></router-view>
    </kit-doc>
  </section>
</template>

<script>
import { map } from 'lodash'
import configDocs from '@/config/docs'
const docs = map(configDocs.nav[0].groups[0].list, 'path')
export default {
  name: 'tpl-docs',
  components: {
  },

  data() {
    return {
      // simulator: this.getSimulatorPath(),
      config: configDocs,
      pathDir: '',
    }
  },

  computed: {
    getSimulatorPath() {
      const dir = this.$route.path.split('/').pop()
      if (docs.indexOf(dir) > -1) {
        return '/#/demo/'
      } else {
        return `/#/demo/${dir}`
      }
    },
  },

  watch: {
    '$route'(to, from) {
      // 默认使用 'slide-left' 如果使用的是 back（暂判断不出来），也使用 slide-left
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      // this.transition = this.checkDirecition(to.name, from.name) ? 'slide-left' : 'slide-right'
      // this.updatePathDir(to.path)
    },
  },

  methods: {

  },
}
</script>

<style lang="stylus" scope>
body {
  min-width: 1100px;
}
.tpl-demo {

  .indexicon {
    font-size: 22px;
    color: #26a2ff;
    display: inline-block;
    width: 30px;
    vertical-align: middle;

    &.icon-swipe {
      font-size: 26px;
    }

    &.icon-checklist {
      font-size: 18px;
    }
  }
}
.page-header {
  font-size: 20px;
  margin: 20px 16px;
  // text-align: center;
  display: block;
  line-height: 1.5;

  p{
    margin-bottom: 10px;
    font-size: 12px;
  }
}

.page-part {
  margin-bottom: 15px;
}
.page-block {
  margin: 16px 0;
}
.page-content{
  padding: 0 16px;
}
</style>
