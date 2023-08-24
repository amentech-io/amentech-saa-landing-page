<template>
  <div>
    <div class="relative flex flex-col">
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
