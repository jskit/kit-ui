<template>
  <transition name="van-toast-fade">
    <div class="van-toast-wrapper" v-show="visible">
      <div :class="['van-toast', 'van-toast--' + displayStyle]">
        <!-- text only -->
        <div v-if="displayStyle === 'text'" class="van-toast__text">{{ message }}</div>
        <div v-if="displayStyle === 'html'" class="van-toast__text" v-html="message" />

        <!-- with icon -->
        <template v-if="displayStyle === 'default'">
          <KitLoading v-if="type === 'loading'" color="white" />
          <KitIcon mode="svg" v-else class="van-toast__icon" :type="iconType" />
          <div v-if="message" class="van-toast__text">{{ message }}</div>
        </template>
      </div>
      <div class="van-toast__overlay" v-if="forbidClick" />
    </div>
  </transition>
</template>

<script>
import PropTypes from 'vue-types'
import Icon from '../../Icon'
import Loading from '../../Loading'
import { toastTypes, toastTypesMap } from '../../_util'
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
      ...toastTypes,
    ]).def('text'),
    message: String,
    forbidClick: Boolean,
  },

  data() {
    return {
      visible: false,
    };
  },

  computed: {
    displayStyle() {
      return toastTypes.indexOf(this.type) !== -1 ? 'default' : this.type
    },
    iconType() {
      return toastTypesMap[this.type]
    },
  },
}
</script>
