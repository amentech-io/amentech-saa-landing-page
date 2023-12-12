<script setup>
useHead({
  title: 'Société Nationale d\'Assurance SAA',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
  meta: [
    {
      name: 'description',
      content: 'Entreprise Publique Economique, agréée pour pratiquer l’ensemble des branches d’assurance, La Société Nationale d ’Assurance SAA, est la première société d’assurance et de la réassurance en Algérie.',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
}

html.dark {
  background: #222;
  color: white;
}
</style>
