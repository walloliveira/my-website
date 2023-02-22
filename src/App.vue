<script setup lang="ts">
import About from "./views/About.vue";
import AppBarMenu from "./views/AppBarMenu.vue";
import Home from "./views/Home.vue";
import Skills from "./views/Skills.vue";
import HireMe from "./views/HireMe.vue";
import Projects from "./views/Projects.vue";
import AppSection from "./components/AppSection.vue";
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
        <AppSection>
          <Home />
        </AppSection>
        <AppSection>
          <About />
        </AppSection>
        <VSheet color="teal-lighten-4" :elevation="6">
          <VLazy
            :options="{
              threshold: 100,
            }"
            min-height="200"
            transition="fade-transition"
          >
            <AppSection>
              <Skills />
            </AppSection>
          </VLazy>
        </VSheet>
        <HireMe />
        <AppSection>
          <Projects />
        </AppSection>
      </VMain>
    </VApp>
  </VNoSsr>
</template>
<style scoped lang="scss"></style>
