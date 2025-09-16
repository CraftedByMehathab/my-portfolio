import { AboutMeContainer } from "@/components/features/about-me";
import { ContactContainer } from "@/components/features/contact";
import { HeroContainer } from "@/components/features/hero";
import { ProjectsContainer } from "@/components/features/projects";
import { SkillsContainer } from "@/components/features/skills";

export default function Home() {
  return (
    <div className="px-4 md:px-8 lg:px-[10%] space-y-36">
      <HeroContainer />
      <ProjectsContainer />
      <SkillsContainer />
      <AboutMeContainer />
      <ContactContainer />
    </div>
  );
}
