import Vue from 'vue'
import Router from 'vue-router'
import HOME from '@/components/HOME/HOME.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: HOME
    }
  ]
})
