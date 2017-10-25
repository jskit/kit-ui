<template>
  <Page class="page-btn">
    <div class="page-header">
      <h3>按钮 <small>button</small></h3>
      <p>主按钮和次按钮可独立使用，空心按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。</p>
    </div>
    <Group padded title="普通按钮">
      <h4>默认</h4>
      <KitButton type="primary">主按钮</KitButton>
      <KitButton>默认</KitButton>
      <!-- <KitButton type="ghost">空心按钮</KitButton> -->
      <KitButton type="dashed">虚线按钮</KitButton>
      <KitButton type="danger">Danger</KitButton>
      <!-- <KitButton hollow>镂空</KitButton> -->

      <p>要避免并列过多操作让用户选择，在不得不并列多个操作时，需区分操作主次，减轻用户的选择难度。</p>
      <KitButton type="primary" size="lg" block>主要操作</KitButton>
      <KitButton block size="lg">次要操作</KitButton>

      <h4>尺寸大小 xs sm md lg</h4>
      <KitButton size="xs">xs按钮</KitButton>
      <KitButton size="sm">sm按钮</KitButton>
      <KitButton>默认</KitButton>
      <KitButton size="md">md按钮</KitButton>
      <KitButton size="lg">lg按钮</KitButton>
      <h4>块级按钮</h4>

      <h4>形状 shape="circle"</h4>
      <KitButton shape="square">默认方角</KitButton>
      <KitButton shape="radius">小圆角</KitButton>
      <KitButton shape="circle">大圆角</KitButton>
      <KitButton shape="round">大圆角</KitButton>
      <h4>功能 nativeType="button/reset/submit/menu"</h4>
      <KitButton>BUTTON</KitButton>
      <KitButton nativeType="reset">RESET</KitButton>
      <KitButton nativeType="submit">SUBMIT</KitButton>
      <KitButton nativeType="menu">MENU</KitButton>

    </Group>
    <Group padded title="带图标的按钮">
      <KitButton icon="cross">按钮</KitButton>
      <KitButton icon="search" shape="circle"></KitButton>
      <KitButton icon="search">搜索</KitButton>
      <KitButton icon="plus">按钮</KitButton>
      <KitButton icon="loading">按钮</KitButton>
    </Group>
    <Group padded title="带数字的按钮">

    </Group>
    <Group padded title="加载中的按钮">
      <KitButton loading>加载中...</KitButton>
    </Group>
  </Page>
</template>

<script>
import Button from '../../Button'
export default {
  components: {
    [Button.name]: Button,
  },
  data() {
    return {
    }
  },
  computed: {},
  ready: function () {
    console.log(111)
  },
  attached: function () {},
  methods: {},
}
</script>

<style scope>
.page-btn button{
  margin: 0 1em 1em 0;
}
</style>
