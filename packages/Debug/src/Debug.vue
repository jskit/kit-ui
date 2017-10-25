<template>
  <div id="__debug"></div>
</template>

<script>
// 此组件暂不使用，debug 作为一个工具，应具备独立使用的属性
// 此处暂使用 vConsole 替代
// import vConsole from "vconsole"
/**
 * Debug
 * @module packages/Debug
 * @desc 集成 vConsole —— 一个轻量、可拓展、针对手机网页的前端开发者调试面板。
 * @features
 *  - 查看 console 日志
 *  - 查看网络请求
 *  - 手动执行 JS 命令行
 *  - 自定义插件
 * @help [vConsole](https://github.com/WechatFE/vConsole)
 *
 * @example
 * <Debug>
 *   ...
 * </Debug>
 */
export default {
  name: 'Debug',
  props: {
    // tag: {
    //   type: String,
    //   default: 'div'
    // },
  },
  components: {
    // vConsole,
  },
  computed: {
    // style () {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    // classes () {
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
