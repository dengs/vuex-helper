import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import context from './modules/context'
import sale from './modules/sale'

Vue.use(Vuex)

const debug = process.env.NODE_ENV === 'development'

const store = new Vuex.Store({
  getters,
  mutations,
  actions,
  modules: {
    context,
    sale
  },
  strict: debug   // 开启严格模式
})

export default store
