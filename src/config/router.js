import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/content/Home'
import Result from '../components/content/Result'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'result',
    path: '/result',
    component: Result
}]

export default new VueRouter({
    mode: 'history',
    routes
})