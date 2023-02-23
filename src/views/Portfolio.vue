<script setup lang="ts">
import Section from "../components/Section.vue";
import Project from "../components/Project.vue";
</script>
<template>
  <Section
    title="Our Projects"
    subtitle="accomplishments"
    text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
  >
    <VRow class="mt-6">
      <VCol cols="8">
        <Project
          subtitle="Web design"
          title="Branding & Illustration Design"
          img-src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          link="https://github.com/walloliveira/keycloak-authentication-authorization"
        />
      </VCol>
      <VCol cols="4">
        <div class="d-flex flex-column">
          <Project
            subtitle="Web design"
            title="Branding & Illustration Design"
            img-src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            link="https://github.com/walloliveira/keycloak-authentication-authorization"
          />
          <Project
            class="mt-3"
            subtitle="Web design"
            title="Branding & Illustration Design"
            img-src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            link="https://github.com/walloliveira/keycloak-authentication-authorization"
          />
        </div>
      </VCol>
      <VCol cols="12">
        <VRow>
          <VCol>
            <Project
              subtitle="Web design"
              title="Branding & Illustration Design"
              img-src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
              link="https://github.com/walloliveira/keycloak-authentication-authorization"
            />
          </VCol>
          <VCol cols="7">
            <Project
              subtitle="Web design"
              title="Branding & Illustration Design"
              img-src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
              link="https://github.com/walloliveira/keycloak-authentication-authorization"
            />
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </Section>
</template>
