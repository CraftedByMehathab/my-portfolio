import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";

export const MenuItem = ({
  href,
  target,
  children,
}: PropsWithChildren<
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target">
>) => {
  return (
    <Button asChild variant="ghost" className="">
      <Link
        className="text-secondary-foreground hover:no-underline hover:border-b-0"
        href={href as string}
        target={target}
      >
        {children}
      </Link>
    </Button>
  );
};
