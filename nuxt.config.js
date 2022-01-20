import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    target: 'static',
    titleTemplate: '%s - SAMPLE PROJECT',
    title: 'home',
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
          secondary: '#E53935',
          accent: '#eeeeee',
          info: '#efefef',
          warning: '#212121',
          error: '#121212',
          success: '#FFEBEE',
        }
      }
    }
  },

  build: {
  }
}
