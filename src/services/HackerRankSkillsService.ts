import SkillsHackerRank from "../assets/skills-hacker-rank.json";
import { HackerRankSkill } from "../domains/Skills";

const service = {
  list: () =>
    SkillsHackerRank.data
      .filter((it) => it.stars > 0)
      .map(
        ({
          badge_name: title,
          stars,
          current_points: score,
          icon,
          badge_type: type,
        }) =>
          ({
            id: title,
            title,
            stars,
            score,
            icon,
            type,
          } as HackerRankSkill)
      ),
};

export default service;
