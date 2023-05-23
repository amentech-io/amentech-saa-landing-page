<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'amentech',
  },
})

const localePath = useLocalePath()
const menuIsOpen = ref(false)
</script>

<template>
  <nav class="mb-14 lg:bg-transparent">
    <div v-motion-slide-top class="w-full">
      <div class="relative z-10 m-auto flex px-6 container">
        <NuxtLink class="mt-6px w-15 lg:w-45" :to="localePath('index')">
          <Logo class="flex-none lg:w-auto" />
        </NuxtLink>

        <!-- {{{ desktop -->
        <ul class="ml-auto hidden items-center whitespace-nowrap text-lg fw-semibold lg:flex 2xl:gap-13">
          <li>
            <NuxtLink
              :to="localePath('index')"
              class="inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2"
            >
              {{ $t('home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2"
              to="contact"
            >
              {{ $t('contact-us') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('faq')"
              class="inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2"
            >
              FAQ
            </NuxtLink>
          </li>
          <li>
            <TheLangSelect />
          </li>
        </ul>
        <!-- }}} -->

        <div class="ml-a flex items-center lg:hidden">
          <TheLangSelect class="text-3 [&_span]:text-3" />

          <div class="h-4 w-0.5 bg-gray-4" />

          <span class="mr-3 h-1/6 w-0.5 bg-white/50" />
          <button class="py-2" @click="menuIsOpen = !menuIsOpen">
            <UnoIcon :class="!menuIsOpen ? 'i-ic-baseline-menu' : 'i-ic-baseline-close'" />
          </button>
        </div>
      </div>

      <HamburgerMenu :is-active="menuIsOpen" />
    </div>
  </nav>
</template>
