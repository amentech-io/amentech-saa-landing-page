<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
const cards = [
  {
    title: t('item1.title'),
    icon: '/public-liability.svg',
  },
  {
    title: t('item2.title'),
    icon: '/defense-appeals.svg',
  },
  {
    title: t('item3.title'),
    icon: '/collision-damage.svg',
  },
  {
    title: t('item4.title'),
    icon: '/assistance.svg',
  },
  {
    title: t('item5.title'),
    icon: '/persons-transported.svg',
  },
  {
    title: t('item6.title'),
    icon: '/show-more.svg',
  },
]
</script>

<template>
  <section class="mx-auto px-6 pt-9 container lg:pt-54">
    <div class="relative rounded-2 bg-[#193B64] text-white lg:rounded-10">
      <div class="absolute inset-0">
        <img class="object-fit h-full w-full" src="/protection-waves.png" alt="">
      </div>

      <div class="absolute bottom-0 right-0 z-20 aspect-1 w-1/6 translate-x-1/2 translate-y-1/2 rounded-full bg-[#43648A]/25 blur-150" />

      <div class="grid px-4 pt-6 2xl:grid-cols-[1fr_1.2fr] lg:py-15">
        <div class="my-auto lg:ms-30">
          <h3 class="text-lg font-bold lg:text-4xl" v-html="t('title')" />

          <p class="mx-auto mt-3 text-xs font-medium lg:mt-10 lg:text-2xl" v-html="t('subtitle')" />
        </div>

        <div>
          <div class="grid grid-cols-2 mt-8 gap-3 md:grid-cols-3 2xl:mt-0">
            <div
              v-for="card, idx in cards" :key="idx"
              class="px-5 py-4 lg:px-8 lg:py-6"
            >
              <div class="mx-auto h-9 w-9 rounded-full lg:h-26 lg:w-26 rtl:scale-x--100">
                <img :src="card.icon" alt="guard card">
              </div>
              <p class="mt-4 text-center text-xs font-bold lg:mt-6 lg:whitespace-nowrap lg:text-xl">
                {{ card.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
fr:
  title: Des garanties sur mesure!
  subtitle: SAA vous propose une sélection soigneusement élaborée de garanties essentielles pour protéger au mieux votre véhicule et son conducteur - c'est vous ! Profitez d'une couverture complète et personnalisée qui vous offre une tranquillité d'esprit totale sur la route, où que vous alliez.
  item1:
    title: Responsabilité civile
  item2:
    title: Défense et recours
  item3:
    title: Dommages collision
  item4:
    title: Assistance
  item5:
    title: Personnes transportées
  item6:
    title: En savoir plus

ar:
  title: ضمانات للقياس!
  subtitle: تقدم SAA مجموعة مختارة مصممة بعناية من الضمانات الأساسية لحماية سيارتك وسائقها بشكل أفضل - إنه أنت! استمتع بتغطية شاملة وشخصية تمنحك راحة البال الكاملة على الطريق، أينما ذهبت.
  item1:
    title: المسؤولية المدنية
  item2:
    title: الدفاع وسبل الانتصاف
  item3:
    title: أضرار الاصطدام
  item4:
    title: مساعدة
  item5:
    title: الأشخاص الذين تم نقلهم
  item6:
    title: جميع ضمانات
</i18n>
