<template>
  <div></div>
</template>

<script>
/**
 * Abc 名称
 * @module packages/Abc
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Abc>xxx</Abc>
 */
import PropTypes from 'vue-types'

export default {
  name: 'KitMarquee',

  props: {
    prefixCls: PropTypes.string.def('kit-'),
    text: PropTypes.string,
    loop: Boolean,
    leading: PropTypes.number.def(500),
    trailing: PropTypes.number.def(800),
    fps: PropTypes.number.def(40),
  },

  data() {
    return {
      animatedWidth: 0,
      overflowWidth: 0,
    }
  },

  mounted() {
  // componentDidMount() {
    /* eslint no-underscore-dangle: 0 */
    this._measureText()
    this._startAnimation()
  },

  componentDidUpdate() {
    this._measureText()
    if (!this._marqueeTimer) {
      this._startAnimation()
    }
  },

  beforeDestroy() {
  // componentWillUnmount() {
    clearTimeout(this._marqueeTimer)
  },

  methods: {
    _startAnimation() {
      if (this._marqueeTimer) {
        clearTimeout(this._marqueeTimer)
      }
      const { fps } = this.props
      const TIMEOUT = (1 / fps) * 1000
      const isLeading = this.state.animatedWidth === 0
      const timeout = isLeading ? this.props.leading : TIMEOUT

      const animate = () => {
        const { overflowWidth } = this.state
        let animatedWidth = this.state.animatedWidth + 1
        const isRoundOver = animatedWidth > overflowWidth

        if (isRoundOver) {
          if (this.props.loop) {
            animatedWidth = 0
          } else {
            return
          }
        }

        if (isRoundOver && this.props.trailing) {
          this._marqueeTimer = setTimeout(() => {
            this.animatedWidth = animatedWidth

            this._marqueeTimer = setTimeout(animate, TIMEOUT)
          }, this.props.trailing)
        } else {
          this.animatedWidth = animatedWidth

          this._marqueeTimer = setTimeout(animate, TIMEOUT)
        }
      }

      if (this.state.overflowWidth !== 0) {
        this._marqueeTimer = setTimeout(animate, timeout)
      }
    },

    _measureText() {
      const container = ReactDOM.findDOMNode(this)
      const node = this.textRef
      if (container && node) {
        const containerWidth = container.offsetWidth
        const textWidth = node.offsetWidth
        const overflowWidth = textWidth - containerWidth
        if (overflowWidth !== this.state.overflowWidth) {
          this.overflowWidth = overflowWidth
        }
      }
    },
  },

  render(h) {
    const { prefixCls, className, text } = this.$props
    const style = {
      position: 'relative',
      right: this.animatedWidth,
      whiteSpace: 'nowrap',
      display: 'inline-block',
    }
    /* eslint no-return-assign: 0 */
    return (
      <div className={`${prefixCls}-marquee-wrap ${className}`} style={{ overflow: 'hidden' }} role='marquee'>
        <div ref={el => this.textRef = el} className={`${prefixCls}-marquee`} style={style}>{text} </div>
      </div>
    )
  },
}
</script>

<style lang="stylus">

</style>
