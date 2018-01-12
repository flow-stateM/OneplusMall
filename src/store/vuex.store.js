import Vue from 'vue'
import Vuex from 'vuex'
import isLoad from '@/store/isLoad.store.js'
import detile from '@/store/detile.store.js'
import shoppingcart from '@/store/shoppingcart.store.js'
import login from '@/store/login.store.js'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules:{
    isLoad:isLoad,
    detile:detile,
    shoppingcart:shoppingcart,
    login:login
  }
})

export default store