<script setup lang="ts">
import { computed } from "vue";

interface AppSectionProps {
  contrast?: boolean;
}
const props = defineProps<AppSectionProps>();
</script>
<template>
  <VSheet
    :color="contrast ? 'secondary' : 'transparent'"
    :elevation="contrast ? 6 : 0"
  >
    <VLazy
      :options="{
        threshold: 100,
      }"
      min-height="200"
      transition="fade-transition"
    >
      <VRow>
        <VCol cols="8" offset="2">
          <div class="mt-16 mb-16">
            <slot></slot>
          </div>
        </VCol>
      </VRow>
    </VLazy>
  </VSheet>
</template>
