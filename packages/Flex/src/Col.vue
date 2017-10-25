
<script>
/**
 * Col 栅格列
 * @module packages/Col
 * @desc 24 栅格系统。
 * @rules
 *   - 只有`col`可以作为`row`的直接元素
 *   - 如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列
 *   - xs <768px
 *   - sm ≥768px
 *   - md ≥992px
 *   - lg ≥1200px
 *   - xl ≥1600px
 * @param {number} [span] - 栅格占位格数，为 0 时相当于 `display: none`
 * @param {number} [order] - 栅格顺序，`flex` 布局模式下有效
 * @param {number} [offset] - 栅格左侧的间隔格数，间隔内不可以有栅格
 * @param {number} [push] - 栅格向右移动格数
 * @param {number} [pull] - 栅格向左移动格数
 *
 * @example
 * <KitRow >
 *   <KitCol>...</KitCol>
 * </KitRow>
 */
import PropTypes from 'vue-types'
export default {
  name: 'KitCol',

  props: {
    prefixCls: PropTypes.string.def('flex-col'),
    tag: PropTypes.string.def('div'),
    span: PropTypes.number.def(24),
    order: Number,
    offset: Number,
    push: Number,
    pull: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },

  computed: {
    gutter() {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'Row') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    },
    // classes() {
    //   const $props = this.$props
    //   const {
    //     prefixCls,
    //     span,
    //     order,
    //     offset,
    //     push,
    //     pull,
    //   } = this.$props

    //   const classList = []
    //   const offsets = ['span', 'offset', 'pull', 'push']
    //   offsets.forEach(prop => {
    //     if ($props[prop]) {
    //       classList.push(
    //         prop !== 'span' ? `${prefixCls}-${prop}-${$props[prop]}` : `${prefixCls}-${$props[prop]}`
    //       )
    //     }
    //   })

    //   let sizeClassObj = {}

    //   const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
    //   sizes.forEach(size => {
    //     let sizeProps = {}
    //     if (typeof $props[size] === 'number') {
    //       sizeProps.span = $props[size]
    //     } else if (typeof $props[size] === 'object') {
    //       sizeProps = $props[size] || {}
    //     }

    //     sizeClassObj = {
    //       ...sizeClassObj,
    //       [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
    //       [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
    //       [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
    //       [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
    //       [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
    //     }
    //   })

    //   return {
    //     [`${prefixCls}-${span}`]: span !== undefined,
    //     [`${prefixCls}-order-${order}`]: order,
    //     [`${prefixCls}-offset-${offset}`]: offset,
    //     [`${prefixCls}-push-${push}`]: push,
    //     [`${prefixCls}-pull-${pull}`]: pull,
    //     ...sizeClassObj,
    //   }
    // },
  },

  render(h) {
    const {
      prefixCls,
      tag,
    } = this.$props
    const {
      gutter,
    } = this

    const classList = []

    const styles = {}
    if (gutter > 0) {
      styles.paddingLeft = `${gutter / 2}px`
      styles.paddingRight = styles.paddingLeft
    }

    ;['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classList.push(
          prop !== 'span' ? `${prefixCls}-${prop}-${this[prop]}` : `${prefixCls}-${this[prop]}`
        )
      }
    })
    ;['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`${prefixCls}-${size}-${this[size]}`)
      } else if (typeof this[size] === 'object') {
        const props = this[size]
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span' ? `${prefixCls}-${size}-${prop}-${props[prop]}` : `${prefixCls}-${size}-${props[prop]}`
          )
        })
      }
    })

    return h(tag, {
      class: [`${prefixCls}`, classList],
      style: styles,
    }, this.$slots.default)
  },
}
</script>

<style lang="stylus">

</style>
