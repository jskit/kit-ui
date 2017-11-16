<template>
  <div id="app">
    <router-view class="page-tpl"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="stylus">
@import './style/index';

.page-tpl {
  height: 100%;
  // overflow-x: hidden;
  overflow: hidden;
}

body {
  margin: 0;
  font-size: 16px;
  overflow-y: scroll;
}

</style>
