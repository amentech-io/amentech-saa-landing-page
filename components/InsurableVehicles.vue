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

const selectedItem = ref(1)
function clickHandler(idx: number) {
  selectedItem.value = idx+1
}
</script>

<template>
  <section class="lg:mt-30">
    <div class="relative mx-auto py-11 container lg:pb-23 lg:pt-25">
      <div class="relative mb-40">
        <div class="absolute inset-0 mx-auto aspect-1 w-1/5 rounded-full bg-[#FC5185]/25 blur-120" />
        <img class="absolute inset-0 mx-auto" src="/arc.png" alt="arc">
      </div>

      <h3 class="mx-auto max-w-max flex items-center px-6 text-center text-lg font-bold lg:text-5xl">
        <span v-html="t('title')" />
      </h3>

      <p class="mx-auto mt-3 max-w-60ch px-6 text-center text-xs font-medium lg:mt-10 lg:text-2xl">
        {{ t('subtitle') }}
      </p>

      <div class="mt-5 flex flex-wrap justify-center gap-4 lg:mt-22 lg:justify-center lg:gap-5 2xl:pl-0">
        <div
          v-for="card, idx in cards" :key="idx"
          class="text-cente [background:linear-gradient(#1F0044,#13002A,#110031)_padding-box,linear-gradient(to_right,#D6528E,#2F2EB7)_border-box] relative flex flex-none gap-4 border border-[#05031F] rounded-full px-5 py-4 hover:border-transparent lg:px-27 lg:py-8 lg:text-3xl"
          @mouseover="clickHandler(idx)"
        >
          <div>
            <img class="mx-auto h-12 w-12 p-2 lg:h-18 lg:w-18 lg:p-3" :src="card.icon" alt="">
          </div>

          <p class="mt-4 text-sm font-bold lg:mt-6 lg:text-2xl">
            {{ card.title }}
          </p>
        </div>
      </div>
      <p class="mx-auto mt-3 max-w-64ch px-6 text-center text-xs font-medium lg:mt-13 lg:text-2xl">
        {{ t(`item${selectedItem}.description`) }}
      </p>
    </div>
  </section>
</template>

<i18n lang="yaml">
fr:
  title: Quelles véhicules assurables
  subtitle: Découvrez notre gamme complète d'assurances adaptées à chaque véhicule. Profitez d'une couverture optimale pour vos précieux biens roulants, en toute tranquillité sur la route.
  item1:
    title: Moto
    description: Roulez en toute confiance avec notre assurance motos sur mesure, adaptée aux besoins des motards passionnés de liberté et d'aventure.
  item2:
    title: Voiture
    description: La couverture parfaite pour votre moyen de transport quotidien, protégez votre voiture avec une assurance adaptée à vos besoins.
  item3:
    title: Camion
    description: Une protection solide pour votre véhicule utilitaire, bénéficiez d'une assurance spécialement conçue pour votre camion et vos activités professionnelles.
</i18n>
