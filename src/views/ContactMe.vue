<script setup lang="ts">
import Section from "../components/Section.vue";
import Me1 from "../assets/me-1.webp";
</script>

<template>
  <Section
    title="contact.title"
    subtitle="contact.subtitle"
    text="contact.text"
  >
    <VRow>
      <VCol cols="5">
        <VImg :src="Me1"></VImg>
      </VCol>
      <VCol class="align-self-center">
        <VForm>
          <VTextField
            variant="outlined"
            :label="$t('contact.form.yourName')"
          ></VTextField>
          <VTextField
            variant="outlined"
            :label="$t('contact.form.yourEmail')"
            type="email"
          ></VTextField>
          <VTextField
            variant="outlined"
            :label="$t('contact.form.subject')"
          ></VTextField>
          <VTextarea
            variant="outlined"
            :label="$t('contact.form.message')"
          ></VTextarea>
          <VBtn color="primary" block>{{ $t("contact.form.btnSubmit") }}</VBtn>
        </VForm>
      </VCol>
    </VRow>
  </Section>
</template>
