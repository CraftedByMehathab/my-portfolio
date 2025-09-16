import { ContainerLayout } from "@/components/container-layout";
import React from "react";
import { SkillSubContainer } from "./skill-sub-container";
import {
  LucideCloudCog,
  LucideLayoutDashboard,
  LucideServer,
} from "lucide-react";
import {
  BACKEND_SKILLSET,
  DEVOPS_SKILLSET,
  FRONTEND_SKILLSET,
} from "./content";
import { SkillChart } from "./skill-chart";
import { SkillSummary } from "./skill-summary";

const SkillsRenderer = ({
  skills,
}: {
  skills: {
    name: string;
    level: number;
    id: number;
    icon: string;
  }[];
}) => {
  return (
    <div className="gap-4 grid grid-cols-1 items-center @md:grid-cols-2">
      {skills.map(({ icon, id, level, name }) => (
        <SkillChart
          title={name}
          skillLevel={level}
          id={id}
          iconName={icon}
          key={id}
          className=""
        />
      ))}
    </div>
  );
};

export const SkillsContainer = () => {
  return (
    <ContainerLayout
      title="Skills & Expertise"
      introText="My technical skills, tools, and technologies I've mastered throughout my professional journey."
      className="scroll-mt-20 space-y-8"
      id="skills"
    >
      <div className="grid md:grid-cols-7 grid-cols-1 gap-6 space-y-12">
        <div className="space-y-12 flex-2 md:col-span-4">
          <SkillSubContainer
            icon={<LucideLayoutDashboard />}
            title="FRONTEND"
            className="max-w-4xl space-x-8 space-y-8 @container"
          >
            <SkillsRenderer skills={FRONTEND_SKILLSET} />
          </SkillSubContainer>
          <SkillSubContainer
            icon={<LucideServer />}
            title="BACKEND"
            className="max-w-4xl space-x-8 space-y-8 @container"
          >
            <SkillsRenderer skills={BACKEND_SKILLSET} />
          </SkillSubContainer>
          <SkillSubContainer
            icon={<LucideCloudCog />}
            title="DEVOPS & TOOLS"
            className="max-w-4xl space-x-8 space-y-8 @container"
          >
            <SkillsRenderer skills={DEVOPS_SKILLSET} />
          </SkillSubContainer>
        </div>
        <SkillSummary className="md:col-span-3 max-h-dvh overflow-y-scroll self-center" />
      </div>
    </ContainerLayout>
  );
};
