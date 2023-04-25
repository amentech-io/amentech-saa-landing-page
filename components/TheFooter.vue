<script setup lang="ts">
const localePath = useLocalePath()
const { scrollTo } = useScroll()
</script>

<template>
  <div class="relative">
    <div class="relative grid mx-auto gap-3 overflow-hidden px-6 pt-8 container md:grid-cols-[max-content_1fr_max-content]">
      <div class="mb-2 flex flex-col items-center">
        <div class="max-w-100px">
          <img class="" src="/amentech-logo-v.svg" alt="amentech">
        </div>
        <p
          class="mt-3 max-w-33ch text-center text-10px text-white lg:mt-6 lg:text-xs [&_span]:text-[#ACFEC1]"
          v-html="$t('footer.subtitle')"
        />
      </div>

      <div class="flex flex-col flex-wrap gap-5 md:col-start-3 sm:flex-row md:justify-end sm:justify-center">
        <div class="w-40 flex-initial">
          <div class="mb-2 font-semibold text-white lg:text-xl">
            Solutions
          </div>
          <ul class="text-xs space-y-1 lg:text-sm">
            <li>
              <NuxtLink class="text-white/70 hover:text-white/100" :to="localePath('index')">
                Amenauto
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="w-40 flex-initial">
          <div class="mb-2 font-semibold text-white lg:text-xl">
            Amentech
          </div>
          <ul class="text-xs space-y-1 lg:text-sm">
            <li><a class="text-white/70 hover:text-white/100" href="#about-us">{{ $t('about-us') }}</a></li>
            <li><a class="text-white/70 hover:text-white/100" href="#contact-us">{{ $t('contact-us') }}</a></li>
          </ul>
        </div>

        <div class="absolute bottom-12 hidden h-px w-full bg-[#3A4F51] md:block" />

        <div class="w-40 flex-initial">
          <div class="mb-2 font-semibold text-white lg:text-xl">
            {{ $t('our-partners') }}
          </div>
          <ul class="text-xs space-y-1 lg:text-sm">
            <li><a target="_blank" href="https://asf.dz" class="text-white/70 hover:text-white/100">Algerian startup fund</a></li>
          </ul>
        </div>
      </div>
      <div class="flex items-center justify-center gap-6 p-2">
        <a target="_blank" href="https://www.linkedin.com/company/amentech">
          <UnoIcon i-custom-linkedin class="h-5 w-5 op-60 lg:h-8 lg:w-8 hover:op-80" />
        </a>
        <a href="mailto:contact@amentech.dz">
          <UnoIcon i-custom-email class="h-5 w-5 op-60 lg:h-8 lg:w-8 hover:op-80" />
        </a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100086732271133">
          <UnoIcon i-custom-facebook class="h-5 w-5 op-60 lg:h-8 lg:w-8 hover:op-80" />
        </a>
      </div>
      <p class="p-4 text-center text-xs text-white/70 md:col-start-3 [&_span]:font-semibold [&_span]:underline" v-html="$t('all-rights-reserved')" />
    </div>

    <div class="absolute inset-0 overflow-hidden bg-[#14292C] -z-10">
      <img class="absolute bottom-0 left-0 md:hidden md:h-full" src="/pattern-footer-m.svg">

      <img class="absolute bottom-0 left-0 hidden md:block md:h-full -scale-x-100" src="/pattern2.svg">
      <img class="absolute right-0 hidden hidden h-full md:block md:block -scale-y-100" src="/pattern2.svg">
    </div>
  </div>
</template>
