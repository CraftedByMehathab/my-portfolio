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

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <LucideMenu className="text-primary h-8 w-8" />
      </SheetTrigger>
      <SheetContent className="dark:bg-accent">
        <SheetHeader>
          <SheetTitle>
            <LucideCodeXml className="h-8 w-8 text-primary" />
          </SheetTitle>
          <SheetDescription className="space-y-4 mt-4">
            <MobileThemeSwitch />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
