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
    <div class="w-full">
      <div class="relative z-10 m-auto flex justify-between px-6 container rtl:flex-row-reverse">
        <NuxtLink class="mt-6px w-15 lg:w-45" :to="localePath('index')">
          <Logo class="flex-none lg:w-auto" />
        </NuxtLink>

        <!-- {{{ desktop -->
        <ul class="hidden items-center whitespace-nowrap text-lg fw-semibold lg:flex rtl:flex-row-reverse 2xl:gap-13">
          <li>
            <NuxtLink
              :to="localePath('index')"
              class="nav-hover relative inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2"
            >
              {{ $t('home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="nav-hover relative inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2"
              :to="localePath('contact')"
            >
              {{ $t('contact-us') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('faq')"
              class="nav-hover relative inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2"
            >
              FAQ
            </NuxtLink>
          </li>
          <li>
            <TheLangSelect />
          </li>
        </ul>
        <!-- }}} -->

        <div class="ml-a flex items-center lg:hidden rtl:flex-row-reverse">
          <TheLangSelect class="text-3 [&_span]:text-3" />

          <div class="mr-3 h-4 w-1px bg-gray-4" />

          <button class="py-2" @click="menuIsOpen = !menuIsOpen">
            <UnoIcon :class="!menuIsOpen ? 'i-ic-baseline-menu' : 'i-ic-baseline-close'" />
          </button>
        </div>
      </div>

      <HamburgerMenu :is-active="menuIsOpen" />
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
  background: linear-gradient(-90deg, #FCB932, #009EAB);
}
</style>
