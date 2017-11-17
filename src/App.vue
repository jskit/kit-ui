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
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

</style>
