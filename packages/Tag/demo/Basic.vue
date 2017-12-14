<template>
  <div>
    <KitTag>我只是个标签</KitTag>
    <KitTag color="green">我只是个标签</KitTag>
    <KitTag color="green" :closeable="true">我只是个标签</KitTag>
  </div>
</template>
<script>
import Tag from '../../tag'
export default {
  components:{
    [Tag.name]: Tag
  }
}
</script>
