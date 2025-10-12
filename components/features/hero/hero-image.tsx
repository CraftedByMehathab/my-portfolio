import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const HeroImage = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "rounded-full overflow-hidden h-36 w-36 border-primary border-4 shadow-2xl",
          className
        )}
      >
        <Image
          src="/mehathab.jpeg"
          alt="Dev Image"
          width={400}
          height={400}
        ></Image>
      </div>
      <p className="bg-primary text-primary-foreground dark:text-background inline-flex px-4 py-2 rounded-2xl">
        #OPENTOWORK
      </p>
    </>
  );
};
