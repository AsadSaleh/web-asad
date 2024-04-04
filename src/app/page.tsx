import ArrowRightIcon from "@/app/_icon/arrow-right";
import ArrowUpRightIcon from "@/app/_icon/arrow-up-right";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import SocialLinks from "./social-links";
import Home from "./home";

export const metadata: Metadata = {
  title: "Home - As'ad Personal Site",
  description: "A website of As'ad Ghanim, a software engineer.",
};

export default function HomePage() {
  return <Home />;
}
