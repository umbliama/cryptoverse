import colors from 'vuetify/es5/util/colors'  
import webpack from 'webpack';


export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - cryptoverse',
    title: 'cryptoverse',
    htmlAttrs: {
      lang: 'en'
    },
    script:[
      {src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js",body:true},
      {src:"https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.4/vendors/scrolloverflow.min.js",body:true},
      {src:"https://unpkg.com/fullpage.js/dist/fullpage.min.js",body:true},
    ],  
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  plugins: [{
    src: '~/plugins/vmodal.js',
    src: '~/plugins/modal.js',
  }],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/fullpage.min.css",
    "~/assets/modal.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // plugins: ['~/assets/scrolloverflow.min.js'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//     // Simple usage
//     'nuxt-fullpage.js',
 
//     // With options
//     ['nuxt-fullpage.js', { /* module options */ }],
//  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.plugins.push(new webpack.ProvidePlugin({
          THREE: 'three'
      }));
    }
  }
}
