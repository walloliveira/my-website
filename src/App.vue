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
        <VCard color="teal-lighten-4">
          <VCardText>
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
          </VCardText>
        </VCard>
      </VMain>
    </VApp>
  </VNoSsr>
</template>
<style scoped lang="scss">
.app-container {
  max-width: 1200px;
}
</style>
