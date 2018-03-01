<template>
  <div class="kit-card">
    <KitCardHeader><slot name="header"></slot></KitCardHeader>
    <KitCardBody><slot></slot></KitCardBody>
    <KitCardFooter><slot name="footer"></slot></KitCardFooter>
  </div>
</template>

<script>
/**
 * Card 名称
 * @module packages/Card
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <KitCard>xxx</KitCard>
 */
import PropTypes from 'vue-types'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default {
  name: 'KitCard',

  components: {
    [Header.name]: Header,
    [Body.name]: Body,
    [Footer.name]: Footer,
  },

  props: {
    prefixCls: PropTypes.string.def('kit-'),
  },

  computed: {
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
