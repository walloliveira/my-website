<script setup lang="ts">
import About from "./views/About.vue";
import AppBarMenu from "./views/AppBarMenu.vue";
import Home from "./views/Home.vue";
import Skills from "./views/Skills.vue";
import HireMe from "./views/HireMe.vue";
import Projects from "./views/Projects.vue";
import AppSection from "./components/AppSection.vue";
import Blog from "./views/Blog.vue";
import ContactMe from "./views/ContactMe.vue";
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
          <div class="d-flex flex-column">
            <Home class="mb-16" />
            <About class="mt-12" />
          </div>
        </AppSection>
        <AppSection contrast>
          <Skills />
        </AppSection>
        <HireMe />
        <AppSection>
          <Projects />
        </AppSection>
        <AppSection contrast>
          <Blog />
        </AppSection>
        <AppSection>
          <ContactMe />
        </AppSection>
      </VMain>
    </VApp>
  </VNoSsr>
</template>
<style scoped lang="scss"></style>
