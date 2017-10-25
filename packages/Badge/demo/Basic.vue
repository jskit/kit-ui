<template>
  <Page class="page-badge">
    <div class="page-header">
      <h3>徽章 <small>badge</small></h3>
    </div>
    <Group padded>
      <h4>默认</h4>
      <KitBadge status="todo" text="1" />
      <KitBadge status="doing" text="2" />
      <KitBadge status="done" text="3" />
      <br>
      <KitBadge text="12" />
      <KitBadge color="#87d068" text="123" :max="99" />
      <KitBadge status="done" text="1201" :max="999" :style="{borderRadius: '2px'}" />
      <KitBadge status="todo" text="..." />
      <KitBadge status="doing" text="券" shape="radius" />
      <br>
      <KitBadge text="5" :style="{backgroundColor: '#fff', color: '#999999', border: '1px solid #d9d9d9'}" />
      <KitBadge style="color: red; background: #fff; border: 1px solid #d9d9d9;" text="自动缴费" />
      <KitBadge status="done" :style="{backgroundColor: '#fff', color: '#f19736', border: '1px solid #f19736', borderRadius: '2px'}" text="自动缴费" />
      <br>
      <KitBadge color="blue" text="自定义背景色" />
      <KitBadge textColor="yellow" text="自定义颜色" />
      <br>
      <h4>特定状态类型，未完成</h4>
      <KitBadge status="success" />
      <KitBadge status="error" />
      <KitBadge status="default" />
      <KitBadge status="processing" />
      <KitBadge status="warning" />
      <h4>特定形状</h4>
      <KitBadge status="done" shape="dot" />
      <KitBadge status="todo" shape="square" text="1" />
      <KitBadge status="doing" shape="radius" text="2" />
      <KitBadge status="done" shape="circle" text="3" />
      <KitBadge dot />
      <h4>Size 尺寸大小？</h4>
      <p>这个暂时无必要</p>
    </Group>
    <div class="group">
      <div class="group-header">未读数红点跟在主题信息后，统一在列表左侧</div>
      <div class="list">
        <KitCell title="社交中的群消息通知" desc="当用户只需知道大致有内容更新时，应该使用红点型">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <KitBadge slot="badge" v-show="isShow" text="3" dot />
          <span><KitSwitch v-model="isShow"></KitSwitch></span>
        </KitCell>
        <KitCell title="社交中的一对一的消息通知" desc="当用户有必要知晓每条更新时，应该使用数字型">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <KitBadge slot="badge" text="6" />
          <KitBadge text="NEW" />
        </KitCell>
        <KitCell title="超出99" desc="数字显示可以设定上限 max，默认99">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <KitBadge slot="badge" text="100" :max="99" />
          <span>加减操作</span>
        </KitCell>
      </div>
    </div>
    <div class="group">
      <div class="group-header">新消息提示跟摘要信息后，统一在列表右侧</div>
      <div class="list">
        <KitCell title="单行列表">
          <span>有新消息</span>
          <KitBadge dot />
        </KitCell>
        <KitCell title="我的订单">
          <span>未评价</span>
          <KitBadge status="doing" size="small" text="NEW" />
        </KitCell>

        <!-- 不建议 badge 放左侧
        <KitCell>
          <div slot="title"><span class="text">未读消息</span>  <Badge bg="red">10 /0</div>
        </KitCell> -->
      </div>
    </div>
  </Page>
</template>

<script>
// TODO: 貌似 99+ 中的 + 号有点未垂直居中
import Badge from '../../Badge'
import Cell from '../../Cell'
import Switch from '../../Switch'
export default {
  components: {
    [Badge.name]: Badge,
    [Cell.name]: Cell,
    [Switch.name]: Switch,
  },
  data() {
    return {
      isShow: true,
    }
  },
  computed: {},
  ready() {
    console.log(111)
  },
  attached() {},
  methods: {},
}
</script>

<style scope>
.page-badge .badge{
  margin-right: 8px;
}
</style>
