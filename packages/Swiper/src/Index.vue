<template>
  <div class="kit-swiper" :style="styles">
    <div class="kit-swiper__items">
      <slot></slot>
    </div>
    <div
      class="kit-swiper__indicators"
      v-if="showIndicators && swipes.length > 1"
    >
      <span
        class="kit-swiper__indicator"
        v-for="(item, index) in swipes.length"
        :key="index"
        :class="{ 'kit-swiper__indicator--active': currIndex === index }"
        >
      </span>
    </div>
  </div>
</template>

<script>
/**
 * Swiper 名称
 * @module packages/Swiper
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <KitSwiper>xxx</KitSwiper>
 */
import PropTypes from 'vue-types'
import Input from './input'
import Scroll from './scroll'
import SpringDummy from './spring_dummy'

export default {
  name: 'KitSwiper',

  props: {
    prefixCls: PropTypes.string.def('kit-'),
    autoPlay: Number,
    ratio: Number,
    showIndicators: PropTypes.bool,
  },

  data() {
    return {
      currIndex: 0,
      swipes: [],
    }
  },

  mounted() {
    this.input = new Input(this.$el, {
      listenMoving: true,
    })

    this.input.on('move', function a(dist, isEnd, e, extra) {
      if (extra.orgDirection) {
        // e.preventDefault()
        scroll.movePage(dist.x, isEnd)
      }
    })

    this.scroll = new Scroll(this.$el, {
      autoPlay: this.autoPlay,
    })

    const { scroll } = this
    scroll.on('pageChangeEnd', this.onPageChangeEnd)

    const dummy = new SpringDummy(scroll, this.input)

    dummy.on('bounce', (dist, isEnd) => {
      scroll.movePage(dist.x, isEnd)
    }).on('autoPlay', (dist, isEnd) => {
      scroll.movePage(dist.x, isEnd)
    })
    this.dummy = dummy
  },

  watch: {
    swipes(value) {
      if (this.autoPlay && value.length > 1) {
        this.dummy.initMove()
      } else {
        this.dummy.clearMove()
      }
      this.scroll.update()
      return value
    },

    autoPlay(value) {
      if (value && this.swipes.length > 1) {
        this.dummy.initMove()
      } else {
        this.dummy.clearMove()
      }
      return value
    },
  },

  computed: {
    // classes() {
    //   const {
    //     prefixCls,
    //     type,
    //     size,
    //     shape,
    //     block,
    //     hollow,
    //     disabled,
    //   } = this.$props

    //   return {
    //     [`${prefixCls}`]: true,
    //     [`${prefixCls}-${type}`]: type,
    //     [`${prefixCls}-${size}`]: size,
    //     [`is-${shape}`]: shape,
    //     'is-hollow': hollow,
    //     'is-block': block,
    //     'disabled': disabled,
    //   }
    // },
    styles() {
      let {
        ratio,
      } = this.$props
      ratio = Math.abs(ratio)
      return {
        paddingTop: ratio ? `${100 / +ratio}%` : ratio,
        height: ratio ? '0' : ratio,
      }
    },
  },

  methods: {
    onPageChangeEnd(page, currIndex) {
      this.currIndex = +currIndex
      this.$emit('pagechange:end', page, currIndex)
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
