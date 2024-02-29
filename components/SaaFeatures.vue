<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
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
  {
    title: t('item5.title'),
    description: t('item5.description'),
  },
  {
    title: t('item6.title'),
    description: t('item6.description'),
  },
]
</script>

<template>
  <section class="relative bg-[#E4E9ED]">
    <div class="mx-auto py-11 container lg:pb-23 lg:pt-25">
      <h3 class="flex items-center px-6 text-lg text-[#193B64] font-bold lg:text-12.5/15">
        <span v-html="t('title')" />
      </h3>

      <div class="grid mx-6 mb-8 mt-5 gap-5 lg:grid-cols-3 lg:grid-rows-2 lg:mt-22">
        <div
          v-for="card, idx in cards" :key="idx"
          class="box-gradient group relative flex-none snap-start border-1px border-transparent rounded-8 px-5 py-4 shadow-md hover:border-transparent lg:px-8 lg:py-6"
        >
          <p class="mt-4 max-w-20ch text-sm font-bold lg:mt-6 lg:text-2xl group-hover:text-[#F77B26]">
            {{ card.title }}
          </p>
          <p class="mt-3 text-xs leading-loose lg:mt-4 lg:text-xl">
            {{ card.description }}
          </p>
        </div>
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

/* #009EAB, #F9B933AD, #FCB932, #009EAB */
.box-gradient {
  --color: white, white;
  --bg-color: white, white;
  background: linear-gradient(140deg, var(--bg-color)) padding-box,
    linear-gradient(45deg, var(--color)) border-box;
}
.box-gradient:hover {
  --color: #193B64, #193B64;
  --bg-color:  #DFE6EC, #D4DEE8;
}
</style>

<i18n lang="yaml">
fr:
  title: Pourquoi l’assurance auto avec <span class="text-[#F2BC50] bg-[#183A63] pb-2 px-3 rounded-2xl">N’suri?</span>
  item1:
    title: Agence d'Assurance à Portée de Main
    description: Notre application mobile met votre agence d'assurance à portée de main, vous permettant de gérer toutes vos polices et besoins d'assurance depuis n'importe où.
  item2:
    title: Souscription en Quelques Clics
    description: Obtenez une couverture d'assurance sans tracas grâce à une souscription simple et rapide en quelques clics seulement.
  item3:
    title: Gestion Facile des Polices
    description: Centraliser et gérer toutes vos polices d'assurance en temps réel, avec facilité et simplicité.
  item4:
    title: Notifications Utiles
    description: Recevez des rappels de paiement et des alertes sur les mises à jour de vos polices directement sur votre mobile.
  item5:
    title: Déclarations de Réclamations
    description: Facilitées Déclarez vos sinistres directement depuis l'application pour un traitement rapide et efficace.
  item6:
    title: Améliorations constantes
    description: Bénéficiez d'améliorations régulières pour une expérience d'assurance toujours à la pointe de l'innovation.
ar:
  title: لماذا التأمين على السيارات في <span class="text-[#F2BC50] bg-[#183A63] pb-2 px-3 rounded-2xl">N’suri?؟</span>
  item1:
    title: وكالة التأمين في متناول يدك
    description: يضع تطبيق الهاتف المحمول الخاص بنا وكالة التأمين الخاصة بك في متناول يدك، مما يسمح لك بإدارة جميع بوالصك واحتياجات التأمين من أي مكان.
  item2:
    title: الاشتراك في بضع نقرات
    description: احصل على تغطية تأمينية خالية من المتاعب مع اشتراك سريع وسهل في بضع نقرات فقط.
  item3:
    title: إدارة الخط السهل
    description: قم بمركزية وإدارة جميع بوالص التأمين الخاصة بك في الوقت الفعلي، بسهولة وبساطة.
  item4:
    title: إشعارات مفيدة
    description: استلم تذكيرات الدفع والتنبيهات حول تحديثات الخط الخاصة بك مباشرة على هاتفك المحمول.
  item5:
    title: إعلانات المطالبات
    description: أبلغ عن مطالباتك مباشرة من طلب معالجة سريعة وفعالة.
  item6:
    title: التحسينات المستمرة
    description: الاستفادة من التحسينات المنتظمة لتجربة التأمين في طليعة الابتكار دائمًا.
</i18n>
