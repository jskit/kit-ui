<template>
  <Page class="page-abc">
    <KitCard>Card</KitCard>
  </Page>
</template>

<script>
import Page from '../../Page'
import Card from '../../Card'

export default {
  components: {
    [Page.name]: Page,
    [Card.name]: Card,
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
