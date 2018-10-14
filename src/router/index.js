import Vue from 'vue';
import App from '../components/pages/app'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

let router = new VueRouter({
  // mode: "abstract",
  routes: [{
    path: '/',
    component: App
  }]
});

export default router;
