<template>
  <Page class="page-abc">
    <div class="page-header">
      <h3>Modal <small>弹出式窗口</small></h3>
    </div>
    <Group padded>
      <KitButton
        @click="showDemo('showDemo1')"
      >confirm弹窗</KitButton>
      <KitButton
        @click="showDemo('showDemo2')"
      >带title内容弹窗</KitButton>
      <KitButton
        @click="showDemo('showDemo3')"
      >内容弹窗</KitButton>
    </Group>
    <KitModal title="测试标题" width="70%" :visible="showDemo1" :show-close="false" :show-btn="true" :on-ok="clickDefaultOk" :on-cancel="clickDefaultCancel" :on-close="clickDefaultClose">
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
    </KitModal>
    <KitModal title="测试标题" width="80%" :visible="showDemo2" :show-close="true" :show-btn="false" :on-ok="clickDefaultOk" :on-cancel="clickDefaultCancel" :on-close="clickDefaultClose">
      <p>这里是文章内容</p>
      <p>这里是文章内容</p>
      <p>这里是文章内容</p>
    </KitModal>
    <KitModal width="80%" :visible="showDemo3" :show-close="true" :show-btn="false" :on-ok="clickDefaultOk" :on-cancel="clickDefaultCancel" :on-close="clickDefaultClose">
      <table width="100%">
        <tr>
          <td>编号</td>
          <td>姓名</td>
          <td>性别</td>
        </tr>
        <tr>
          <td>01</td>
          <td>小明</td>
          <td>男</td>
        </tr>
        <tr>
          <td>01</td>
          <td>小红</td>
          <td>女</td>
        </tr>
      </table>
      <img src="../../../static/img/logo.png" style="width: 50%;" alt="">
      <p>这里是描述文字</p>
      <p>这里是描述文字</p>
      <p>这里是描述文字</p>
    </KitModal>
    <p v-html="value"></p>
  </Page>
</template>

<script>
import Modal from '../../Modal'
import Button from '../../Button'

export default {
  components: {
    [Modal.name]: Modal,
    [Button.name]: Button,
  },
  data() {
    return {
      value: '',
      showDemo1: false,
      showDemo2: false,
      showDemo3: false,
    }
  },
  computed: {},
  mounted: function () {
  },
  methods: {
    showDemo(item) {
      this[item] = true;
    },
    clickDefaultOk(){
      console.log('click ok');
      this.clickDefaultClose();
    },
    clickDefaultCancel(){
      console.log('click cancel');
      this.clickDefaultClose();
    },
    clickDefaultClose(){
      this.showDemo1 = false;
      this.showDemo2 = false;
      this.showDemo3 = false;
    },
  }
}
</script>

<style scope>
.btn{
  margin-bottom: 10px;
}
</style>
