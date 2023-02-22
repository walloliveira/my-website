<script setup lang="ts">
import { ref } from "vue";

const socialNetworks = ref([
  {
    url: "https://www.linkedin.com/in/walber-oliveira/",
    icon: "mdi-linkedin",
  },
  {
    url: "https://www.instagram.com/walloliveira/",
    icon: "mdi-instagram",
  },
  {
    url: "https://github.com/walloliveira",
    icon: "mdi-github",
  },
]);
</script>
<template>
  <VSheet color="primary" :elevation="6">
    <VRow class="mt-16 mb-16">
      <VCol cols="8" offset="2">
        <div>
          <VRow>
            <VCol>
              <p class="text-h5 mb-6">Lets talk about</p>
              <p class="text-caption">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </VCol>
            <VCol>
              <p class="text-h5 mb-6">Links</p>
              <VBtn variant="text" prepend-icon="mdi-link">Home</VBtn>
            </VCol>
            <VCol>
              <p class="text-h5 mb-6">Services</p>
              <VBtn variant="text" prepend-icon="mdi-link">Home</VBtn>
            </VCol>
            <VCol>
              <p class="text-h5 mb-6">Have a Questions?</p>
              <div class="d-flex align-center mt-1 mb-1">
                <VIcon icon="mdi-map-marker" />
                <p class="text-caption ml-1">
                  Blumenau, Santa Catarina, Brazil
                </p>
              </div>
              <div class="d-flex align-center mt-1 mb-1">
                <VIcon icon="mdi-phone" />
                <p class="text-caption ml-1">+55 44991668179</p>
              </div>
              <div class="d-flex align-center mt-1">
                <VIcon icon="mdi-email" />
                <p class="text-caption ml-1">walberjr.oliveira@gmail.com</p>
              </div>
            </VCol>
          </VRow>
          <VRow justify="center">
            <VCol
              v-for="socialNetwork in socialNetworks"
              :key="socialNetwork.icon"
              cols="1"
            >
              <VBtn
                color="secondary"
                :icon="socialNetwork.icon"
                :href="socialNetwork.url"
                target="_blank"
              />
            </VCol>
          </VRow>
          <VRow class="text-center">
            <VCol>
              <p class="text-caption">
                Copyright ©2023 All rights reserved | This template is made with
                by WallOliveira.dev
              </p>
            </VCol>
          </VRow>
        </div>
      </VCol>
    </VRow>
  </VSheet>
</template>
