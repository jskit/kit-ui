<template>
  <div :class="classes" v-if="show">
    <div class="inner-box" @click="handleClick">
      <img :src="imageUrl" :alt="alt" :title="imageUrl">
    </div>
  </div>
</template>

<script>
/**
 * QrCode 二维码
 * @module packages/QrCode
 * @desc 默认显示当前页面 URL
 * @rules
 *   如需要可以引用外部模块自己生成二维码，目前使用外部链接自动生成二维码
 * @param {string} [type] - 二维码类型 url text ...
 * @param {string} [content] - 二维码内容
 *
 * @example
 * <QrCode>xxx</QrCode>
 */
import PropTypes from 'vue-types'
export default {
  name: 'QrCode',

  props: {
    prefixCls: PropTypes.string.def('qrcode'),
    type: PropTypes.string.def('url'),
    content: String,
    alt: PropTypes.string.def('本地调试'),
    size: [String, Number],
    onClick: Function,
  },

  data() {
    return {
      imgUrl: '',
      show: true,
    }
  },

  computed: {
    imageUrl() {
      const [width = 150, height = width] = this.size.split(/\s*,\s*| +/)
      const qrcodeBase = `http://pan.baidu.com/share/qrcode?w=${width}&h=${height}&${this.type}=`
      return qrcodeBase + encodeURIComponent(this.content || this.imgUrl)
    },
    classes() {
      const {
        prefixCls,
        type,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
      }
    },
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
  },

  watch: {
    '$route.path': {
      handler(val, old) {
        if (this.content) { return }
        this.imgUrl = location.href
      },
      immediate: true,
    },
  },

  methods: {
    handleClick(e) {
      (this.onClick || this.close)(e)
    },
    close() {
      this.show = false
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
