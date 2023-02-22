<script setup lang="ts">
interface SectionTitleProps {
  subtitle: string;
  title: string;
  text: string;
}

const props = defineProps<SectionTitleProps>();
</script>

<template>
  <div class="d-flex flex-column text-center">
    <p class="text-subtitle-1 text-uppercase">{{ props.subtitle }}</p>
    <p class="text-h2">{{ props.title }}</p>
    <p class="text-body-1 text-medium-emphasis mt-6">
      {{ props.text }}
    </p>
    <slot></slot>
  </div>
</template>
