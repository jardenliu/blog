import Vue from 'vue';
import App from 'components/pages/app'
import VueRouter from 'vue-router'
import Home from 'components/views/home'
import Article from 'components/views/article'

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
          name: 'home',
          path: '/home',
          component: Home
        },
        {
          name: 'article',
          path: '/article/:name',
          component: Article
        }
      ]
    }]
});

export default router;
