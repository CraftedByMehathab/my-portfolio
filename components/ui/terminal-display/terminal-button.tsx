import { cn } from "@/lib/utils";
import React from "react";

export const TerminalButton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-2.5 w-2.5 rounded-full bg-accent", className)} />
  );
};
