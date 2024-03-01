<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const features = [t('features.item1'), t('features.item2'), t('features.item3')]
</script>

<template>
  <div class="relative mb-18 mt-7 px-6 lg:mb-20">
    <div class="mx-auto w-full flex container">
      <div class="w-full flex">
        <div class="lg:w-1/2">
          <h1
            class="text-2xl/8 text-white font-black lg:max-w-20ch 2xl:text-[3.5rem]/19 lg:text-[2.5rem]/15"
            v-html=" t('title')"
          />
          <div>
            <hr class="my-4 h-1 w-25 border-none bg-[#F2BC50] lg:w-60">
            <p class="max-w-52ch text-justify text-xs/6 text-white lg:my-15 lg:text-xl lg:leading-8">
              {{ t('subtitle') }}
            </p>
          </div>

          <ul class="mt-5 flex gap-5">
            <li v-for="i, idx in features" :key="idx" class="flex items-center gap-2">
              <div
                class="inline-block rounded-full bg-[#F2BC50] p-0.5 lg:p-2"
              >
                <UnoIcon i-ic-baseline-check class="h-2 w-2 text-white lg:h-6 lg:w-6" />
              </div>
              <span class="text-8px text-white lg:text-lg"> {{ i }} </span>
            </li>
          </ul>

          <div class="mt-7 hidden lg:block">
            <p class="text-xl text-white font-semibold" v-html="t('available-on')" />

            <div class="mt-4">
              <img src="/stores.png" alt="">
            </div>
          </div>
        </div>

        <div class="absolute end-0 h-full w-1/2">
          <img class="ms-auto hidden lg:block rtl:hidden" src="/hero-right-pic.png" alt="">
          <img class="ms-auto hidden lg:block ltr:hidden" src="/hero-left-pic.png" alt="">
          <img class="ms-auto lg:hidden" src="/hero-mobile-grid.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<i18n lang="yaml">
fr:
  title: <span class="text-[#F2BC50]">N’suri</span>,&nbsp; l’assurances Simplifiées en Quelques Clics !
  subtitle: Découvrez N’suri, l'assurance digitale réinventée en quelques clics ! Simplifiez la gestion instantanée de vos contrats, souscrivez de nouvelles couvertures personnalisées et suivez vos sinistres en temps réel, pour une tranquillité de conduite inégalée.
  features:
    item1: 100% mobile et flexible
    item2: 0% prise de tête
    item3: au juste prix
  available-on: Disponible sur
ar:
  title: <span class="text-[#F2BC50]">نسوري</span>،&nbsp; تأمين مبسط ببضع نقرات فقط!
  subtitle: اكتشف N’suri، التأمين الرقمي المعاد اختراعه ببضع نقرات فقط! قم بتبسيط الإدارة الفورية لعقودك، وقم بتغطية شخصية جديدة واتبع مطالباتك في الوقت الفعلي، من أجل قيادة سلام لا مثيل له.
  features:
    item1: 100٪ متنقلة ومرنة
    item2: بالسعر المناسب
    item3: 0% صداع
  available-on: متوفر على &colon;
</i18n>
