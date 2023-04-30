<script setup lang="ts">
import useValidate from 'vue-tiny-validate'

const route = useRoute()

const isAmenAuto = route.name.includes('amenauto')

const contact = reactive({
  fullName: '',
  email: '',
  object: '',
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
    test: (value: any): boolean => Boolean(value),
    message: 'le champ du email complet ne doit pas être vide.',
  },
  object: {
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

const mailto = computed(() => {
  return `mailto:contact@amentech.dz?subject=${contact.object}&body=${contact.body}`
})

function onSubmit(e: { preventDefault: () => void }) {
  result.value.$test()
  if (result.value.$invalid)
    e.preventDefault()
}
</script>

<template>
  <div id="contact-us" class="pt-8" :class="isAmenAuto ? 'bg-[#F1FDFF]' : 'bg-[#E5F1E9]'">
    <div class="m-auto flex flex-col gap-x-22 gap-y-3 px-6 py-8 container md:flex-row">
      <div class="min-w-1/2 flex flex-col">
        <h4
          class="text-base font-bold uppercase md:mt-24 lg:text-9"
          :class="isAmenAuto ? 'text-[#004B54]' : 'text-[#0B5A1F]'"
        >
          {{ $t('contact-us') }}
        </h4>
        <p class="mt-4 max-w-50ch text-xs [&_b]:block lg:text-2xl lg:leading-10" v-html="$t('contactus.p', { email: 'contact@amentech.dz' })" />
      </div>

      <div class="max-w-50ch w-full text-xl md:ml-a space-y-2 all-transition-shadow sm:space-y-8" @submit="onSubmit">
        <div class="flex flex-col space-y-2">
          <label for="name" class="text-xs font-medium lg:text-5">{{ $t('full-name') }} *</label>
          <div class="of-hidden rounded-lg text-black/80 shadow-sm hover:shadow" :class="{ 'ring ring-red': result.fullName.$invalid }">
            <input id="name" v-model="contact.fullName" class="w-full px-3 py-4 text-xs outline-none lg:text-base" type="text">
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="email" class="text-xs font-medium lg:text-5">E-Mail *</label>
          <div class="of-hidden rounded-lg text-black/80 shadow-sm hover:shadow" :class="{ 'ring ring-red': result.email.$invalid }">
            <input id="email" v-model="contact.email" class="w-full px-3 py-4 text-xs outline-none lg:text-base" type="text">
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="object" class="text-xs font-medium lg:text-5">{{ $t('subject') }} *</label>
          <div class="of-hidden rounded-lg text-black/80 shadow-sm hover:shadow" :class="{ 'ring ring-red': result.object.$invalid }">
            <input id="object" v-model="contact.object" class="w-full px-3 py-4 text-xs outline-none lg:text-base" type="text">
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="message" class="text-xs font-medium lg:text-5">Message *</label>
          <textarea
            id="message"
            v-model="contact.body"
            :class="{ 'ring ring-red': result.body.$invalid }"
            class="h-full w-full resize-none rounded p-2 px-3 py-4 text-xs text-black/80 shadow outline-none lg:rounded-md lg:text-base hover:shadow" rows="3"
          />
        </div>

        <div class="flex justify-end pt-3 lg:pt-7">
          <a
            :href="mailto"
            class="cursor-pointer rounded bg-[#14292C] px-7 py-1 text-xs font-bold text-white lg:px-19 lg:py-3 lg:text-lg hover:opacity-90 hover:ring-4 hover:ring-offset-2 hover:ring-[#14292C]/30"
            type="submit"
            @click="onSubmit"
          >{{ $t('send') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
