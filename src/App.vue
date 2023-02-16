<script setup lang="ts">
import { ref } from "vue";

const buttonText = ref("home");
</script>

<template>
  <VLayout>
    <VAppBar flat>
      <VAppBarNavIcon icon="mdi-arrow-projectile" />
      <VSpacer />
      <VBtnToggle
        v-model="buttonText"
        group
        color="deep-purple-accent-3"
        rounded="0"
      >
        <VBtn prepend-icon="mdi-home" value="home"> Home </VBtn>
        <VBtn prepend-icon="mdi-information-variant" value="about">
          About
        </VBtn>
        <VBtn prepend-icon="mdi-arrow-projectile-multiple" value="skills">
          Skills
        </VBtn>
        <VBtn prepend-icon="mdi-view-dashboard" value="projects">
          Projects
        </VBtn>
        <VBtn prepend-icon="mdi-post" value="blog"> My Blog </VBtn>
        <VBtn prepend-icon="mdi-phone" value="contact"> Contact </VBtn>
      </VBtnToggle>
    </VAppBar>
  </VLayout>
  <main>
    <div class="abc"></div>
  </main>
</template>

<style>
.abc {
  height: 4098px;
}
</style>
