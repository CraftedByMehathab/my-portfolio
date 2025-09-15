import { TerminalDisplay } from "@/components/ui/terminal-display";
import React from "react";

const SUMMARY_LINES: string[][] = [
  ["node --version", "v22.9.0"],
  ["echo $EXPERIENCE", "10+ years of professional web development"],

  [
    "cat skills.json",
    "{",
    '"languages": ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL"],',
    '"frameworks": ["React", "Express", "Nest.js", "Next.js"],',
    '"databases": ["MongoDB", "PostgreSQL", "MySQL"],',
    ' "tools": ["Git", "Docker", "AWS", "Webpack", "Jest"]',
    "}",
  ],
  [
    './check-skills.sh --developer="Mehathab Shaik"',
    "Analyzing skill set...",
    "Frontend: [███████████████████] 95%",
    "Backend: [█████████████████░░] 85%",
    "DevOps: [██████████████░░░░░] 75%",
    "Mobile: [███████████░░░░░░░░] 60%",
  ],
];

export const SkillSummary = ({ className }: { className?: string }) => {
  return (
    <TerminalDisplay
      title="developer@portfolio: ~/skills_summary"
      linesList={SUMMARY_LINES}
      className={className}
    />
  );
};
