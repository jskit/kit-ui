<template>
  <label :class="classes">
    <input class="switch-input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <span class="switch-core" :style="styles" :disabled="disabled"><span v-if="text" class="switch-text" v-text="currentValue ? texts[0] : texts[1]"></span><span class="switch-blank"></span></span>
    <div class="switch-label"><slot></slot></div>
  </label>
</template>

<script>
/**
 * Switch
 * @module packages/Switch
 * @desc 滑动开关/表单开关
 * @using 在两个互斥对象进行选择，eg：选择开或关。
 * @rules
 *   - 只在 List 中使用
 *   - 避免增加额外的文案来描述当前 Switch 的值
 *   - 可调整 Switch 的样式来满足 app 的视觉风格
 * @param {string} [name] - Switch的 name
 * @param {string} [text] - Switch的 text
 * @param {boolean} [value] - 是否默认选中，绑定值，支持双向绑定
 * @param {boolean} [disabled] - 是否不可修改
 * @param {function} [onChange] - change事件触发的回调函数,参数是 value 的值
 * @param {slot} - 显示内容
 *
 * @example
 * <KitSwitch v-model="value"></KitSwitch>
 */
import PropTypes from 'vue-types'
export default {
  name: 'KitSwitch',

  props: {
    prefixCls: PropTypes.string.def('switch'),
    // name: String,
    checked: Boolean,
    text: PropTypes.custom((value) => {
      // 开关提示，有值则必须成对(on/off 开/关 ABC/··· 等)
      // 使用 custom 还必须验证类型，反而不如原生的强大了
      return value.length > 0 ? value.indexOf('/') > -1 : true
    }),
    // text: {
    //   type: String,
    //   default: '', // on/off 开/关 ABC/··· 等
    //   validator: function (value) {
    //     // 开关提示，有值则必须成对
    //     return value.length > 0 ? value.indexOf('/') > -1 : true
    //   },
    // },
    complex: String,
    width: String,
    hollow: Boolean,
    block: Boolean,
    value: Boolean,
    disabled: Boolean,
  },

  data() {
    return {
      currentValue: this.value || this.checked,
      texts: this.text ? this.text.split('/') : [],
    }
  },

  computed: {
    classes () {
      const {
        prefixCls,
        // type,
        size,
        disabled,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${size}`]: size,
        // 'is-hollow': hollow,
        'disabled': disabled,
      }
    },
    styles() {
      const {
        width,
      } = this.$props

      return [
        width > 0 ? { width: `${width}px` } : {},
      ]
    },
  },

  watch: {
    value(val) {
      this.currentValue = val
    },

    currentValue(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="stylus">
@import "./style";


</style>
