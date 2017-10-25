<template>
  <Page class="page-layout">
    <div class="page-header">
      <h3>Layout <small>基础布局</small></h3>
    </div>
    <Layout>
      <VHeader>Header</VHeader>
      <VContent>Content</VContent>
      <VFooter>Footer</VFooter>
    </Layout>

    <Layout>
      <VHeader>Header</VHeader>
      <Layout row>
        <VSider>Sider</VSider>
        <VContent>Content</VContent>
      </Layout>
      <VFooter>Footer</VFooter>
    </Layout>

    <Layout>
      <VHeader>Header</VHeader>
      <Layout row>
        <VContent>Content</VContent>
        <VSider>Sider</VSider>
      </Layout>
      <VFooter>Footer</VFooter>
    </Layout>

    <Layout row>
      <VSider>Sider</VSider>
      <Layout>
        <VHeader>Header</VHeader>
        <VContent>Content</VContent>
        <VFooter>Footer</VFooter>
      </Layout>
    </Layout>
  </Page>
</template>

<script>
import Layout from '../'
const { VHeader, VFooter, VSider, VContent } = Layout
export default {
  data: function () {
    return {
    }
  },
  components: {
    VHeader,
    VFooter,
    VSider,
    VContent,
  },
  computed: {},
  ready() {
    debugger
    console.log(111)
  },
  attached: function () {},
  methods: {},
}
</script>

<style lang="stylus" scope>
.page-layout {

  > .layout-flex {
    margin-bottom: 32px;
    text-align: center;
  }

  .layout-header,
  .layout-footer {
    background: #7dbcea;
    color: #fff;
  }
  .layout-content {
    background: rgba(16, 142, 233, 1);
    color: #fff;
    min-height: 120px;
    line-height: 120px;
  }
  .layout-sider {
    background: #3ba0e9;
    color: #fff;
    line-height: 120px;
  }
}
</style>
