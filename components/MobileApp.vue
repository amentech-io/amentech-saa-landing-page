<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const config = useRuntimeConfig()

const cards = [
  {
    title: t('item1.title'),
    description: t('item1.description'),
  },
  {
    title: t('item2.title'),
    description: t('item2.description'),
  },
  {
    title: t('item3.title'),
    description: t('item3.description'),
  },
  {
    title: t('item4.title'),
    description: t('item4.description'),
  },
]

const itemSelected = ref(0)

function selectItem(idx: number) {
  itemSelected.value = idx
}
</script>

<template>
  <section>
    <div class="relative mx-auto px-6 pt-6 container lg:pt-17">
      <h3 class="mx-auto max-w-32ch text-center text-lg text-[#193B64] font-bold lg:text-12.5/15" v-html="t('title')" />

      <p
        class="mx-auto mt-3 max-w-74ch text-center text-xs text-[#193B64] font-medium lg:mt-10 lg:text-2xl"
        v-html="t('subtitle')"
      />

      <div class="grid mt-2 gap-4 lg:grid-cols-[1.5fr_1fr] lg:mt-22 2xl:pl-0">
        <template
          v-for="card, idx in cards" :key="idx"
        >
          <button
            hover="from-[#F3F6F9] to-[#E7EEF5] bg-gradient-to-r border-[#193B64]"
            class="group border border-transparent rounded-3xl text-left lg:block"
            @mouseover="selectItem(idx)"
          >
            <div
              class="grid grid-cols-[auto_1fr] rounded-lg px-3 pb-4 pt-6 lg:rounded-8 lg:px-8 lg:py-6"
            >
              <div class="row-span-2 my-auto me-8 flex items-center lg:mt-6">
                <span
                  class="text-extrabold h-15 w-15 flex flex-none items-center justify-center rounded-2xl bg-[#FCB932] pb-0.8 text-sm text-white lg:text-3xl group-hover:text-[#193B64]"
                >
                  {{ idx + 1 }}
                </span>
              </div>
              <p class="max-w-38ch text-start text-sm text-[#193B64] font-bold lg:text-2xl">
                {{ card.title }}
              </p>
              <p class="mt-3 max-w-50ch text-start text-xs text-[#193B64] leading-loose lg:mt-4 lg:text-xl">
                {{ card.description }}
              </p>
            </div>
          </button>

          <div
            :class="idx !== itemSelected && 'lg:hidden'"
            class="relative grid place-content-center lg:row-span-4 lg:col-start-2 lg:row-start-1 lg:h-50rem"
          >
            <img class="z-10 aspect-1 w-full object-contain lg:aspect-auto" :src="`${config.app.baseURL}mobile-app-${idx + 1}.png`" alt="mobile app">
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  --at-apply: h-2 w-2;
}

/* Track */
::-webkit-scrollbar-track {
  --at-apply: gray/10;
}

/* Handle */
::-webkit-scrollbar-thumb {
  --at-apply: bg-white/20 rounded;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  --at-apply: bg-white/30 rounded;
}
</style>

<i18n lang="yaml">
fr:
  title: Si <span class="mb-1 bg-[#F2BC50] px-2 pb-1 rounded-xl">rapide</span> que vous pouvez le faire pendant que votre café est encore chaud
  subtitle: Souscrivez à une assurance auto en un temps record grâce à <b>NSURI</b>, l'application qui simplifie votre expérience d'assurance automobile. Ne perdez plus de temps en procédures fastidieuses, notre plateforme intuitive vous permet d'obtenir une couverture sur mesure en quelques clics seulement.
  item1:
    title: Recevez votre devis instantané sans engagement en quelques clics!
    description: Personnalisez les détails de votre couverture en répondant à quelques questions rapides et obtenez un taux estimé en quelques secondes.
  item2:
    title: Poursuivez à une souscription façilement!
    description: Avec NSURI en quelques clics, devenez Assuré à travers notre processus en Ligne facile et optimisé.
  item3:
    title: Payez votre contrat en un clic!
    description: Faites le paiement en ligne de votre contrat en toute simplicité avec NSURI ! Gagnez du temps et profitez de la commodité de gérer votre assurance en ligne.
  item4:
    title: Votre contrat prêt à démarrer
    description: votre contrat devient actif, vous offrant une protection instantanée et une tranquillité d'esprit totale. Plus besoin d'attendre, profitez pleinement de votre assurance personnalisée dès maintenant!
ar:
  title: <span class="mb-1 bg-[#F2BC50] px-2 pb-1 rounded-xl">بسرعة</span>&nbsp; يمكنك القيام بذلك بينما لا تزال قهوتك ساخنة
  subtitle: احصل على تأمين على السيارات في وقت قياسي مع NSURI، التطبيق الذي يبسط تجربة التأمين على السيارات. لا تضيع الوقت في الإجراءات المملة، فإن نظامنا الأساسي البديهي يسمح لك بالحصول على تغطية مخصصة ببضع نقرات فقط.
  item1:
    title: احصل على اقتباس فوري بدون التزام في بضع نقرات فقط!
    description: خصص تفاصيل التغطية الخاصة بك من خلال الإجابة على بعض الأسئلة السريعة واحصل على معدل مقدر في ثوانٍ.
  item2:
    title: استمر في الاشتراك!
    description:  مع NSURI في بضع نقرات فقط، كن مؤمنًا من خلال عمليتنا السهلة والمحسّنة عبر الإنترنت.
  item3:
    title: ادفع عقدك بنقرة واحدة!
    description: اجعل الدفع عبر الإنترنت لعقدك بسهولة مع NSURI! وفر الوقت واستمتع براحة إدارة التأمين عبر الإنترنت.
  item4:
    title: عقدك جاهز للذهاب
    description: يصبح عقدك نشطًا، مما يمنحك الحماية الفورية وراحة البال الكاملة. لا داعي للانتظار، استفد بالكامل من التأمين الشخصي الآن!
</i18n>
