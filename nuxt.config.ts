import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@sidebase/nuxt-session',
    '@vee-validate/nuxt',
    'nuxt-vuefire',
    // '@tailvue/nuxt',
    // 'vue-recaptcha/nuxt',
    // '@vueuse/motion/nuxt',
    // '@nuxt/image-edge',
  ],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucket: process.env.FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
      appId: process.env.FIREBASE_APPID,
      measurementId: process.env.FIREBASE_MEASUREMENTID,
    },
    appCheck: {
      debug: process.env.NODE_ENV !== 'production',
      isTokenAutoRefreshEnabled: true,
      provider: 'ReCaptchaV3',
      key: process.env.RECAPTCHER_SITEKEY || '',
    },
  },
  unocss: {
    preflight: true,
  },
  i18n: {
    vueI18n: '/i18n.config.ts',
    langDir: 'locales',
    compilation: {
      // jit: false,
      strictMessage: false,
      // escapeHtml: true,
    },
    lazy: true,
    locales: [
      { code: 'fr', iso: 'fr-DZ', file: 'fr.yml', name: 'Français' },
      // { code: 'en', iso: 'en-DZ', file: 'en.yml', name: 'English' },
      { code: 'ar', iso: 'ar-DZ', file: 'ar.yml', name: 'العربية', dir: 'rtl' },
    ],
    defaultLocale: 'fr',
  },
})
