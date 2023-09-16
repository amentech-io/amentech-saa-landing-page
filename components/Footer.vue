<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const { t } = useI18n({
  useScope: 'local',
})

const footer = [
  {
    title: 'A propos de NSURI',
    list: [
      { title: 'Acceuil', href: '/' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Découvrez la SAA',
    list: [
      { title: 'Présentation', href: '/about' },
      { title: 'Mot du PDG', href: '/messagepresident' },
      { title: 'La SAA en chiffre', href: '/saachiffres' },
      { title: 'Actualité', href: 'news' },
      { title: 'Appels d\'offre', href: '/calls' },
      { title: 'Offres d\'emploi', href: '/jobs' },
    ],
  },
  {
    title: 'PRODUITS DE LA SAA',
    list: [
      { title: 'NSURI', href: '#' },
      { title: 'Assurance auto', href: '/offer/auto"' },
      { title: 'Assurance catastrophe naturelle', href: '/offer/cat-nat' },
      { title: 'Assurance multirisque habitation', href: '/offer/multirisque-habitation' },
      { title: 'Responsabilité civile', href: '/offer/rc' },
      { title: 'Bateau de plaisance', href: '/offer/bateau-plaisance' },
    ],
  },
]
</script>

<template>
  <footer class="border-t border-[#2C1030] from-transparent via-[#2C1030]/80 to-transparent bg-gradient-to-b">
    <div class="mx-auto flex flex-col pb-13 pt-15 container 2xl:flex-row">
      <div>
        <div class="max-w-38">
          <img src="/logo-saa.png" alt="">
        </div>
        <p class="mt-3 uppercase">
          {{ t('our-app') }}
        </p>

        <div class="mt-5 flex gap-x-5">
          <img src="/appstore-mono.png" alt="appstore">
          <img src="/playstore-mono.png" alt="playstore">
        </div>

        <p class="mt-3 uppercase">
          {{ t('follow-us') }}
        </p>

        <div class="mt-5 flex gap-x-8">
          <UnoIcon class="i-custom-linkedin ml-2 h-7 w-7 text-white" />
          <UnoIcon class="i-custom-facebook ml-2 h-7 w-7 text-white" />
          <UnoIcon class="i-custom-twitter ml-2 h-7 w-7 text-white" />
        </div>
      </div>

      <div class="grid mt-6 gap-8 lg:grid-cols-4 2xl:ml-auto 2xl:mt-0">
        <Disclosure
          v-for="i, idx in footer"
          v-slot="{ open }"
          :key="idx"
          as="div"
        >
          <DisclosureButton as="div" class="flex cursor-pointer items-center justify-between text-xs font-bold leading-normal">
            <span class="text-bold uppercase text-[#B7B7B7]"> {{ i.title }} </span>
            <UnoIcon i-ic-outline-keyboard-arrow-down class="ml-2 h-4 w-4 lg:invisible" :class="open && 'rotate--180'" />
          </DisclosureButton>
          <DisclosurePanel
            v-for="(it, index) in i.list" :key="index"
            static
            as="ul"
            :class="{ 'hidden lg:block': open }"
            class="mt-5 text-xs text-white space-y-2"
          >
            <li>
              <!-- TODO: use NuxtLink -->
              <NuxtLink :to="it.href">
                {{ it.title }}
              </NuxtLink>
            </li>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure v-slot="{ open }" as="div">
          <DisclosureButton as="div" class="flex cursor-pointer items-center justify-between text-xs font-bold leading-normal">
            <span class="text-bold uppercase text-[#B7B7B7]"> Contact </span>
            <UnoIcon i-ic-outline-keyboard-arrow-down class="ml-2 h-4 w-4 lg:invisible" :class="open && 'rotate--180'" />
          </DisclosureButton>
          <DisclosurePanel
            static
            as="ul"
            :class="{ 'hidden lg:block': open }"
            class="mt-5 text-xs text-white space-y-2"
          >
            <div>
              <div class="flex gap-2">
                <UnoIcon class="i-custom-address h-4 w-4" />
                Adresse:
              </div>
              <p class="mt-2">
                Immeuble SAA lot 234 Quartier d’affaires <br> Bab Ezzouar - Alger - Algérie
              </p>
            </div>

            <div>
              <div class="mt-4 flex gap-2">
                <UnoIcon class="i-custom-phone h-4 w-4" />
                N Téléphone:
              </div>
              <ul class="mt-2">
                <li> +213 21 225 000 </li>
                <li> +213 21 225 050 </li>
                <li> +213 21 225 151 </li>
              </ul>
            </div>

            <div>
              <div class="mt-4 flex gap-2">
                <UnoIcon class="i-custom-mail h-4 w-4" />
                Adresse email:
              </div>
              <p class="mt-2">
                ecoute_client@saa.dz
              </p>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>

    <div class="mx-auto flex items-center justify-center gap-4 border-t-1px py-7 container">
      <p class="text-xs">
        SAA SPA © 2023 Conçu et développé par
      </p>
      <img src="/logo-amentech-mono.png" alt="amentech">
    </div>
  </footer>
</template>

<i18n lang="yml">
fr:
  our-app: get our app
  follow-us: get our app
</i18n>
