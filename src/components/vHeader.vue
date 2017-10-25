<template>
<div class="header">
  <div class="inner">
    <router-link to="/" exact>
      <img class="logo" src="../assets/img/logo.png" alt="logo">
    </router-link>
    <router-link to="/index">首页</router-link>
    <router-link to="/page">页面</router-link>
    <router-link to="/zt">专题</router-link>
    <router-link to="/component">组件</router-link>
    <router-link to="/404">404页面</router-link>
  </div>
</div>
</template>

<script>
export default {
name: 'v-header',
}
</script>
