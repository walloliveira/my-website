<script setup lang="ts">
import { computed } from "vue";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  text: string;
  removeMarginBottom?: boolean;
  removeMarginTop?: boolean;
}

const props = defineProps<SectionTitleProps>();

const sectionClass = computed(() => {
  let mt = `${props.removeMarginTop ? "" : "mt-16"}`;
  let mb = `${props.removeMarginBottom ? "" : "mb-16"}`;
  return `${mt} ${mb}`;
});
</script>

<template>
  <div class="d-flex flex-column text-center">
    <p class="text-subtitle-1 text-uppercase">{{ $t(props.subtitle) }}</p>
    <p class="text-h2">{{ $t(props.title) }}</p>
    <p class="text-body-1 text-medium-emphasis mt-6">
      {{ $t(props.text) }}
    </p>
    <div :class="sectionClass">
      <slot></slot>
    </div>
  </div>
</template>
