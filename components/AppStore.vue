<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <section
    class="relative isolate mt-10 from-[#3E6B92] via-[#053B67] to-[#193B64] to-60% via-30% pt-10 lg:bg-gradient-to-r lg:pt-28 lg:pt-32"
  >
    <div class="absolute inset-0 z--1">
      <img class="object-fit hidden h-full w-full lg:block" src="/appstore-pattern.png" alt="">
    </div>
    <div class="grid grid-cols-[auto_1fr] grid-rows-[min-content_1fr] mx-auto gap-x-4 container">
      <div class="col-span-2 max-w-190 px-6 pb-3 lg:col-span-1">
        <h2 class="text-center text-lg text-[#0A163B] font-bold lg:text-start lg:text-12/15 lg:text-white" v-html="t('title')" />
        <p class="mx-auto mt-3 text-center text-xs text-[#0A163B] lg:mt-9 lg:text-start lg:text-2xl lg:text-white" v-html="t('subtitle')" />
      </div>

      <div class="order-last col-span-2 mt-8 lg:order-none lg:row-span-2 lg:ms-auto">
        <!-- <img src="/store-side.png" alt="phone" class="mx-auto h-full object-cover"> -->
        <img src="/store-side-mobile.png" alt="phone" class="mx-auto h-full w-full object-cover">
      </div>

      <div class="mt-3 hidden w-max lg:block">
        <div class="border border-[#9DB2D4] rounded-3xl px-8 py-4 lg:mt-17">
          <p class="text-xs text-white lg:text-lg">
            L’application est
          </p>

          <div class="mt-6 max-w-2/3 flex flex-col gap-x-6 gap-y-4 lg:flex-row">
            <img src="/appstore.png" alt="appstore">
            <img src="/playstore.png" alt="playstore">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
fr:
  title: Offrez-vous la meilleure protection pour rouler en toute sérénité
  subtitle: Bénéficiez de tous les avantages d'une assurance automobile complète, mais avec plus de contrôle.

ar:
  title: امنح نفسك أفضل حماية للركوب بثقة
  subtitle: احصل على جميع مزايا التأمين الشامل على السيارات، ولكن بمزيد من التحكم.
</i18n>
