<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import Section from "../components/Section.vue";
import {
  HackerRankSkill,
  JavaSkillColor,
  PluralSightSkill,
  PythonSkillColor,
  SqlSkillColor,
} from "../domains/Skills";
import HackerRankSkillsService from "../services/HackerRankSkillsService";
import PluralSightSkillsService from "../services/PluralSightSkillsService";
import HackerRankLogo from "../assets/hackerrank-logo.png";
import PluralSightLogo from "../assets/pluralsight-logo.png";

const pluralSightSkills = ref([] as PluralSightSkill[]);
const hackerRankSkills = ref([] as HackerRankSkill[]);
const skillsSummaryAdditionalSkills = ref([
  {
    icon: "mdi-quadcopter",
    labels: [
      "skills.summary.additionalSkills.frontend[0]",
      "skills.summary.additionalSkills.frontend[1]",
      "skills.summary.additionalSkills.frontend[2]",
    ],
  },
  {
    icon: "mdi-flask-round-bottom-outline",
    labels: [
      "skills.summary.additionalSkills.backend[0]",
      "skills.summary.additionalSkills.backend[1]",
      "skills.summary.additionalSkills.backend[2]",
    ],
  },
  {
    icon: "mdi-head-lightbulb-outline",
    labels: [
      "skills.summary.additionalSkills.architecture[0]",
      "skills.summary.additionalSkills.architecture[1]",
      "skills.summary.additionalSkills.architecture[2]",
    ],
  },
]);

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

const getImageUrl = (skill: PluralSightSkill): string => {
  return new URL(`../assets/${skill.thumbnailUrl}`, import.meta.url).href;
};

onBeforeMount(() => {
  pluralSightSkills.value = PluralSightSkillsService.list();
  hackerRankSkills.value = HackerRankSkillsService.list();
});
</script>
<template>
  <Section title="skills.title" subtitle="skills.subtitle" text="skills.text">
    <VRow>
      <VCol cols="12">
        <VBtn
          rounded
          class="mt-6"
          href="https://app.pluralsight.com/profile/walber-oliveira"
          target="_blank"
          color="primary"
        >
          <VImg :src="PluralSightLogo" width="100" cover />
        </VBtn>
      </VCol>
      <VCol cols="3" v-for="skill in pluralSightSkills" :key="skill.id">
        <VHover>
          <template v-slot="{ isHovering, props }">
            <VCard
              v-bind="props"
              color="primary-darken-1"
              :elevation="isHovering ? 12 : 3"
            >
              <VCardText>
                <div class="d-flex flex-column align-center">
                  <VImg :src="getImageUrl(skill)" width="8vh" />
                  <p class="text-body-1">{{ skill.title }}</p>
                  <p class="text-h4 text-green text-uppercase">
                    {{ $t(`skills.pluralsight.level.${skill.level}`) }}
                  </p>
                </div>
              </VCardText>
              <VDivider />
              <VCardActions class="justify-center">
                <p class="text-caption">
                  {{
                    $t("skills.pluralsight.verified", {
                      at: $d(new Date(skill.dateCompleted), "short"),
                    })
                  }}
                </p>
              </VCardActions>
            </VCard>
          </template>
        </VHover>
      </VCol>
      <VDivider />
      <VCol cols="12">
        <VBtn
          rounded
          class="mt-6"
          href="https://www.hackerrank.com/walloliveira"
          target="_blank"
        >
          <VImg :src="HackerRankLogo" width="100" cover />
        </VBtn>
      </VCol>
      <VCol cols="3" v-for="skill in hackerRankSkills" :key="skill.id">
        <VHover>
          <template v-slot="{ isHovering, props }">
            <VCard
              :elevation="isHovering ? 12 : 3"
              v-bind="props"
              :color="getColorBySkill(skill)"
            >
              <VCardText>
                <div class="d-flex flex-column align-center">
                  <VIcon :icon="skill.icon" size="8vh" />
                  <p class="text-body-1">{{ skill.title }}</p>
                  <div class="d-flex">
                    <VIcon icon="mdi-star" v-for="n in skill.stars" />
                  </div>
                </div>
              </VCardText>
            </VCard>
          </template>
        </VHover>
      </VCol>
      <VCol class="mt-8" cols="12">
        <VRow justify="center">
          <VCol cols="12">
            <Section
              title="skills.summary.title"
              subtitle="skills.summary.subtitle"
              text="skills.summary.text"
              remove-margin-bottom
              remove-margin-top
            ></Section>
          </VCol>
          <VCol
            cols="3"
            v-for="additionalSkill in skillsSummaryAdditionalSkills"
            :key="additionalSkill.icon"
          >
            <VHover>
              <template v-slot="{ isHovering, props }">
                <VCard
                  v-bind="props"
                  :color="isHovering ? 'primary' : undefined"
                  :elevation="isHovering ? 12 : 2"
                  density="comfortable"
                  hover
                >
                  <VCardText>
                    <div class="d-flex flex-column align-center text-center">
                      <VIcon :icon="additionalSkill.icon" size="8vh" />
                      <p
                        class="text-overline text-uppercase mt-2"
                        v-for="(label, index) in additionalSkill.labels"
                        :key="index"
                      >
                        {{ $t(label) }}
                      </p>
                    </div>
                  </VCardText>
                </VCard>
              </template>
            </VHover>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </Section>
</template>
