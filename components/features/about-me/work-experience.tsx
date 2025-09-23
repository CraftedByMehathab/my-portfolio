import React from "react";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    id: 1,
    date: "Sept 2015 - Nov 2018",
    title: "Frontend Engineer @ Care Medical LLC",
    description:
      "Built frontend interfaces and data visualizations for medical platforms, supporting clinicians with actionable, real-time insights.",
  },
  {
    id: 2,
    date: "Nov 2018 - Feb 2022",
    title: "Senior IT Engineer (Contract) @ Express Scripts",
    description:
      "Contributed to business-critical frontend systems, introduced microfrontend architecture, and supported knowledge-sharing initiatives across teams.",
  },
  {
    id: 3,
    date: "Feb 2022 - Aug 2022",
    title: "Software Engineer @ Point Card",
    description:
      "Redesigned and rebuilt internal tools to enhance agent workflows, improve maintainability, and support secure, scalable feature rollouts.",
  },
  {
    id: 4,
    date: " Aug 2022 - Aug 2023",
    title: "Full Stack Developer (Contract) @ GSA",
    description:
      "Contributed to digital modernization by building scalable full-stack applications supporting high-volume bidding systems and administrative processes.",
  },
  {
    id: 5,
    date: " Aug 2023 - Mar 2025",
    title: "Senior Software Engineer (Contract) @ FM Global",
    description:
      "Modernized internal platforms by developing scalable frontend architecture, integrating micro-frontends using Module Federation, and improving developer workflows.",
  },
  {
    id: 6,
    date: " Aug 2023 - Current",
    title: "Senior Software Engineer @ TechWave LLC",
    description: "Founder",
  },
].reverse();
export const WorkExperience = () => {
  return (
    <section className="space-y-6 min-w-3xs flex-1 max-w-lg">
      <header>
        <h3 className="text-xl md:text-2xl font-extrabold">Work Experience</h3>
      </header>
      <div>
        <Timeline defaultValue={5}>
          {items.map((item) => (
            <TimelineItem key={item.id} step={item.id}>
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate className="text-primary text-sm font-semibold">
                  {item.date}
                </TimelineDate>
                <TimelineTitle className="sm:-mt-0.5">
                  {item.title}
                </TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>
              <TimelineContent>{item.description}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};
