# 组件设计

一些约定

- full 是否通栏
- hidden 是否显示
- title 标题
- dot 是否小红点
- size 尺寸大小
- shape 形状
- hot 营销样式
- color 前景色
- bg 背景色
- text 文本
- content 内容(支持 html)
- duration 延时，单位秒
- mask 蒙层
- corner 角落
- mode 显示类型
- type 数据内容类型，如 icon，或 alert 等
- action 用于替换操作 icon 的文案
- percent 进度百分比
- thumb 缩略图
- position 位置 fixed normal
- arrow right,up,down,empty 箭头
- justify=start,end,center,between,around 主轴对齐方式
- align=start,center,end,stretch 交叉轴对齐方式
- wrap=nowrap,wrap,wrap-reverse是否换行
- direction=row,row-reverse,column,column-reverse 方向
- autoPlay
- onClose 关闭时回调函数
- onClick 点击回调
- disabled 禁用
- checked 选中
- min/max 最大最小值
- platform=ios,android 平台属性

## 结构

组件实现结构如下，支持独立引用组件（只引用单独的组件）

```bash
packages
├── xxx/          # 组件包（名字全部单数形式）
│   ├── demo/           # 使用示例(后期改为 md 格式，方便生成示例文档)
│   ├── src/            # 源码
│   ├── test/           # 测试用例
│   ├── index.js        # 出口
│   └── readme.md       # 文档说明
│
├── xxx...
│
└── index.js      # 向外引用，支持独立引用组件，内部解决依赖关系
```

## 关于样式

- 实现力求精简，精简到只保留 core 部分同样 OK
- core 部分实现，每一个属性的设置都要知道为什么
- core 实现力求最基本设置，如core是否该设置有圆角（不应该，否则需要重置，应结合全局 shape 组合样式来显示）
- 要求实现要一目了然，需要修改能一眼看出来该如何修改
- 只实现基本布局属性，不必提供大量主题样式，可以自己去扩展实现

## 关于命名

对于自定义标签的命名遵循 W3C 规则 (小写，并且包含一个短杠)，这被认为是最佳实践。

- 扩展名: Vue模块使用 .vue 扩展名。
- 文件名: 文件名使用帕斯卡命名。
  - 如, ItemList.vue。
- 引用命名: Vue模块名使用帕斯卡命名，实例使用骆驼式命名。
  - 如, const reservationItem = <ReservationCard />;
- 模块命名: 模块使用当前文件名一样的名称。Footer 文件夹，就应该包含命名为 Footer 的模块。但是，如果整个文件夹是一个模块，使用 index.js作为入口文件，然后直接文件夹名作为模块的名称。
  - import Footer from './Footer';

- 高阶模块命名: 对于生成一个新的模块，其中的模块名应该使用新模块的名称
- 属性命名: 避免使用DOM相关的属性来用作其他的用途。
  - 对于style 和 className这样的属性名，我们都会默认它们代表一些特殊的含义，如元素的样式，CSS class的名称。
- 单引号还是双引号？属性值总是使用双引号("), 其他均使用单引号(').
- Props 属性
  - 属性名使用骆驼式风格camelCase。
    - 如, userName="hello"
  - 如果属性值为 true, 可以直接省略
    - `<Foo hidden />`
  - 避免使用数组的index来作为属性key的值，推荐使用唯一ID
  - 对于所有非必须的属性，总是手动去定义 defaultProps 属性
- Tags 标签
  - 对于没有子元素的标签来说总是自己关闭标签
  - 如果模块有多行的属性，关闭标签时新建一行
- 使用箭头函数来获取本地变量 (item, index) => { return item.name }
- 不要给所谓的私有函数添加 _ 前缀，本质上它并不是私有的。

Alignment 代码对齐

```jsx
// good, 有多行属性的话, 新建一行关闭标签
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>
// 子元素按照常规方式缩进
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>
```
