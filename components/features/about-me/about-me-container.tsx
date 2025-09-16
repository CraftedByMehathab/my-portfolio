import React from "react";
import { AboutMe } from "./about-me";
import { WorkExperience } from "./work-experience";
import { ContainerLayout } from "@/components/container-layout";

export const AboutMeContainer = () => {
  return (
    <ContainerLayout
      title="About Me"
      id="about"
      className="scroll-mt-20 space-y-8"
    >
      <div className="space-y-8 flex flex-wrap md:space-x-20">
        <AboutMe />
        <WorkExperience />
      </div>
    </ContainerLayout>
  );
};
