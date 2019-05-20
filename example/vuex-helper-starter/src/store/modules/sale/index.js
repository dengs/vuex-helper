import order from './order'
import puOrder from './puOrder'
const sale = {
  namespaced: true, // 启用模块命名空间
  modules: {
    order,
    puOrder
  }
}

export default sale
