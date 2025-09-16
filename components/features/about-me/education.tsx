import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const Education = () => {
  return (
    <section className="space-y-4">
      <header>
        <h3 className="text-xl md:text-2xl font-extrabold">Education</h3>
      </header>

      <Card className="p-0">
        <CardContent className="p-4 space-y-2">
          <p className="font-mono font-semibold ">
            Master of Science in Information Systems
          </p>
          <p className="text-primary">
            Stevens-Henager College - Salt Lake City, UT
          </p>
          <p className="text-sm">2015 -2016</p>
        </CardContent>
      </Card>
      <Card className="p-0">
        <CardContent className="p-4 space-y-2">
          <p className="font-mono font-semibold ">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-primary">
            Andhra University - Adhra Pradesh, India
          </p>
          <p className="text-sm">2006 -2009</p>
        </CardContent>
      </Card>
    </section>
  );
};
