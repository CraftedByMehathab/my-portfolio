import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export const MenuItem = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => {
  return (
    <Button asChild variant="ghost" className="">
      <Link
        className="text-secondary-foreground hover:no-underline hover:border-b-0"
        href={href}
      >
        {children}
      </Link>
    </Button>
  );
};
