<template>
  <header
    class="navbar"
    :class="classes"
  >
    <div class="navbar-left">
      <slot name="left">
        <template v-if="header.left">
          <KitNavBarItem
            v-for="item in header.left"
            :text="item.text"
            :link="item.link"
            :status="item.status"
            :icon="item.icon"
            :tag="item.tag"
            :callback="item.callback"
            :key="item.id"
          />
        </template>
      </slot>
    </div>
    <div class="navbar-center">
      <slot>
        <div class="navbar-title" v-text="title"></div>
        <div class="navbar-subtitle" v-if="subTitle" v-text="subTitle"></div>
      </slot>
    </div>
    <div class="navbar-right">
      <slot name="right">
        <template v-if="header.right">
          <KitNavBarItem
            v-for="item in header.right"
            :text="item.text"
            :link="item.link"
            :status="item.status"
            :icon="item.icon"
            :tag="item.tag"
            :callback="item.callback"
            :key="item.id"
          />
        </template>
      </slot>
    </div>
  </header>
</template>

<script>
/**
 * XHeader
 * @module packages/XHeader
 * @desc 顶部导航条，标准的 xx xxxxxx xx 弹性布局
 * @param {boolean} [fixed] - 固定顶部
 * @param {string} [title] - 默认显示在中间区域，标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <XHeader fixed>
 *   <div solt="left"></div>
 *   <div solt="center"></div>
 *   <div solt="right"></div>
 * </XHeader>
 */
// import PropTypes from 'vue-types'
import Item from './Item.vue'

const defaultHeaderData = {
  left: [
    {
      text: '返回',
      link: '/',
      callback(e) {
        // 没起效
        e.preventDefault()
        this.goBack()
      },
    },
  ],
}

export default {
  name: 'KitNavBar',

  components: {
    [Item.name]: Item,
  },

  props: {
    header: {
      type: Object,
      default() {
        return defaultHeaderData
      },
    },
    fixed: Boolean,
    title: String,
    subTitle: String,
  },

  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    classes() {
      return [
        { 'is-fixed': this.fixed },
      ]
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
