<script setup lang="ts">
import useValidate from 'vue-tiny-validate'
import { email, safeParse, string } from 'valibot'

const { t } = useI18n({
  useScope: 'local',
})

let contact = reactive({
  fullName: '',
  email: '',
  object: '',
  phone: '',
  body: '',
})

const rules = reactive({
  fullName: {
    name: 'required',
    test: (value: any): boolean => Boolean(value),
    message: 'le champ du nom complet ne doit pas être vide.',
  },
  email: {
    name: 'required',
    test: (value: any): boolean => safeParse(string([email()]), value).success,
    message: 'le champ du email complet ne doit pas être vide.',
  },
  object: {
    name: 'required',
    test: (value: any): boolean => Boolean(value),
    message: 'le champ du object ne doit pas être vide.',
  },
  phone: {
    name: 'required',
    test: (value: any): boolean => Boolean(value),
    message: 'le champ du object ne doit pas être vide.',
  },
  body: {
    name: 'required',
    test: (value: any): boolean => Boolean(value),
    message: 'le champ du message ne doit pas être vide.',
  },
})

const { result } = useValidate(contact, rules)

// const mailto = computed(() => {
//   return `mailto:contact@amentech.dz?subject=${contact.object}&body=${contact.body}`
// })

function onSubmit(e: { preventDefault: () => void }) {
  e.preventDefault()
  result.value.$test()

  if (!result.value.$invalid) {
    $fetch('/api/contact', { method: 'post', body: contact })
    result.value.$reset()

    contact = {
      fullName: '',
      email: '',
      object: '',
      phone: '',
      body: '',
      }

  }
}
</script>

<template>
  <div id="contact-us" class="pt-8">
    <div class="m-auto px-6 py-8 container">
      <div class="flex flex-col">
        <h4
          class="text-center text-base font-extrabold uppercase md:mt-24 lg:text-9"
        >
          {{ $t('contact-us') }}
        </h4>
        <p class="mx-auto mt-4 max-w-70ch text-center text-xs lg:mt-13 [&_b]:block lg:text-2xl lg:leading-10" v-html="t('subtitle', { email: 'contact@amentech.dz' })" />
      </div>

      <form
        @submit="onSubmit"
        class="relative mx-auto border border-[#D95188]/30 mt-6 max-w-80ch bg-white/10 rounded-5 text-xl lg:mt-14 space-y-2 lg:px-19 lg:py-25 lg:shadow-[0px_0px_25px_0px_#181B341A] sm:space-y-8"
      >
        <div class="absolute aspect-1 w-1/2 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FC5185]/25 blur-300" />
        <div class="flex gap-8">
          <div class="flex flex-grow flex-col space-y-2">
            <label for="name" class="text-xs font-medium lg:text-5">{{ $t('full-name') }} *</label>
            <div class="of-hidden border border-[#181B34] rounded-lg text-black/80 hover:border-[#181B34]/60" :class="{ 'ring ring-red': result.fullName.$invalid }">
              <input id="name" v-model="contact.fullName" class="w-full px-3 py-4 text-xs outline-none lg:text-base" type="text">
            </div>
          </div>

          <div class="flex flex-grow flex-col space-y-2">
            <label for="email" class="text-xs font-medium lg:text-5">E-Mail *</label>
            <div
              class="of-hidden border border-[#181B34] rounded-lg text-black/80 hover:border-[#181B34]/60"
              :class="{ 'ring ring-red': result.email.$invalid }"
            >
              <input id="email" v-model="contact.email" class="w-full px-3 py-4 text-xs outline-none lg:text-base" type="text">
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="object" class="text-xs font-medium lg:text-5">{{ $t('subject') }} *</label>
          <div class="of-hidden border border-[#181B34] rounded-lg text-black/80 hover:border-[#181B34]/60" :class="{ 'ring ring-red': result.object.$invalid }">
            <input id="object" v-model="contact.object" class="w-full px-3 py-4 text-xs outline-none lg:text-base" type="text">
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="object" class="text-xs font-medium lg:text-5">{{ $t('phone') }} *</label>
          <div class="of-hidden border border-[#181B34] rounded-lg text-black/80 hover:border-[#181B34]/60" :class="{ 'ring ring-red': result.phone.$invalid }">
            <input id="phone" v-model="contact.phone" class="w-full px-3 py-4 text-xs outline-none lg:text-base" type="text">
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="message" class="text-xs font-medium lg:text-5">Message *</label>
          <textarea
            id="message"
            v-model="contact.body"
            :class="{ 'ring ring-red': result.body.$invalid }"
            class="h-full w-full resize-none border border-[#181B34] rounded p-2 px-3 py-4 text-xs text-black/80 outline-none hover:border-[#181B34]/60 lg:rounded-md lg:text-base" rows="3"
          />
        </div>

        <div class="flex justify-end pt-3 lg:pt-7">
          <input
            class="inline-block w-full rounded-3 from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-l px-10 py-2 font-semibold text-white transition lg:px-18 lg:py-5 lg:text-lg hover:opacity-90 hover:ring-4 hover:ring-white/50"
            type="submit" :value="$t('send')" @click="onSubmit"
          >
        </div>
      </form>
    </div>
  </div>
</template>

<i18n lang="yaml">
fr:
  title: Une protection optimale
  subtitle: Intéressé pour découvrir nos produits et services à travers une démonstration, ou pour résoudre vos problémes bien spécifiques, contactez-nous sur <b>{email}</b> ou envoyez     nous vos informations en remplissant la grille suivante
</i18n>
