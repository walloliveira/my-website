<script setup lang="ts">
import Content from "../components/Content.vue";
</script>

<template>
  <Content
    title="blog.title"
    subtitle="blog.subtitle"
    text="blog.text"
    id="blog"
  >
    <VAlert icon="mdi-wrench" height="256px">{{ $t("blog.warning") }}</VAlert>
  </Content>
</template>
