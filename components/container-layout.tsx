import { cn } from "@/lib/utils";
import { LucideCodeXml } from "lucide-react";
import React, { PropsWithChildren } from "react";

type ContainerLayoutProps = {
  title: string;
  introText?: string;
  id?: string;
  className?: string;
};
export const ContainerLayout = ({
  children,
  title,
  introText,
  id,
  className,
}: PropsWithChildren<ContainerLayoutProps>) => {
  return (
    <section className={cn("", className)} id={id}>
      <header className="space-y-4 max-w-lg">
        <h2 className="text-2xl md:text-3xl font-extrabold flex space-x-2">
          <LucideCodeXml className="h-10 w-10 md:h-11 md:w-11 text-primary " />
          <span>{title}</span>
        </h2>
        <p className="text-lg">{introText}</p>
      </header>
      {children}
    </section>
  );
};
