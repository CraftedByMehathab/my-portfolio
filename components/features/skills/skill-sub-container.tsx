import { cn } from "@/lib/utils";
import React, { PropsWithChildren, ReactNode } from "react";

type SkillSubContainerProps = {
  icon: ReactNode;
  title: string;
  className?: string;
};
export const SkillSubContainer = ({
  icon,
  title,
  className,
  children,
}: PropsWithChildren<SkillSubContainerProps>) => {
  return (
    <section className={cn("", className)}>
      <header>
        <h3 className="flex text-primary text-2xl font-extrabold space-x-2 items-center">
          {icon} <span>{title}</span>
        </h3>
      </header>
      {children}
    </section>
  );
};
