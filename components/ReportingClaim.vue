<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
const cards = [
  {
    title: t('item1.title'),
    description: t('item1.description'),
  },
  {
    title: t('item2.title'),
    description: t('item2.description'),
  },
  {
    title: t('item3.title'),
    description: t('item3.description'),
  },
]
</script>

<template>
  <section>
    <div class="mx-auto px-6 py-11 container lg:pb-23 lg:pt-25">
      <div class="grid 2xl:grid-cols-2">
        <div class="relative my-a hidden 2xl:block 2xl:pr-14">
          <img src="/reporting-claim-bg.png" alt="phone app">
          <div class="absolute right-1/2 top-1/2 aspect-1 w-3/4 translate-x-1/2 rounded-full bg-[#BEBBD1]/40 blur-2xl -z-1 -translate-y-1/2" />
        </div>

        <div>
          <h3 class="mx-auto max-w-20.8ch px-6 text-lg font-bold lg:text-5xl" v-html="t('title')" />

          <p class="mx-auto mt-3 max-w-68ch text-center text-xs font-medium lg:mt-10 lg:text-2xl" v-html="t('subtitle')" />

          <div class="mt-5 flex flex-wrap justify-center gap-4 lg:mt-22 lg:flex-row 2xl:flex-nowrap lg:gap-5 2xl:pl-0">
            <div
              v-for="card, idx in cards" :key="idx"
              class="relative rounded-xl bg-white px-5 py-4 lg:px-8 lg:py-6"
            >
              <div
                class="absolute inset--1 z--1 border-4 border-white rounded-[17px] border-dashed bg-[length:100%_110%] from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-b"
              />
              <span class="inline-block h-4 w-4 flex items-center justify-center rounded-2 bg-blue-200 text-xs font-bold text-blue-800 lg:h-6 lg:w-6">{{ idx + 1 }}</span>
              <p class="mt-4 max-w-12ch text-sm font-bold lg:mt-6 lg:text-2xl">
                {{ card.title }}
              </p>
              <p class="mt-3 max-w-18ch text-xs lg:mt-4 lg:text-xl lg:leading-loose">
                {{ card.description }}
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
  title: Déclarer un <span class="underline-gradient">sinistre</span>, c’est aussi simple que ça!
  subtitle: <span class="text-[#1C57BC]">97%</span> de nos clients restent chez SAA après une gestion de sinistres
  item1:
    title: Que s’est-il passé ?
    description: Envoyez-nous vos photos et vos documents sur l’appli.
  item2:
    title: Un expert vous contacte
    description: pour évaluer le montant des dommages.
  item3:
    title: Vous êtes indemnisé !
    description: Après réception de la facture.
</i18n>
