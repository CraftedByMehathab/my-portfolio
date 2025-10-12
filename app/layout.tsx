import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/features/header";
import { Footer } from "@/components/features/footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehathab Shaik | Portfolio",
  description: "Senior Software Engineer Portfolio",
  applicationName: "Mehathab Shaik's Protfolio",
  keywords: [
    "Mehathab Shaik",
    "Portfolio",
    "#OPENTOWORK",
    "Open to work",
    "Senior Software Engineer",
    "Frontend Developer",
    "React Expert",
    "Frontend Specialist",
    "Senior Web Developer",
    "Full Stack Developer",
  ],
  authors: [
    { name: "Mehathab Shaik", url: "https://www.linkedin.com/in/mehathab/" },
  ],
  category: "Senior Software Engineer Portfolio",

  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="canonical" href="https://mehathab.dev" key="canonical" />
      <meta name="description" content={metadata.description as string} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
