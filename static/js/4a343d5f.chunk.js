(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{1095:function(n,o){n.exports="Portal 入口\n===\n\n[`Portals`](https://reactjs.org/docs/portals.html#event-bubbling-through-portals) 是 react 16 提供的官方解决方案，使得组件可以脱离父组件层级挂载在 DOM 树的任何位置，我们利用这个方法，可将模态对话框生成到根节点的外面。 \n\n\n```jsx\nimport { Portal } from 'uiw';\n```\n\n### 基本使用\n\n```jsx\nimport { Portal } from 'uiw';\n\nconst Demo = () => {\n  return (\n    <Portal className=\"name\">\n      容器内显示内容\n    </Portal>\n  )\n}\n```\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| className | 指定样式名 | string | - |\n| container | 指定容器节点生成，服务端渲染默认为 `null` | any | `document.body` |\n| onChildrenMount | 渲染后的回调函数 | () => void | - |"}}]);