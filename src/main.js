
import Vue from 'vue'
import App from './App'
import store from './store/vuex.store.js'
import router from './router'
import Vuex from 'vuex'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import 'iview/dist/styles/iview.css';
import './css/animate.css'

Vue.use(YDUI);


Vue.config.productionTip = false
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading,
};

new Vue({
  el: '#app',
  router,
  Vuex,
  store,
  template: '<App/>',
  components: { App }
})


