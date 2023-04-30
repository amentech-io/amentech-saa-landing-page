<template>
  <div>
    <div class="relative flex flex-col">
      <TheNav />
      <TheHero />
      <div
        style="background: linear-gradient(180deg, rgba(255, 225, 235, 0.3) 13.81%, rgba(255, 225, 235, 0.045) 100%);"
        class="absolute inset-0 -z-10"
      />
    </div>
    <div>
      <WhySaa />
      <SaaFeatures />
      <MobileApp />
      <!-- <TheSolutions /> -->
      <!-- <TheValues /> -->
      <!-- <TheContactUs /> -->
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
