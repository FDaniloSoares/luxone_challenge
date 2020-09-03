import '@fortawesome/fontawesome-free/css/all.css'

import Vue from 'vue'
import App from './App.vue'

import './config/msg'
import router from './router'
import store from './config/store'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
