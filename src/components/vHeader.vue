<template>
<div class="header">
  <div class="inner">
    <router-link to="/" exact>
      <img class="logo" src="../assets/img/logo.png" alt="logo">
    </router-link>
    <router-link to="/">首页</router-link>
    <router-link to="docs">文档</router-link>
    <router-link to="component">组件</router-link>
    <router-link to="demo"><KitButton>预览</KitButton></router-link>
  </div>
</div>
</template>

<script>
import Button from '../../packages/Button'
export default {
  name: 'v-header',

  components: {
    [Button.name]: Button,
  },
}
</script>
