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
  name: 'KitAbc',

  props: {
    prefixCls: PropTypes.string.def('kit-'),
    text: PropTypes.oneOfType([
      String,
      Number,
    ]),
    name: PropTypes.string.isRequired,
    age: PropTypes.integer, // 整数
    obj: PropTypes.object,
    navItem: PropTypes.shape({
      id: PropTypes.integer.isRequired,
      icon: String,
      title: String,
    }),
    max: PropTypes.number.def(99),
    show: PropTypes.bool,
    dot: Boolean,
    hidden: Boolean,
    color: String,
    textColor: String,
    size: PropTypes.oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ]),
    shape: PropTypes.oneOf([
      'dot',
      'circle',
      'radius',
      'square',
    ]).def('circle'),
  },

  computed: {
    classes() {
      const {
        prefixCls,
        type,
        size,
        shape,
        block,
        hollow,
        // disabled,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`is-${shape}`]: shape,
        'is-hollow': hollow,
        'is-block': block,
        // 'disabled': disabled,
      }
    },
    // styles() {
    //   const {
    //     size,
    //     color,
    //     bg,
    //   } = this.$props
    //   var sizeStyle = {}
    //   if (size) {
    //     // var size = '280, 70'
    //     // var size = '280 70'
    //     // console.log(size.split(/\s*,\s*| +/))
    //     const [width, height = width] = size.split(/\s*,\s*| +/)
    //     sizeStyle = {
    //       width: width, // svg 不需要单位
    //       height: height,
    //     }
    //   }
    //   return {
    //     // fontSize: `${size}px`,
    //     backgroundColor: !!bg,
    //     color: !!color,
    //     ...sizeStyle,
    //   }
    // },
  },

  // render(h) {
  //   return (
  //     <div
  //       // normal attributes or component props.
  //       id="foo"
  //       // DOM properties are prefixed with `domProps`
  //       domPropsInnerHTML="bar"
  //       // event listeners are prefixed with `on` or `nativeOn`
  //       onClick={this.clickHandler}
  //       nativeOnClick={this.nativeClickHandler}
  //       // other special top-level properties
  //       class={{ foo: true, bar: false }}
  //       style={{ color: 'red', fontSize: '14px' }}
  //       key="key"
  //       ref="ref"
  //       // assign the `ref` is used on elements/components with v-for
  //       refInFor
  //       slot="slot">
  //     </div>
  //   )
  // },
}
</script>

<style lang="stylus">
@import "./style";

</style>
