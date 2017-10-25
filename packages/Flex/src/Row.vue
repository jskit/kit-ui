
<script>
/**
 * Row 栅格行
 * @module packages/Row
 * @desc 24 栅格系统。
 * @rules
 *   - 只有`col`可以作为`row`的直接元素
 *   - 如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列
 * @param {string} [tag] - 标签类型
 * @param {number} [gutter] - 栅格间隔, 默认0
 * @param {string} [type] - 布局模式, 可选 flex
 * @param {number} [align] - flex 布局下的垂直对齐方式：top middle bottom
 * @param {number} [justify] - flex 布局下的水平排列方式：start end center space-around space-between
 *
 * @example
 * <KitRow >
 *   <KitCol>...</KitCol>
 * </KitRow>
 */
import PropTypes from 'vue-types'
export default {
  name: 'KitRow',

  props: {
    prefixCls: PropTypes.string.def('row'),
    tag: PropTypes.string.def('div'),
    gutter: Number,
    type: PropTypes.oneOf([
      'flex',
    ]).def('flex'),
    align: PropTypes.oneOf([
      'top',
      'middle',
      'bottom',
    ]).def('top'),
    justify: PropTypes.oneOf([
      'start',
      'end',
      'center',
      'space-around',
      'space-between',
    ]).def('start'),
  },

  computed: {
    classes() {
      const {
        prefixCls,
        type,
        align,
        justify,
      } = this.$props

      return {
        [`flex-${prefixCls}`]: !type,
        [`grid-${prefixCls}-${type}`]: !!type,
        [`${prefixCls}-${type}`]: !!type,
        [`is-justify-${justify}`]: type && justify,
        [`is-align-${align}`]: type && align,
      }
    },
    styles() {
      const {
        gutter,
      } = this.$props
      const style = {}
      if (gutter > 0) {
        style.marginLeft = `-${gutter / 2}px`
        style.marginRight = style.marginLeft
      }
      return style
    },
  },

  render(h) {
    const {
      tag,
    } = this.$props
    const { classes, styles } = this

    return h(tag, {
      class: classes,
      style: styles,
    }, this.$slots.default)
  },
}
</script>

<style lang="stylus">

</style>
