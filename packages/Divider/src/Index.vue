
<script>
/**
 * Divider 分割器
 * @module packages/Divider
 * @desc 实现分割线
 * @rules
 *   - 默认透明背景的水平 1px 分割线，内容居中显示，可控制内外间距
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Divider>xxx</Divider>
 */
import PropTypes from 'vue-types'
export default {
  name: 'KitDivider',

  props: {
    prefixCls: PropTypes.string.def('divider'),
    content: String,
    size: String,
    line: Number,
    lineColor: String,
    color: String,
    gap: String,
  },

  computed: {
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
  },

  render(h) {
    const { classes } = this
    const {
      prefixCls,
      content,
      lineColor,
      color,
      gap,
      line,
      size,
    } = this.$props
    const $content = content || this.$slots.default

    const lineStyle = {
      transform: `scaleY(${line})`,
      backgroundColor: lineColor,
    }
    const leftPad = { ...lineStyle }
    const rightPad = { ...lineStyle }
    if (gap) {
      // 间距 1、4为间隔线外间距 2、3为间隔线内间距
      const [pad1, pad2 = pad1, pad3 = pad2, pad4 = pad1] = gap.split(/\s*,\s*| +/)
      leftPad.marginLeft = `${pad1}px`
      leftPad.marginRight = `${pad2}px`
      rightPad.marginLeft = `${pad3}px`
      rightPad.marginRight = `${pad4}px`
    }

    return (<div class={ classes } >
      <div class={ `${prefixCls}-left` } style={ leftPad }></div>
      <div class={ `${prefixCls}-center`} style={{ fontSize: `${size}px`, color: `${color}` }}>{ $content }</div>
      <div class={ `${prefixCls}-right` } style={ rightPad }></div>
    </div>)
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
