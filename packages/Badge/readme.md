# 文档

图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

## 规则

- 当用户有必要知晓每条更新时，应该使用数字型，eg：社交中的一对一的消息通知。
- 当用户只需知道大致有内容更新时，应该使用红点型，eg：社交中的群消息通知。

### 需求描述

- text 支持内容自定义（数字、文本内容，如 99、NEW、自动缴费）
- :style 支持自定义样式，背景颜色、字体颜色、边框、圆角等
- :max 支持设定数字上限max，超过上限显示 ${max}+或...
- 支持跳转，可设定链接类型(用 a 标签进行包裹即可)
- TODO: 有限支持标签类型，样式定制，固定用法，如营销标签 券（满xx减x）、赠、促销、hot等
- TODO: status 支持状态类型表示，如 'success'、'processing'、'default'、'error'、'warning'
- TODO: 支持数字变化时的切换动画

## API ( 适用平台：WEB、APP )

| 参数        | 说明           | 类型 可选值      | 默认值       |
|------------|----------------|--------------------|--------------|
| size       | 大小              |  String 'small' / 'large'    |   `small`       |
| text       | 展示的数字或文案，当为数字时候，大于 max 时显示为 ${max}+，为 0 时隐藏     |   String`|`Number   |   -  |
| corner   | 置于角落   |   Boolean    |  false  |
| status   | 设置 Badge 为状态点 |   String 'success'、'processing'、'default'、'error'、'warning'    |  ''  |
| dot   | 不展示数字，只有一个小红点   |   Boolean    |  false  |
| max   | 展示封顶的数字值   | Number | 99 |
| //hot ( `WEB only` )      | 营销样式  | Boolean | false |
