<template>
  <Page class="page-abc">
    <div class="page-header">
      <h3>示例页面 <small>demo</small></h3>
    </div>
    <Group padded>
    </Group>
  </Page>
</template>

<script>
import QrCode from '../../QrCode'
export default {
  components: {
    [QrCode.name]: QrCode,
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
