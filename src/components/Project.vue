<script setup lang="ts">
interface ProjectProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  link: string;
}
defineProps<ProjectProps>();
</script>
<template>
  <div class="h-100">
    <VHover v-slot="{ isHovering, props }">
      <VCard
        :elevation="isHovering ? 12 : 2"
        :class="{ 'on-hover': isHovering }"
        v-bind="props"
        class="h-100"
      >
        <VImg
          class="h-100"
          :aspect-ratio="16 / 9"
          cover
          :src="imgSrc"
          minx-width="200px"
        >
          <VExpandTransition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-primary-darken-1 v-card--reveal"
              style="height: 100%"
            >
              <div class="d-flex flex-column align-items-center">
                <VBtn variant="plain" :href="link" target="_blank">
                  <span class="text-body-1">{{ $t(title) }}</span>
                </VBtn>
                <p class="text-caption">{{ $t(subtitle) }}</p>
              </div>
            </div>
          </VExpandTransition>
        </VImg>
      </VCard>
    </VHover>
  </div>
</template>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
