<template>
  <Page class="page-abc">
    <div class="page-header">
      <h3>示例页面 <small>demo</small></h3>
    </div>
    <Progress>
    </Progress>
  </Page>
</template>

<script>
import Progress from '../../Progress/';
export default {
  components: {
    Progress
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

</style>
