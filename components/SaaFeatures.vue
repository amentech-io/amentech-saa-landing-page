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
  {
    title: t('item4.title'),
    description: t('item4.description'),
  },
]
</script>

<template>
  <section class="bg-[#181B34]">
    <div class="mx-auto px-6 py-11 container lg:pb-23 lg:pt-25">
      <h3 class="relative max-w-max text-lg font-bold text-[#C4CEEF] lg:text-5xl">
        <img class="absolute right-0 top-0 -translate-y-1/3 translate-x-4/5" src="/saa-title-decorator.svg" alt="title decorator">
        <span v-html="t('title')" />
      </h3>

      <div class="mb-8 mt-5 flex snap-x gap-4 of-x-auto of-y-hidden py-4 pl-1/5 lg:mt-22 lg:justify-center lg:gap-5 2xl:pl-0">
        <div
          v-for="card, idx in cards" :key="idx"
          class="flex-none snap-start rounded-8 bg-[#F8F8FA] px-5 py-4 shadow-md hover:bg-[#C4CEEF] lg:px-8 lg:py-6"
        >
          <p class="mt-4 max-w-15ch text-sm font-bold lg:mt-6 lg:text-2xl">
            {{ card.title }}
          </p>
          <p class="mt-3 max-w-24ch text-xs leading-loose lg:mt-4 lg:text-xl">
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
  title: Pourquoi l’assurance auto <span class="block">chez SAA?</span>
  item1:
    title: Simplicité
    description: Dès que vous souscrivez, vous recevez votre attestation dans l’application même un dimanche!
  item2:
    title: Tout ce qu’il faut au juste prix
    description: Profitez de vos garanties essentielles avec une assistance 0km incluse pour tous nos contrats.
  item3:
    title: 100% mobile, 0% paperasse
    description: Souscrivez en 4 min et on prend en charge sans frais la résiliation de votre ancienne assurance.
  item4:
    title: Personnalisable à tout moment
    description: Ajustez le montant de vos franchises, votre plafond de garantie conducteur et ajoutez la valeur d’achat du véhicule.
</i18n>
