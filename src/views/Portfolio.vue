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
    <VRow class="mt-6">
      <VCol cols="8">
        <Project
          subtitle="portfolio.projects[0].subtitle"
          title="portfolio.projects[0].title"
          :img-src="Portfolio1"
          link="https://github.com/walloliveira/my-website"
        />
      </VCol>
      <VCol cols="4">
        <div class="d-flex flex-column">
          <Project
            subtitle="portfolio.projects[1].subtitle"
            title="portfolio.projects[1].title"
            :img-src="Portfolio2"
            link="https://github.com/walloliveira/keycloak-authentication-authorization"
          />
          <Project
            class="mt-3"
            subtitle="portfolio.projects[2].subtitle"
            title="portfolio.projects[2].title"
            :img-src="Portfolio3"
            link="https://github.com/walloliveira/payment-service"
          />
        </div>
      </VCol>
    </VRow>
  </Content>
</template>
