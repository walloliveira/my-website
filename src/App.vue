<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useDisplay } from "vuetify";
import AppBarMenu from "./components/AppBarMenu.vue";
import AppSection from "./components/AppSection.vue";
import { getLocaleDescription, getLocaleImg } from "./plugins/VueI18n";
import TabStore from "./stores/TabStore";
import About from "./views/About.vue";
import ContactMe from "./views/ContactMe.vue";
import Footer from "./views/Footer.vue";
import HireMe from "./views/HireMe.vue";
import Home from "./views/Home.vue";
import Portfolio from "./views/Portfolio.vue";
import Skills from "./views/Skills.vue";

const menu = ref([
  {
    icon: "mdi-home",
    value: "home",
  },
  {
    icon: "mdi-information-variant",
    value: "about",
  },
  {
    icon: "mdi-arrow-projectile-multiple",
    value: "skills",
  },
  {
    icon: "mdi-view-dashboard",
    value: "portfolio",
  },
  {
    icon: "mdi-phone",
    value: "contact",
  },
]);
const i18n = useI18n();
const languages = ref(
  i18n.availableLocales.map((it) => ({
    id: it,
    description: getLocaleDescription(it),
    img: getLocaleImg(it),
  }))
);

const drawer = ref(false);

const menuActive = computed(() => {
  return TabStore.store.activeTab ? TabStore.store.activeTab : "home";
});

const { mobile } = useDisplay();
const isMobile = computed(() => {
  return mobile.value;
});
</script>

<template>
  <VApp theme="myCustomLightTheme">
    <VAppBar app>
      <VAppBarNavIcon
        v-if="isMobile"
        @click="drawer = !drawer"
      ></VAppBarNavIcon>
      <div class="d-flex flex-row align-center justify-end">
        <AppBarMenu
          :is-mobile="isMobile"
          :menu-active="menuActive"
          :menu="menu"
          v-if="!isMobile"
        />
        <VSelect
          class="d-flex ml-2"
          density="compact"
          variant="outlined"
          v-model="$i18n.locale"
          :label="$t('appBar.locale.label')"
          item-value="id"
          item-title="description"
          :items="languages"
        >
          <template v-slot:selection="{ item }">
            <div class="d-flex">
              <VAvatar :image="item.raw.img" size="24" />
              <span class="text-body-1 ml-2">{{ item.title }}</span>
            </div>
          </template>
          <template v-slot:item="{ props, item }">
            <VListItem class="d-flex" v-bind="props">
              <template v-slot:prepend>
                <VAvatar :image="item.raw.img" size="24" />
              </template>
            </VListItem>
          </template>
        </VSelect>
      </div>
    </VAppBar>
    <VNavigationDrawer
      v-model="drawer"
      location="top"
      v-if="isMobile"
      temporary
    >
      <VList>
        <VListItem
          v-for="item in menu"
          :key="item.value"
          :active="item.value == TabStore.store.activeTab"
          :href="`#${item.value}`"
        >
          <VIcon :icon="item.icon" />
          <span class="text-body-2 text-capitalize ml-2">{{ item.value }}</span>
        </VListItem>
      </VList>
    </VNavigationDrawer>
    <VMain>
      <VNoSsr>
        <AppSection id="home">
          <Home />
        </AppSection>
        <AppSection id="about">
          <About />
        </AppSection>
        <AppSection id="skills" contrast remove-margin-bottom>
          <Skills />
        </AppSection>
        <HireMe />
        <AppSection id="portfolio">
          <Portfolio />
        </AppSection>
        <AppSection id="contact" contrast remove-margin-bottom>
          <ContactMe />
        </AppSection>
      </VNoSsr>
      <Footer></Footer>
    </VMain>
  </VApp>
</template>
