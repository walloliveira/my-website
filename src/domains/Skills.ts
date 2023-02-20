export interface Skill {
  id: string;
  title: string;
  score: number;
}

export interface PluralSightSkill extends Skill {
  level: string;
  percentile: number;
  status: string;
  thumbnailUrl: string;
  dateCompleted: string;
}

export interface HackerRankSkill extends Skill {
  type: string;
  stars: number;
  icon: string;
}

export abstract class SkillColor {
  private skill: Skill;

  constructor(skill: Skill) {
    this.skill = skill;
  }

  getColor() {
    if (this.skill.score < this.getBronzeScore()) return "";
    if (
      this.skill.score >= this.getBronzeScore() &&
      this.skill.score < this.getSilverScore()
    )
      return "brown-lighten-1";
    if (
      this.skill.score >= this.getSilverScore() &&
      this.skill.score < this.getGoldScore()
    ) {
      return "grey-lighten-2";
    }
    return "yellow-lighten-2";
  }

  abstract getBronzeScore(): number;
  abstract getSilverScore(): number;
  abstract getGoldScore(): number;
}

export class JavaSkillColor extends SkillColor {
  getBronzeScore(): number {
    return 25;
  }
  getSilverScore(): number {
    return 80;
  }
  getGoldScore(): number {
    return 250;
  }
}

export class PythonSkillColor extends SkillColor {
  getBronzeScore(): number {
    return 35;
  }
  getSilverScore(): number {
    return 110;
  }
  getGoldScore(): number {
    return 400;
  }
}

export class SqlSkillColor extends SkillColor {
  getBronzeScore(): number {
    return 80;
  }
  getSilverScore(): number {
    return 300;
  }
  getGoldScore(): number {
    return 650;
  }
}
