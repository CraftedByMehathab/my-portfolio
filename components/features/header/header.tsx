import React from "react";

import { MobileMenu } from "./mobile-menu";
import { LucideFileTerminal } from "lucide-react";
import { WebThemeSwitch } from "@/components/theme/web-theme-switch";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2">
      <p className="flex items-center space-x-1">
        <LucideFileTerminal className="h-8 w-8 text-primary" />
        <span className="text-xl">Portfolio</span>
      </p>

      <MobileMenu />
      <WebThemeSwitch className="hidden md:flex" />
    </header>
  );
};
