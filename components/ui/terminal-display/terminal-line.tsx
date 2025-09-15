import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

export const TerminalLine = ({
  children,
  className,
  isCommandLine = false,
}: PropsWithChildren<{ className?: string; isCommandLine?: boolean }>) => {
  return (
    <p
      className={cn(
        "space-x-2",
        { "font-extrabold": isCommandLine },
        className
      )}
    >
      {isCommandLine && <span className={cn("text-primary")}>$</span>}
      <span>{children}</span>
    </p>
  );
};
