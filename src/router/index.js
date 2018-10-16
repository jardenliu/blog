import Vue from 'vue';
import App from 'components/pages/app'
import VueRouter from 'vue-router'
import Home from 'components/views/home'

Vue.use(VueRouter);

let router = new VueRouter({
  // mode: "abstract",
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      component: App,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home
        }
      ]
    }]
});

export default router;
