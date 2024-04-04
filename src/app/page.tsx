import { Metadata } from "next";
import Home from "./home";

export const metadata: Metadata = {
  title: "Home - As'ad Personal Site",
  description: "A website of As'ad Ghanim, a software engineer.",
};

export default function HomePage() {
  return <Home />;
}
