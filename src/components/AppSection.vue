<script setup lang="ts">
import { computed } from "vue";

interface AppSectionProps {
  contrast?: boolean;
  id: string;
  removeMarginBottom?: boolean;
  removeMarginTop?: boolean;
}
const props = defineProps<AppSectionProps>();

const sectionClass = computed(() => {
  let mt = `${props.removeMarginTop ? "" : "mt-16"}`;
  let mb = `${props.removeMarginBottom ? "" : "mb-16"}`;
  return `${mt} ${mb}`;
});
</script>
<template>
  <VSheet
    :class="sectionClass"
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
