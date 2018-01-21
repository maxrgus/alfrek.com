module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'alfrek.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Front end application for Alfrek.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Didact+Gothic|Open+Sans:300,400,600"}
    ]
  },
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.css',
    '@/node_modules/font-awesome/css/font-awesome.css',
    '@/assets/sass/app.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#891C53' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
