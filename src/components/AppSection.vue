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
      <VRow>
        <VCol cols="8" offset="2">
          <div class="mt-16 mb-16">
            <slot> </slot>
          </div>
        </VCol>
      </VRow>
    </VLazy>
  </VSheet>
</template>
