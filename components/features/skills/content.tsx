export const SKILL_LEVEL = {
  BEGINEER: 1,
  INTERMEDIATE: 2,
  ADVANCED: 3,
  EXPERT: 4,
  GURU: 5,
} as const;
export const SKILL_LEVEL_TYPE: { [k: number]: keyof typeof SKILL_LEVEL } = {
  1: "BEGINEER",
  2: "INTERMEDIATE",
  3: "ADVANCED",
  4: "EXPERT",
  5: "GURU",
};
export const FRONTEND_SKILLSET = [
  {
    name: "HTML5",
    level: SKILL_LEVEL.EXPERT,
    id: 1,
    icon: "HTML5",
  },
  {
    name: "CSS3",
    level: SKILL_LEVEL.EXPERT,
    id: 2,
    icon: "CSS3",
  },
  {
    name: "JavaScript",
    level: SKILL_LEVEL.EXPERT,
    id: 3,
    icon: "JavaScript",
  },
  {
    name: "TypeScript",
    level: SKILL_LEVEL.ADVANCED,
    id: 4,
    icon: "TypeScript",
  },
  {
    name: "React",
    level: SKILL_LEVEL.EXPERT,
    id: 5,
    icon: "React",
  },
  {
    name: "NextJs",
    level: SKILL_LEVEL.EXPERT,
    id: 6,
    icon: "NextJs",
  },
];
export const DEVOPS_SKILLSET = [
  {
    name: "Git",
    level: SKILL_LEVEL.ADVANCED,
    id: 1,
    icon: "Git",
  },
  {
    name: "Docker",
    level: SKILL_LEVEL.INTERMEDIATE,
    id: 2,
    icon: "Docker",
  },
  {
    name: "AWS",
    level: SKILL_LEVEL.INTERMEDIATE,
    id: 3,
    icon: "AWS",
  },
  {
    name: "Jest/Testing",
    level: SKILL_LEVEL.ADVANCED,
    id: 4,
    icon: "Jest",
  },
];
export const BACKEND_SKILLSET = [
  {
    name: "Node.js",
    level: SKILL_LEVEL.ADVANCED,
    id: 1,
    icon: "NodeJs",
  },
  {
    name: "Express.js",
    level: SKILL_LEVEL.ADVANCED,
    id: 2,
    icon: "ExpressJsLight",
  },
  {
    name: "Nest.js",
    level: SKILL_LEVEL.ADVANCED,
    id: 3,
    icon: "NestJS",
  },
  {
    name: "Next.js as Backend",
    level: SKILL_LEVEL.ADVANCED,
    id: 4,
    icon: "NextJs",
  },
  {
    name: "MongoDB",
    level: SKILL_LEVEL.INTERMEDIATE,
    id: 5,
    icon: "MongoDB",
  },
  {
    name: "PostgreSQL",
    level: SKILL_LEVEL.INTERMEDIATE,
    id: 6,
    icon: "PostgreSQL",
  },

  {
    name: "GraphQL",
    level: SKILL_LEVEL.INTERMEDIATE,
    id: 7,
    icon: "GraphQL",
  },
  {
    name: "Rest API",
    level: SKILL_LEVEL.ADVANCED,
    id: 8,
    icon: "",
  },
];
