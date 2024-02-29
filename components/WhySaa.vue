<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const cards = [
  { title: t('item1.title'), subtitle: t('item1.subtitle'), img: '/why-saa-1.png' },
  { title: t('item2.title'), subtitle: t('item2.subtitle'), img: '/why-saa-2.png' },
]
</script>

<template>
  <section class="relative pb-10 pt-5 lg:pb-49 lg:pt-20">
    <div class="absolute right-1/2 top-1/2 aspect-1 w-1/3 translate-x-full rounded-full bg-[#FCB932]/8 blur-300 -translate-y-1/2" />

    <div class="mx-auto px-6 container">
      <h2 class="text-center text-lg text-[#183A63] font-bold lg:text-12.5/15" v-html="t('title')" />

      <div class="mt-8 flex flex-col gap-8 lg:mt-43 lg:gap-52">
        <div
          v-for="i, idx in cards" :key="idx"
          class="relative rounded-7 lg:flex lg:items-center lg:justify-between lg:bg-[#FAF7F1] lg:shadow-[0px_4px_25px_0px_#181B3412]"
          :class="idx === 1 && 'flex-row-reverse'"
        >
          <div class="lg:mx-auto lg:max-w-1/2 lg:px-22 lg:py-17">
            <h3
              class="text-sm text-[#193B64] font-bold lg:text-3xl"
              v-html="i.title"
            />
            <p class="mt-4 text-justify text-xs text-[#193B64] lg:mt-12 lg:text-xl">
              {{ i.subtitle }}
            </p>
          </div>

          <div class="2xl:my--20 2xl:px-0 2xl:py-0 lg:px-22 lg:py-17">
            <div class="relative">
              <img
                class="mt-5 h-full w-full object-contain lg:mt-0"
                :src="i.img"
                alt="hand holding phone"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
fr:
  title: Pourquoi l’assurance <span class="text-[#F2BC50] bg-[#183A63] pb-2 px-3 rounded-2xl">digitale N’suri</span>
  item1:
    title: Une transparence totale sur vos garanties et le coût de votre assurance.
    subtitle: Nous sommes convaincus que l'assurance ne doit plus être un sujet opaque. Avec N’suri, tout est enfin clair et transparent. Fini les mauvaises surprises, nous vous aidons à comprendre très simplement vos garanties et le coût de votre assurance. C'est vous qui choisissez ce que vous couvrez ou ne couvrez pas.
  item2:
    title: Votre prix en <span class="text-[#F2BC50]">2 min</span>, et souscription en <span class="text-[#F2BC50]">10 min</span>
    subtitle: Changer d'assurance ne devrait faire peur à personne. Notre solution 100% digitale vous permet de souscrire en quelques minutes, sans papiers ni rendez-vous avec votre banquier. Nous vous guidons étape par étape, jusqu'à la signature électronique de votre contrat. Ensuite, nos équipes s'occupent de résilier votre ancien contrat et de gérer la transition d'assurance. Tout simplement.
ar:
  title: لماذا التأمين <span class="text-[#FCB932] pb-2 px-3 rounded-2xl">الرقمي N’suri</span>
  item1:
    title: الشفافية الكاملة في ضماناتك وتكلفة التأمين الخاص بك.
    subtitle: نحن مقتنعون بأن التأمين يجب ألا يكون موضوعًا مبهمًا بعد الآن. مع N’suri، أصبح كل شيء أخيرًا واضحًا وشفافًا. لا مزيد من المفاجآت غير السارة، نحن نساعدك على فهم ضماناتك وتكلفة التأمين الخاص بك. تختار ما تغطيه أو لا تغطيه.
  item2:
    title: سعرك في 2 دقيقة والاشتراك في 10 دقيقة
    subtitle: تغيير التأمين لا ينبغي أن يخيف أي شخص. يتيح لك حلنا الرقمي بنسبة 100٪ الاشتراك في بضع دقائق، بدون أوراق أو موعد مع المصرفي الخاص بك. نحن نرشدك خطوة بخطوة، حتى التوقيع الإلكتروني لعقدك. ثم تهتم فرقنا بإلغاء عقدك القديم وإدارة انتقال التأمين. ببساطة.
</i18n>
