"use client";

import { useTheme } from "next-themes";
import React from "react";

import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

export const MobileThemeSwitch = ({ className }: { className?: string }) => {
  const { setTheme, theme } = useTheme();
  return (
    <span className={cn("flex", className)}>
      <Label className="mr-2">Dark Mode</Label>
      <Switch
        checked={theme == "dark"}
        onCheckedChange={() =>
          setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
          )
        }
        aria-readonly
      />
    </span>
  );
};
