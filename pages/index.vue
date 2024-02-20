<template>
  <div>
    <div
      class="relative flex flex-col from-[#3E6B92] via-[#053B67] to-[#193B64] to-60% via-30% bg-gradient-to-r lg:pb-20"
      style="clip-path: polygon(0 0, 100% 0, 100% 95%, 60% 95%, 0 100%);"
    >
      <TheNav />
      <TheHero />
    </div>
    <div>
      <WhySaa />
      <SaaFeatures />
      <MobileApp />
      <InsurableVehicles />
      <ReportingClaim />
      <OptimalProtection />
      <QuestionAnswers />
      <AppStore />
      <Footer />
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
