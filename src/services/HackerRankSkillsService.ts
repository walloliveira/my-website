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
          icon,
          badge_type: type,
          current_points: score,
          total_challenges: totalChallenges,
          solved: challengesSolved,
        }) =>
          ({
            id: title,
            title,
            stars,
            totalChallenges,
            challengesSolved,
            icon,
            type,
            score,
          } as HackerRankSkill)
      ),
};

export default service;
