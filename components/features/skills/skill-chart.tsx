import React, { lazy, Suspense } from "react";
import { SKILL_LEVEL_TYPE } from "./content";
import { Progress } from "@/components/ui/progress";
import { LucideLoader } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillChartProps = {
  title: string;
  skillLevel: number;
  id: number;
  iconName: string;
  className?: string;
};
const getLazyIcon = async (iconName: string) => {
  const icons = await import("developer-icons");
  return {
    default: icons[iconName as keyof typeof icons],
  };
};
export const SkillChart = ({
  iconName,
  title,
  skillLevel,
  className,
}: SkillChartProps) => {
  const Icon = iconName && lazy(() => getLazyIcon(iconName));
  return (
    <section className={cn("space-y-4 w-full max-w-sm", className)}>
      <header className="flex justify-between items-center">
        <h4 className="flex items-center space-x-4">
          <Suspense
            fallback={<LucideLoader className="h-8 w-8 animate-spin" />}
          >
            {Icon && <Icon size={40} />}
          </Suspense>
          <span>{title}</span>
        </h4>
        <p className="text-md capitalize">
          {SKILL_LEVEL_TYPE[skillLevel].toLowerCase()}
        </p>
      </header>
      <Progress
        value={skillLevel * 20}
        className="transition-transform duration-1500 ease-out w-full"
      />
    </section>
  );
};
