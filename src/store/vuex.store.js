import Vue from 'vue'
import Vuex from 'vuex'
import isLoad from '@/store/isLoad.store.js'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules:{
    isLoad:isLoad
  }
})

export default store