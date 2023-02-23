<script setup lang="ts">
import { ref } from "vue";

const buttonText = ref("home");
const menu = ref([
  {
    icon: "mdi-home",
    value: "home",
  },
  {
    icon: "mdi-information-variant",
    value: "about",
  },
  {
    icon: "mdi-arrow-projectile-multiple",
    value: "skills",
  },
  {
    icon: "mdi-view-dashboard",
    value: "portfolio",
  },
  {
    icon: "mdi-post",
    value: "blog",
  },
  {
    icon: "mdi-phone",
    value: "contact",
  },
]);
</script>

<template>
  <div class="d-flex align-center">
    <VBtnToggle
      v-model="buttonText"
      group
      color="secondary-darken-1"
      rounded="0"
      mandatory
    >
      <VBtn
        variant="text"
        v-for="{ icon, value } in menu"
        :key="value"
        :prepend-icon="icon"
        :value="value"
        :href="`#${value}`"
      >
        {{ $t(`appBar.menu.${value}`) }}
      </VBtn>
    </VBtnToggle>
    <VSelect
      class="d-flex"
      density="compact"
      variant="outlined"
      v-model="$i18n.locale"
      :label="$t('appBar.locale.label')"
      :items="$i18n.availableLocales"
    />
  </div>
</template>
