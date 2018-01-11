import Vue from 'vue'
import Router from 'vue-router'
import HOME from '@/components/HOME/HOME.vue'
import Mall from '@/components/Mall/Mall.vue'
import DetilePage from '@/components/Mall/DetilePage.vue'
import Cart from '@/components/Cart/Cart.vue'
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

