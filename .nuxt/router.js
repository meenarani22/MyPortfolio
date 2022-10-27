import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b19df158 = () => interopDefault(import('..\\pages\\index-new.vue' /* webpackChunkName: "pages/index-new" */))
const _8e7e9348 = () => interopDefault(import('..\\pages\\index-new-bg-image.vue' /* webpackChunkName: "pages/index-new-bg-image" */))
const _6e748a02 = () => interopDefault(import('..\\pages\\index-new-dark.vue' /* webpackChunkName: "pages/index-new-dark" */))
const _74169dde = () => interopDefault(import('..\\pages\\index-new-demo-2.vue' /* webpackChunkName: "pages/index-new-demo-2" */))
const _73fa6edc = () => interopDefault(import('..\\pages\\index-new-demo-3.vue' /* webpackChunkName: "pages/index-new-demo-3" */))
const _73de3fda = () => interopDefault(import('..\\pages\\index-new-demo-4.vue' /* webpackChunkName: "pages/index-new-demo-4" */))
const _73c210d8 = () => interopDefault(import('..\\pages\\index-new-demo-5.vue' /* webpackChunkName: "pages/index-new-demo-5" */))
const _73a5e1d6 = () => interopDefault(import('..\\pages\\index-new-demo-6.vue' /* webpackChunkName: "pages/index-new-demo-6" */))
const _7389b2d4 = () => interopDefault(import('..\\pages\\index-new-demo-7.vue' /* webpackChunkName: "pages/index-new-demo-7" */))
const _736d83d2 = () => interopDefault(import('..\\pages\\index-new-demo-8.vue' /* webpackChunkName: "pages/index-new-demo-8" */))
const _3c1aa701 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/index-new",
    component: _b19df158,
    name: "index-new"
  }, {
    path: "/index-new-bg-image",
    component: _8e7e9348,
    name: "index-new-bg-image"
  }, {
    path: "/index-new-dark",
    component: _6e748a02,
    name: "index-new-dark"
  }, {
    path: "/index-new-demo-2",
    component: _74169dde,
    name: "index-new-demo-2"
  }, {
    path: "/index-new-demo-3",
    component: _73fa6edc,
    name: "index-new-demo-3"
  }, {
    path: "/index-new-demo-4",
    component: _73de3fda,
    name: "index-new-demo-4"
  }, {
    path: "/index-new-demo-5",
    component: _73c210d8,
    name: "index-new-demo-5"
  }, {
    path: "/index-new-demo-6",
    component: _73a5e1d6,
    name: "index-new-demo-6"
  }, {
    path: "/index-new-demo-7",
    component: _7389b2d4,
    name: "index-new-demo-7"
  }, {
    path: "/index-new-demo-8",
    component: _736d83d2,
    name: "index-new-demo-8"
  }, {
    path: "/",
    component: _3c1aa701,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
