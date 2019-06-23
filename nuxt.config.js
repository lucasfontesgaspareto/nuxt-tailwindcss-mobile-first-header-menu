const router = {}

if (process.env.NODE_ENV === 'gh-pages') {
  router.base = '/nuxt-tailwindcss-mobile-first-header-menu/'
}

module.exports = {

  lang: "pt-BR",

  head: {
    title: 'Landing Page #1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/font-awesome'
  ],

  plugins: [
    '@/plugins/components'
  ],

  router: router
}
