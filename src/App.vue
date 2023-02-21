<script setup lang="ts">
import About from "./views/About.vue";
import AppBarMenu from "./views/AppBarMenu.vue";
import Home from "./views/Home.vue";
import Skills from "./views/Skills.vue";
</script>

<template>
  <VNoSsr>
    <VApp theme="myCustomLightTheme">
      <VAppBar flat>
        <VAppBarNavIcon icon="mdi-arrow-projectile" />
        <VSpacer />
        <AppBarMenu />
      </VAppBar>
      <VMain>
        <VRow>
          <VCol cols="8" offset="2">
            <Home style="height: 80vh" />
          </VCol>
          <VCol cols="8" offset="2">
            <About style="height: 90vh" />
          </VCol>
        </VRow>
        <VSheet color="teal-lighten-4" flat :elevation="0">
          <VLazy
            :options="{
              threshold: 100,
            }"
            min-height="200"
            transition="fade-transition"
          >
            <VRow>
              <VCol cols="8" offset="2">
                <Skills />
              </VCol>
            </VRow>
          </VLazy>
        </VSheet>
        <VSheet
          class="d-flex flex-row justify-center align-center"
          color="teal-darken-4"
          height="256px"
          flat
          :elevation="0"
        >
          <p class="text-h2">
            I'm <span class="text-bold">Avaliable</span> For Freelancing
            <VBtn color="primary" width="200px" height="80px">Hire me</VBtn>
          </p>
        </VSheet>
      </VMain>
    </VApp>
  </VNoSsr>
</template>
<style scoped lang="scss">
.app-container {
  max-width: 1200px;
}
</style>
