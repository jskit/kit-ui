<template>
  <div :class="['kit-tab__pane', { 'kit-tab__pane--select': key === $parent.curActive }]">
    <slot></slot>
  </div>
</template>

<script>
import PropTypes from 'vue-types'
import findParent from '../../_mixin/findParent'

export default {
  name: 'KitTabItem',

  mixins: [findParent],

  props: {
    prefixCls: PropTypes.string.def('kit-'),
    title: PropTypes.string.isRequired,
    disabled: Boolean,
  },

  data() {
    this.findParentByComponentName('KitTab')
    const nextIndex = this.parentGroup.tabs.length
    this.updateParentData(nextIndex)
    return {
      key: nextIndex,
    }
  },

  watch: {
    title() {
      this.updateParentData()
    },
    disabled() {
      this.updateParentData()
    },
  },

  methods: {
    updateParentData(nextIndex) {
      const index = arguments.length ? nextIndex : this.key
      this.parentGroup.tabs.splice(index, 1, {
        title: this.title,
        disabled: this.disabled,
        index,
      })
    },
  },
}
</script>
