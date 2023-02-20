import SkillsPluralSight from "../assets/skills-plural-sight.json";
import { PluralSightSkill } from "../domains/Skills";

const service = {
  list: () =>
    SkillsPluralSight.data.filter(
      (it) => it.status !== "retired"
    ) as PluralSightSkill[],
};

export default service;
