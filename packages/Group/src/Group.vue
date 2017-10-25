<template>
  <div class="group" :class="[this.type ? `group-${this.type}` : '']">
    <slot name="header">
      <div class="group-header" v-if="title">{{title}}</div>
    </slot>
    <div class="group-body" :class="classes">
      <slot></slot>
    </div>
    <div class="group-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
/**
 * Group
 * @module packages/Group
 * @desc 分组标签
 * @param {string} [type] - 分组类型
 * @example
 * <Group>
 *   ...
 * </Group>
 */
export default {
  name: 'Group',
  props: {
    title: String,
    type: String,
    padded: Boolean,
  },
  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    classes() {
      return [
        this.type,
        this.padded ? 'is-padded' : '',
        // {
        //   'is-padded': this.padded,
        // },
      ]
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>


