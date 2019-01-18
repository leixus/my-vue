import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Cube from 'cube-ui'
import ElementUI from 'element-ui'
import '@styleUrl/reset.css'
import '@styleUrl/border.css'
import '@styleUrl/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Cube)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
