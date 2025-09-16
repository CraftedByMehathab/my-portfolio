import React from "react";
import { MenuItem } from "./menu-item";
import {
  aboutPath,
  contactPath,
  homePath,
  projectsPath,
  skillsPath,
} from "@/utils/paths";

export const MenuItems = () => {
  return (
    <>
      <MenuItem href={homePath()}>Home</MenuItem>
      <MenuItem href={projectsPath()}>Projects</MenuItem>
      <MenuItem href={skillsPath()}>Skills</MenuItem>
      <MenuItem href={aboutPath()}>About</MenuItem>
      <MenuItem href={contactPath()}>Contact</MenuItem>
    </>
  );
};
