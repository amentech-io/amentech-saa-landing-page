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
          <div class="absolute right-1/2 top-1/2 aspect-1 w-3/4 translate-x-1/2 rounded-full bg-[#FC5185]/25 blur-250 -z-1 -translate-y-1/2" />
        </div>

        <div>
          <h3 class="max-w-18ch text-lg font-bold lg:text-5xl" v-html="t('title')" />

          <p class="mx-auto mt-3 max-w-68ch text-xs font-medium lg:mt-10 lg:text-2xl" v-html="t('subtitle')" />

          <div class="mx-1 mt-5 flex flex-wrap justify-center gap-4 lg:mt-22 lg:flex-row 2xl:flex-nowrap lg:gap-5 2xl:pl-0">
            <div
              v-for="card, idx in cards" :key="idx"
              :style="{
                ...(idx === 0 && { '--color': '#F85186A6, #F5518721' }),
                ...(idx === 1 && { '--color': '#1C57BC, #1C57BC21' }),
                ...(idx === 2 && { '--color': '#FFFFFF, #FFFFFF21' }),
              }"
              class="box-gradient relative of-hidden border-1 border-transparent rounded-3"
              :class="{
                'from-[#47003C] via-[#21002B] to-[#25002A]': idx === 0,
                'from-[#1F0044] via-[#13002A] to-[#110031]': idx === 1,
                'from-[#3C2C4C] via-[#15012A] to-[#231538]': idx === 2,
              }"
            >
              <div
                class="h-full w-full bg-gradient-to-br px-5 py-4 lg:px-8 lg:py-6"
              >
                <span class="inline-block h-4 w-4 flex items-center justify-center rounded-2 bg-[#1C57BC]/20 text-xs font-extrabold text-white lg:h-10 lg:w-10 lg:text-xl">{{ idx + 1 }}</span>
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
    </div>
  </section>
</template>

<style>
.box-gradient {
  /* --color: red, darkorchid; */
  background: linear-gradient(#05031F, #05031F) padding-box,
    linear-gradient(to bottom right, var(--color)) border-box;
}
</style>

<i18n lang="yaml">
fr:
  title: Déclarer un <span class="border rounded-xl border-[#EE4E80] px-2 pb-1px leading-10">sinistre</span>, c’est aussi simple que ça!
  subtitle: Un sinistre ? Nous Sommes Là pour Vous. Une déclaration facile et une prise en charge rapide !
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
