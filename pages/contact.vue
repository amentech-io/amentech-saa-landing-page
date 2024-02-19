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
  <div>
    <div class="from-[#0369A1] to-[#053B67] bg-gradient-to-r pb-80">
      <div class="flex flex-col">
        <TheNav />
      </div>
      <div id="contact-us" class="overflow-hidden pt-8">
        <div class="relative m-auto px-6 py-8 container">
          <div class="flex flex-col">
            <h4
              class="text-center text-base text-white font-extrabold lg:text-9"
              v-html="t('contact-us')"
            />
            <div class="grid mx-auto mt-4 max-w-80ch gap-8 text-center text-xs text-white lg:mt-13 [&_b]:block lg:text-2xl lg:leading-10">
              <p>{{ t('subtitle1') }}</p>
              <p>{{ t('subtitle2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative isolate pb-40">
      <Form
        v-slot="fieldErrors"
        class="mx-auto mt-6 max-w-80ch border border-[#4A6387] rounded-5 bg-white px-2 py-4 text-xl space-y-2 lg:px-19 lg:py-25 lg:shadow-[0px_0px_25px_0px_#181B341A] lg:-mt-75 sm:space-y-8"
        :validation-schema="fieldSchema"
        @submit="onSubmit"
      >
        <div class="absolute h-80 w-80 translate-x--1/1 -top-50 -z-1">
          <img src="/contact-location-icon.svg" class="h-full w-full" alt="contact location">
        </div>

        <div class="flex gap-8">
          <div class="flex flex-grow flex-col space-y-2">
            <label for="fullName" class="text-xs font-medium lg:text-5">{{ $t('full-name') }} <span class="text-red-500">*</span></label>
            <div
              class="of-hidden rounded-2xl text-black/80 ring ring-[#C4B9BA] hover:ring-[#C4B9BA]/60"
              :class="{ 'ring-red': fieldErrors.errors.fullName }"
            >
              <Field
                id="fullName" name="fullName" type="text"
                class="w-full bg-white px-3 py-4 text-xs outline-none lg:text-base"
              />
            </div>
          </div>

          <div class="flex flex-grow flex-col space-y-2">
            <label for="email" class="text-xs font-medium lg:text-5">{{ $t('email') }} <span class="text-red-500">*</span></label>
            <div
              class="of-hidden rounded-2xl text-black/80 ring ring-[#C4B9BA] hover:ring-[#C4B9BA]/60"
              :class="{ 'ring-red': fieldErrors.errors.email }"
            >
              <Field id="email" name="email" class="w-full bg-white px-3 py-4 text-xs outline-none lg:text-base" type="text" />
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="object" class="text-xs font-medium lg:text-5">{{ $t('subject') }} <span class="text-red-500">*</span></label>
          <div
            class="of-hidden rounded-2xl bg-white pe-2 text-black/80 ring ring-[#C4B9BA] hover:border-[#C4B9BA]/60"
            :class="{ 'ring-red': fieldErrors.errors.object }"
          >
            <Field
              id="object" as="select" name="object" :value="null"
              class="w-full bg-white bg-white px-3 py-4 text-xs outline-none lg:text-base"
            >
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
          <label for="phone" class="text-xs font-medium lg:text-5">{{ $t('phone') }} <span class="text-red-500">*</span></label>
          <div
            class="of-hidden rounded-2xl text-black/80 ring ring-[#C4B9BA] hover:ring-[#C4B9BA]/60"
            :class="{ 'ring-red': fieldErrors.errors.phone }"
          >
            <Field id="phone" name="phone" class="w-full bg-white px-3 py-4 text-xs outline-none lg:text-base" type="text" />
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="body" class="text-xs font-medium lg:text-5">{{ $t('message') }} <span class="text-red-500">*</span></label>
          <Field
            id="body"
            as="textarea"
            name="body"
            type="text"
            rows="3"
            class="h-full w-full resize-none rounded-2xl bg-white p-2 px-3 py-4 text-xs text-black/80 outline-none ring ring-[#C4B9BA] lg:text-base hover:ring-[#C4B9BA]/60"
            :class="{ 'ring-red': fieldErrors.errors.body }"
          />
        </div>

        <div class="flex gap-6">
          <img
            :src="captcha" alt="captcha"
            class="w-38 cursor-pointer rounded-2xl bg-white object-contain px-4"
            @click="getCaptcha()"
          >
          <div
            class="of-hidden rounded-2xl text-black/80 ring ring-[#C4B9BA] hover:ring-[#C4B9BA]/60"
            :class="{ 'ring-red': fieldErrors.errors.captcha }"
          >
            <Field id="captcha" name="captcha" class="w-full bg-white px-3 py-4 text-xs outline-none lg:text-base" type="text" />
          </div>
        </div>

        <div class="pt-3 lg:pt-7">
          <button
            class="group w-full inline-flex items-center justify-center rounded-2xl bg-[#F2BC50] px-10 py-2 text-[#183A63] font-semibold transition lg:px-18 lg:py-5 lg:text-lg hover:opacity-90 hover:ring-4 hover:ring-white/50"
          >
            <span>{{ $t('send') }}</span>
            <UnoIcon i-ic-baseline-arrow-forward class="ml-2 inline-block h-5 w-5 transition group-hover:translate-x-1 rtl:scale-x--100 rtl:group-hover:translate-x--1" />
          </button>
        </div>
      </Form>
    </div>
    <Footer />
  </div>
</template>

<i18n lang="yaml">
fr:
  contact-us: Contactez<span class="text-[#F2BC50]">-Nous</span>
  title: Une protection optimale
  subtitle1: Nos équipes sont là pour répondre à tous vos besoins, que ce soit pour discuter de vos préoccupations, obtenir des informations détaillées sur nos produits,
  subtitle2: faire une réclamation ou bénéficier d'un service client dévoué qui vous accompagnera tout au long de votre parcours vers une protection complète et adaptée à votre vie
</i18n>
