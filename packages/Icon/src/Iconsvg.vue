<template>
  <svg :class="classes" :style="styles" :title="iconType" aria-hidden="true">
    <use :xlink:href="`${iconType}`"></use>
  </svg>
</template>

<script>
/**
 * Iconsvg
 * @module packages/Iconsvg
 * @desc 矢量图标
 * @param {string} type - 显示类型
 * @param {number} [size] - 尺寸
 * @param {color} [color] - 颜色
 *
 * @example
 * <Icon type="String" size="Number" color="Color" />
 */
import PropTypes from 'vue-types'

const warnMsg = 'Icon $props.type is invalid, have you set svg-sprite-loader correctly? see https://github.com/kisenka/svg-sprite-loader'
export default {
  name: 'IconSvg',

  props: {
    prefixCls: PropTypes.string.def('icon-svg'),
    type: PropTypes.string.isRequired,
    spin: Boolean,
    // size: [Number, String],
    size: PropTypes.oneOfType([
      String,
      Number,
    ]),
    shape: PropTypes.oneOf([
      'circle',
      'radius',
      'square',
    ]),
    bg: String,
    color: String,
    fill: String,

    scale: [Number, String],
    flip: {
      validator: function (val) {
        return val === 'horizontal' || val === 'vertical'
      },
    },
    index: String,
    currentIndex: String,
  },

  computed: {
    setScale() {
      let { scale } = this.$props
      scale = typeof scale === 'undefined' ? 1 : Number(scale)
      if (isNaN(scale) || scale <= 0) {
        console.warn(`Invalid prop: prop "scale" should be a number over 0.`, this)
        return 1
      }
      return scale
    },
    iconType() {
      const { type } = this.$props
      if (!type || typeof type !== 'string') {
        console.error(warnMsg)
        return null
      }

      let xlinkHref = this.renderSvg()
      if (!/^#/.test(xlinkHref || type)) {
        console.error(warnMsg)
      }
      // let outerIcon
      if (!xlinkHref) {
        // outerIcon = true
        xlinkHref = type
      } else {
        xlinkHref = `#${type}`
      }
      // console.log(xlinkHref)
      return xlinkHref
    },
    // 目前单位用 px
    svgStyles() {
      const { size, fill } = this.$props
      var sizeStyle = {}
      if (size) {
        // var size = '280, 70'
        // console.log(size.split(/\s*,\s*| +/))
        const [width, height = width] = size.split(/\s*,\s*| +/)
        sizeStyle = {
          width: width, // svg 不需要单位
          height: height,
        }
      }
      return {
        fill: fill,
        ...sizeStyle,
      }
    },
    classes () {
      const {
        prefixCls,
        type,
        spin,
        shape,
        reverse,
        index,
        currentIndex,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${reverse}`]: reverse,
        [`is-${shape}`]: shape,
        [`active`]: currentIndex && (index === currentIndex),
        [`is-spin`]: spin || type === 'loading',
      }
    },
    styles() {
      return [
        { color: this.color },
        this.setScale === 1 ? {} : { fontSize: `${this.setScale}em` },
        { backgroundColor: this.bg },
      ]
    },
  },

  methods: {
    renderSvg() {
      const { type } = this.$props
      let svg
      try {
        svg = require(`../../Icon/src/assets/${type}.svg`)
      } catch (e) {
        svg = {}
        // console.log(e)
      } finally {
        /* eslint no-unsafe-finally: 0 */
        return svg.default
      }
    },
  },

  // render(createElement) {
  //   // const $default = this.$slots.default
  //   // const $data = $default.$data
  //   // const { use } = this.$props
  //   const { use, ...props } = this.$props

  //   return createElement(
  //     `<svg viewBox="${iconType.viewBox}">
  //       <use xlink:href="#${iconType.id}" />
  //     </svg>`,
  //     {
  //       props: props,
  //     },
  //     this.$slots.default
  //   )
  // },
}
</script>

<style lang="stylus" scope>
.iconsvg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  transform: inherit;
}
</style>
