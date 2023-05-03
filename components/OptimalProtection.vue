<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
const cards = [
  {
    title: t('item1.title'),
    icon: '/public-liability.svg',
  },
  {
    title: t('item2.title'),
    icon: '/defense-appeals.svg',
  },
  {
    title: t('item3.title'),
    icon: '/collision-damage.svg',
  },
  {
    title: t('item4.title'),
    icon: '/assistance.svg',
  },
  {
    title: t('item5.title'),
    icon: '/persons-transported.svg',
  },
  {
    title: t('item6.title'),
    icon: '/show-more.svg',
  },
]
</script>

<template>
  <section>
    <div class="mx-auto rounded-2 bg-[#181B34] container lg:rounded-10">
      <div class="grid pt-14 2xl:grid-cols-[1fr_1.2fr] lg:pt-25">
        <div class="relative ml-10 mr-5 text-white lg:ml-30">
          <div class="relative">
            <img class="absolute top--8 ml--6 w-13 rotate--90 lg:top--21 lg:ml--10 lg:w-26" src="/saa-title-decorator.svg" alt="title decorator">
            <h3 class="text-lg font-bold lg:text-5xl" v-html="t('title')" />
          </div>

          <p class="mx-auto mt-3 text-xs font-medium lg:mt-10 lg:text-2xl" v-html="t('subtitle')" />

          <div class="absolute right-1/2 top-1/2 aspect-1 w-3/4 translate-x-1/2 rounded-full bg-[#BEBBD1]/40 blur-2xl -z-1 -translate-y-1/2" />
        </div>

        <div>
          <div class="grid grid-cols-2 mt-8 gap-4 md:grid-cols-3 2xl:mt-0">
            <div
              v-for="card, idx in cards" :key="idx"
              class="px-5 py-4 shadow-lg lg:px-8 lg:py-6"
            >
              <div class="mx-auto h-9 w-9 rounded-full lg:h-26 lg:w-26">
                <img :src="card.icon" alt="guard card">
              </div>
              <p class="mt-4 text-center text-xs font-bold text-white lg:mt-6 lg:text-2xl">
                {{ card.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
fr:
  title: Une protection optimale
  subtitle: SAA a sélectionné les garanties essentielles pour protéger au mieux votre véhicule et son conducteur (ça c'est vous !)
  item1:
    title: Responsabilité civile
  item2:
    title: Défense et recours
  item3:
    title: Dommages collision
  item4:
    title: Assistance
  item5:
    title: Personnes transportées
  item6:
    title: En savoir plus
</i18n>
