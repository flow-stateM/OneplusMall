import Vue from 'vue'
import Vuex from 'vuex'
import isLoad from './isLoad.store.js'
import detile from './detile.store.js'
import shoppingcart from './shoppingcart.store.js'
import login from './login.store.js'

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