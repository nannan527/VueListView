// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// ajax
import VueResource from 'vue-resource'

// 状态机
import store from './store'
// 组件
import App from './App'

import VueLazyload from 'vue-lazyload'

// 使用vue插件
Vue.use(VueResource)
Vue.use(VueLazyload, {
  loading: '/static/img/loading.gif'
})

// 绑定路由
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store: store
}).$mount('#app')
