import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalSettings: { //项目的全局设置信息
      apiUrl: 'http://wyyapi.applinzi.com'    //初始默认值
    }
  },
  mutations: {

  },
  actions: {

  }
})
