<template>
  <Page class="page-abc">
    <h4>NoticeBar</h4>
    <div>
      <KitNoticeBar>
        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
      </KitNoticeBar>
    </div>
    <!-- <div>
      <KitNoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
      </KitNoticeBar>
    </div>
    <div>
      <KitNoticeBar mode="link" onClick={() => alert('1')}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
      </KitNoticeBar>
    </div>
    <div>
      <KitNoticeBar mode="closable" icon={null}>Remove the default icon.</KitNoticeBar>
    </div>
    <div>
      <KitNoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
      Customized icon.
      </KitNoticeBar>
    </div>
    <div>
      <KitNoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
      Closable demo for `actionText`.
      </KitNoticeBar>
    </div>
    <div>
      <KitNoticeBar mode="link" action={<span>去看看</span>}>
      Link demo for `actionText`.
      </KitNoticeBar>
    </div> -->
  </Page>
</template>

<script>
import NoticeBar from '../../NoticeBar'

export default {
  components: {
    [NoticeBar.name]: NoticeBar,
  },
  data() {
    return {
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
.abc-demo .abc{
  margin-right: 0.5rem;
}
</style>
