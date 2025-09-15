import { ContactContainer } from "@/components/features/contact";
import { HeroContainer } from "@/components/features/hero";
import { SkillsContainer } from "@/components/features/skills";

export default function Home() {
  return (
    <div className="px-4 md:px-8 lg:px-[10%] space-y-10">
      <HeroContainer />
      <SkillsContainer />
      <ContactContainer />
    </div>
  );
}
