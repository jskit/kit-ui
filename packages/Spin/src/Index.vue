
<script>
/**
 * Spin 加载中
 * @module packages/Spin
 * @desc 用于页面和区块的加载中状态。
 * @rules
 *   - 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
 * @param {string} [tip] - 当作为包裹元素时，可以自定义描述文案
 * @param {string} [size] - 组件大小
 * @param {string} [spinning] - 是否旋转，默认 true
 * @param {number} [delay] - 延迟显示加载效果的时间（防止闪烁）
 *
 * @example
 * <Spin />
 * <Spin delay=500 />
 * <Spin tip="Loading...">slot...</Spin>
 */
import PropTypes from 'vue-types'
export default {
  name: 'KitSpin',
  props: {
    prefixCls: PropTypes.string.def('spin'),
    tip: String,
    size: PropTypes.oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ]),
    spinning: PropTypes.bool,
    delay: Number,
  },
  computed: {
    classes () {
      const {
        prefixCls,
        tip,
        size,
        spinning,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-show-text`]: !!tip,
        [`${prefixCls}-spinning`]: spinning,
        // [`${prefixCls}-nested-loading`]: true,
      }
    },
    // styles () {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
  },

  methods: {
    isNestedPattern() {
      // 是否有子元素
      return !!(this.$slots.default)
    },
  },

  render(h) {
    const { classes } = this
    const { prefixCls, tip, spinning } = this.$props
    const spinElement = (
      <div class={ classes }>
        <span class={ `${prefixCls}-dot` }>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        { tip ? <div class={ `${prefixCls}-text` }>{ tip }</div> : null }
      </div>
    )
    if (this.isNestedPattern()) {
      const containerClass = {
        [`${prefixCls}-container`]: true,
        [`${prefixCls}-blur`]: spinning,
      }
      return (
        <transition name={ `${prefixCls}-fade` }>
          <div class={ `${prefixCls}-nested-loading` }>
            { spinElement }
            <div class= { containerClass }>
              { this.$slots.default }
            </div>
          </div>
        </transition>
      )
    }
    return spinElement
    // 判断是否有 slot
    // return this.closable ? (
    //   <a onClick={this.handleClose} class={{ [`${this.prefixCls}-close-icon`]: true }}>
    //     {this.closeText || <Icon mode='svg' type='cross' />}
    //   </a>
    // ) : null
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
