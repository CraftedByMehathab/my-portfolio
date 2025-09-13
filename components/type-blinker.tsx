import { cn } from "@/lib/utils";
import React from "react";

export const TypeBlinker = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "inline-block w-0.5 h-[1rem] ml-0.5 bg-current animate-blink",
        className
      )}
    />
  );
};
