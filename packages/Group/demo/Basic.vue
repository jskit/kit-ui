<template>
  <Page>
    <div class="page-header">
      <h3>组别 <small>Group</small></h3>
    </div>
    <Group title="组别1：容器" padded>
      默认提供为普通内容容器效果
    </Group>
    <Group title="组别2：列表" type="list">
      <Cell title="列表项"></Cell>
      <Cell title="列表项"></Cell>
      <Cell title="列表项"></Cell>
    </Group>
    <Group type="index">
      <div slot="header" class="group-header">组别3：索引列表 未完成</div>
      <div slot="footer"># A-G H-Z</div>
      <Group title="A-G">
        <Cell title="apple">🍎</Cell>
        <Cell title="banana">🍌</Cell>
        <Cell title="cherry">🍒</Cell>
        <Cell title="grape">🍇</Cell>
        <Cell title="green apple">🍏</Cell>
      </Group>
      <Group title="H-Z">
        <Cell title="hami melon">🍈</Cell>
        <Cell title="lemon">🍋</Cell>
        <Cell title="orange">🍊</Cell>
        <Cell title="peach">🍑</Cell>
        <Cell title="pear">🍐</Cell>
        <Cell title="pineapple">🍍</Cell>
        <Cell title="strawberry">🍓</Cell>
        <Cell title="watermelon">🍉</Cell>
      </Group>
    </Group>
  </Page>
</template>
