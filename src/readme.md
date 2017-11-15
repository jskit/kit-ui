`App` 是 H5App 的最顶层，是所有页面的入口，可以处理全局数据配置。

```js
// 辅助提供生命周期方法。
onLaunch(options) {
  // 启动初始化
},
onShow(options) {
  // 切换到前台
},
onHide() {
  // 切换到后台
},
onError(msg) {
  console.log(msg)
},
globalData: {
  foo: true,
}
```

**前台、后台定义：** 用户点击左上角关闭，或者按了设备 Home 键离开H5App时，H5App并不会直接销毁，而是进入了后台，当再次进入 H5App 或再次打开H5App时，又会从后台进入前台。

只有当H5App进入后台一定时间，或占用系统资源过高，才会被真正销毁。
