<template>
  <div>
    <div class="layer-title">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
    </div>
    <div class="layers">
      <div class="layer is-transform"
        v-for="(value, key) in object"
        :key="key"
        :class="{ [`layer-${key}`]: true }"
      ><span>{{ key }}</span></div>
    </div>
  </div>
</template>

<script>

const data = {
  popup: '弹出层，作为内容层和导航层的补充，用于承载弹窗通知、操作菜单、菜单、成功或加载中等状态的Toast，表单报错提示等弹出内容。',
  mask: '蒙层，配合Popup层使用，用于锁定内容层和导航层操作，不单独使用。',
  navigation: '导航层，位于内容层之上，在用户滑动内容层时可保持位置不动，通常用于承载导航栏等需要固定在页面的元素。',
  content: '内容层，承载页面主要内容。',
}
export default {
  data() {
    return {
      object: data,
      title: '层级规范',
      desc: '用于规范WeUI页面元素所属层级、层级顺序及组合规范。',
    }
  },
}
</script>

<style lang="stylus" scope>
$layerStartPos = 120px;
$layerSpacing  = 80px;

.layer-title {
  padding: 40px;
}

.layers {
  padding: 40px;

  .layer {
    position: absolute;
    left: 50%;
    width: 150px;
    height: 266px;
    margin-left: -75px;
    box-sizing: border-box;
    transition: .5s;
    // background: url(images/layers/transparent.gif) no-repeat center center;
    background-size: contain;
    font-size: 14px;
    color: #FFFFFF;
    span{
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      text-align: center;
      transition: .5s;
    }
    &:last-child{
      span{
        color: #aaa;
      }
    }
    &-popup {
      border: 1px solid rgba(203, 203, 203, .5);
      z-index: 4;
      &.is-transform {
        transform: translateX(15px) rotateX(45deg) rotateZ(10deg) skew(-15deg) translateZ($layerStartPos)
      }
    }
    &-mask {
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 3;
      &.is-transform {
        transform: translateX(15px) rotateX(45deg) rotateZ(10deg) skew(-15deg) translateZ($layerStartPos - $layerSpacing)
      }
    }
    &-navigation {
      background-color: rgba(40, 187, 102, 0.5);
      z-index: 2;
      &.is-transform {
        transform: translateX(15px) rotateX(45deg) rotateZ(10deg) skew(-15deg) translateZ($layerStartPos - 2*$layerSpacing)
      }
    }
    &-content {
      background-color: #FFFFFF;
      z-index: 1;
      &.is-transform {
        transform: translateX(15px) rotateX(45deg) rotateZ(10deg) skew(-15deg) translateZ($layerStartPos - 3*$layerSpacing)
      }
    }
  }
}
</style>
