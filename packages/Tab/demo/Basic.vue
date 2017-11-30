<template>
  <Page class="page-abc">
    <h4>示例1</h4>
    <KitTab>
      <KitTabItem title="选项一">tab1</KitTabItem>
      <KitTabItem title="选项二">tab2</KitTabItem>
      <KitTabItem title="选项三">tab3</KitTabItem>
    </KitTab>
    <h4>示例2</h4>
    <KitTab>
      <KitTabItem title="选项一">tab1</KitTabItem>
      <KitTabItem title="选项二">tab2</KitTabItem>
      <KitTabItem title="选项三">tab3</KitTabItem>
      <KitTabItem title="选项四">tab4</KitTabItem>
    </KitTab>
    <h4>示例3</h4>
    <KitTab>
      <KitTabItem title="选项一">tab1</KitTabItem>
      <KitTabItem title="选项二">tab2</KitTabItem>
      <KitTabItem title="选项三">tab3</KitTabItem>
      <KitTabItem title="选项四">tab4</KitTabItem>
      <KitTabItem title="选项五">tab5</KitTabItem>
    </KitTab>
    <h4>示例4</h4>
    <KitTab>
      <KitTabItem title="选项0">tab0</KitTabItem>
      <KitTabItem title="选项1">tab1</KitTabItem>
      <KitTabItem title="选项2">tab2</KitTabItem>
      <KitTabItem title="选项3">tab3</KitTabItem>
      <KitTabItem title="选项4">tab4</KitTabItem>
      <KitTabItem title="选项5">tab5</KitTabItem>
      <KitTabItem title="选项6">tab6</KitTabItem>
      <KitTabItem title="选项7">tab7</KitTabItem>
      <KitTabItem title="选项8">tab8</KitTabItem>
      <KitTabItem title="选项9">tab9</KitTabItem>
    </KitTab>
  </Page>
</template>

<script>
import Tab from '../../Tab'

export default {
  components: {
    [Tab.name]: Tab,
    [Tab.Item.name]: Tab.Item,
  },
  data() {
    return {
    }
  },
  computed: {},
  ready() {
    console.log(111)
  },
  attached() {},
  methods: {},
}
</script>

<style scope>
.abc-demo .abc{
  margin-right: 0.5rem;
}
</style>
