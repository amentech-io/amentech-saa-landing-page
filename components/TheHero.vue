<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const features = [t('features.item1'), t('features.item2'), t('features.item3')]
</script>

<template>
  <div class="relative relative mb-18 mt-7 px-6 lg:mb-20">
    <div class="mx-auto w-full flex container">
      <div class="w-full flex">
        <div class="w-1/2">
          <h1
            class="max-w-20ch text-2xl/10 text-white font-black 2xl:text-[3.5rem]/24 lg:text-[2.5rem]/15"
            v-html=" t('title')"
          />
          <div class="my-4">
            <hr class="h-1 w-60 border-none bg-[#F2BC50]">
            <p class="max-w-52ch text-xs text-white leading-10.5 leading-4 lg:my-15 lg:text-xl lg:leading-8">
              {{ t('subtitle') }}
            </p>
          </div>

          <ul class="flex gap-5">
            <li v-for="i, idx in features" :key="idx" class="flex items-center gap-2">
              <div
                class="inline-block rounded-full bg-[#F2BC50] p-0.5 lg:p-2"
              >
                <UnoIcon i-ic-baseline-check class="h-2 w-2 text-white lg:h-6 lg:w-6" />
              </div>
              <span class="text-8px text-white lg:text-lg"> {{ i }} </span>
            </li>
          </ul>

          <div class="mt-7">
            <p class="text-xl text-white font-semibold">
              {{ t('available-on') }}
            </p>

            <div class="mt-4">
              <img src="/stores.png" alt="">
            </div>
          </div>
        </div>

        <div class="absolute right-0 h-full w-1/2">
          <img class="ml-auto" src="/hero-right-pic.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.underline-gradient {
  position: relative;
  background: conic-gradient(from 0deg at 50% 10%, black 7deg, #B1CBF8 55deg, #EBB952 86deg, #FCB932 122deg, #6D8DCA 205deg);
  background-clip: text;
  color: transparent;
}
</style>

<i18n lang="yaml">
fr:
  title: <span class="underline-gradient">N’SURI</span>,&nbsp; l’assurances Simplifiées en Quelques Clics !
  subtitle: Découvrez NSURI, l'assurance digitale réinventée en quelques clics ! Simplifiez la gestion instantanée de vos contrats, souscrivez de nouvelles couvertures personnalisées et suivez vos sinistres en temps réel, pour une tranquillité de conduite inégalée.
  features:
    item1: 100% mobile et flexible
    item2: 0% prise de tête
    item3: au juste prix
  available-on: Disponible sur
ar:
  title: <span class="underline-gradient">نسوري</span>،&nbsp; تأمين مبسط ببضع نقرات فقط!
  subtitle: اكتشف NSURI، التأمين الرقمي المعاد اختراعه ببضع نقرات فقط! قم بتبسيط الإدارة الفورية لعقودك، وقم بتغطية شخصية جديدة واتبع مطالباتك في الوقت الفعلي، من أجل قيادة سلام لا مثيل له.
  features:
    item1: 100٪ متنقلة ومرنة
    item2: بالسعر المناسب
    item3: 0% prise de tête
</i18n>
