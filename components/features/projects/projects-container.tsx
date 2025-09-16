import { ContainerLayout } from "@/components/container-layout";
import { Card, CardContent } from "@/components/ui/card";
import { LucideConstruction } from "lucide-react";
import React from "react";

export const ProjectsContainer = () => {
  return (
    <ContainerLayout
      title="Projects"
      id="projects"
      introText="A showcase of my recent work, personal projects, and contributions to the development community."
      className="scroll-mt-20 space-y-6"
    >
      <Card className="p-0 max-w-sm">
        <CardContent className="p-4 space-x-2 flex items-center">
          <p className="text-amber-400 font-medium font-mono">
            Comming soon...
          </p>
          <LucideConstruction className="h-8 w-8 text-amber-400" />
        </CardContent>
      </Card>
    </ContainerLayout>
  );
};
