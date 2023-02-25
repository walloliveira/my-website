<template>
  <VSheet color="primary" height="256px" :elevation="6">
    <VContainer class="h-100 d-flex align-center">
      <VRow align="center" justify="center">
        <VCol class="text-center" cols="12" lg="6">
          <p class="text-h6 text-lg-h3">
            {{ $t("hireMe.iam") }}
            <span class="text-warning">{{ $t("hireMe.available") }}</span>
            {{ $t("hireMe.forFreelancing") }}
          </p>
        </VCol>
        <VCol cols="12" md="6" lg="2">
          <VBtn block color="secondary" href="#contact">
            {{ $t("hireMe.btnText") }}
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VSheet>
</template>
