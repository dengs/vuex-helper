const order = {
  namespaced: true, // 启用模块命名空间

  state: {
    orderList: []
  },

  getters: {
    orderList: state => state.orderList
  },

  mutations: {
    SET_ORDER_LIST: (state, orderList) => {
      state.orderList = orderList
    }
  },

  actions: {
    setOrderList: ({ commit }, orderList) => {
      commit('SET_ORDER_LIST', orderList)
    }
  }
}

export default order
