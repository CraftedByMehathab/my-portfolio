import React from "react";
import { HeroImage } from "./hero-image";
import { Typewriting } from "@/components/type-writing";

export const HeroContainer = () => {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center space-y-4 text-center">
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
    </section>
  );
};
