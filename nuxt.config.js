export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['@/node_modules/reset-css/reset.css', '@/assets/styles/main.less', '@mdi/font/css/materialdesignicons.css'],
  plugins: ['@/plugins/setup'],
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', file: 'en.json', iso: 'en-EN', name: 'English' },
          { code: 'de', file: 'de.json', iso: 'de', name: 'Deutsch' },
          { code: 'ru', file: 'ru.json', iso: 'ru', name: 'Русский' },
          { code: 'ua', file: 'ua.json', iso: 'ua', name: 'Українська' }
        ],
        defaultLocale: 'en',
        langDir: 'i18n/',
        lazy: true,
        vueI18n: {
          fallbackLocale: 'en'
        },
        seo: true,
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: false
        }
      }
    ]
  ],
  axios: {},
  build: {
    extend(config) {
      config.module.rules.push({
        test: /.vue/,
        loader: 'vue-svg-inline-loader'
      });
    }
  }
};
