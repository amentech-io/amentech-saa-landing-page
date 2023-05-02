<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
const cards = [
  {
    title: t('item1.title'),
    icon: '/car.svg',
    description: t('item1.description'),
  },
  {
    title: t('item2.title'),
    icon: '/moto.svg',
    description: t('item2.description'),
  },
  {
    title: t('item3.title'),
    icon: '/truck.svg',
    description: t('item3.description'),
  },
]
</script>

<template>
  <section class="bg-[#DEDDE8]/50">
    <div class="mx-auto py-11 container lg:pb-23 lg:pt-25">
      <h3 class="mx-auto max-w-max flex items-center px-6 text-center text-lg font-bold lg:text-5xl">
        <span v-html="t('title')" />
        <img class="ml--8 mt--4 w-16" src="/saa-title-decorator-blue.svg" alt="title decorator">
      </h3>

      <p class="mx-auto mt-3 max-w-68ch text-center text-xs font-medium lg:mt-10 lg:text-2xl">
        {{ t('subtitle') }}
      </p>

      <div class="mt-5 flex flex-col items-center gap-4 lg:mt-22 lg:flex-row lg:justify-center lg:gap-5 2xl:pl-0">
        <div
          v-for="card, idx in cards" :key="idx"
          class="flex-none px-5 py-4 text-center lg:px-8 lg:py-6"
        >
          <div>
            <img class="mx-auto h-12 w-12 rounded-full bg-white p-2 lg:h-18 lg:w-18 lg:p-3" :src="card.icon" alt="">
          </div>

          <p class="mt-4 text-sm font-bold lg:mt-6 lg:text-2xl">
            {{ card.title }}
          </p>
          <p class="mt-3 max-w-30ch text-xs leading-loose lg:mt-4 lg:text-xl">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  --at-apply: h-2 w-2;
}

/* Track */
::-webkit-scrollbar-track {
  --at-apply: gray/10;
}

/* Handle */
::-webkit-scrollbar-thumb {
  --at-apply: bg-white/20 rounded;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  --at-apply: bg-white/30 rounded;
}
</style>

<i18n lang="yaml">
fr:
  title: Quelles véhicules assurables
  subtitle: Understand your insurance policy options. Identify the best value. Enjoy peace of mind.
  item1:
    title: Voiture
    description: Entreprise Publique Economique, agréée pour pratiquer l’ensemble des branches d’assurance,
  item2:
    title: Moto
    description: Entreprise Publique Economique, agréée pour pratiquer l’ensemble des branches d’assurance,
  item3:
    title: Camion
    description: Entreprise Publique Economique, agréée pour pratiquer l’ensemble des branches d’assurance,
</i18n>
