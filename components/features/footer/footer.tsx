import React from "react";
import { SocialIcons } from "../contact/connect-info";

export const Footer = () => {
  return (
    <footer className="bg-accent text-center py-8 flex flex-wrap-reverse justify-center items-baseline md:justify-between px-4 md:px-8 lg:px-[10%]">
      <p className="mt-4 mr-4">© 2025 Mehathab Shaik. All rights reserved.</p>
      <SocialIcons
        iconClassName="bg-[background] h-12 w-12 text-primary"
        className="mt-4"
      />
    </footer>
  );
};
