import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _31070176 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _7b3d6925 = () => interopDefault(import('../pages/category.vue' /* webpackChunkName: "pages/category" */))
const _72b9e17a = () => interopDefault(import('../pages/tag.vue' /* webpackChunkName: "pages/tag" */))
const _6519cffa = () => interopDefault(import('../pages/article/_name.vue' /* webpackChunkName: "pages/article/_name" */))
const _50bedc3b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _31070176,
      name: "about"
    }, {
      path: "/category",
      component: _7b3d6925,
      name: "category"
    }, {
      path: "/tag",
      component: _72b9e17a,
      name: "tag"
    }, {
      path: "/article/:name?",
      component: _6519cffa,
      name: "article-name"
    }, {
      path: "/",
      component: _50bedc3b,
      name: "index"
    }],

    fallback: false
  })
}