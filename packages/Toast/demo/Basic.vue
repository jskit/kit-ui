<template>
  <Page class="page-abc">
    <div class="page-header">
      <h3>Toast <small>弹出式提示</small></h3>
    </div>
    <Group padded>
      <KitButton
        @click="showToast"
      >文字提示</KitButton>
      <KitButton
        @click="showToastNoMask"
      >无遮罩提示</KitButton>
      <br>
      <KitButton
        @click="successToast"
      >成功提示</KitButton>
      <KitButton
        @click="failToast"
      >失败提示</KitButton>
      <br>
      <KitButton
        @click="customToast"
      >自定义 Icon</KitButton>
      <KitButton
        @click="offline"
      >断网提示</KitButton>
      <br>
      <KitButton
        @click="loadingToast"
      >加载中</KitButton>
    </Group>
  </Page>
</template>

<script>
import Toast from '../../Toast'
import Button from '../../Button'

const customIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fillRule="evenodd" d="M59.177 29.5s-1.25 0-1.25 2.5c0 14.47-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25" />
    </svg>
  `,
}
export default {
  components: {
    [Button.name]: Button,
  },
  data: function () {
    return {
    }
  },
  computed: {},
  mounted: function () {
    console.log('mounted')
    Toast.loading('Loading...', 2, () => {
      console.log('Load complete !!!')
    })

    // setTimeout(() => {
    //   Toast.hide()
    // }, 2000)
  },

  methods: {
    showToast() {
      Toast('文字提示示例，建议不超过十五字~')
    },
    showToastNoMask() {
      Toast({
        message: '无遮罩提示示例',
        mask: false,
      })
    },
    successToast() {
      Toast.success('操作成功')
    },
    failToast() {
      Toast.fail('操作失败')
    },
    customToast() {
      Toast({
        message: '自定义 Icon',
        type: 'cross',
      })
    },
    offline() {
      Toast.offline('Network connection failed !!!')
    },
    loadingToast() {
      Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!')
      })
    },
  },
}
</script>

<style scope>
.btn{
  margin-bottom: 10px;
}
</style>
