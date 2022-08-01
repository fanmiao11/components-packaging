import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mui from '@/components/index'
Vue.use(mui)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
