import { Metadata } from "next";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import TailwindMediaBreakpointIndicator from "./_components/tailwind-media-breakpoint-indicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Home - As'ad Personal Site - Software Engineer terbaik sepanjang masa!",
  description: "Welcome to As'ad's personal site. A software engineer.",
  metadataBase: new URL("https://asadghanim.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        {process.env.NODE_ENV === "development" ? (
          <TailwindMediaBreakpointIndicator />
        ) : null}
      </body>
    </html>
  );
}
