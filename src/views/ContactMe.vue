<script setup lang="ts">
import Section from "../components/Section.vue";
</script>

<template>
  <Section
    title="Contact Me"
    subtitle="contact"
    text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
  >
    <VRow>
      <VCol cols="5">
        <VImg
          src="https://preview.colorlib.com/theme/niko/images/about.jpg.webp"
        ></VImg>
      </VCol>
      <VCol class="align-self-center">
        <VForm>
          <VTextField variant="outlined" label="Your name"></VTextField>
          <VTextField
            variant="outlined"
            label="Your Email"
            type="email"
          ></VTextField>
          <VTextField variant="outlined" label="Subject"></VTextField>
          <VTextarea variant="outlined" label="Message"></VTextarea>
          <VBtn color="primary" block>Submit</VBtn>
        </VForm>
      </VCol>
    </VRow>
  </Section>
</template>
