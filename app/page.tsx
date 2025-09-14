import { ContactContainer } from "@/components/features/contact";
import { HeroContainer } from "@/components/features/hero";

export default function Home() {
  return (
    <div className="px-4 md:px-8 lg:px-[10%]">
      <HeroContainer />
      <ContactContainer />
    </div>
  );
}
