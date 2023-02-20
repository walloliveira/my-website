export interface PluralSightSkill {
  id: string;
  level: string;
  percentile: number;
  score: number;
  status: string;
  title: string;
  thumbnailUrl: string;
  dateCompleted: string;
}

export interface HackerRankSkill {
  id: number;
  name: string;
  type: string;
  score: number;
  stars: number;
  icon: string;
}
