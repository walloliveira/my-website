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
        <div class="d-flex align-center">
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
  </div>
</template>
