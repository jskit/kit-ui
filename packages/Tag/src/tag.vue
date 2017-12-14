<template>
  <div :class="wrapCls">
    <a :class="prefixCls + '-text'" :href="href"><slot></slot></a>
    <KitIcon v-if="!!closeable" type="cross"></KitIcon>
  </div>
</template>
<script>
import classNames from 'classnames'
import PropTypes from 'vue-types'
import Icon from '../../Icon'
export default {
  name: 'KitTag',
  props: {
    prefixCls: PropTypes.string.def('kit-tag'),
    href: String,
    closeable: false,
    onClose: ()=>{},
    color: PropTypes.oneOf(['blue','green','yellow','red']).def('blue')
  },
  components: {
    [Icon.name]: Icon
  },
  computed: {
    wrapCls() {
      return classNames({
        [this.prefixCls]: true,
        [`${this.prefixCls}-${this.color}`]: this.color,
        [`${this.prefixCls}-close`]: this.closeable
      })
    }
  },
  methods: {
    _close(e){

    }
  }
}
</script>
<style lang="stylus">
@import './style'
</style>
