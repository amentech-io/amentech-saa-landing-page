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

const itemSelected = ref(0)

function selectItem(idx: number) {
  itemSelected.value = idx
}
</script>

<template>
  <section>
    <div class="mx-auto mb-12 px-6 pt-6 container lg:pb-27 lg:pt-17">
      <h3 class="mx-auto max-w-32ch text-center text-lg font-bold lg:text-5xl" v-html="t('title')" />

      <p class="mx-auto mt-3 max-w-68ch text-center text-xs font-medium lg:mt-10 lg:text-2xl">
        {{ t('subtitle') }}
      </p>

      <div class="grid mt-2 gap-4 lg:grid-cols-[1.5fr_1fr] lg:mt-22 2xl:pl-0">
        <template
          v-for="card, idx in cards" :key="idx"
        >
          <button
            lg="from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-bl"
            class="flex justify-center border-5 border-white rounded-9.7 text-left lg:block hover:border-dashed"
            @click="selectItem(idx)"
          >
            <div class="rounded-lg bg-[white] px-3 pb-4 pt-6 lg:rounded-8 lg:px-8 lg:py-6">
              <div class="mt-4 flex items-center lg:mt-6">
                <div class="from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-bl p-0.5 rounded-full mr-1.5">
                  <span
                    class="text-bold h-8 w-8 flex flex-none items-center justify-center rounded-full bg-white text-sm lg:text-lg"
                  >
                    {{ idx + 1 }}
                  </span>
                </div>
                <p class="text-sm font-bold lg:text-2xl">
                  {{ card.title }}
                </p>
              </div>
              <p class="mt-3 max-w-50ch text-xs leading-loose lg:mt-4 lg:text-xl">
                {{ card.description }}
              </p>
            </div>
          </button>

          <div
            :class="idx !== itemSelected && 'lg:hidden'"
            class="relative grid place-content-center lg:row-span-4 lg:col-start-2 lg:row-start-1 lg:h-50rem"
          >
            <img class="z-10 aspect-1 w-full object-contain lg:aspect-auto" :src="`/mobile-app-${idx + 1}.png`" alt="mobile app">
            <div class="absolute right-1/2 top-1/2 aspect-1 w-2/3 translate-x-1/2 rounded-full bg-[#BEBBD1]/40 blur-2xl -translate-y-1/2" />
          </div>
        </template>
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
  title: Si <span class="underline-gradient">rapide</span> que vous pouvez le faire pendant que votre café est encore chaud
  subtitle: Nous avons rendu cela super simple - il n'est pas nécessaire de déterrer de vieux dossiers ou de la paperasse. Au cas où vous en auriez besoin, nous avons des conseillers non-commissionnés prêts à vous aider à chaque étape du processus.
  item1:
    title: Obtenez un devis instantané et sans engagement
    description: Répondez à quelques questions rapides personnalisez les détails de votre couverture et obtenez un taux estimé en quelques secondes.
  item2:
    title: Postulez en ligne en 20 minutes
    description: 'Conseil de pro : économisez 10% la première année lorsque vous souscrivez avec la couverture'
  item3:
    title: Découvrez immédiatement si vous êtes approuvé
    description: Ou si nous avons besoin d’un peu plus d’informations ( la plupart du temps, nous n’en avons pas ! )
  item4:
    title: Activez votre police lorsque vous êtes prêt
    description: Votre couverture, votre horaire. le paiement n’est requis que lorsque vous êtes prêt à appuyer sur “go”
</i18n>
