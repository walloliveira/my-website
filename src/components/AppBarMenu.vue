<script setup lang="ts">
defineProps(["isMobile", "menuActive", "menu"]);
</script>

<template>
  <div>
    <VTabs centered :model-value="menuActive">
      <VTab
        v-for="{ icon, value } in menu"
        :key="value"
        :prepend-icon="icon"
        :value="value"
        :href="`#${value}`"
      >
        {{ $t(`appBar.menu.${value}`) }}
      </VTab>
    </VTabs>
  </div>
</template>
