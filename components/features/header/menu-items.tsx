import React from "react";
import { MenuItem } from "./menu-item";
import { contactPath, homePath } from "@/utils/paths";

export const MenuItems = () => {
  return (
    <>
      <MenuItem href={homePath()}>Home</MenuItem>
      <MenuItem href={contactPath()}>Contact</MenuItem>
    </>
  );
};
