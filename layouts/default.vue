<script setup lang="ts">
const head = useLocaleHead({ addSeoAttributes: true })
const { localeProperties } = useI18n()
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs?.lang" :dir="localeProperties?.dir">
      <Head>
        <template v-for="(link, index) in head.link" :key="index">
          <Link :hid="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="(meta, index) in head.meta" :key="index">
          <Meta :hid="meta.hid" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body class="font-sans">
        <slot />
      </Body>
    </Html>
  </div>
</template>
