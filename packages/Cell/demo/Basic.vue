<template>
  <Page>
    <div class="page-header">Cell 组件</div>
    <div class="group">
      <div class="group-header">未读数红点跟在主题信息后，统一在列表左侧</div>
      <div class="list">
        <KitCell title="简单文本"></KitCell>
        <KitCell is-link
        title="这是标题，字大一点"
        desc="这里是描述内容，正文字体大小，但内容要多一点，这里是描述内容，正文字体大小，但内容要多一点"
        ></KitCell>
        <KitCell title="标题文字" icon="app" value="带 icon"></KitCell>
        <KitCell title="联系人名称">
          <!-- <img height="36" slot="icon" src="http://lorempixel.com/160/160/people/" alt="头像"> -->
          <!-- <svg width="40px" height="40px" slot="icon" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#ebebeb"/></svg> -->
          <svg width="40px" height="40px" slot="icon" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <span>icon 是图片</span>
        </KitCell>
        <KitCell title="标题文字" desc="摘要信息">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <KitBadge slot="badge" color="red" text="8"></KitBadge>
          <span>带 badge</span>
          <KitBadge color="#f60" textColor="#fff" text="28"></KitBadge>
        </KitCell>
        <KitCell is-link title="我的订单" desc="带链接">
          <span>查看全部订单</span>
        </KitCell>
        <KitCell title="标题文字">
          <KitBadge text="10"></KitBadge>
        </KitCell>
        <KitCell title="标题文字">
          <span style="color: green">自定义元素</span>
        </KitCell>
        <KitCell title="标题文字">
          <Button size="sm" type="primary" icon="back">按钮</Button>
        </KitCell>
      </div>
      <p>这里有个问题，未引用 group 组件，但使用group-header样式，则样式未加载，这里可以看出，UI组件库没有全加载进来，未使用就未加载</p>
    </div>
    <!-- <KitCell title="标题" label="描述信息" is-link></KitCell> -->
    <!-- <KitCell>

      <div slot="title">这是标题，字大一点 <span class="desc">标题描述或值</span></div>
      <div slot="after" class="cell-after">After</div>
    </KitCell>

    <KitCell class="cell cell-space-around">
      <span class="entry-cell cell-column iconfont icon-app">待付款</span>
      <span class="entry-cell cell-column iconfont icon-app">待收货</span>
      <span class="entry-cell cell-column iconfont icon-app">待评价</span>
      <span class="entry-cell cell-column iconfont icon-app">售后</span>
    </KitCell>
    <KitCell class="cell cell-sublist">
      <div class="cell-content">
        <div class="cell" data-type="">
          <div class="cell-content">
            <i class="iconfont icon-group"></i> 一级粉丝
          </div>
          <div class="cell-after">10</div>
        </div>
      </div>
    </KitCell> -->

  </Page>
</template>

<script>
import Cell from '../../Cell'
import Badge from '../../Badge'
export default {

  components: {
    [Cell.name]: Cell,
    [Badge.name]: Badge,
  },

  methods: {
    goBack() {
      history.go(-1)
    },
  },
}
</script>
