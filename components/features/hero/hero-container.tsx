import React from "react";
import { HeroImage } from "./hero-image";
import { Typewriting } from "@/components/type-writing";
import { FloatingText } from "./floating-text";
import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideMail } from "lucide-react";
import Link from "next/link";
import { contactPath, projectsPath } from "@/utils/paths";

const HeroIntroText = () => (
  <p className="text-lg max-w-md">
    I craft high-performance, scalable web applications with clean code and
    exceptional user experiences. With over 10+ years of experience, I
    specialize in full-stack development using modern technologies.
  </p>
);

const ActionButtons = () => (
  <div className="flex flex-wrap justify-center items-center">
    <Button size="lg" className="m-2" asChild>
      <Link href={projectsPath()}>
        View Projects
        <LucideArrowRight />
      </Link>
    </Button>
    <Button variant="outline" size="lg" className="m-2" asChild>
      <Link href={contactPath()}>
        Contact Me <LucideMail />
      </Link>
    </Button>
  </div>
);
const MobileHeroContent = () => (
  <section className="min-h-[90vh] flex flex-col justify-center items-center space-y-4 text-center w-full md:hidden overflow-auto">
    <HeroImage />
    <h1 className="text-4xl font-semibold mt-6">Mehathab Shaik</h1>
    <Typewriting
      className="text-primary text-xl font-mono"
      list={[
        "Senior Software Engineer",
        "Frontend Developer",
        "React Expert",
        "Frontend Specialist",
        "Senior Web Developer",
        "Full Stack Developer",
      ]}
      delay={100}
      speed={150}
    ></Typewriting>
    <HeroIntroText />
    <ActionButtons />
  </section>
);
const WebHeroContent = () => (
  <section className="min-h-[90vh] md:flex justify-center items-center gap-6 w-full hidden py-8">
    <div className="max-w-lg space-y-6">
      <p className="text-primary text-2xl">{"> Hello, World!"} </p>
      <h1 className="text-5xl mb-4">
        I&apos;m <span className="text-primary">Mehathab Shaik</span>,
      </h1>
      <p className="text-5xl mb-4">Senior Web Developer</p>
      <Typewriting
        className="dark:text-lime-500 text-lime-600 text-2xl mb-4"
        list={["Building digital experiences", "Driven by purpose"]}
        loop={false}
      />
      <HeroIntroText />
      <ActionButtons />
    </div>
    <div className="flex flex-col items-center space-y-4">
      <HeroImage className="w-80 h-80 shadow-2xl" />
    </div>
  </section>
);
export const HeroContainer = () => {
  return (
    <div className="relative overflow-hidden pt-4 md:pt-0">
      <MobileHeroContent />
      <WebHeroContent />
      <div className="absolute -z-10 top-0 left-0 right-0 bottom-0">
        <FloatingText />
      </div>
    </div>
  );
};
