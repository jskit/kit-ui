<template>
  <div class="kit-tabs" :class="[`kit-tabs--${type}`]">
    <div class="kit-tabs__nav-wrap" v-if="type === 'line' && tabs.length > this.tabsMax">
      <div class="kit-tabs__swipe" ref="swipe">
        <div class="kit-tabs__nav kit-tabs__nav--line">
          <div class="kit-tabs__nav-bar" :style="navBarStyle"></div>
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="kit-tab kit-hairline"
            :class="{ 'kit-tab--active': index === curActive }"
            ref="tabkey"
            @click="handleTabClick(index)"
          >
            {{ tab.title }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="kit-tabs__nav"
      :class="[`kit-tabs__nav--${this.type}`]"
    >
      <div class="kit-tabs__nav-bar" :style="navBarStyle" v-if="type === 'line'"></div>
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="kit-tab kit-hairline"
        :class="{ 'kit-tab--active': index === curActive }"
        ref="tabkey"
        @click="handleTabClick(index)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="kit-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * Abc 名称
 * @module packages/Abc
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Abc>xxx</Abc>
 */
import PropTypes from 'vue-types'
import Item from './Item'
import swipe from './swipe'
import translateUtil from '../../_util/transition'

export default {
  name: 'KitTab',

  components: {
    [Item.name]: Item,
  },

  props: {
    prefixCls: PropTypes.string.def('kit-'),
    duration: PropTypes.number.def(0.3), // 切换tab的动画时间
    tabsMax: PropTypes.number.def(4), // 最大展示 tab 个数
    type: PropTypes.oneOf([
      'line',
      'card',
    ]).def('line'), // 是默认的line还是card
    active: PropTypes.oneOfType([
      String,
      Number,
    ]).def(0), // 外部传入的激活的tab标签
  },

  data() {
    return {
      tabs: [],
      isReady: false,
      curActive: +this.active,
      isSwiping: false,
    }
  },

  watch: {
    active(val) {
      this.curActive = +val
    },

    curActive() {
      /* istanbul ignore else */
      if (this.tabs.length > this.tabsMax) {
        this.doOnValueChange()
      }
    },
  },

  computed: {
    /**
     * `type`为`line`时，tab下方的横线的样式
     */
    navBarStyle() {
      if (!this.isReady || this.type !== 'line' || !this.$refs.tabkey) return

      // const tabKey = this.curActive
      // const elem = this.$refs.tabkey[tabKey]
      // const { length } = this.tabs.length
      // const offsetWidth = `33.3%`
      // const offsetLeft = `${elem.offsetLeft || 0}px`
      console.log('this.curActive')
      console.log(this.curActive)
      const { length } = this.tabs
      const offsetWidth = length > this.tabsMax ? '22%' : `${(100 / this.tabs.length)}%`

      return {
        width: offsetWidth,
        transform: `translate3d(${100 * this.curActive}%, 0, 0)`,
        transitionDuration: `${this.duration}s`,
      }
    },
    swipeWidth() {
      return this.$refs.swipe && this.$refs.swipe.getBoundingClientRect().width
    },
    maxTranslate() {
      /* istanbul ignore if */
      if (!this.$refs.tabkey) return

      const length = this.tabs.length - 1
      const lastTab = this.$refs.tabkey[length]
      const lastTabWidth = lastTab.offsetWidth
      const lastTabOffsetLeft = lastTab.offsetLeft

      return (lastTabOffsetLeft + lastTabWidth) - this.swipeWidth
    },
  },

  mounted() {
    // 页面载入完成
    this.$nextTick(() => {
      // 可以开始触发在computed中关于nav-bar的css动画
      this.isReady = true
      this.initEvents()

      if (this.tabs.length > this.tabsMax) {
        this.doOnValueChange()
      }
    })
  },

  methods: {
    handleTabClick(index) {
      if (this.tabs[index].disabled) {
        this.$emit('disabled', index)
        return
      }

      this.$emit('click', index)
      this.curActive = index
    },

    /**
     * 将当前value值转换为需要translate的值
     */
    value2Translate(value) {
      /* istanbul ignore if */
      if (!this.$refs.tabkey) return 0

      const tab = this.$refs.tabkey[value]
      const { maxTranslate } = this
      const tabWidth = tab.offsetWidth
      const tabOffsetLeft = tab.offsetLeft
      /* eslint no-mixed-operators: 0 */
      let translate = tabOffsetLeft + (tabWidth * 2.7) - this.swipeWidth
      if (translate < 0) {
        translate = 0
      }

      return -1 * (translate > maxTranslate ? maxTranslate : translate)
    },

    initEvents() {
      const el = this.$refs.swipe
      if (!el) return

      let swipeState = {}

      swipe(el, {
        start: (event) => {
          swipeState = {
            start: new Date(),
            startLeft: event.pageX,
            startTranslateLeft: translateUtil.getElementTranslate(el).left,
          }
        },

        drag: (event) => {
          this.isSwiping = true

          swipeState.left = event.pageX
          const deltaX = swipeState.left - swipeState.startLeft
          const translate = swipeState.startTranslateLeft + deltaX

          /* istanbul ignore else */
          if (translate > 0 || (translate * -1) > this.maxTranslate) return

          translateUtil.translateElement(el, translate, null)
        },

        end: () => {
          this.isSwiping = false
        },
      })
    },

    doOnValueChange() {
      const value = +this.curActive
      /* eslint no-shadow: 0 */
      const { swipe } = this.$refs

      translateUtil.translateElement(swipe, this.value2Translate(value), null)
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
