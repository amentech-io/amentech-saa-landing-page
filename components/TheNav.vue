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
  <nav class="lg:mb-14 lg:bg-transparent">
    <div class="w-full">
      <div class="relative z-10 m-auto flex justify-between px-6 container">
        <NuxtLink class="mt-6px w-15 lg:w-45" :to="localePath('index')">
          <Logo class="flex-none lg:w-auto" />
        </NuxtLink>

        <!-- {{{ desktop -->
        <ul class="hidden items-center gap-11 whitespace-nowrap fw-semibold lg:flex rtl:flex-row-reverse 2xl:gap-18">
          <li>
            <NuxtLink
              :to="localePath('index')"
              class="nav-hover relative inline-flex items-center rounded-md px-3 py-2 text-2xl text-white font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2"
            >
              {{ $t('home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="nav-hover relative inline-flex items-center rounded-md px-3 py-2 text-2xl text-white font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2"
              :to="localePath('contact')"
            >
              {{ $t('contact-us') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('faq')"
              class="nav-hover relative inline-flex items-center rounded-md px-3 py-2 text-2xl text-white font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2"
            >
              FAQ
            </NuxtLink>
          </li>
          <li>
            <TheLangSelect />
          </li>
        </ul>
        <!-- }}} -->

        <div class="ms-a flex items-center lg:hidden">
          <TheLangSelect class="text-3 [&_span]:text-3" />

          <div class="me-3 h-4 w-1px bg-gray-4" />

          <button class="py-2" @click="menuIsOpen = !menuIsOpen">
            <UnoIcon
              class="bg-white"
              :class="!menuIsOpen ? 'i-ic-baseline-menu' : 'i-ic-baseline-close'"
            />
          </button>
        </div>
      </div>

      <HamburgerMenu class="relative z-10" :is-active="menuIsOpen" />
    </div>
  </nav>
</template>

<style>
.nav-hover:hover::before {
  content: "";
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  height: 5px;
  border-radius: 5px;
  background: #FCB932;
}
</style>
