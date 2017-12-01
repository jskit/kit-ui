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
// import Marquee, { IMarqueeProps } from './Marquee'

export default {
  name: 'KitNoticeBar',

  props: {
    prefixCls: PropTypes.string.def('kit-notice-bar'),
    mode: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
  },

  data() {
    return {
      show: true,
    }
  },

  methods: {
    handleClick() {
      const { mode, onClick } = this.$props
      if (onClick) {
        onClick()
      }
      if (mode === 'closable') {
        this.show = false
      }
    },
  },

  render(h) {
    const {
      mode,
      icon,
      children,
      prefixCls,
      action,
      // marqueeProps,
      // ...restProps
    } = this.$props

    const { handleClick } = this;

    console.log(children)

    const extraProps = {}
    let operationDom = null

    if (mode === 'closable') {
      operationDom = (
        <div class={ `${prefixCls}-operation` } onClick={handleClick} role='button' aria-label='close'>
          { action || <Icon type='cross' size='md' /> }
        </div>

      )
    } else {
      if (mode === 'link') {
        operationDom = (
          <div class={ `${prefixCls}-operation` } role='button' aria-label='go to detail'>
            { action || <Icon type='right' size='md' /> }
          </div>
        )
      }
      extraProps.onClick = handleClick
    }

    const wrapCls = {
      [`${prefixCls}-container`]: true,
    }

    // <KitMarquee prefixCls={prefixCls} text={children} {...marqueeProps} />
    return this.show ? (
      <transition name={ `${prefixCls}-fade` }>
        <div class={wrapCls} {...extraProps} role='alert'>
          {icon && <div class={`${prefixCls}-icon`} aria-hidden='true'>{icon}</div>}
          <div class={`${prefixCls}-content`} slot="slot">
          </div>
          {operationDom}
        </div>
      </transition>
    ) : null
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
