<script setup lang="ts">
import { ref } from "vue";
import AboutMe1 from "../assets/about-me-1.webp";

const roles = ref([
  {
    title: "about.roles[0].title",
    text: "about.roles[0].text",
    icon: "mdi-application-braces-outline",
  },
  {
    title: "about.roles[1].title",
    text: "about.roles[1].text",
    icon: "mdi-application-cog-outline",
  },
  {
    title: "about.roles[2].title",
    text: "about.roles[2].text",
    icon: "mdi-cloud-cog",
  },
]);
</script>

<template>
  <VRow class="mt-16 mb-16">
    <VCol cols="4">
      <VImg :src="AboutMe1" />
    </VCol>
    <VCol cols="8">
      <VRow>
        <VCol cols="12">
          <div class="d-flex flex-column">
            <p class="text-subtitle-1">{{ $t("about.subtitle") }}</p>
            <p class="text-h2">{{ $t("about.title") }}</p>
            <p class="text-body-1 text-medium-emphasis mt-6">
              {{ $t("about.text") }}
            </p>
          </div>
        </VCol>
        <VCol cols="4" v-for="role in roles" :key="role.title">
          <div class="d-flex flex-column align-stretch">
            <VIcon :icon="role.icon" size="124px" />
            <p class="text-subtitle-1">{{ $t(role.title) }}</p>
            <p class="text-body-1 text-medium-emphasis mt-6">
              {{ $t(role.text) }}
            </p>
          </div>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
