<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import {
  HackerRankSkill,
  JavaSkillColor,
  PluralSightSkill,
  PythonSkillColor,
  Skill,
  SkillColor,
  SqlSkillColor,
} from "../domains/Skills";
import HackerRankSkillsService from "../services/HackerRankSkillsService";
import PluralSightSkillsService from "../services/PluralSightSkillsService";

const pluralSightSkills = ref([] as PluralSightSkill[]);
const hackerRankSkills = ref([] as HackerRankSkill[]);

const colorsByType: {
  [key: string]: typeof JavaSkillColor;
} = {
  java: JavaSkillColor,
  python: PythonSkillColor,
  sql: SqlSkillColor,
};

const getColorBySkill = (skill: HackerRankSkill): string => {
  const SkillColorClass = colorsByType[skill.type];
  return new SkillColorClass(skill).getColor();
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
            <p class="text-body-1">{{ skill.title }}</p>
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
    <VCol cols="12 mt-12">
      <div class="d-flex flex-column text-center">
        <p class="text-subtitle-1 text-uppercase">What I do</p>
        <p class="text-h2">Strategy, design and a bit of magic</p>
        <p class="text-body-1 text-medium-emphasis mt-6">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <VCol cols="12">
        <VRow>
          <VCol cols="4">
            <VCard :elevation="4" density="comfortable">
              <VCardText>
                <div class="d-flex flex-column align-center text-center">
                  <VIcon icon="mdi-quadcopter" size="8vh" />
                  <p class="text-overline text-uppercase mt-2">
                    Design Sprints
                  </p>

                  <p class="text-overline text-uppercase mt-2">
                    Product Strategy
                  </p>
                  <p class="text-overline text-uppercase mt-2">UX Strategy</p>
                </div>
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="4">
            <VCard :elevation="4" density="comfortable">
              <VCardText>
                <div class="d-flex flex-column align-center text-center">
                  <VIcon icon="mdi-flask-round-bottom-outline" size="8vh" />
                  <p class="text-overline text-uppercase mt-2">Information</p>

                  <p class="text-overline text-uppercase mt-2">UX/UI Design</p>
                  <p class="text-overline text-uppercase mt-2">Branding</p>
                </div>
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="4">
            <VCard :elevation="4" density="comfortable">
              <VCardText>
                <div class="d-flex flex-column align-center text-center">
                  <VIcon icon="mdi-head-lightbulb-outline" size="8vh" />
                  <p class="text-overline text-uppercase mt-2">Prototyping</p>

                  <p class="text-overline text-uppercase mt-2">User Testing</p>
                  <p class="text-overline text-uppercase mt-2">UI Testing</p>
                </div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VCol>
  </VRow>
</template>
