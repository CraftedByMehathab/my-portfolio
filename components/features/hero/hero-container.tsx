import React from "react";
import { HeroImage } from "./hero-image";
import { Typewriting } from "@/components/type-writing";
import { FloatingText } from "./floating-text";
import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideMail } from "lucide-react";

export const HeroContainer = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="h-[90vh] flex flex-col justify-center items-center space-y-4 text-center w-full">
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
        <p>
          I build exceptional digital experiences with clean, efficient code and
          modern technologies.
        </p>
        <Button size="lg" className="w-3xs">
          View Projects
          <LucideArrowRight />
        </Button>
        <Button variant="outline" size="lg" className="w-3xs">
          Contact Me
          <LucideMail />
        </Button>
      </section>
      <div className="absolute -z-10 top-0 left-0 right-0 bottom-0">
        <FloatingText />
      </div>
    </div>
  );
};
