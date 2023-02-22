<script setup lang="ts">
import { ref } from "vue";

const buttonText = ref("home");
const menu = ref([
  {
    icon: "mdi-home",
    value: "home",
    text: "Home",
  },
  {
    icon: "mdi-information-variant",
    value: "about",
    text: "About",
  },
  {
    icon: "mdi-arrow-projectile-multiple",
    value: "skills",
    text: "Skills",
  },
  {
    icon: "mdi-view-dashboard",
    value: "projects",
    text: "Projects",
  },
  {
    icon: "mdi-post",
    value: "blog",
    text: "My Blog",
  },
  {
    icon: "mdi-phone",
    value: "contact",
    text: "Contact",
  },
]);
</script>

<template>
  <VBtnToggle
    v-model="buttonText"
    group
    color="secondary-darken-1"
    rounded="0"
    mandatory
  >
    <VBtn
      variant="text"
      v-for="{ icon, text, value } in menu"
      :key="value"
      :prepend-icon="icon"
      :value="value"
      :href="`#${value}`"
    >
      {{ text }}
    </VBtn>
  </VBtnToggle>
</template>
