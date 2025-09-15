import React from "react";
import { TermialHeader } from "./terminal-header";
import { TerminalBody } from "./terminal-body";
import { cn } from "@/lib/utils";

type TerminalDisplayProps = {
  title?: string;
  linesList: string[][];
  className?: string;
};
export const TerminalDisplay = ({
  title,
  linesList,
  className,
}: TerminalDisplayProps) => {
  return (
    <section
      className={cn(
        "border rounded-lg overflow-hidden shadow-2xl font-mono pb-8 text-xs md:text-sm",
        className
      )}
    >
      <TermialHeader>{title}</TermialHeader>
      <TerminalBody linesList={linesList} />
    </section>
  );
};
