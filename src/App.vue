<script setup lang="ts">
import About from "./views/About.vue";
import AppBarMenu from "./views/AppBarMenu.vue";
import Home from "./views/Home.vue";
import Skills from "./views/Skills.vue";
import HireMe from "./views/HireMe.vue";
import Portfolio from "./views/Portfolio.vue";
import AppSection from "./components/AppSection.vue";
import Footer from "./views/Footer.vue";
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
        <AppSection id="home">
          <Home />
        </AppSection>
        <AppSection id="about">
          <About />
        </AppSection>
        <AppSection contrast id="skills">
          <Skills />
        </AppSection>
        <HireMe />
        <AppSection id="portfolio">
          <Portfolio />
        </AppSection>
        <AppSection contrast id="blog">
          <Blog />
        </AppSection>
        <AppSection id="contact">
          <ContactMe />
        </AppSection>
      </VMain>
      <Footer />
    </VApp>
  </VNoSsr>
</template>
