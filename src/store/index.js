import Vue from 'vue'
import Vuex from 'vuex'
import header from './header'
/**
 * 使用vuex状态管理
 */
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        header
    },
    // 在非生产环境下，使用严格模式
    strict: process.env.NODE_ENV !== 'production'
})
