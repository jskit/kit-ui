<template>
  <div class="kit-swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KitSwiperItem',

  beforeCreate() {
    this.$parent.swipes.push(this)
  },

  destroyed() {
    const index = this.$parent.swipes.indexOf(this)
    if (index > -1) {
      this.$parent.swipes.splice(index, 1)
    }
  },
}
</script>
