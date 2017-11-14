<template>
  <transition name="kit-toast-fade">
    <div class="kit-toast-wrapper" v-show="visible">
      <div :class="['kit-toast', 'kit-toast--' + displayStyle]">
        <!-- text only -->
        <div v-if="displayStyle === 'text'" class="kit-toast__text">{{ message }}</div>
        <div v-if="displayStyle === 'html'" class="kit-toast__text" v-html="message" />

        <!-- with icon -->
        <template v-if="displayStyle === 'default'">
          <KitLoading v-if="type === 'loading'" color="white" />
          <KitIcon mode="svg" v-else class="kit-toast__icon" :type="iconType" />
          <div v-if="message" class="kit-toast__text">{{ message }}</div>
        </template>
      </div>
      <div v-if="mask" class="kit-toast__overlay" />
    </div>
  </transition>
</template>

<script>
import PropTypes from 'vue-types'
import Icon from '../../Icon'
import Loading from '../../Loading'

const typeMaps = {
  loading: 'loading',
  success: 'check',
  fail: 'warning',
}
export default {
  name: 'KitToast',

  components: {
    [Icon.name]: Icon,
    [Loading.name]: Loading,
  },

  props: {
    type: PropTypes.oneOf([
      'text',
      'html',
      ...Object.keys(typeMaps),
    ]).def('text'),
    message: String,
    mask: PropTypes.bool,
    onClose: PropTypes.func,
  },

  data() {
    return {
      visible: false,
    }
  },

  computed: {
    displayStyle() {
      return typeMaps[this.type] ? 'default' : this.type
    },
    iconType() {
      return typeMaps[this.type]
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
