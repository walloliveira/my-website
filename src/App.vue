<script setup lang="ts">
import About from "./components/About.vue";
import AppBarMenu from "./components/AppBarMenu.vue";
import Home from "./components/Home.vue";
</script>

<template>
  <VNoSsr>
    <VApp class="overflow-hidden" theme="myCustomLightTheme">
      <VAppBar flat>
        <VAppBarNavIcon icon="mdi-arrow-projectile" />
        <VSpacer />
        <AppBarMenu />
      </VAppBar>
      <VMain>
        <VContainer class="app-container">
          <Home style="height: 90vh" />
          <About style="height: 90vh" />
        </VContainer>
      </VMain>
    </VApp>
  </VNoSsr>
</template>
<style scoped lang="scss">
.app-container {
  max-width: 1200px;
}
</style>
