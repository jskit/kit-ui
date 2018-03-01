<template>
  <transition :name="currentTransition">
    <div v-show="value" class="kit-popup" :class="{ [`kit-popup--${position}`]: position }">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
/**
 * Popup 名称
 * @module packages/Popup
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <KitPopup>xxx</KitPopup>
 */
import PropTypes from 'vue-types'
import Popup from '../../_mixin/popup'

export default {
  name: 'KitPopup',

  mixins: [Popup],

  props: {
    prefixCls: PropTypes.string.def('kit-'),
    transition: String,
    overlay: PropTypes.bool,
    lockOnScroll: Boolean,
    closeOnClickOverlay: PropTypes.bool,
    position: String,
  },

  data() {
    const transition = this.transition || (this.position === '' ? 'popup-fade' : `popup-slide-${this.position}`)
    return {
      currentValue: false,
      currentTransition: transition,
    }
  },

  mounted() {
    if (this.value) {
      this.open()
    }
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
