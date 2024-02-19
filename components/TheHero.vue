<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const features = [t('features.item1'), t('features.item2'), t('features.item3')]
</script>

<template>
  <div class="mx-auto mb-18 mt-7 w-full flex px-6 container lg:mb-29 lg:mt-32">
    <div class="absolute inset-0 flex -z-2 rtl:flex-row-reverse">
      <div class="my-auto ml-25 hidden lg:block">
        <img src="/hero-bg-right.png" alt="">
      </div>
      <div class="grid grid-cols-2 flex-auto place-items-center">
        <div
          style="animation: blur-movement 5s linear 2s infinite alternate;"
          class="hidden aspect-1 w-90 rounded-full bg-[#009EAB]/30 blur-200 lg:block -translate-x-[100%]"
        />
        <div
          style="animation: blur-movement 5s linear 2s infinite alternate-reverse;"
          class="hidden aspect-1 w-100 translate-x-[100%] rounded-full bg-[#FCB932]/30 blur-200 lg:block"
        />
      </div>
      <div class="my-auto mr-25 hidden lg:block">
        <img src="/hero-bg-left.png" alt="">
      </div>
    </div>
    <div class="mx-auto">
      <h1
        class="max-w-30ch text-center text-2xl font-black leading-10 lg:text-6xl lg:leading-24"
        v-html=" t('title')"
      />
      <p class="mx-auto my-4 max-w-68ch text-center text-xs leading-10.5 leading-4 lg:my-15 lg:text-xl lg:leading-8">
        {{ t('subtitle') }}
      </p>

      <ul class="flex justify-center gap-14">
        <li v-for="i, idx in features" :key="idx" class="flex items-center gap-2">
          <div
            class="inline-block rounded-full bg-[#1C57BC] from-[#009EAB] to-[#FCB932] from-0% to-98% bg-gradient-to-bl p-0.5 lg:p-2"
          >
            <UnoIcon i-ic-baseline-check class="h-2 w-2 text-white lg:h-6 lg:w-6" />
          </div>
          <span class="text-8px lg:text-lg"> {{ i }} </span>
        </li>
      </ul>

      <div class="flex justify-center">
        <NuxtLink
          class="mt-4 inline-block rounded-4 from-[#009EAB] via-[#017680] to-[#FCB932] from-0% to-98% via-47% bg-gradient-to-l px-10 py-2 font-extrabold text-white transition lg:mt-15 lg:px-18 lg:py-5 lg:text-xl hover:opacity-90 hover:ring-4 hover:ring-white/50"
          to="contact"
        >
          {{ $t('contact-us') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.underline-gradient {
  position: relative;
  background: conic-gradient(from 0deg at 16.47% 32.32%, #08181B 7deg, rgba(0, 158, 171, 0.50) 55deg, rgba(0, 158, 171, 0.90) 86deg, #FCB932 122deg, rgba(8, 24, 27, 0.95) 205deg);
  background-clip: text;
  color: transparent;
}

.underline-gradient::before {
  content: "";
  position: absolute;
  top: 92%;
  width: 100%;
  left: 0;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(-90deg,#FCB932, #009EAB);
}

@keyframes blur-movement {
from {
  transform: translateX(-100%);
}

to {
  transform: translateX(100%);
}
}
</style>

<i18n lang="yaml">
fr:
  title: <span class="underline-gradient">NSURI</span>,&nbsp; l’assurances Simplifiées en Quelques Clics !
  subtitle: Découvrez NSURI, l'assurance digitale réinventée en quelques clics ! Simplifiez la gestion instantanée de vos contrats, souscrivez de nouvelles couvertures personnalisées et suivez vos sinistres en temps réel, pour une tranquillité de conduite inégalée.
  features:
    item1: 100% mobile et flexible
    item2: 0% prise de tête
    item3: au juste prix
ar:
  title: <span class="underline-gradient">نسوري</span>،&nbsp; تأمين مبسط ببضع نقرات فقط!
  subtitle: اكتشف NSURI، التأمين الرقمي المعاد اختراعه ببضع نقرات فقط! قم بتبسيط الإدارة الفورية لعقودك، وقم بتغطية شخصية جديدة واتبع مطالباتك في الوقت الفعلي، من أجل قيادة سلام لا مثيل له.
  features:
    item1: 100٪ متنقلة ومرنة
    item2: بالسعر المناسب
    item3: 0% prise de tête
</i18n>
