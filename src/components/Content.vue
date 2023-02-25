<script setup lang="ts">
import { computed } from "vue";
import TabStore from "../stores/TabStore";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  text: string;
  removeMarginBottom?: boolean;
  removeMarginTop?: boolean;
  id: string;
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
    <p class="text-lg-h2 text-xs-h3 text-sm-h3">{{ $t(props.title) }}</p>
    <p class="text-lg-body-1 text-body-2 text-medium-emphasis mt-6">
      {{ $t(props.text) }}
    </p>
  </div>
  <VContainer
    :class="sectionClass"
    v-intersect="(isIntersecting: boolean) => TabStore.handleIntersect(isIntersecting, id)"
  >
    <slot></slot>
  </VContainer>
</template>
