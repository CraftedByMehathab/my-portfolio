import React from "react";
import { MenuItems } from "./menu-items";

export const WebMenu = ({ className }: { className?: string }) => {
  return (
    <nav className={className}>
      <MenuItems />
    </nav>
  );
};
