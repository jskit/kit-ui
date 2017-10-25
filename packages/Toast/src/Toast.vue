<template>
  <transition :name="`${prefixCls}toast-fade`">
    <div :class="`${prefixCls}toast-wrapper`" v-show="visible">
      <div :class="[`${prefixCls}toast`, `${prefixCls}toast--${displayStyle}`]">
        <!-- text only -->
        <div v-if="displayStyle === 'text'" :class="`${prefixCls}toast__text`">{{ message }}</div>
        <div v-if="displayStyle === 'html'" :class="`${prefixCls}toast__text`" v-html="message" />

        <!-- with icon -->
        <template v-if="displayStyle === 'default'">
          <kit-loading v-if="type === 'loading'" color="white" />
          <kit-icon v-else :class="`${prefixCls}toast__icon`" :name="type" />
          <div v-if="message" :class="`${prefixCls}toast__text`">{{ message }}</div>
        </template>
      </div>
      <div class="${prefixCls}toast__overlay" v-if="forbidClick" />
    </div>
  </transition>
</template>

<script>
/**
 * Toast 轻提示
 * @module packages/Toast
 * @desc 一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。
 * @rules
 *   - 一次只显示一个 toast。
 *   - 有 Icon 的 Toast，字数为 4-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。
 *
 * @API
 * @param {string} [content] - 提示内容
 * @param {number} [duration] - 自动关闭的延时，单位秒 (默认3)
 * @param {function} [onClose] - 提示内容
 * @param {boolean} [mask] - 是否显示透明蒙层，防止触摸穿透 (true)
 * @注： duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide
 * 还提供了全局配置和全局销毁方法：Toast.hide()
 * 以及五个静态方法：
 * Toast.[success|fail|info|loading|offline](content, duration, onClose, mask)
 * @example
 * <Toast>...</Toast>
 */
import PropTypes from 'vue-types'

export default {
  name: 'KitToast',
  props: {
    // tag: {
    //   type: String,
    //   default: 'div'
    // },
  },
  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    // classes() {
    //   return [
    //     {
    //       'badge-point': this.point,
    //       'badge-single': this.text && this.text.length === 1,
    //       radius: this.radius,
    //       round: this.round,
    //     },
    //     this.type ? `badge-${this.type}` : '',
    //   ]
    // },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
