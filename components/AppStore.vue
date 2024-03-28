<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <section
    class="relative isolate mx-6 mb-8 mt-10 rounded-10 from-[#3E6B92] via-[#053B67] to-[#193B64] to-60% via-30% bg-gradient-to-r p-8 pt-10 lg:mx-0 lg:mb-0 lg:rounded-0 lg:p-0 lg:pt-28 lg:pt-32"
  >
    <div class="absolute inset-0 z--1">
      <img class="object-fit h-full w-full" src="/appstore-pattern.png" alt="">
    </div>
    <div class="grid grid-cols-[auto_1fr] grid-rows-[min-content_1fr] mx-auto gap-x-4 container">
      <div class="col-span-2 max-w-190 pb-3 lg:col-span-1">
        <h2 class="text-lg text-white font-bold lg:text-12/15" v-html="t('title')" />
        <p class="mx-auto mt-3 text-xs text-white lg:mt-9 lg:text-2xl" v-html="t('subtitle')" />
      </div>

      <div class="order-last col-span-2 mt-8 hidden lg:order-none lg:col-span-1 lg:row-span-2 lg:ms-auto lg:block">
        <img src="/store-side.png" alt="phone" class="mx-auto h-full object-cover">
      </div>

      <div class="col-span-2 mt-3 lg:col-span-1 lg:w-max">
        <div class="border border-[#9DB2D4] rounded-2xl px-4 py-4 lg:mt-17 lg:rounded-3xl lg:px-8 lg:py-4">
          <p class="text-xs text-white lg:text-lg">
            L’application est
          </p>

          <div class="mt-4 flex gap-x-2 lg:mt-6 lg:gap-x-6">
            <img src="/appstore.png" alt="appstore" class="min-w-0">
            <img src="/playstore.png" alt="playstore" class="min-w-0">
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
