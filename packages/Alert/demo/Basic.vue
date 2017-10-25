<template>
  <Page class="page-alert">
    <div class="page-header">
      <h3>Alert<small>警告提示</small></h3>
    </div>
    <Group padded>
      <KitAlert message="Info Text" type="info" />
      <KitAlert message="Success Text" type="success" />
      <KitAlert message="Warning Text" type="warning" />
      <KitAlert message="Error Text" type="error" />

      <KitAlert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        :onClose="onClose"
      />
      <KitAlert message="Error Text"
        desc="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
        :onClose="onClose"
      />

      <KitAlert message="Success Tips" type="success" showIcon />
      <KitAlert message="Informational Notes" type="info" showIcon />
      <KitAlert message="Warning" type="warning" showIcon />
      <KitAlert message="Error" type="error" showIcon />
      <KitAlert
        message="success tips"
        desc="Detailed description and advices about successful copywriting."
        type="success"
        showIcon
      />
      <KitAlert
        message="Informational Notes"
        desc="Additional description and informations about copywriting."
        type="info"
        showIcon
      />
      <KitAlert
        message="Warning"
        desc="This is a warning notice about copywriting."
        type="warning"
        showIcon
      />
      <KitAlert
        message="Error"
        desc="This is an error message about copywriting."
        type="error"
        showIcon
      />

      <KitAlert message="Warning text" banner />
      <br />
      <KitAlert message="Very long warning text warning text text text text text text text" banner closable />
      <br />
      <KitAlert showIcon message="Warning text without icon" banner />
      <br />
      <KitAlert type="error" message="Error text" banner />
    </Group>
  </Page>
</template>

<script>
import Alert from '../../Alert'
export default {
  components: {
    [Alert.name]: Alert,
  },
  data: function () {
    return {
    }
  },
  computed: {
  },
  ready: function () {
    console.log(111)
  },
  attached: function () {},
  methods: {
    onClose(e, el) {
      console.log(e, 'I was closed.')
      setTimeout(function () {
        console.log('关闭后再 show，多次操作、体验感受下交互流畅度')
        el.closing = true
      }, 3000)
    },

  },

}
</script>

<style scope>
.page-alert .alert{
  margin-bottom: 16px;
}
</style>
