<script setup lang="ts">
import { computed } from "vue";
import TabStore from "../stores/TabStore";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  text: string;
  id: string;
}

const props = defineProps<SectionTitleProps>();
</script>

<template>
  <div class="mt-8 mb-8">
    <div class="d-flex flex-column text-center">
      <p class="text-subtitle-1 text-uppercase">{{ $t(props.subtitle) }}</p>
      <p class="text-lg-h2 text-xs-h3 text-sm-h3">{{ $t(props.title) }}</p>
      <p class="text-lg-body-1 text-body-2 text-medium-emphasis mt-6">
        {{ $t(props.text) }}
      </p>
    </div>
    <VContainer
      v-intersect="(isIntersecting: boolean) => TabStore.handleIntersect(isIntersecting, id)"
    >
      <slot></slot>
    </VContainer>
  </div>
</template>
