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
  <div class="bg-red from-[#0369A1] to-[#053B67] bg-gradient-to-r">
    <div class="flex flex-col">
      <TheNav />
    </div>
    <div class="mx-auto flex flex-col gap-x-8 gap-y-12 px-6 container lg:flex-row lg:py-20">
      <div class="relative h-full">
        <div class="absolute right-1/2 aspect-1 h-full translate-x-1/2 translate-x-full rounded-full bg-[#009EAB]/26 blur-000" />
        <img src="/faq-side.png" alt="">
      </div>
      <div class="max-w-80ch pl-0 lg:pl-8">
        <h4
          class="text-base text-white font-bold lg:text-7xl"
          v-html="t('title')"
        />
        <p class="mt-6 text-white lg:text-2xl">
          {{ t('subtitle') }}
        </p>

        <NuxtLink
          class="mt-4 inline-block rounded-4 bg-[#FCB932] px-10 py-2 text-white font-extrabold transition lg:mt-15 lg:px-18 lg:py-5 lg:text-xl hover:opacity-90 hover:ring-4 hover:ring-white/50"
          to="contact"
        >
          {{ $t('contact-us') }}
        </NuxtLink>
      </div>
    </div>
  </div>

  <div class="grid mx-auto mt-18 gap-8 px-6 container lg:mb-34 lg:mt-28">
    <Disclosure
      v-for="card, idx in cards"
      v-slot="{ open }" :key="idx"
      as="div"
      class="border-1px border-[#F6F6F6] rounded-xl bg-[#F6F6F6] [&[data-headlessui-state=open]]:border-[#D5E2ED] hover:border-[#D5E2ED] [&[data-headlessui-state=open]]:bg-[#F1F5F8] hover:bg-[#F1F5F8] all:transition"
    >
      <DisclosureButton as="div" class="flex cursor-pointer items-center justify-between px-14 py-5 text-xs text-[#183A64] font-bold leading-normal lg:text-2xl">
        <span>{{ card.title }} </span>
        <UnoIcon class="ml-2 h-10 w-10 flex-none" :class="open ? 'i-ic-round-minus' : 'i-ic-round-plus'" />
      </DisclosureButton>
      <DisclosurePanel class="text-md mt-8 px-14 pb-5 text-[#D5E2ED]">
        ...
      </DisclosurePanel>
    </Disclosure>
  </div>

  <Footer />
</template>

<i18n lang="yaml">
fr:
  title: Nos <span class="text-[#FCB932]"> garanties </span>
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
