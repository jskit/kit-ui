<template>
  <div
    class="kit-modal"
    :class="className"
    :style="style"
    @touchmove.prevent.stop
    @click="$emit('click', $event)"
  />
</template>

<script>
export default {
  name: 'KitModal',

  props: {
    zIndex: Number,
    className: String,
    customStyle: Object,
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        ...this.customStyle,
      }
    },
  },
}
</script>
