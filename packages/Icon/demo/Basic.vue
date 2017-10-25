<template>
  <Page class="page-svg">
    <h1>SVG 图标集</h1>
    <!-- <div class="panel">
      <h2>Logo</h2>
      <div class="flex">
        <span class="logo-dark flex-center box400">
          <Icon use="svg" type="devnode_logo" size="280, 70"></Icon>
        </span>
        <span class="logo-light flex-center box400" style="background: #35405b; color: #fff;">
          <Icon use="svg" type="devnode_logo" size="280, 70"></Icon>
        </span>
      </div>
    </div> -->
    <p>跟设置的字体颜色一致，默认使用 svg</p>
    <div class="panel">
      <h2>iconsvg</h2>
      <span class="preloader">
        <svg viewBox="0 0 40 40" class="preloaderCircular">
          <circle class="preloaderPath" cx="20" cy="20" fill="none" r="12"></circle>
        </svg>
      </span>
      <div class="icons">
        <span class="icon" v-for="item in svgIcons" :key="item">
          <KitIcon mode="svg" :type="item" />
          <span class="icon-text">{{item}}</span>
        </span>
      </div>
      <h2>iconfont</h2>
      <div class="icons">
        <span class="icon" v-for="item in fontIcons" :key="item">
          <KitIcon mode="font" :type="item">{{item}}</KitIcon>
          <span class="icon-text">{{item}}</span>
        </span>
      </div>
    </div>
  </Page>
</template>

<script>
import Icon from '../../Icon'
import { systemIcons, customIcons } from './data'
export default {
  components: {
    [Icon.name]: Icon,
  },
  data() {
    return {
      fontIcons: systemIcons,
      svgIcons: systemIcons,
      customIcons: customIcons,
    }
  },
}
</script>

<style lang="stylus" scope>
@import "../../style/fn";

.icons {
  overflow: hidden;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    margin: 3px 0;
    padding: 10px 0 0;
    width: 16.66%;
    text-align: center;
    cursor: pointer;
    height: 100px;
    color: $grey-8;
    transition: all .3s;
    border-radius: 4px;
    background-color: #fff;
    &:hover {
      background-color: #108ee9;
      color: #fff;

      .icon-font,
      .icon-svg {
        transform: scale(1.4);
      }
    }
  }
  .icon-font,
  .icon-svg {
    font-size: 24px;
    margin: 12px 0 16px;
    transition: all .3s;
  }
  .icon-text {
    textOverflow();

    display: block;
    font-size: 12px;
  }
}

.flex
  display flex
.flex-center
  display flex
  align-items center
  justify-content center
.page-svg
  svg
    margin 10px
  // &.hover:hover
  //   svg
  //     color #1988e0
  // .btn.active,
  // .tabs .item.active
  //   color #1988e0
  //   color var(--accentColor, #1988e0)

  .box400
    width 400px
    height 200px


.preloader {
  position: relative;
  margin: 0 auto;
  width: 40px;
  display: inline-block;
  border-radius: 50%
}

.preloader:before {
  content: '';
  display: block;
  padding-top: 100%
}

.preloader .preloaderCircular {
  animation: rotate 1s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.preloader .preloaderPath {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: preloaderDash 1.5s ease-in-out infinite;
  stroke-dasharray: 89, 200;
  stroke-dashoffset: -35px;
  stroke-linecap: square;
  stroke-width: 2px;
  stroke-miterlimit: 10px;
  stroke: #1988e0;
  stroke: var(--accentColor,#1988e0);
  transition: stroke .2s ease-in-out;
}

.preloader.size-small {
  width: 24px
}

.preloader.size-small .preloaderPath {
  stroke-width: 3px
}

.preloader.size-medium {
  width: 30px
}

.preloader.size-big {
  width: 80px
}

.preloader.size-big .preloaderPath {
  stroke-width: 1px
}

.preloaderMax {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center
}

@keyframes rotate {
  to {
    transform: rotate(1turn)
  }
}

@keyframes preloaderAppear {
  0% {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

@keyframes preloaderDash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0
  }

  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35px
  }

  to {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124px
  }
}
</style>
