import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'
import './plugins/iview.js'

Vue.config.productionTip = false

/**
 * @description 全局变量注册
 */
Vue.prototype.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
