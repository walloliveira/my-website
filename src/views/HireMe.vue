<template>
  <VSheet
    class="d-flex flex-row justify-center align-center"
    color="primary"
    height="256px"
    :elevation="6"
  >
    <p class="text-h2">
      {{ $t("hireMe.iam") }}
      <span class="text-bold">{{ $t("hireMe.available") }}</span>
      {{ $t("hireMe.forFreelancing") }}
      <VBtn color="secondary" width="200px" height="80px" href="#contact">{{
        $t("hireMe.btnText")
      }}</VBtn>
    </p>
  </VSheet>
</template>
