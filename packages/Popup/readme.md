- `popup` 默认从中间弹出
- 通过`position`属性设置 Popup 弹出位置

### 规则

使用规则，注意事项或建议事项等

## API

属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
v-model | 当前组件是否显示 | `Boolean` | `false`
overlay | 是否显示背景蒙层 | `Boolean` | `true`
lockOnScroll | 背景是否跟随滚动 | `Boolean` | `false`
position | Popup 位置 | `String` | - | `top` `bottom` `right` `left`
overlayClass | 自定义蒙层 class | `String` | ''
closeOnClickOverlay | 点击蒙层是否关闭 Popup | `Boolean` | `true`
transition | transition 名称 | `String` | `popup-slide`
preventScroll | 是否防止滚动穿透 | `Boolean` | `false`
