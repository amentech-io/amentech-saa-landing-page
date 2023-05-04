<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const { t } = useI18n({
  useScope: 'local',
})
const cards = [
  {
    title: t('item1.title'),
  },
  {
    title: t('item2.title'),
  },
  {
    title: t('item3.title'),
  },
  {
    title: t('item4.title'),
  },
  {
    title: t('item5.title'),
  },
  {
    title: t('item6.title'),
  },
]
</script>

<template>
  <section>
    <div class="mx-auto px-6 pt-14 container lg:pt-24">
      <h3 class="mx-auto text-lg font-bold lg:text-5xl" v-html="t('title')" />
      <p class="mx-auto mt-3 text-xs font-medium lg:mt-9 lg:text-2xl" v-html="t('subtitle')" />

      <div class="mt-5 lg:mt-28 space-y-2 lg:space-y-10">
        <Disclosure
          v-for="card, idx in cards"
          v-slot="{ open }" :key="idx"
          as="div" class="rounded-md bg-white px-4 py-2 font-bold shadow-md lg:rounded-5 lg:px-8 lg:py-6 lg:text-2xl all:transition"
        >
          <DisclosureButton as="div" class="flex cursor-pointer justify-between text-xs lg:text-6">
            <span>{{ card.title }}</span>
            <UnoIcon i-ic-outline-keyboard-arrow-down class="ml-2 h-5 w-5 flex-none text-[#1C57BC]" :class="open && 'rotate--180'" />
          </DisclosureButton>
          <DisclosurePanel class="text-md mt-8 text-[#181B34]/60">
            ...
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
fr:
  title: Vous avez des <span class="underline-decorator-pink"> questions </span>? <span class="text-[#1C57BC]">On a des réponses</span>
  subtitle: Une question reste sans réponse ? N’hésitez pas à consulter notre FAQ ou un conseiller via le chat !
  item1:
    title: Doit-on déclarer tout changement survenu à son assureur ?
  item2:
    title: Quelles différences entre une assurance auto au tiers et tous risques ?
  item3:
    title: Quels sont les risques couverts par une assurance voiture ?
  item4:
    title: Quelle est la différence entre un conducteur principal et secondaire ?
  item5:
    title: Qu’est-ce qu’un relevé d’informations ?
  item6:
    title: Comment calculer le coefficient de bonus-malus ?
</i18n>
