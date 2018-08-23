import Vue from 'vue'
import VueRouter from 'vue-router'
import Bois from '@/views/Bois.vue'
import Api from '@/views/Api.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Bois },
    { path: '/api', component: Api }
  ]
})
