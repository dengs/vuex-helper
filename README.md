![avatar](/logo.png ':size=480')
# Vuex Helper
vuex 模块化后的辅助工具模块
## 概述
> varsion：`v1.0.1`
<br>author：`cbtak` <cbtak@hotmail.com>
<br>`Vuex` 模块化启用 `namespaced` 后, 模块访问方式有些不适应，不习惯用"/"方式表示模块对象层次，如：
```js
  $store.getters['context/userInfo']
  $store.dispatch('context/setUserInfo', user)
```
> 使用 `VuexHelper` 将模块化后的 `vue.$store` 展开为对象属性方式访问，提供三个属性对象：`{ modules, getters, actions }`，以简化获取getters/调用actions的代码结构

## 安装
> npm 安装：
```bash
npm install @cbtak/vuex-helper --save
```
> yarn 安装：
```bash
yarn add @cbtak/vuex-helper
```

## 使用说明

### 模块引入
```js
  // require 方式引入
  const VuexHelper = require('@cbtak/vuex-helper')
  // import 方式引入
  import VuexHelper from '@cbtak/vuex-helper'
```

### 调用示例
```js
  // VuexHelper 实例
  const vuexHelper = new VuexHelper(vue.$store)
  // 解构 modules, getters, actions
  const { modules, getters, actions } = vuexHelper

  // 1. 使用 modules 获取 context 模块
  let userInfo = modules.context.getters.userInfo
  modules.context.actions.setUserInfo({name: 'cbtak'})

  // 2. 使用 getters/actions 获取 context 模块
  let userInfo = getters.context.userInfo
  actions.context.setUserInfo({name: 'cbtak'})
```
#### `注：未启用 namespaced 的模块的 getters、actions 会直接挂载在 VuexHelper 实例的 getters、actions 及 modules.getters、modules.actions 属性的根级下，直接获取/调用即可，如：`
```js
  // VuexHelper 实例
  const vuexHelper = new VuexHelper(vue.$store)
  // vuexHelper.getters 上获取
  let orderList = vuexHelper.getters.orderList
  // vuexHelper.modules.getters 上获取
  let orderList = vuexHelper.modules.getters.orderList
  // vuexHelper.actions 上调用 action
  vuexHelper.actions.setOrderList([{order_id: '001'}, {order_id: '002'}])
  // vuexHelper.modules.actions 上调用 action
  vuexHelper.modules.actions.setOrderList([{order_id: '001'}, {order_id: '002'}])
```

Powered by cbtak <cbtak@hotmail.com>
