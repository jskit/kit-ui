<template>
  <Page class="page-abc">
    <KitAbc>Abc</KitAbc>
  </Page>
</template>

<script>
import Abc from '../../Abc'

export default {
  components: {
    [Abc.name]: Abc,
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
