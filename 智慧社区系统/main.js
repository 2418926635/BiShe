import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)


// 请求方法
import urls from './api/request.js'
Vue.prototype.Urls = urls
import request from './api/api.js'
Vue.prototype.Request = request

import alertobj from './utils/alertfun.js'
Vue.prototype.alertobj = alertobj



Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif