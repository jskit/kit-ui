<template>
  <Page class="page-abc">
    <div>
      <KitPopup v-model="show">内容</KitPopup>
    </div>
    <div>
      <KitPopup
        v-model="show"
        position="top"
        :overlay="false"
      >
        内容
      </KitPopup>
    </div>
  </Page>
</template>

<script>
import Popup from '../../Popup'

export default {
  components: {
    [Popup.name]: Popup,
  },
  data() {
    return {
      show: false,
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
