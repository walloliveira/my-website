<script setup lang="ts">
import Me1 from "../assets/me-1.webp";
import Content from "../components/Content.vue";
</script>

<template>
  <Content
    title="contact.title"
    subtitle="contact.subtitle"
    text="contact.text"
    id="contact"
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
  </Content>
</template>
