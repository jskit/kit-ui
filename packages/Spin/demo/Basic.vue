<template>
  <Page class="page-spin">
    <div class="page-header">
      <h3>加载中 <small>Spin</small></h3>
    </div>
    <Group padded>
      <KitSpin size="sm" style="margin-right: 10px;" />
      <KitSpin style="margin-right: 10px;" />
      <KitSpin size="lg" />
    </Group>
    <Group padded>
      <div class="example">
        <KitSpin />
      </div>
    </Group>
    <Group padded>
      <KitSpin tip="Loading...">
        <KitAlert
          message="Alert message title"
          desc="Further details about the context of this alert."
          type="info"
        />
      </KitSpin>
    </Group>
    <Group padded>
      <KitSpin tip="Loading..." :spinning="spinning">
        <KitAlert
          message="Alert message title"
          desc="Further details about the context of this alert."
          type="info"
        />
      </KitSpin>
      <div style="margin-top: 16px;">
        Loading State: <KitSwitch v-model="spinning"></KitSwitch>
      </div>
    </Group>
  </Page>
</template>

<script>
import Page from '../../Page'
import Group from '../../Group'
import Spin from '../../Spin'
import Switch from '../../Switch'
import Alert from '../../Alert'

export default {
  components: {
    [Page.name]: Page,
    [Group.name]: Group,
    [Spin.name]: Spin,
    [Alert.name]: Alert,
    [Switch.name]: Switch,
  },
  data() {
    return {
      spinning: false,
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
.page-spin .abc{
  margin-right: 0.5rem;
}
.example{
  text-align: center;
  background: rgba(0,0,0,0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
</style>
