import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'             //引入axios
// import VueAxios from 'vue-axios';
import bus from "./utils/bus";

import './assets/icons' // icon


Vue.prototype.$axios = axios;
Vue.prototype.$bus = bus;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/***重写element-ui $message 解决消息多次弹出的问题**/
// import { message } from './utils/message'
Vue.use(ElementUI)
// Vue.prototype.$message = message


import jsPlumb from 'jsplumb'
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb



Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
