import Vue from 'vue'
import Router from 'vue-router'
import HOME from '@/components/HOME/HOME.vue'
import Mall from '@/components/Mall/Mall.vue'
import DetilePage from '@/components/Mall/DetilePage.vue'
import Cart from '@/components/Cart/Cart.vue'
import Login from '@/components/Login/Login.vue'
import store from '@/store/vuex.store.js'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: HOME,
      beforeEnter(to,from ,next){
        document.documentElement.scrollTop=0
        next();
      }
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall
    },
    {
      path: '/detile',
      name: 'detile',
      component: DetilePage
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})

router.beforeResolve((to,from,next)=>{
  store.commit('changeIsLoad',true)
  next();
})

router.afterEach((to,from)=>{
  store.commit('changeIsLoad',false)
})

export default router

