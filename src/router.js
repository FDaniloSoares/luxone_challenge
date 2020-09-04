import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Result from './components/Result'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  
  routes: [{
    name: 'home',
    path: '/',
    component: Home
  }, {
    name: 'result',
    path: '/result',
    component: Result,
  }]  
})

export default router;
