<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { getLocaleImg, getLocaleDescription } from "../plugins/VueI18n";

const buttonText = ref("home");
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
    icon: "mdi-post",
    value: "blog",
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
</script>

<template>
  <div class="d-flex align-center">
    <VBtnToggle
      v-model="buttonText"
      group
      color="secondary-darken-1"
      rounded="0"
      mandatory
    >
      <VBtn
        variant="text"
        v-for="{ icon, value } in menu"
        :key="value"
        :prepend-icon="icon"
        :value="value"
        :href="`#${value}`"
      >
        {{ $t(`appBar.menu.${value}`) }}
      </VBtn>
    </VBtnToggle>
    <VSelect
      class="d-flex ml-1"
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
</template>
