const member = {
  namespaced: false, // 不启用模块命名空间

  state: {
    memberInfo: {name: '会员1'}
  },

  getters: {
    memberInfo: state => state.memberInfo
  },

  mutations: {
    SET_MEMBER: (state, member) => {
      state.memberInfo = member
    }
  },

  actions: {
    setMember: ({ commit }, member) => {
      commit('SET_MEMBER', member)
    }
  }
}

export default member
