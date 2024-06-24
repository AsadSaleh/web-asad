import { Metadata } from "next";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title:
    "Home - As'ad Personal Site - Software Engineer terbaik sepanjang masa!",
  description: "Welcome to As'ad's personal site. A software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
