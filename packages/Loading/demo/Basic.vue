<template>
  <Page class="page-loading">
    <div class="page-header">
      <h3>示例页面 <small>demo</small></h3>
    </div>
    <p><KitLoading type="circle" color="black" /></p>
    <p><KitLoading type="circle" color="white" /></p>
    <p><KitLoading type="gradient-circle" color="black" /></p>
    <p class="gray"><KitLoading type="gradient-circle" color="white" /></p>
  </Page>
</template>

<script>
import Loading from '../../Loading'
export default {
  components: {
    [Loading.name]: Loading,
  },
  data: function () {
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
.gray {
  background: gray;
}
</style>
