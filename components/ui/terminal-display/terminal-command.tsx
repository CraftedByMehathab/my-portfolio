import React from "react";
import { TerminalLine } from "./terminal-line";
import { cn } from "@/lib/utils";

export const TerminalCommand = ({
  lines,
  className,
}: {
  className?: string;
  lines: string[];
}) => {
  return (
    <div className={cn("space-y-2 text-sm @container", className)}>
      {lines.map((eachLine, i) => (
        <TerminalLine
          className={cn({ "mt-4": !i, "@md:pl-4": i })}
          key={i}
          isCommandLine={!i}
        >
          {eachLine}
        </TerminalLine>
      ))}
    </div>
  );
};
