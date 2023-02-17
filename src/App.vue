<script setup lang="ts">
import AppBarMenu from "./components/AppBarMenu.vue";
</script>

<template>
  <VNoSsr>
    <VApp theme="myCustomLightTheme">
      <VAppBar flat>
        <VAppBarNavIcon icon="mdi-arrow-projectile" />
        <VSpacer />
        <AppBarMenu />
      </VAppBar>
      <VMain scrollable>
        <VContainer class="app-container">
          <VCarousel hide-delimiters cycle :show-arrows="false" height="100%">
            <VCarouselItem>
              <div class="d-flex align-stretch">
                <div class="d-flex align-center">
                  <div class="text-h1">
                    I'm a
                    <span class="text-primary">software engineer</span>
                    from Brazil
                  </div>
                </div>
                <VImg
                  src="https://preview.colorlib.com/theme/niko/images/about.jpg.webp"
                  cover
                  width="480px"
                />
              </div>
            </VCarouselItem>
            <VCarouselItem>
              <div class="d-flex align-stretch">
                <div class="d-flex align-center">
                  <div>
                    <div class="text-subtitle-1 font-weight-bold text-info">
                      Hello
                    </div>
                    <div class="text-h1">
                      I'm
                      <span class="text-primary">Walber Oliveira</span>
                    </div>
                  </div>
                </div>
                <VImg
                  src="https://preview.colorlib.com/theme/niko/images/bg_2.jpg.webp"
                  cover
                  width="768px"
                />
              </div>
            </VCarouselItem>
          </VCarousel>
        </VContainer>
      </VMain>
    </VApp>
  </VNoSsr>
</template>

<style scoped lang="scss">
.app-container {
  max-width: 1200px;
}
</style>
