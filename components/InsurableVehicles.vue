<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
const cards = [
  {
    title: t('item1.title'),
    icon: '/moto.svg',
    description: t('item1.description'),
  },
  {
    title: t('item2.title'),
    icon: '/car.svg',
    description: t('item2.description'),
  },
  {
    title: t('item3.title'),
    icon: '/truck.svg',
    description: t('item3.description'),
  },
]

const selectedItem = ref(1)
function clickHandler(idx: number) {
  selectedItem.value = idx + 1
}
</script>

<template>
  <section class="mt-12 lg:mt-40">
    <div class="relative mx-auto py-11 container lg:pb-23 lg:pt-25">
      <div class="relative mb-40">
        <div class="absolute inset-0 mx-auto aspect-1 w-1/5 rounded-full bg-[#FCB932]/35 blur-150" />
        <img class="absolute inset-0 mx-auto" src="/arc.png" alt="arc">
      </div>

      <h3 class="mx-auto max-w-max flex items-center px-6 text-center text-lg font-bold lg:text-5xl">
        <span v-html="t('title')" />
      </h3>

      <p class="mx-auto mt-3 max-w-60ch px-6 text-center text-xs font-medium lg:mt-10 lg:text-2xl">
        {{ t('subtitle') }}
      </p>

      <div class="mt-5 flex flex-wrap justify-center gap-4 lg:mt-22 lg:justify-center lg:gap-5 2xl:pl-0">
        <div
          v-for="card, idx in cards" :key="idx"
          class="text-cente [background:linear-gradient(0deg,rgba(252,185,50,0.32)3.21%,rgba(252,185,50,0.04)46.13%,rgba(252,185,50,0.24)97.93%)] relative flex flex-none gap-4 border border-[#05031F] border-transparent rounded-full px-5 py-4 hover:border-[#009EAB] lg:px-27 lg:py-8 lg:text-3xl"
          @mouseover="clickHandler(idx)"
        >
          <div class="rtl:scale-x--100">
            <img class="mx-auto h-12 w-12 p-2 lg:h-18 lg:w-18 lg:p-3" :src="card.icon" alt="">
          </div>

          <p class="mt-4 text-sm font-bold lg:mt-6 lg:text-2xl">
            {{ card.title }}
          </p>
        </div>
      </div>
      <p class="mx-auto mt-3 max-w-64ch px-6 text-center text-xs font-medium lg:mt-13 lg:text-2xl">
        {{ t(`item${selectedItem}.description`) }}
      </p>
    </div>
  </section>
</template>

<i18n lang="yaml">
fr:
  title: Quelles véhicules assurables
  subtitle: Découvrez notre gamme complète d'assurances adaptées à chaque véhicule. Profitez d'une couverture optimale pour vos précieux biens roulants, en toute tranquillité sur la route.
  item1:
    title: Moto
    description: Roulez en toute confiance avec notre assurance motos sur mesure, adaptée aux besoins des motards passionnés de liberté et d'aventure.
  item2:
    title: Voiture
    description: La couverture parfaite pour votre moyen de transport quotidien, protégez votre voiture avec une assurance adaptée à vos besoins.
  item3:
    title: Camion
    description: Une protection solide pour votre véhicule utilitaire, bénéficiez d'une assurance spécialement conçue pour votre camion et vos activités professionnelles.
ar:
  title: ما هي المركبات القابلة للتأمين
  subtitle: اكتشف مجموعتنا الكاملة من التأمين المكيفة مع كل مركبة. استمتع بالتغطية المثلى لبضائعك الثمينة، في راحة بال كاملة على الطريق.
  item1:
    title: دراجة نارية
    description: اركب بثقة مع تأمين الدراجات النارية المخصص لدينا، المصمم خصيصًا لاحتياجات راكبي الدراجات المتحمسين للحرية والمغامرة.
  item2:
    title: سيارة
    description:
  item3:
    title: شاحنة
    description:
</i18n>
