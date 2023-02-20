<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { HackerRankSkill, PluralSightSkill } from "../domains/Skills";
import HackerRankSkillsService from "../services/HackerRankSkillsService";
import PluralSightSkillsService from "../services/PluralSightSkillsService";

const pluralSightSkills = ref([] as PluralSightSkill[]);
const hackerRankSkills = ref([] as HackerRankSkill[]);

const colorsByType: {
  [key: string]: (skill: HackerRankSkill) => string;
} = {
  java: (skill: HackerRankSkill) => {
    if (skill.score < 25) return "";
    if (skill.score >= 25 && skill.score < 51) return "brown-lighten-1";
    if (skill.score >= 80 && skill.score < 250) {
      return "grey-lighten-1";
    }
    return "yellow-lighten-1";
  },
  python: (skill: HackerRankSkill) => {
    if (skill.score < 35) return "";
    if (skill.score >= 35 && skill.score < 110) return "brown-lighten-1";
    if (skill.score >= 110 && skill.score < 400) {
      return "grey-lighten-2";
    }
    return "yellow-lighten-2";
  },
  sql: (skill: HackerRankSkill) => {
    if (skill.score < 80) return "";
    if (skill.score >= 80 && skill.score < 300) return "brown-lighten-1";
    if (skill.score >= 300 && skill.score < 650) {
      return "grey-lighten-2";
    }
    return "yellow-lighten-2";
  },
};

const getColorBySkill = (skill: HackerRankSkill): string => {
  return colorsByType[skill.type](skill);
};

onBeforeMount(() => {
  pluralSightSkills.value = PluralSightSkillsService.list();
  hackerRankSkills.value = HackerRankSkillsService.list();
});
</script>
<template>
  <VRow>
    <VCol cols="12">
      <div class="d-flex flex-column text-center">
        <p class="text-subtitle-1 text-uppercase">Skills</p>
        <p class="text-h2">My Skills</p>
        <p class="text-body-1 text-medium-emphasis mt-6">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <a
          href="https://app.pluralsight.com/profile/walber-oliveira"
          target="_blank"
          >Plural sight</a
        >
      </div>
    </VCol>
    <VCol cols="3" v-for="skill in pluralSightSkills" :key="skill.id">
      <VCard color="teal-darken-4">
        <VCardText>
          <div class="d-flex flex-column align-center">
            <VImg :src="skill.thumbnailUrl" width="8vh" />
            <p class="text-body-1">{{ skill.title }}</p>
            <p class="text-h4 text-green text-uppercase">{{ skill.level }}</p>
          </div>
        </VCardText>
        <VDivider />
        <VCardActions class="justify-center">
          <p class="text-caption">
            Verified
            {{ new Date(skill.dateCompleted).toLocaleDateString("en-US") }}
          </p>
        </VCardActions>
      </VCard>
    </VCol>
    <VDivider />
    <VCol cols="3" v-for="skill in hackerRankSkills" :key="skill.id">
      <VCard :color="getColorBySkill(skill)">
        <VCardText>
          <div class="d-flex flex-column align-center">
            <VIcon :icon="skill.icon" size="8vh" />
            <p class="text-body-1">{{ skill.name }}</p>
            <div class="d-flex">
              <VIcon icon="mdi-star" v-for="n in skill.stars" />
            </div>
            <p class="text-h4 text-green text-uppercase">
              {{ skill.score }}
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
