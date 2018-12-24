import Vue from 'vue'
import router from './router'
import filters from 'src/filters';
import store from './store'
import 'reset-css'

import './styles/app.scss'

Vue.use(filters)

new Vue({
  router,
  store
}).$mount('#app')
