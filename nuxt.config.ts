import { defineNuxtConfig } from '@nuxt/bridge'
import head from './nuxt.config.head'
import { env } from './nuxt.config.env'

export default defineNuxtConfig({
  bridge: {
    capi: true,
    nitro: false,
    meta: true
  },

  env,

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    // css: false,
    // beforeEnter(el) {
    //   console.log('beforeEnter')
    // },
    // enter(el, done) {
    //   setTimeout(() => {
    //     console.log('enter')
    //     done()
    //   }, 1000)
    // },
    // leave(el, done) {
    //   setTimeout(() => {
    //     console.log('leave')
    //     done()
    //   }, 1000)
    // }
  },

  // runtimeConfig: {
  //   ...processEnv.privateRuntimeConfig,
  //   public: {
  //     ...processEnv.publicRuntimeConfig
  //   }
  // },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/window',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/style-resources'
  ],

  styleResources: {
    stylus: [
      '~/assets/css/style.styl'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // generate: {
  //   dir: ''
  // },

  router: {
    base: env.public.baseURL,
    extendRoutes(routes:any, resolve:any) {
      for (const route of routes) {
        route.alias = resolve(route.path, 'index.html')
      }
    }
  },
})

