import Vue from 'vue'
import Vuex from 'vuex'
// 获取 modules 组件(状态)
import getProdListData from './modules/getProdListData'

Vue.use(Vuex)

// 组装store
export default new Vuex.Store({
    modules: {
        getProdListData
    }
})
