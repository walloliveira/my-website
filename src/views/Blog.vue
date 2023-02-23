<script setup lang="ts">
import Section from "../components/Section.vue";
</script>

<template>
  <Section title="blog.title" subtitle="blog.subtitle" text="blog.text">
    <VAlert icon="mdi-wrench" height="256px">{{ $t("blog.warning") }}</VAlert>
  </Section>
</template>
