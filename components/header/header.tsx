import React from "react";

import { MobileMenu } from "./mobile-menu";
import { LucideFileTerminal } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2">
      <p className="flex items-center space-x-1">
        <LucideFileTerminal className="h-8 w-8 text-primary" />
        <span className="text-xl">Portfolio</span>
      </p>

      <MobileMenu />
    </header>
  );
};
