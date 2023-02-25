<script setup lang="ts">
interface AppSectionProps {
  contrast?: boolean;
  id: string;
}
defineProps<AppSectionProps>();
</script>
<template>
  <VSheet
    :color="contrast ? 'secondary' : 'transparent'"
    :elevation="contrast ? 6 : 0"
    :id="id"
  >
    <VLazy
      :options="{
        threshold: 0.5,
      }"
      transition="scale-transition"
    >
      <VContainer style="max-width: 1200px">
        <slot> </slot>
      </VContainer>
    </VLazy>
  </VSheet>
</template>
