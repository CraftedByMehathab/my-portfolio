import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LucideGithub,
  LucideLinkedin,
  LucideMail,
  LucideMapPin,
  LucideTimer,
} from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { SocialIcon } from "./social-icon";

const InfoLine = ({
  icon,
  text,
  href,
}: {
  icon: ReactNode;
  text: string;
  href?: string;
}) => {
  const content = (
    <>
      <div className="flex justify-center items-center w-8 h-8 bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-secondary rounded-full ">
        {icon}
      </div>
      <span className="text-sm">{text}</span>
    </>
  );
  return (
    <li className="flex gap-2 items-center hover:text-primary rounded-sm group">
      <Button asChild variant="link" className="p-0">
        {href ? (
          <Link
            href={href}
            className="text-secondary-foreground group-hover:text-primary gap-0"
          >
            {content}
          </Link>
        ) : (
          content
        )}
      </Button>
    </li>
  );
};

export const SocialIcons = ({
  iconClassName,
  className,
}: {
  iconClassName?: string;
  className?: string;
}) => (
  <ul className={cn("flex space-x-4", className)}>
    <li>
      <SocialIcon
        iconClassName={iconClassName}
        icon={<LucideGithub />}
        href="https://github.com/CraftedByMehathab"
      />
    </li>
    <li>
      <SocialIcon
        iconClassName={iconClassName}
        icon={<LucideLinkedin />}
        href="https://www.linkedin.com/in/mehathab/"
      />
    </li>
    <li>
      <SocialIcon
        iconClassName={iconClassName}
        icon={<LucideMail />}
        target="_self"
        href="mailto:mehathab.raja@outlook.com"
      />
    </li>
  </ul>
);

export const ContactInfo = ({ className }: { className?: string }) => {
  return (
    <section className={cn("max-w-lg space-y-6 py-4", className)}>
      <header className="space-y-4">
        <h3 className="text-2xl font-extrabold">Contact Information</h3>
        <p className="">
          Feel free to reach out through any of the channels below. I&apos;m
          always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </header>

      <ul className="space-y-4">
        <InfoLine
          icon={<LucideMail />}
          text="mehathab.raja@outlook.com"
          href="mailto:mehathab.raja@outlook.com"
        />
        <InfoLine icon={<LucideMapPin />} text="Poughkeepsie, NY 12603" />
        <InfoLine
          icon={<LucideTimer />}
          text="Available for freelance from Mar 2025"
        />
      </ul>
      <SocialIcons />
    </section>
  );
};
