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
        <div class="d-flex align-center justify-center flex-column">
          <p class="text-h5 mb-6">
            {{ $t("footer.socialNetworks") }}
          </p>
          <div class="d-flex">
            <div
              v-for="socialNetwork in socialNetworks"
              :key="socialNetwork.icon"
              class="ml-3"
            >
              <VBtn
                color="secondary"
                :icon="socialNetwork.icon"
                :href="socialNetwork.url"
                target="_blank"
              />
            </div>
          </div>
        </div>
        <div class="d-flex flex-column align-center mt-6">
          <div>
            <div class="d-flex align-center mt-1 mb-1">
              <VBtn
                icon="mdi-map-marker"
                href="https://goo.gl/maps/2t4c1cypcUDmXXvf6"
                target="_blank"
                variant="text"
              />
              <p class="text-caption ml-1">Blumenau, Santa Catarina, Brazil</p>
            </div>
            <div class="d-flex align-center mt-1 mb-1">
              <VBtn
                icon="mdi-whatsapp"
                variant="text"
                href="https://wa.me/5544991668179"
                target="_blank"
              />
              <p class="text-caption ml-1">+55 44991668179</p>
            </div>
            <div class="d-flex align-center mt-1">
              <VBtn
                icon="mdi-email"
                variant="text"
                href="email:walberjr.oliveira@gmail.com"
                target="_blank"
              />
              <p class="text-caption ml-1">walberjr.oliveira@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <VCol cols="12">
            <p class="text-caption">
              {{ $t("footer.copyright") }}
            </p>
          </VCol>
        </div>
      </VCol>
    </VRow>
  </VSheet>
</template>
