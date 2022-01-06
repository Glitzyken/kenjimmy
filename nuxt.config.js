import { createSEOMeta } from './utils/seo';

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Kenneth Jimmy. Full-stack developer',
    meta: [
      ...createSEOMeta({
        title: 'Kenneth Jimmy. Full-stack developer',
        intro:
          'I am a software developer in Lagos Nigeria. I build anything with javascript - from mobile to web app. Feel free to say hi.',
        image: '~/assets/images/kenjimmydotmepic.png',
        url: process.env.HOST_NAME
      }),
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap',
        rel: 'stylesheet'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/prismjs@1.20.0/themes/prism-tomorrow.css'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#607393',
    failedColor: '#e45447',
    height: '5px',
    duration: 5000
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~plugins/vue-scrollmagic.js',
      ssr: false
    }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/markdownit',
      { html: true, injected: true, use: ['markdown-it-prism'] }
    ],
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: 'memory'
      }
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['gsap'],
    loaders: {
      sass: {
        implementation: require('sass')
      },
      scss: {
        implementation: require('sass')
      }
    }
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  purgeCSS: {
    whitelist: ['dark-mode']
  }
};
