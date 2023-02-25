<script setup lang="ts">
import Content from "../components/Content.vue";
import Project from "../components/Project.vue";
import Portfolio1 from "../assets/portfolio-1.jpg";
import Portfolio2 from "../assets/portfolio-2.png";
import Portfolio3 from "../assets/portfolio-3.jpg";
</script>
<template>
  <Content
    title="portfolio.title"
    subtitle="portfolio.subtitle"
    text="portfolio.text"
    id="portfolio"
  >
    <VRow>
      <VCol cols="12" sm="12" md="8" lg="8">
        <Project
          subtitle="portfolio.projects[0].subtitle"
          title="portfolio.projects[0].title"
          :img-src="Portfolio1"
          link="https://github.com/walloliveira/my-website"
        />
      </VCol>
      <VCol cols="12" sm="12" md="4" lg="4">
        <VRow>
          <VCol sm="12">
            <Project
              subtitle="portfolio.projects[1].subtitle"
              title="portfolio.projects[1].title"
              :img-src="Portfolio2"
              link="https://github.com/walloliveira/keycloak-authentication-authorization"
            />
          </VCol>
          <VCol sm="12">
            <Project
              subtitle="portfolio.projects[2].subtitle"
              title="portfolio.projects[2].title"
              :img-src="Portfolio3"
              link="https://github.com/walloliveira/payment-service"
            />
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </Content>
</template>
