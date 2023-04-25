<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot } from '@headlessui/vue'
defineProps<{ isActive: boolean }>()
const localePath = useLocalePath()

const route = useRoute()
</script>

<template>
  <TransitionRoot
    :show="isActive"
    enter="transform transition ease-out"
    enter-from="opacity-0 -translate-y-10"
    enter-to="opacity-100 translate-0"
    leave="transform transition ease-in"
    leave-from="opacity-100 translate-0"
    leave-to="opacity-0 -translate-y-10"
  >
    <div class="my-20 px-6">
      <div class="mt-3 b-b pb-3 pt-6 op-80 hover:op-100">
        <NuxtLink class="text-sm" :to="localePath('/')">
          <span>{{ $t('home') }}</span>
        </NuxtLink>
      </div>
      <div class="mt-3 b-b pb-3 pt-6 op-80 hover:op-100">
        <a class="text-sm" href="#contact-us">
          <span>{{ $t('contact-us') }}</span>
        </a>
      </div>
      <div class="mt-3 b-b pb-3 pt-6 op-80 hover:op-100">
        <NuxtLink class="text-sm" :to="localePath('/faq')">
          <span> FAQ </span>
        </NuxtLink>
      </div>
    </div>
  </TransitionRoot>
</template>
