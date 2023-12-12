import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@sidebase/nuxt-session',
    '@vee-validate/nuxt',
    // '@tailvue/nuxt',
    // 'vue-recaptcha/nuxt',
    // '@vueuse/motion/nuxt',
    // '@nuxt/image-edge',
  ],
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
