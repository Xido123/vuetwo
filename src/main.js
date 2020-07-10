import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper)

import 'swiper/css/swiper.css'



new Vue({
  el:'#app',
  render:h=> h(App),
  router
})
