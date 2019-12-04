import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import sliderPath from './sliderPath'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        name: '系统首页',
        icon: 'el-icon-s-home'
      },
      component: home,
      children: sliderPath
    }

  ]
})
