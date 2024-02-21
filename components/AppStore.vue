<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <section
    class="pt-28 lg:mb-10 lg:pt-62"
  >
    <div class="grid grid-cols-[auto_1fr] grid-rows-[min-content_1fr] mx-auto gap-x-4 container">
      <div class="col-span-2 max-w-190 pb-3 lg:col-span-1">
        <h2 class="text-lg text-[#193B64] font-bold lg:text-12.5/15" v-html="t('title')" />
        <p class="mx-auto mt-3 text-xs text-[#4A6387] lg:mt-9 lg:text-2xl" v-html="t('subtitle')" />
      </div>

      <div class="order-last hidden ps-8 lg:order-none lg:row-span-2 lg:ms-auto 2xl:block">
        <img src="/store-side.png" alt="phone" class="mx-auto h-full object-cover rtl:hidden">
        <img src="/store-side-rtl.png" alt="phone" class="mx-auto h-full object-cover ltr:hidden">
      </div>

      <div class="mt-3 hidden w-max flex-col border border-[#9DB2D4] rounded-3xl px-8 py-4 lg:mt-17 2xl:flex">
        <p class="text-xs lg:text-lg">
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

ar:
  title: امنح نفسك أفضل حماية للركوب بثقة
  subtitle: احصل على جميع مزايا التأمين الشامل على السيارات، ولكن بمزيد من التحكم.
</i18n>
