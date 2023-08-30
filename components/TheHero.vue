<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const features = [t('features.item1'), t('features.item2'), t('features.item3')]
</script>

<template>
  <div class="mx-auto mb-18 mt-7 w-full flex px-6 container lg:mb-29 lg:mt-32">
    <div class="absolute inset-0 flex -z-2">
      <div class="my-auto ml-25 hidden lg:block">
        <img src="/hero-bg-right.png" alt="">
      </div>
      <div class="grid grid-cols-2 flex-auto place-items-center">
        <div
          style="animation: blur-movement 5s linear 2s infinite alternate;"
          class="aspect-1 w-90 rounded-full bg-[#1C57BC]/30 blur-200 -translate-x-[100%]"
        />
        <div
          style="animation: blur-movement 5s linear 2s infinite alternate-reverse;"
          class="aspect-1 w-100 translate-x-[100%] rounded-full bg-[#FC5185]/30 blur-200"
        />
      </div>
      <div class="my-auto mr-25 hidden lg:block">
        <img src="/hero-bg-left.png" alt="">
      </div>
    </div>
    <div v-motion-slide-left class="mx-auto">
      <h1
        class="max-w-30ch text-center text-8 font-bold leading-10 lg:text-7xl lg:leading-24"
        v-html=" t('title')"
      />
      <p class="mx-auto my-4 max-w-62ch text-center text-3 leading-10.5 leading-4 lg:my-15 lg:text-6 lg:leading-7">
        {{ t('subtitle') }}
      </p>

      <ul class="flex justify-center gap-14">
        <li v-for="i, idx in features" :key="idx" class="flex items-center gap-2">
          <div
            class="inline-block rounded-full bg-[#1C57BC] from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-bl p-0.5 lg:p-2"
          >
            <UnoIcon i-ic-baseline-check class="h-2 w-2 text-white lg:h-6 lg:w-6" />
          </div>
          <span class="text-8px lg:text-lg"> {{ i }} </span>
        </li>
      </ul>

      <div class="flex justify-center">
        <NuxtLink
          class="mt-4 inline-block rounded-3 from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-l px-10 py-2 font-semibold text-white transition lg:mt-15 lg:px-18 lg:py-5 lg:text-lg hover:opacity-90 hover:ring-4 hover:ring-white/50"
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
  background: linear-gradient(90deg, #1C57BC 0%, #9D5CA2 47.76%, rgba(252, 81, 133, 0.94) 98.04%);
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
  background: linear-gradient(90deg, #1C57BC 0%, #9D5CA2 47.76%, rgba(252, 81, 133, 0.94) 98.04%);
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
  title: <span class="underline-gradient">NSURI</span>,l’assurances Simplifiées en Quelques Clics !
  subtitle: Découvrez NSURI, l'assurance digitale réinventée en quelques clics ! Simplifiez la gestion instantanée de vos contrats, souscrivez de nouvelles couvertures personnalisées et suivez vos sinistres en temps réel, pour une tranquillité de conduite inégalée.
  features:
    item1: 100% mobile et flexible
    item2: 0% prise de tête
    item3: au juste prix
</i18n>
