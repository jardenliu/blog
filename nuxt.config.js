const pkg = require('./package')
const yaml = require('js-yaml');
const fs = require('fs');

const config = yaml.safeLoad(fs.readFileSync('./config//config.yml', 'utf8'));

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: config.name || pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: config.description || pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/filters.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  srcDir: 'src/',

  buildDir: process.env.NODE_ENV === 'production' ? 'output' : '.nuxt',

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.yml$/,
        use: ['yml-loader']
      })
    }
  }
}
