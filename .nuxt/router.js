import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b5dcba1a = () => interopDefault(import('../pages/course/index.vue' /* webpackChunkName: "pages/course/index" */))
const _05a5fc3b = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _7df7b5ba = () => interopDefault(import('../pages/signin/index.vue' /* webpackChunkName: "pages/signin/index" */))
const _592e274c = () => interopDefault(import('../pages/user/courses/index.vue' /* webpackChunkName: "pages/user/courses/index" */))
const _0e81c61b = () => interopDefault(import('../pages/course/_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _484da18b = () => interopDefault(import('../pages/course/_name.vue' /* webpackChunkName: "pages/course/_name" */))
const _7664238d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _b5dcba1a,
    name: "course"
  }, {
    path: "/register",
    component: _05a5fc3b,
    name: "register"
  }, {
    path: "/signin",
    component: _7df7b5ba,
    name: "signin"
  }, {
    path: "/user/courses",
    component: _592e274c,
    name: "user-courses"
  }, {
    path: "/course/:id",
    component: _0e81c61b,
    name: "course-id"
  }, {
    path: "/course/:name",
    component: _484da18b,
    name: "course-name"
  }, {
    path: "/",
    component: _7664238d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
