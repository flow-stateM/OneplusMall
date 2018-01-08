
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import '@/css/animate.css'

Vue.use(YDUI);


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  Vuex,
  template: '<App/>',
  components: { App }
})
