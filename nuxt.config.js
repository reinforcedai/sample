import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  head: {
    titleTemplate: '%s - FRONTEND SAMPLE',
    title: 'Home',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    { src: "~/plugins/google-maps", ssr: true }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#FFFFFF',
          secondary: '#6200EA',
          accent: '#9C27B0',
          info: '#7E57C2',
          warning: '#280BD4',
          error: '#BA68C8',
          success: '#EDE7F6',
        }
      }
    }
  },

  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  }
}
