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
    title: t('item7.title'),
  },
  {
    title: t('item8.title'),
  },
  {
    title: t('item9.title'),
  },
  {
    title: t('item10.title'),
  },
  {
    title: t('item11.title'),
  },
  {
    title: t('item12.title'),
  },
]
</script>

<template>
  <div>
    <div class="flex flex-col">
      <TheNav />
    </div>
    <div class="mx-auto flex flex-col gap-y-12 px-6 container lg:mt-42 lg:flex-row">
      <div class="relative h-full w-full lg:h-full">
        <div class="absolute aspect-1 h-full w-1/2 translate-x-full rounded-full bg-[#1C57BC]/26 blur-200" />
        <img src="faq-side.png" alt="">
      </div>
      <div class="max-w-70ch pl-0 lg:pl-8">
        <h4
          class="text-base font-extrabold lg:text-7xl"
        >
          {{ t('title') }}
        </h4>
        <p class="mt-6 lg:text-2xl lg:font-semibold">
          {{ t('subtitle') }}
        </p>

        <NuxtLink
          class="mt-4 inline-block rounded-4 from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-l px-10 py-2 font-extrabold text-white transition lg:mt-15 lg:px-18 lg:py-5 lg:text-xl hover:opacity-90 hover:ring-4 hover:ring-white/50"
          to="contact"
        >
          {{ $t('contact-us') }}
        </NuxtLink>
      </div>
    </div>
  </div>

  <div class="grid mx-auto mt-18 gap-8 px-6 container lg:mt-28">
    <Disclosure
      v-for="card, idx in cards"
      v-slot="{ open }" :key="idx"
      as="div"
      class="border-1px border-transparent rounded-xl bg-[#111237] shadow-md [&[data-headlessui-state=open]]:border-[#D1528C]/15 hover:border-[#D1528C]/20 all:transition"
    >
      <DisclosureButton as="div" class="flex cursor-pointer items-center justify-between px-14 py-5 text-xs font-bold leading-normal lg:text-2xl">
        <span>{{ card.title }} </span>
        <UnoIcon class="ml-2 h-10 w-10 flex-none" :class="open ? 'i-ic-round-minus' : 'i-ic-round-plus'" />
      </DisclosureButton>
      <DisclosurePanel class="text-md mt-8 px-14 pb-5 text-[#181B34]/60 text-white">
        ...
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<i18n lang="yaml">
fr:
  title: Nos garanties
  subtitle: Notre section "Garanties" vous offre une vue d'ensemble complète des garanties incluses dans notre offre d'assurance automobile digitale, ainsi que des options de couverture supplémentaires pour une protection optimale.
  item1:
    title: Résponsabilité civile
  item3:
    title: Défense et recours
  item2:
    title: Assistance
  item5:
    title: Perte de jouissance ou d'éxploitation
  item4:
    title: Dommages collision
  item6:
    title: Personnes transportées
  item7:
    title: Bris de glace
  item8:
    title: Bris de glace panoramique
  item9:
    title: Vol et incendie
  item10:
    title: Vol et incendie
  item11:
    title: Rachat vétusté et franchise
  item12:
    title: Top réparateur
</i18n>
