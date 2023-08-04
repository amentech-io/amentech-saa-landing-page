<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const features = [t('features.item1'), t('features.item2'), t('features.item3')]
</script>

<template>
  <div class="mx-auto mb-18 mt-7 w-full flex px-6 container lg:mb-29 lg:mt-32">
    <div class="absolute inset-0 -z-2">
      <img class="mx-auto mt-44 h-full w-full object-fill" src="/hero-bg.svg" alt="hero background">
    </div>
    <div v-motion-slide-left>
      <h1
        class="max-w-20ch text-8 font-bold leading-8 lg:text-22 lg:leading-24"
        v-html=" t('title')"
      />
      <p class="my-4 max-w-62ch text-3 leading-10.5 leading-4 lg:my-15 lg:text-6 lg:leading-7">
        {{ t('subtitle') }}
      </p>

      <ul class="flex gap-14">
        <li v-for="i, idx in features" :key="idx" class="flex items-center gap-2">
          <div
            class="inline-block rounded-full bg-[#1C57BC] from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-bl p-0.5 lg:p-2"
          >
            <UnoIcon i-ic-baseline-check class="h-2 w-2 text-white lg:h-6 lg:w-6" />
          </div>
          <span class="text-8px lg:text-lg"> {{ i }} </span>
        </li>
      </ul>

      <NuxtLink
        class="mt-4 inline-block rounded-5 from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-l px-10 py-2 font-semibold text-white transition lg:mt-15 lg:px-18 lg:py-5 lg:text-lg hover:opacity-90 hover:ring-4 hover:ring-white/50"
        to="contact"
      >
        {{ $t('contact-us') }}
      </NuxtLink>
      <p class="mt-3 text-5px tracking-wider lg:mt-8 lg:text-base lg:text-base">
        {{ t('app-is-ready') }}
      </p>
      <div class="lg:gape-3 mt-2 flex gap-1 lg:mt-4 lg:flex-row lg:gap-3">
        <img class="w-16 lg:w-48" src="/playstore.svg" alt="playstore">
        <img class="w-16 lg:w-48" src="/appstore.svg" alt="appstore">
      </div>
    </div>
    <div v-motion-pop class="my-a hidden lg:block">
      <img src="/hero.png" alt="amentech app">
    </div>
  </div>
</template>

<style>
.underline-gradient {
  position: relative;
  background: linear-gradient(90deg, #1C57BC 0%, #9D5CA2 47.76%, rgba(252, 81, 133, 0.94) 98.04%);
  background-clip: text;
  color: transparent;
}

.underline-gradient::before {
  content: "";
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  height: 5px;
  border-radius: 2px;
  background: linear-gradient(90deg, #1C57BC 0%, #9D5CA2 47.76%, rgba(252, 81, 133, 0.94) 98.04%);
}
</style>

<i18n lang="yaml">
fr:
  title: L'assurance auto est devenue <span class="underline-gradient">intelligente</span>
  subtitle: Des contrats clairs, des remboursements 2x plus rapides, un modèle 100% digital et transparent. Comme ça, vous gagnez du temps, et de l'argent.
  app-is-ready: L’application est disponible sur
  features:
    item1: 100% mobile et flexible
    item2: 0% prise de tête
    item3: au juste prix
</i18n>
