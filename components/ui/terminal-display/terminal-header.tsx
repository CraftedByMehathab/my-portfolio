import { cn } from "@/lib/utils";
import { TerminalButton } from "./terminal-button";

import React, { PropsWithChildren } from "react";

export const TermialHeader = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <header
      className={cn("space-x-8 flex items-center p-3 bg-accent", className)}
    >
      <div className="flex space-x-2">
        <TerminalButton className="bg-red-500" />
        <TerminalButton className="bg-amber-400" />
        <TerminalButton className="bg-green-400" />
      </div>
      <p className="">{children}</p>
    </header>
  );
};
