<template>
  <div>
    <div class="relative flex flex-col">
      <!-- <TheNav type="amenauto" /> -->
      <!-- <faqHero /> -->
      <div class="absolute inset-0 bg-[#14292C] -z-10">
        <!-- <img class="absolute h-full w-full object-cover" src="/pattern2.svg"> -->
      </div>
    </div>
    <div>
      <!-- <faqAmenauto /> -->
      <!-- <faqSolution /> -->
      <!-- <faqProductStrengths /> -->
      <!-- <faqApps /> -->
      <!-- <faqAvantages /> -->
      <!-- <faqDiscover /> -->
      <!-- <theContactUs /> -->
      <!-- <TheFooter /> -->
      <Suspense>
        <template #fallback>
          <div class="italic op50">
            <span class="animate-pulse">Loading...</span>
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>
