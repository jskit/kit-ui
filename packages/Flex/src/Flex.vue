<template>
  <div :class="classes" >
    <slot></slot>
  </div>
</template>

<script>
/**
 * Flex
 * @module packages/Flex
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [tag] - 指定html标签
 *
 * @example
 * <Flex tag="div">
 *   ...
 * </Flex>
 */
import PropTypes from 'vue-types'
export default {
  name: 'Flex',
  props: {
    prefixCls: PropTypes.string.def('flex'),
    direction: String,
    wrap: String,
    justify: String,
    align: String,
    alignContent: String,
  },
  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    classes() {
      const { prefixCls, direction, wrap, justify, align, alignContent } = this.$props
      return {
        // [prefixCls as string]: true,
        // [className as string]: className,
        [`${prefixCls}`]: true,
        [`${prefixCls}-align-middle`]: true,
        [`${prefixCls}-dir-row`]: direction === 'row',
        [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
        [`${prefixCls}-dir-column`]: direction === 'column',
        [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

        [`${prefixCls}-nowrap`]: wrap === 'nowrap',
        [`${prefixCls}-wrap`]: wrap === 'wrap',
        [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

        [`${prefixCls}-justify-start`]: justify === 'start',
        [`${prefixCls}-justify-end`]: justify === 'end',
        [`${prefixCls}-justify-center`]: justify === 'center',
        [`${prefixCls}-justify-between`]: justify === 'between',
        [`${prefixCls}-justify-around`]: justify === 'around',

        [`${prefixCls}-align-start`]: align === 'start',
        [`${prefixCls}-align-center`]: align === 'center',
        [`${prefixCls}-align-end`]: align === 'end',
        [`${prefixCls}-align-baseline`]: align === 'baseline',
        [`${prefixCls}-align-stretch`]: align === 'stretch',

        [`${prefixCls}-align-content-start`]: alignContent === 'start',
        [`${prefixCls}-align-content-end`]: alignContent === 'end',
        [`${prefixCls}-align-content-center`]: alignContent === 'center',
        [`${prefixCls}-align-content-between`]: alignContent === 'between',
        [`${prefixCls}-align-content-around`]: alignContent === 'around',
        [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch',
      }
    },
  },
}
</script>

<style lang="stylus">
@import "./style";



</style>
