import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Mall from '../components/Mall/Mall.vue'
import DetilePage from '../components/Mall/DetilePage.vue'
import Cart from '../components/Cart/Cart.vue'
import Login from '../components/Login/Login.vue'
import store from '../store/vuex.store.js'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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


export default router

