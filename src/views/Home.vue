<script setup lang="ts">
import Me1 from "../assets/me-1.webp";
import Me2 from "../assets/me-2.webp";
</script>
<template>
  <div>
    <VCarousel
      hide-delimiters
      cycle
      :show-arrows="false"
      :vertical-delimiters="false"
      height="65vh"
    >
      <VCarouselItem>
        <div class="d-flex align-stretch">
          <div class="d-flex align-center">
            <div>
              <div class="text-subtitle-1 font-weight-bold text-info">
                {{ $t("home.carouselItem2[0]") }}
              </div>
              <div class="text-h1">
                {{ $t("home.carouselItem2[1]") }}
                <span class="text-primary">
                  {{ $t("home.carouselItem2[2]") }}</span
                >
              </div>
            </div>
          </div>
          <VImg :src="Me2" cover width="768px" />
        </div>
      </VCarouselItem>
      <VCarouselItem>
        <div class="d-flex align-center">
          <div class="d-flex align-center">
            <div class="text-h1">
              {{ $t("home.carouselItem1[0]") }}
              <span class="text-primary">
                {{ $t("home.carouselItem1[1]") }}
              </span>
              {{ $t("home.carouselItem1[2]") }}
            </div>
          </div>
          <VImg :src="Me1" cover width="480px" />
        </div>
      </VCarouselItem>
    </VCarousel>
  </div>
</template>
