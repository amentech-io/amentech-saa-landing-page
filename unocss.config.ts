import {
  defineConfig,
  presetAttributify,
  // presetTypography,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    // presetTypography(),
    presetIcons({
      scale: 1.2,
      collections: {
        custom: {
          linkedin: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 43 43"><path fill="#fff" fill-rule="evenodd" d="M21.5 43C33.374 43 43 33.374 43 21.5S33.374 0 21.5 0 0 9.626 0 21.5 9.626 43 21.5 43Zm-9.167-12h4.146V17.647h-4.146V31Zm-.331-17.599c0 1.326 1.076 2.425 2.401 2.425 1.326 0 2.402-1.099 2.402-2.425a2.401 2.401 0 1 0-4.803 0ZM27.86 31h4.141v-7.335c0-3.59-.771-6.353-4.968-6.353-2.017 0-3.369 1.107-3.923 2.157h-.057v-1.822h-3.977V31h4.142v-6.611c0-1.742.331-3.425 2.487-3.425 2.124 0 2.155 1.987 2.155 3.536V31Z" clip-rule="evenodd"/></svg>',
          email: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 43 43"><path fill="#fff" fill-rule="evenodd" d="M21.5 43C33.374 43 43 33.374 43 21.5S33.374 0 21.5 0 0 9.626 0 21.5 9.626 43 21.5 43ZM11.44 14.44A1.5 1.5 0 0 1 12.5 14h18a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-18a1.5 1.5 0 0 1-1.5-1.5v-12c0-.398.158-.78.44-1.06Zm10.06 6.145 7.35-5.085h-14.7l7.35 5.085Zm-9-4.402V27.5h18V16.183l-8.573 5.932a.75.75 0 0 1-.854 0L12.5 16.183Z" clip-rule="evenodd"/></svg>',
          facebook: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 43 43"><path fill="#fff" fill-rule="evenodd" d="M21.5 43C33.374 43 43 33.374 43 21.5S33.374 0 21.5 0 0 9.626 0 21.5 9.626 43 21.5 43Zm5.122-24.607-.611 3.982H22.8V32h-4.304v-9.625H15v-3.982h3.497V15.36c0-3.452 2.057-5.359 5.203-5.359 1.507 0 3.083.269 3.083.269v3.39h-1.737c-1.71 0-2.245 1.061-2.245 2.15v2.585h3.82Z" clip-rule="evenodd"/></svg>',
        },
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Lato:100,200,300,400,500,600,700,800,900',
        // jost: 'Jost',
        // serif: 'DM Serif Display',
        // mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
