import nothing from '@cbtak/nothing'

function VuexHelper (store) {
  /**
   * Init
   */
  let _init = () => {
    nothing.defineGetter(this, '_store', store)
    nothing.defineGetter(this, '_storeGetters', store.getters)
    nothing.defineGetter(this, '_storeActions', store._actions)
    this.modules = (args) => nothing.isNotNull(args) ? JSON.getAttribute(this.modules, args.replaceAll('/', '.')) : this.modules
    this.getters = (args) => nothing.isNotNull(args) ? JSON.getAttribute(this.getters, args.replaceAll('/', '.')) : this.getters
    this.actions = (args) => nothing.isNotNull(args) ? JSON.getAttribute(this.actions, args.replaceAll('/', '.')) : this.actions
    nothing.defineGetter(VuexHelper, '_instance', this)
    Object.assign(this.modules, {getters: {}, actions: {}})
  }
  /**
   * Generate Getters
   */
  let _generateGetters = () => {
    const gettersKeys = Object.keys(this._storeGetters)
    gettersKeys.forEach(item => {
      if (item.contains('/')) {
        let {modules: _module, getters: _getters} = this
        let moduleKeys = item.split('/')
        moduleKeys.forEach((key, index) => {
          if (index === moduleKeys.length - 1) {
            _module = _module.getters = _module.getters || {}
            _module.__defineGetter__(key, () => this._storeGetters[item])
            _getters.__defineGetter__(key, () => this._storeGetters[item])
          } else {
            if (!nothing.hasOwnProperty(_module, key)) _module[key] = {}
            if (!nothing.hasOwnProperty(_getters, key)) _getters[key] = {}
            _module = _module[key]
            _getters = _getters[key]
          }
        })
      } else {
        this.modules.getters.__defineGetter__(item, () => this._storeGetters[item])
        this.getters.__defineGetter__(item, () => this._storeGetters[item])
      }
    })
  }
  /**
   * Generate Actions
   */
  let _generateActions = () => {
    const actionsKeys = Object.keys(this._storeActions)
    actionsKeys.forEach(item => {
      if (item.contains('/')) {
        let {modules: module, actions} = this
        let moduleKeys = item.split('/')
        moduleKeys.forEach((key, index) => {
          if (index === moduleKeys.length - 1) {
            module = module.actions = module.actions || {}
            module.__defineGetter__(key, () => this._storeActions[item][0])
            actions.__defineGetter__(key, () => this._storeActions[item][0])
          } else {
            if (!nothing.hasOwnProperty(module, key)) {
              module[key] = {}
            }
            if (!nothing.hasOwnProperty(actions, key)) {
              actions[key] = {}
            }
            module = module[key]
            actions = actions[key]
          }
        })
      } else {
        this.modules.actions.__defineGetter__(item, () => this._storeActions[item][0])
        this.actions.__defineGetter__(item, () => this._storeActions[item][0])
      }
    })
  }
  (() => {
    _init()
    _generateGetters()
    _generateActions()
  }) ()
}

export default VuexHelper
