import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VuexHelper from '@cbtak/vuex-helper'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  mounted () {
    // 将 VuexHelper 实例挂载到全局 Vue 实例上
    this.__defineGetter__('$storeHelper', () => new VuexHelper(this.$store))
    window.app = this
  },
}).$mount('#app')
