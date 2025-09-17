import React from "react";

import { MobileMenu } from "./mobile-menu";
import { LucideFileTerminal } from "lucide-react";
import { WebThemeSwitch } from "@/components/theme/web-theme-switch";
import { WebMenu } from "./web-menu";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b md:px-8 lg:px-[10%] sticky top-0 bg-[background] z-50 opacity-80 shadow">
      <p className="flex items-center space-x-1">
        <LucideFileTerminal className="h-8 w-8 text-primary" />
        <span className="text-xl">Portfolio</span>
      </p>
      <WebMenu className="hidden md:flex" />
      <MobileMenu />
      <WebThemeSwitch className="hidden md:flex" />
    </header>
  );
};
