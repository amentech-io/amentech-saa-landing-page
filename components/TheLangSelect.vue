<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

const { localeProperties, setLocale, locales } = useI18n()
</script>

<template>
  <Listbox v-slot="{ open }" v-model="localeProperties">
    <div class="relative">
      <ListboxButton
        class="relative w-full flex cursor-default cursor-pointer rounded-lg px-3 py-2 text-left focus-visible:border-indigo-500 focus:outline-none focus-visible:ring-2"
      >
        <span class="flex items-center truncate text-2xl text-white">
          {{ localeProperties.name }}
          <UnoIcon i-ic-round-arrow-drop-down class="ml-2 h-5 w-5" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-30 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm focus:outline-none"
        >
          <ListboxOption
            v-for="i in locales"
            v-slot="{ active, selected }"
            :key="i.code"
            :value="i"
            @click="() => setLocale(i.code)"
          >
            <li
              class="relative cursor-pointer select-none py-2 pl-10 pr-4 text-black"
              :class="active && 'bg-[#181B34]/20'"
            >
              <span class="block truncate">
                {{ i.name }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
              >
                <UnoIcon i-ic-baseline-check :class="open ? '' : 'text-opacity-70'" class="h-5 w-5 text-[#181B34]" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
