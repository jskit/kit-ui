<template>
  <header
    class="x-header"
    :class="classes">
    <div class="x-header-left">
      <slot name="left">
        <template v-if="header.left" v-for="item in header.left">
          <XHeaderItem :text="item.text" :link="item.link" :status="item.status" :icon="item.icon" :tag="item.tag" :callback="item.callback" :key="item.id"></XHeaderItem>
        </template>
      </slot>
    </div>
    <div class="x-header-center ">
      <slot>
        <div class="x-header-title" v-text="title"></div>
        <div class="x-header-subtitle" v-if="subTitle" v-text="subTitle"></div>
      </slot>
    </div>
    <div class="x-header-right">
      <slot name="right">
        <template v-if="header.right" v-for="item in header.right">
          <XHeaderItem :info="header.right" :link="item.link" :status="item.status" :icon="item.icon" :tag="item.tag" :callback="item.callback" :key="item.id"></XHeaderItem>
        </template>
      </slot>
    </div>
  </header>
</template>

<script>

import XHeaderItem from './XHeaderItem.vue'

/**
 * XHeader
 * @module packages/XHeader
 * @desc 顶部导航条，标准的 xx xxxxxx xx 弹性布局
 * @param {boolean} [fixed=false] - 固定顶部
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

export default {
  name: 'XHeader',

  components: {
    XHeaderItem,
  },

  props: {
    header: {
      type: Object,
      default: function () {
        return {
          left: [
            {
              text: '返回',
              link: '/',
              callback(e) {
                // 没起效
                debugger
                e.preventDefault()
                this.goBack()
              },
            },
          ],
        }
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
@import "../../style/fn";
/* @modifier 角色  @descendent 下级元素  @when 状态 */
/* 如果使用扩展，就要支持并写 @modifier left,@modifier right{} */
.x-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 44px;

  &.line-bottom {
    // @extend line1px()
  }

  &.is-fixed {
    position: fixed;
    z-index: 10;
  }
  &-center {
    margin: 0 10px;
    align-items: center;
    overflow: hidden;
    text-align: center;
  }
  &-left,
  &-right {
    width: 88px;
    overflow: hidden;
    // background: #eee;
    flex-shrink: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &::before {
      content: '';
      width: 4px;
    }
  }
  &-right {
    justify-content: flex-end;
    // flex-direction: row-reverse;
  }
  &-item {
    width: 42px;
    // background: #ccc;
    text-align: center;
    line-height: 42px;
    text-decoration: none;
  }
  &-title,
  &-subtitle {
    textOverflow()
    font-size: inherit;
    font-weight: normal;
    font-size: 16px;
    text-decoration: none;
  }
  &-subtitle {
    margin-top: -2px;
    font-size: 12px;
  }
}
</style>
