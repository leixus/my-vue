import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import '@styleUrl/reset.css'
import '@styleUrl/border.css'
import '@styleUrl/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
