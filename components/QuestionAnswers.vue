<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const { t } = useI18n({
  useScope: 'local',
})
const cards = [
  {
    title: t('item1.title'),
  },
  {
    title: t('item2.title'),
  },
  {
    title: t('item3.title'),
  },
  {
    title: t('item4.title'),
  },
  {
    title: t('item5.title'),
  },
  {
    title: t('item6.title'),
  },
]
</script>

<template>
  <section>
    <div class="mx-auto px-6 pt-14 container lg:mb-30 lg:pt-24 lg:pt-32">
      <h3 class="mx-auto text-lg text-[#193B64] font-bold lg:text-12.5/15" v-html="t('title')" />
      <p class="mx-auto mt-3 text-xs text-[#4A6387] font-medium lg:mt-9 lg:text-2xl" v-html="t('subtitle')" />

      <div class="grid mt-5 gap-x-10 lg:grid-flow-col-dense lg:grid-cols-2 lg:mt-28">
        <Disclosure
          v-for="card, idx in cards"
          v-slot="{ open }" :key="idx"
          :class="{ 'lg:col-start-2': idx === 5 || idx === 4 }"
          as="div"
          class="relative col-start-1 [&[data-headlessui-state=open]]:bg-[#FCB932]/15 hover:bg-[#FCB932]/15 all:transition"
        >
          <DisclosureButton as="div" class="my-8 flex cursor-pointer items-center justify-between px-5 text-xs leading-normal lg:text-lg">
            <span>{{ card.title }} </span>
            <UnoIcon
              i-ic-outline-keyboard-arrow-down
              class="me-3 size-6 flex-none lg:size-10"
              :class="open && 'bg-[#F2BC50] rotate--180'"
            />
          </DisclosureButton>
          <DisclosurePanel class="text-md mt-8 text-[#181B34]/60">
            ...
          </DisclosurePanel>
          <div class="h-1.5px w-full bg-[#8FA2B9]" />
        </Disclosure>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
fr:
  title: Vous avez des questions? <span class="text-[#F2BC50] bg-[#193B64] pb-2 px-3 rounded-2xl">On&nbsp;a&nbsp;des&nbsp;réponses</span>
  subtitle: Une question reste sans réponse ? N’hésitez pas à consulter notre FAQ ou un conseiller via le chat !
  item1:
    title: Doit-on déclarer tout changement survenu à son assureur ?
  item3:
    title: Quelles différences entre une assurance auto au tiers et tous risques ?
  item2:
    title: Quels sont les risques couverts par une assurance voiture ?
  item5:
    title: Quelle est la différence entre un conducteur principal et secondaire ?
  item4:
    title: Qu’est-ce qu’un relevé d’informations ?
  item6:
    title: Comment calculer le coefficient de bonus-malus ?

ar:
  title: هل لديك أسئلة؟ <span class="text-[#F2BC50] bg-[#193B64] pb-2 px-3 rounded-2xl">لدينا إجابات</span>
  subtitle: هل يبقى السؤال بلا إجابة ؟ لا تتردد في استشارة الأسئلة الشائعة أو المستشار عبر الدردشة!
  item1:
    title: هل يجب أن أبلغ شركة التأمين الخاصة بي عن أي تغييرات ؟
  item3:
    title: ما هي الاختلافات بين تأمين السيارات من طرف ثالث وجميع المخاطر ؟
  item2:
    title: ما هي المخاطر التي يغطيها التأمين على السيارات ؟
  item5:
    title: ما هو بيان المعلومات ؟
  item4:
    title: ما الفرق بين السائق الأساسي والثانوي ؟
  item6:
    title: كيفية حساب معامل علاوة المالوس ؟
</i18n>
