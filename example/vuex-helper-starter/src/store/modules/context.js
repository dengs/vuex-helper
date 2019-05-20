import member from './member'

const context = {
  namespaced: true, // 启用模块命名空间

  state: {
    loginInfo: {
      user: {name: 'dengs'}
    },
    contextInfo: {
      info: {name: 'aaa'}
    }
  },

  getters: {
    loginInfo: state => state.loginInfo,
    loginUser: state => state.loginInfo.user,
    contextInfo: state => state.contextInfo,
    contextInfoInfo: state => state.contextInfo.info
  },

  mutations: {
    SET_LOGIN_USER: (state, user) => {
      state.loginInfo = { user }
    }
  },

  actions: {
    setLoginUser: ({ commit }, user) => {
      commit('SET_LOGIN_USER', user)
    }
  },

  modules: {
    member
  }
}

export default context
