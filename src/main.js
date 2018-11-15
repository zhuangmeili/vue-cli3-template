import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//http
import http from './utils/http'
Vue.prototype.$http = http;


//使用element
Vue.use(ElementUI)
Vue.config.productionTip = false


//filtes
import * as filters from './utils/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
