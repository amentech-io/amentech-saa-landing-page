<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
const cards = [
  {
    title: t('item1.title'),
    icon: resolveComponent('Moto'),
    description: t('item1.description'),
  },
  {
    title: t('item2.title'),
    icon: resolveComponent('Car'),
    description: t('item2.description'),
  },
  {
    title: t('item3.title'),
    icon: resolveComponent('Truck'),
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
        <img class="absolute inset-0 mx-auto" src="/arc.png" alt="arc">
      </div>

      <h3 class="mx-auto max-w-max flex items-center px-6 text-center text-lg text-[#193B64] font-bold lg:text-12.5/15">
        <span v-html="t('title')" />
      </h3>

      <p class="mx-auto mt-3 max-w-60ch px-6 text-center text-xs text-[#193B64] font-medium lg:mt-10 lg:text-2xl">
        {{ t('subtitle') }}
      </p>

      <div class="mt-5 flex flex-wrap justify-center gap-4 lg:mt-22 lg:justify-center lg:gap-5 2xl:pl-0">
        <div
          v-for="card, idx in cards" :key="idx"
          class="group text-cente relative w-20ch flex flex-none items-center justify-center gap-4 rounded-full bg-[#193B64] px-5 py-4 transition-all hover:w-[30ch] hover:bg-[#F2BC50] lg:px-20 lg:py-8 lg:text-3xl"
          @mouseover="clickHandler(idx)"
        >
          <div class="h-full rtl:scale-x--100">
            <ClientOnly>
              <component :is="card.icon" class="block text-[#F2BC50] group-hover:text-[#193B64]" />
            </ClientOnly>
          </div>

          <p class="h-full text-sm text-white font-bold lg:text-2xl group-hover:text-[#193B64]">
            {{ card.title }}
          </p>
        </div>
      </div>
      <p class="mx-auto mt-3 max-w-64ch px-6 text-center text-xs text-[#193B64] font-medium lg:mt-13 lg:text-2xl">
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
