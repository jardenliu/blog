import Vue from 'vue';
import App from 'components/pages/app'
import VueRouter from 'vue-router'
import Home from 'components/views/home'
import Article from 'components/views/article'
import Tag from 'components/views/tag'
import Category from 'components/views/category'
import About from 'components/views/about'


Vue.use(VueRouter);

let tag = [
  {
    name: 'tag',
    path: '/tag/:name',
    component: Tag
  },
  {
    name: 'allTags',
    path: '/tag',
    component: Category
  }
]

let category = [
  {
    name: 'category',
    path: '/category/:name',
    component: Category
  },
  {
    name: 'allCategories',
    path: '/category',
    component: Category
  }
]

let article = [
  {
    name: 'article',
    path: '/article/:name',
    component: Article
  },
  {
    name: 'allArticles',
    path: '/article',
    component: Article
  }
]


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
        ...tag,
        ...category,
        ...article,
        {
          name: 'about',
          path: '/about',
          component: About
        },
        {
          name: 'home',
          path: '/home',
          component: Home
        }
      ]
    }]
});

export default router;
