<script setup lang="ts">
import { computed, ref } from "vue";
import AboutMe1 from "../assets/about-me-1.webp";
import Content from "../components/Content.vue";
import { useDisplay } from "vuetify";

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
    <VCol cols="12" xs="2" sm="12" lg="4">
      <VImg :src="AboutMe1" />
    </VCol>
    <VCol xs="12" sm="12" lg="8">
      <Content
        title="about.title"
        subtitle="about.subtitle"
        text="about.text"
        id="about"
      >
        <VRow>
          <VCol xs="12" sm="12" lg="4" v-for="role in roles" :key="role.title">
            <div class="d-flex flex-column align-center">
              <VIcon :icon="role.icon" size="124px" />
              <p class="text-subtitle-1">{{ $t(role.title) }}</p>
              <p class="text-body-1 text-medium-emphasis mt-6">
                {{ $t(role.text) }}
              </p>
            </div>
          </VCol>
        </VRow>
      </Content>
    </VCol>
  </VRow>
</template>
