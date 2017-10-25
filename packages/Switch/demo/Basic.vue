<template>
  <Page>
    <div class="page-header">
      <h3>滑动开关 <small>Switch</small></h3>
      <p></p>
    </div>
    <Group class="page-part" padded>
      <KitSwitch v-model="value1" @change="handleChange">
        <label v-text="value1"></label>
      </KitSwitch>

      <!-- 禁用属性可以使用精简的 checked 来设定默认值 -->
      <KitSwitch disabled checked @change="handleChange">默认开，禁用</KitSwitch>
      <KitSwitch disabled @change="handleChange">默认关，禁用</KitSwitch>
    </Group>

    <Group class="page-part" padded title="支持自定义开关状态描述">
      <p>开关状态描述设置则必须成对出现，如 on/off 开/关 ···/ABC</p>
      <p>支持自适应内容宽度，如果开关描述字符长度不一致（如：ON/OFF)，需要设定宽度属性，如需特定修改，可挂载 class</p>
      <KitSwitch v-model="value2" text="on/off" @change="handleChange">
        <label v-text="value2"></label>
      </KitSwitch>
      <KitSwitch v-model="value3" width="64" text="ON/OFF" @change="handleChange">
        <label v-text="value3"></label>
      </KitSwitch>
      <KitSwitch class="switch-big" v-model="value4" text="ABC/···" @change="handleChange">
        <label v-text="value4"></label>
      </KitSwitch>
      <KitSwitch v-model="value5" text="开/关" @change="handleChange">
        <label v-text="value5"></label>
      </KitSwitch>

    </Group>

    <Group>
      <KitCell :title="'禁用选项 ' + value7">
        <KitSwitch disabled v-model="value7" @change="handleChange"></KitSwitch>
      </KitCell>
      <KitCell :title="'选项 ' + value8">
        <KitSwitch v-model="value8" @change="handleChange"></KitSwitch>
      </KitCell>
    </Group>

    <Group class="help" padded>
      <h3>还需要什么?</h3>
      <p>使用了 v-model，感觉不够独立</p>
    </Group>
  </Page>
</template>

<script>
import Cell from '../../Cell'
import Switch from '../../Switch'
export default {
  name: 'page-switch',

  components: {
    [Cell.name]: Cell,
    [Switch.name]: Switch,
  },

  data() {
    return {
      value1: true,
      value2: false,
      value3: true,
      value4: false,
      value5: true,
      value6: false,
      value7: false,
      value8: true,
    }
  },

  methods: {
    handleChange(event) {
      console.log(event)
    },
  },
}
</script>

<style lang="stylus" scope>
.page-part .switch{
  margin-bottom: 8px;
}

// .switch-big {
.switch.switch-big {
  .switch-core{
    width: 64px;
    .switch-text{
      font-size: 30px;
      transform: translateX(-2px);
    }
  }
  .switch-input:checked + {
    .switch-core{
      .switch-text{
        font-size: 12px;
        transform: scale(0.9);
      }
    }
  }
}
</style>
