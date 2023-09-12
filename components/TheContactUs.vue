<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/valibot'
import { email, minLength, object, string } from 'valibot'

const { t } = useI18n({
  useScope: 'local',
})

const ContactSchema = object({
  fullName: string([minLength(2)]),
  email: string([email()]),
  object: string(),
  captcha: string(),
  phone: string(),
  body: string(),
})

const fieldSchema = toTypedSchema(ContactSchema)

const captcha = ref()
async function getCaptcha() {
  const img = await $fetch('/api/captcha')
  // @ts-expect-error TODO: fix typing
  captcha.value = URL.createObjectURL(img)
}
onMounted(() => {
  getCaptcha()
})

async function onSubmit(v, { resetForm }) {
  const data = await $fetch('/api/contact', { method: 'post', body: v })
  if (data.validateData.success) {
    alert('done')
    resetForm()
  }
  getCaptcha()
}
</script>

<template>
  <div id="contact-us" class="overflow-hidden pt-8">
    <div class="relative m-auto px-6 py-8 container">
      <div class="absolute bottom-0 right-0 mr-20">
        <img src="/contact-mail-icon.svg" alt="contact mail">
      </div>
      <div class="flex flex-col">
        <h4
          class="text-center text-base font-extrabold uppercase md:mt-24 lg:text-9"
        >
          {{ $t('contact-us') }}
        </h4>
        <div class="grid mx-auto mt-4 max-w-80ch gap-8 text-center text-xs lg:mt-13 [&_b]:block lg:text-2xl lg:leading-10">
          <p>{{ t('subtitle1') }}</p>
          <p>{{ t('subtitle2') }}</p>
        </div>
      </div>

      <Form
        v-slot="fieldErrors"
        class="relative mx-auto mt-6 max-w-80ch border border-[#D95188]/30 rounded-5 bg-white/10 px-2 py-4 text-xl lg:mt-14 space-y-2 lg:px-19 lg:py-25 lg:shadow-[0px_0px_25px_0px_#181B341A] sm:space-y-8"
        :validation-schema="fieldSchema"
        @submit="onSubmit"
      >
        <div class="absolute left-0 top-0 translate-x--2/3 translate-y--1/3">
          <img src="/contact-location-icon.svg" alt="contact location">
        </div>

        <div class="absolute right-0 aspect-1 w-1/2 translate-x-1/2 rounded-full bg-[#FC5185]/25 blur-300 -translate-y-1/2" />

        <div class="flex gap-8">
          <div class="flex flex-grow flex-col space-y-2">
            <label for="fullName" class="text-xs font-medium lg:text-5">{{ $t('full-name') }} *</label>
            <div
              class="of-hidden border border-[#181B34] rounded-2xl text-black/80 hover:border-[#181B34]/60"
              :class="{ 'ring ring-red': fieldErrors.errors.fullName }"
            >
              <Field
                id="fullName" name="fullName" type="text"
                class="w-full px-3 py-4 text-xs outline-none lg:text-base"
              />
            </div>
          </div>

          <div class="flex flex-grow flex-col space-y-2">
            <label for="email" class="text-xs font-medium lg:text-5">E-Mail *</label>
            <div
              class="of-hidden border border-[#181B34] rounded-2xl text-black/80 hover:border-[#i81B34]/60"
              :class="{ 'ring ring-red': fieldErrors.errors.email }"
            >
              <Field id="email" name="email" class="w-full px-3 py-4 text-xs outline-none lg:text-base" type="text" />
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="object" class="text-xs font-medium lg:text-5">{{ $t('subject') }} *</label>
          <div
            class="of-hidden border border-[#181B34] rounded-2xl bg-white pr-2 text-black/80 hover:border-[#181B34]/60"
            :class="{ 'ring ring-red': fieldErrors.errors.object }"
          >
            <Field id="object" as="select" name="object" value="Tea" class="tex-tred w-full bg-white px-3 py-4 text-xs outline-none lg:text-base" @change="(e) => console.log(e)">
              <option value="Devis d'assurance">
                Devis d'assurance
              </option>
              <option value="Réclamation d'assurance">
                Réclamation d'assurance
              </option>
              <option value="Support technique">
                Support technique
              </option>
              <option value="Partenariat">
                Partenariat
              </option>
              <option value="Questions générales">
                Questions générales
              </option>
              <option value="Problèmes de facturation">
                Problèmes de facturation
              </option>
              <option value="Commentaires et suggestions">
                Commentaires et suggestions
              </option>
              <option value="Problèmes de connexion">
                Problèmes de connexion
              </option>
              <option value="Assistance en ligne">
                Assistance en ligne
              </option>
              <option value="Informations sur la politique">
                Informations sur la politique
              </option>
            </Field>
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="phone" class="text-xs font-medium lg:text-5">{{ $t('phone') }} *</label>
          <div
            class="of-hidden border border-[#181B34] rounded-2xl text-black/80 hover:border-[#181B34]/60"
            :class="{ 'ring ring-red': fieldErrors.errors.phone }"
          >
            <Field id="phone" name="phone" class="w-full px-3 py-4 text-xs outline-none lg:text-base" type="text" />
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="body" class="text-xs font-medium lg:text-5">Message *</label>
          <Field
            id="body"
            as="textarea"
            name="body"
            type="text"
            rows="3"
            class="h-full w-full resize-none border border-[#181B34] rounded-2xl p-2 px-3 py-4 text-xs text-black/80 outline-none hover:border-[#181B34]/60 lg:text-base"
            :class="{ 'ring ring-red': fieldErrors.errors.body }"
          />
        </div>

        <div class="flex gap-6">
          <img
            :src="captcha" alt="captcha"
            class="w-38 cursor-pointer rounded-2xl bg-white object-contain px-4"
            @click="getCaptcha()"
          >
          <div class="of-hidden border border-[#181B34] rounded-2xl text-black/80 hover:border-[#181B34]/60">
            <Field id="captcha" name="captcha" class="w-full px-3 py-4 text-xs outline-none lg:text-base" type="text" />
          </div>
        </div>

        <div class="flex justify-end pt-3 lg:pt-7">
          <button
            class="inline-block w-full rounded-2xl from-[#1C57BC] via-[#9D5CA2] to-[rgba(252,81,133,0.94)] from-0% to-98% via-47% bg-gradient-to-l px-10 py-2 font-semibold text-white transition lg:px-18 lg:py-5 lg:text-lg hover:opacity-90 hover:ring-4 hover:ring-white/50"
          >
            {{ $t('send') }}
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<i18n lang="yaml">
fr:
  title: Une protection optimale
  subtitle1: Nos équipes sont là pour répondre à tous vos besoins, que ce soit pour discuter de vos préoccupations, obtenir des informations détaillées sur nos produits,
  subtitle2: faire une réclamation ou bénéficier d'un service client dévoué qui vous accompagnera tout au long de votre parcours vers une protection complète et adaptée à votre vie
</i18n>
