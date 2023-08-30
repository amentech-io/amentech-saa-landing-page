<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <section
    class="relative z--10 pt-30 lg:pt-62"
  >
    <div class="grid grid-cols-[auto_1fr] grid-rows-[min-content_1fr] mx-auto px-6 container">
      <div class="col-span-2 max-w-190 pb-3 lg:col-span-1">
        <h2 class="text-lg font-bold lg:text-5xl" v-html="t('title')" />
        <p class="mx-auto mt-3 text-xs font-medium lg:mt-9 lg:text-2xl" v-html="t('subtitle')" />
      </div>

      <div class="order-last lg:order-none lg:row-span-2">
        <img src="/store-side.png" alt="phone" class="mx-auto">
      </div>

      <div class="mt-3 flex flex-col justify-end">
        <p class="text-xs">
          L’application est
        </p>

        <div class="mt-6 max-w-2/3 flex flex-col gap-x-6 gap-y-4 lg:flex-row">
          <img src="/appstore.png" alt="appstore">
          <img src="/playstore.png" alt="playstore">
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
fr:
  title: Offrez-vous la meilleure protection pour rouler en toute sérénité
  subtitle: Bénéficiez de tous les avantages d'une assurance automobile complète, mais avec plus de contrôle.
</i18n>
