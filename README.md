![avatar](/logo.png ':size=480')
# Vuex Helper
vuex 辅助工具模块
## 概述
> varsion：`v1.0.1`
<br>author：`cbtak` <cbtak@hotmail.com>
<br/>
  `Vuex` 模块化启用 `namespaced` 后, 模块访问方式有些不适应，不习惯用"/"方式表示模块对象层次，如：
  
```js
  $store.getters['context/userInfo']
  $store.dispatch('context/setUserInfo', user)
```
  使用 `VuexHelper` 将模块化后的 `vue.$store` 展开为对象属性方式访问，提供三个访问对象：`{ modules, getters, actions }`，将简化访问代码结构

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

  // 1. 使用 modules 访问 context 模块
  let userInfo = modules.context.getters.userInfo
  modules.context.actions.setUserInfo({name: 'cbtak'})

  // 2. 使用 getters/actions 访问 context 模块
  let userInfo = getters.context.userInfo
  actions.context.setUserInfo({name: 'cbtak'})
```
#### `## 注：未启用 namespaced 的模块会直接挂接在 getters、actions 及 modules.getters、modules.actions 的根级下，直接访问即可`

Powered by cbtak <cbtak@hotmail.com>
