实现方便快捷的 Icon 图标方案

暂时使用 iconfont 字体实现，为什么？ `kit-icon` svg 库还没准备好，很多经典图标还没收纳，自定义方案还没给出

## 规则

- 提供系统级常用图标，共如下几类
  - 操作反馈提示
    - question 疑问
    - pause 暂停
    - info 信息
    - warning 感叹号、警告
    - plus 加
    - minus 减
    - check 选择 正确 or 成功
    - cross 关闭 错误 or 失败
    - clock 倒计时 时间
  - 常见标识
    - loading 加载中
- 项目级自己项目内维护，亦作为公共图标
- 页面级不作要求（临时图标，甚至可使用图片等，生命周期简单或过于复杂的图片，不作为 icon 考量）

## 优先级

### 首选

Icon 图标的实现，首选纯 css实现，精简小巧无依赖；

### 其次

其次选择 svg 渲染，可实现按需加载，并且非常容易编辑修改替换管理，资源内打包，不存在下载紫婷等待网络请求问题；

参考

- SVG 图标 (参考：[为什么使用 svg 替换 iconfont](https://github.com/ant-design/ant-design-mobile/wiki/Why-use-svg-icon))

### 再其次

再其次选择使用图标字体，如：iconfont，管理方便。

采用连体字符，参见 [维基百科 - 合字](https://zh.wikipedia.org/wiki/合字)

*请根据兼容性需要选择字体文件（>=1）*

```css
fonts/iconfont.ttf
fonts/iconfont.woff
fonts/iconfont.svg
fonts/iconfont.eot
```

## 用法

``` vue
<!-- 使用 value -->
<Icon mode="svg" type="info-circle"></Icon>
<Icon mode="font" type="cross"></Icon>

<!-- 或直接使用 slot -->
<IconCustom>custom icon</IconCustom>
```

### 编辑

目前无论是 IconSvg 还是 IconFont 都在[iconfont](http://www.iconfont.cn/)平台管理维护。

1. 打开 [iconfont](http://www.iconfont.cn/)
1. 导入 SVG 字体文件
1. ...

### 存在问题

可以固化部分常用图标，可以采用 svg inline 实现在组件样式中
