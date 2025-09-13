"use client";
import { useTypewriter } from "@/hooks/use-typewritter";
import { cn } from "@/lib/utils";
import React from "react";

type TypewritingProps = {
  list: string[];
  className?: string;
  delay?: number;
  speed?: number;
  loop?: boolean;
};
export const Typewriting = ({
  list,
  className,
  speed = 100,
  delay = 1000,
  loop = false,
}: TypewritingProps) => {
  const { displayText, isComplete } = useTypewriter({
    text: list,
    speed,
    delay,
    loop,
    backspaceSpeed: 90,
    pauseBetween: 1500,
  });
  return (
    <p className={cn("h-auto", className)}>
      {displayText}
      <span
        className={cn(
          "inline-block w-0.5 h-[1rem] ml-0.5 bg-current animate-blink",
          isComplete && !loop && "opacity-0"
        )}
      />
    </p>
  );
};
