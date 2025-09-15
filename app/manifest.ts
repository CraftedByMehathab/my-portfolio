import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mehathab Shaik | Portfolio",
    short_name: "Mehathab Shaik | Portfolio",
    description: "Senior Software Engineer Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#00bc7d",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
