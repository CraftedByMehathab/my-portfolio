import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { HTMLAttributeAnchorTarget, ReactNode } from "react";

export const SocialIcon = ({
  iconClassName,
  icon,
  href,
  target = "_blank",
  ariaLabel = "",
}: {
  iconClassName?: string;
  icon: ReactNode;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  ariaLabel?: string;
}) => {
  return (
    <Button asChild variant="link" className="p-0">
      <a href={href} target={target} aria-label={ariaLabel}>
        <div
          className={cn(
            "flex justify-center items-center w-9 h-9 bg-secondary text-secondary-foreground hover:bg-primary hover:text-secondary rounded-full hover:-translate-y-[5px]",
            iconClassName
          )}
        >
          {icon}
        </div>
      </a>
    </Button>
  );
};
