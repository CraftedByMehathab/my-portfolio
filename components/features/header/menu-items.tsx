import React from "react";
import { MenuItem } from "./menu-item";
import { contactPath, homePath, skillsPath } from "@/utils/paths";

export const MenuItems = () => {
  return (
    <>
      <MenuItem href={homePath()}>Home</MenuItem>
      <MenuItem href={skillsPath()}>Skills</MenuItem>
      <MenuItem href={contactPath()}>Contact</MenuItem>
    </>
  );
};
