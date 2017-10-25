<template>
  <Page class="page-flex">
    <div class="page-header">
      <h3>Flex 布局 <small>Flex</small></h3>
    </div>
    <Group padded>
      <KitRow>
        <KitCol :span="24"><PlaceHolder /></KitCol>
      </KitRow>
      <KitRow>
        <KitCol :span="12"><PlaceHolder /></KitCol>
        <KitCol :span="12"><PlaceHolder /></KitCol>
      </KitRow>
      <KitRow>
        <KitCol :span="8"><PlaceHolder /></KitCol>
        <KitCol :span="8"><PlaceHolder /></KitCol>
        <KitCol :span="8"><PlaceHolder /></KitCol>
      </KitRow>
      <KitRow>
        <KitCol :span="6"><PlaceHolder /></KitCol>
        <KitCol :span="6"><PlaceHolder /></KitCol>
        <KitCol :span="6"><PlaceHolder /></KitCol>
        <KitCol :span="6"><PlaceHolder /></KitCol>
      </KitRow>
    </Group>
    <Group padded>
      <Flex>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
      </Flex>
      <!-- <WhiteSpace size="lg" /> -->
      <Flex>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
      </Flex>
      <Flex>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
      </Flex>

      <h3>wrap 换行</h3>
      <Flex wrap="wrap">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>

      <h3>轴对齐方式</h3>
      <Flex justify="center">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="end">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="between">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>

      <WhiteSpace />
      <Flex align="start">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="end">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="baseline">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
    </Group>
    <Group title="适用场景" padded>
      <p>Flex布局意为弹性布局，所以需要弹性设计的地方，即是最适用Flex 布局的地方。以下场景，优先选择 Flex 布局</p>
      <ul>
        <li>垂直居中，尤其是不定高</li>
        <li>弹性自适应宽度</li>
      </ul>
    </Group>
    <h4>Flex 布局示例</h4>
    <p>http://www.ruanyifeng.com/blog/2015/07/flex-examples.html</p>
    <Group title="骰子的布局">
      <p>由此示例启发，应该使用简单控制，定子元素相对位置即可，首先父级划分网格，子集选择网格显示</p>
      <div class="first-face">
        <span class="pip"></span>
      </div>
      <div class="second-face">
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
      <div class="third-face">
        <span class="pip"></span>
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
      <div class="fourth-face">
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
      </div>
      <div class="fifth-face">
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
      </div>
      <div class="sixth-face">
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
      </div>
      <div class="sixth-face">
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
      </div>
      <div class="third-face">
        <span class="pip"></span>
        <span class="pip"></span>
        <span class="pip"></span>
        <span class="pip"></span>
        <span class="pip"></span>
        <span class="pip"></span>
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
    </Group>
    <Group title="Flex 网格布局">
      <h4>最简单的网格布局，就是平均分布。</h4>
      <div class="flex-grid">
        <div class="flex-grid-cell">1/3</div>
        <div class="flex-grid-cell">1/3</div>
        <div class="flex-grid-cell">1/3</div>
      </div>
      <div class="flex-grid">
        <div class="flex-grid-cell">1/4</div>
        <div class="flex-grid-cell">1/4</div>
        <div class="flex-grid-cell">1/4</div>
        <div class="flex-grid-cell">1/4</div>
      </div>
      <h4>百分比布局：某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。</h4>
      <div class="flex-grid">
        <div class="flex-grid-cell u-1of2">1/2</div>
        <div class="flex-grid-cell">auto</div>
        <div class="flex-grid-cell">auto</div>
      </div>
      <div class="flex-grid">
        <div class="flex-grid-cell">auto</div>
        <div class="flex-grid-cell u-1of3">...</div>
      </div>
      <div class="flex-grid">
        <div class="flex-grid-cell u-1of4">1/4</div>
        <div class="flex-grid-cell">auto</div>
        <div class="flex-grid-cell u-1of3">...</div>
      </div>
    </Group>
    <Group title="圣杯布局（Holy Grail Layout）">
      <p>圣杯布局（Holy Grail Layout）指的是一种最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。</p>
      <body class="holy-grail">
      <header>...</header>
      <div class="holy-grail-body">
        <main class="holy-grail-content">...</main>
        <nav class="holy-grail-nav">...</nav>
        <aside class="holy-grail-ads">...</aside>
      </div>
      <footer>...</footer>
    </body>
    </Group>
    <Group title="输入框的布局">
      <p>在输入框的前方添加提示，后方添加按钮。</p>
    </Group>
    <Group title="悬挂式布局">
      <p>主栏的左侧或右侧，需要添加一个图片栏。</p>
    </Group>
    <Group title="固定的底栏">
      <p>有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部。</p>
    </Group>
    <Group title="流式布局">
      <p>每行的项目数固定，会自动分行。</p>
    </Group>
  </Page>
</template>

<script>
import Vue from 'vue'
import { Row, Col, FlexItem } from '../../Flex'
Vue.component('WhiteSpace', {
  template: '<div style="height: 10px;"></div>',
})
Vue.component('PlaceHolder', {
  template: '<div class="placeholder">Item</div>',
  computed: {
    styles() {
      return {
        backgroundColor: '#ebebef',
        color: '#bbb',
        textAlign: 'center',
        height: '30px',
        lineHeight: '30px',
        width: '100%',
      }
    },
  },
})
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [FlexItem.name]: FlexItem,
  },
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    console.log(111)
  },
  attached: function () {},
  methods: {},
}
</script>

<style lang="stylus" scope>
.page-flex
  .placeholder
    background-color #ebebef
    color #bbb
    text-align center
    height 30px
    line-height 30px
    width 100%

  .flex
    margin-bottom 10px

    .inline
      margin 8px 8px 8px 0
      width 80px !important

    .small
      height 14px !important
      line-height 14px !important


.first-face {
  display: flex;
  justify-content: center;
  align-items: center;
}

.second-face {
  display: flex;
  justify-content: space-between;
}

.second-face .pip:nth-of-type(2) {
  align-self: flex-end;
}

.third-face {
  display: flex;
  justify-content: space-between;
}

.third-face .pip:nth-of-type(2) {
  align-self: center;
}

.third-face .pip:nth-of-type(3) {
  align-self: flex-end;
}

.fourth-face, .sixth-face {
  display: flex;
  justify-content: space-between;
}

.fourth-face .column, .sixth-face .column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fifth-face {
  display: flex;
  justify-content: space-between;
}

.fifth-face .column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fifth-face .column:nth-of-type(2) {
  justify-content: center;
}

/* OTHER STYLES */

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

[class$="face"] {
  margin: 16px;
  padding: 4px;

  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;

  box-shadow:
    inset 0 5px white,
    inset 0 -5px #bbb,
    inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;

  border-radius: 10%;
}

.pip {
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;

  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
}


.holy-grail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

header,
footer {
  flex: 1;
}

.holy-grail-body {
  display: flex;
  flex: 1;
}

.holy-grail-content {
  flex: 1;
}

.holy-grail-nav, .holy-grail-ads {
  /* 两个边栏的宽度设为12em */
  flex: 0 0 12em;
}

.holy-grail-nav {
  /* 导航放到最左边 */
  order: -1;
}

@media (max-width: 768px) {
  .holy-grail-body {
    flex-direction: column;
    flex: 1;
  }
  .holy-grail-nav,
  .holy-grail-ads,
  .holy-grail-content {
    flex: auto;
  }
}
</style>
