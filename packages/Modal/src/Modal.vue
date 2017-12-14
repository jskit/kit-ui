<template>
  <transition name="fade">
    <div class="kit-modal" v-show="visible">
      <div class="kit-modal__overlay" @click="onClose" />
      <div :class="{'kit-modal__container': true, 'kit-modal__padtop': padtop}" :style="{width: width}">
        <p v-if="title" class="kit-modal__title">{{ title }}</p>
        <div v-if="showClose" class="kit-modal__icon" @click="onClose">
          <KitIcon mode="svg" type="cross" />
        </div>
        <div class="kit-modal__content">
          <slot></slot>
        </div>
        <div v-if="showBtn" class="kit-modal__btnbox">
          <div class="btnleft" @click="onCancel">取消</div>
          <div class="btnright" @click="onOk">确定</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import PropTypes from 'vue-types'
import Icon from '../../Icon'

export default {
  name: 'KitModal',

  components: {
    [Icon.name]: Icon
  },

  props: {
    visible: PropTypes.bool.def(false),
    showClose: PropTypes.bool.def(false),
    showBtn: PropTypes.bool.def(true),
    width: PropTypes.string.def('80%'),
    title: PropTypes.string,
    onClose: PropTypes.func,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
  },

  data() {
    return {
    }
  },
  computed: {
    padtop() {
      return !this.title && this.showClose
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus">
@import "./style";

</style>
