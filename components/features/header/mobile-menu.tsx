import React from "react";
import { LucideCodeXml, LucideMenu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileThemeSwitch } from "@/components/theme/mobile-theme-switch";
import { MenuItems } from "./menu-items";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <LucideMenu className="text-primary h-8 w-8" />
      </SheetTrigger>
      <SheetContent className="dark:bg-accent">
        <SheetHeader>
          <SheetTitle>
            <LucideCodeXml className="h-8 w-8 text-primary ml-4" />
          </SheetTitle>
          <SheetDescription className="space-y-4 mt-4 flex flex-col justify-center items-start">
            <MenuItems />
            <MobileThemeSwitch className="px-4" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
