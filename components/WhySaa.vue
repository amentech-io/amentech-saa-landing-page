<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const cards = [
  { title: t('item1.title'), subtitle: t('item1.subtitle'), img: '/why-saa-1.png' },
  { title: t('item2.title'), subtitle: t('item2.subtitle'), img: '/why-saa-2.png' },
]
</script>

<template>
  <section class="relative pb-10 pt-5 lg:pb-49 lg:pt-20">
    <div class="absolute right-1/2 top-1/2 aspect-1 w-1/5 translate-x-full rounded-full bg-[#FC5185]/25 blur-300 -translate-y-1/2" />

    <div class="mx-auto px-6 container">
      <h2 class="text-center text-lg font-bold lg:text-5xl" v-html="t('title')" />

      <div class="mt-8 flex flex-col gap-8 lg:mt-43 lg:gap-90">
        <div
          v-for="i, idx in cards" :key="idx"
          class="relative rounded-7 lg:flex lg:items-center lg:justify-between lg:bg-[#1C57BC]/10 lg:shadow-[0px_4px_25px_0px_#181B3412]"
          :class="idx === 1 && 'flex-row-reverse'"
        >
          <div class="lg:max-w-1/2 lg:px-22 lg:py-17">
            <h3 class="text-sm font-bold lg:text-3xl">
              {{ i.title }}
            </h3>
            <p class="mt-4 text-justify text-xs lg:mt-12 lg:text-xl">
              {{ i.subtitle }}
            </p>
          </div>

          <div class="2xl:my--20 2xl:px-0 2xl:py-0 lg:px-22 lg:py-17">
            <div class="relative">
              <img
                class="mt-5 h-full w-full object-contain lg:mt-0"
                :src="i.img"
                alt="hand holding phone"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
fr:
  title: Pourquoi l’assurance <span class="border rounded-xl border-[#EE4E80] p-2">digitale SAA</span>
  item1:
    title: Une transparence totale sur vos garanties et le coût de votre assurance.
    subtitle: Nous sommes convaincus que l'assurance ne doit plus être un sujet opaque. Avec SAA, tout est enfin clair et transparent. Fini les mauvaises surprises, nous vous aidons à comprendre très simplement vos garanties et le coût de votre assurance. C'est vous qui choisissez ce que vous couvrez ou ne couvrez pas.
  item2:
    title: Votre prix en 2 min, et souscription en 10 min
    subtitle: Changer d'assurance ne devrait faire peur à personne. Notre solution 100% digitale vous permet de souscrire en quelques minutes, sans papiers ni rendez-vous avec votre banquier. Nous vous guidons étape par étape, jusqu'à la signature électronique de votre contrat. Ensuite, nos équipes s'occupent de résilier votre ancien contrat et de gérer la transition d'assurance. Tout simplement.
</i18n>
