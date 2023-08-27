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
  {
    title: t('item5.title'),
    description: t('item5.description'),
  },
  {
    title: t('item6.title'),
    description: t('item6.description'),
  },
]
</script>

<template>
  <section class="relative">
    <div class="mx-auto py-11 container lg:pb-23 lg:pt-25">
      <div class="absolute aspect-1 w-1/6 rounded-full bg-[#FC5185]/25 blur-300 -translate-y-1/2" />

      <h3 class="flex items-center px-6 text-lg font-bold lg:text-5xl">
        <span v-html="t('title')" />
      </h3>

      <div class="grid mx-6 mb-8 mt-5 gap-5 lg:grid-cols-3 lg:mt-22">
        <div
          v-for="card, idx in cards" :key="idx"
          hover="from-[#1C57BC]/40 via-[#1C57BC]/15 to-[#EE4E80]/34 from-10% to-100% via-52% bg-gradient-to-br"
          class="card-gradient-border relative flex-none snap-start rounded-8 bg-[#0D1035] px-5 py-4 text-white shadow-md lg:px-8 lg:py-6"
        >
          <p class="mt-4 max-w-15ch text-sm font-bold lg:mt-6 lg:text-2xl">
            {{ card.title }}
          </p>
          <p class="mt-3 text-xs leading-loose lg:mt-4 lg:text-xl">
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

.card-gradient-border:hover::after {
  content: '';
  --at-apply: absolute inset-0 -m-1 rounded-9 -z-2
    bg-[#1C57BC] from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-bl;
}
</style>

<i18n lang="yaml">
fr:
  title: Pourquoi l’assurance auto chez SAA?
  item1:
    title: Agence d'Assurance à Portée de Main
    description: Notre application mobile met votre agence d'assurance à portée de main, vous permettant de gérer toutes vos polices et besoins d'assurance depuis n'importe où.
  item2:
    title: Souscription en Quelques Clics
    description: Obtenez une couverture d'assurance sans tracas grâce à une souscription simple et rapide en quelques clics seulement.
  item3:
    title: Gestion Facile des Polices
    description: Centraliser et gérer toutes vos polices d'assurance en temps réel, avec facilité et simplicité.
  item4:
    title: Notifications Utiles
    description: Recevez des rappels de paiement et des alertes sur les mises à jour de vos polices directement sur votre mobile.
  item5:
    title: Déclarations de Réclamations
    description: Facilitées Déclarez vos sinistres directement depuis l'application pour un traitement rapide et efficace.
  item6:
    title: Améliorations constantes
    description: Bénéficiez d'améliorations régulières pour une expérience d'assurance toujours à la pointe de l'innovation.
</i18n>
