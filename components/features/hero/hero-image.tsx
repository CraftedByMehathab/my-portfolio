import Image from "next/image";
import React from "react";

export const HeroImage = () => {
  return (
    <div className="rounded-full overflow-hidden h-36 w-36 border-primary border-4 shadow">
      <Image
        src="/mehathab.jpeg"
        alt="Dev Image"
        width={300}
        height={300}
      ></Image>
    </div>
  );
};
