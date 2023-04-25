import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    // '@nuxt/image-edge',
  ],
  experimental: {
    reactivityTransform: true,
  },
  unocss: {
    preflight: true,
  },
  i18n: {
    // vueI18n: '/i18n.config.ts',
    vueI18n: {
      legacy: false,
      locale: 'fr',
    },
    langDir: 'locales',
    lazy: true,
    locales: [
      { code: 'fr', iso: 'fr-DZ', file: 'fr.yml' },
      { code: 'en', iso: 'en-DZ', file: 'en.yml' },
    ],
    defaultLocale: 'fr',
  },
})
