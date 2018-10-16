import Vue from 'vue'
import "babel-polyfill"
import router from './router'
import store from './store'
import 'reset-css'

import './styles/app.scss'

new Vue({
  router,
  store
}).$mount('#app')
