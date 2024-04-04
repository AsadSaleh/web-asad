"use client";

import ArrowRightIcon from "@/app/_icon/arrow-right";
import ArrowUpRightIcon from "@/app/_icon/arrow-up-right";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";
import { useState } from "react";

export default function Home() {
  const [scrambled, setScrambled] = useState(true);

  return (
    <main className="max-w-lg md:max-w-4xl mx-auto py-8 md:py-20 px-4">
      <SocialLinks scrambled={scrambled} />

      <div className="mt-20 flex flex-col md:flex-row gap-4 items-center justify-center">
        <Image
          src="/images/profile_pixelized_square.jpeg"
          width={130}
          height={130}
          alt="Pixelized Picture of As'ad"
          className="rounded-3xl"
        />
        <div className="text-center md:text-left">
          <p className="text-sm md:text-xl text-stone-400 italic">
            Hello there!
            <br />
          </p>
          <p className="text-2xl md:text-4xl dark:text-white">
            <span>I&apos;m&nbsp;</span>
            <span className="font-semibold">As&apos;ad Ghanim</span>
          </p>
          <p className="text-xl md:text-3xl dark:text-white">
            A{" "}
            <span className="bg-gradient-to-r from-blue-600 to-red-700 font-semibold bg-clip-text text-transparent">
              software engineer
            </span>{" "}
            from Indonesia.
          </p>
        </div>
      </div>

      <div
        data-scrambled={scrambled}
        className="mt-20 animate-none data-[scrambled=true]:animate-float data-[scrambled=true]:mt-40"
      >
        <Link href="/porto">
          <div
            data-scrambled={scrambled}
            className="rotate-0 data-[scrambled=true]:rotate-6 group p-1 rounded-lg bg-gradient-to-r from-violet-700 to-blue-600 active:scale-95 transition-all"
          >
            <div className="w-full p-4 md:px-8 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
              <h2 className="text-xl md:text-3xl flex items-center gap-2 text-white dark:text-white">
                <span>Portfolio</span>
                <ArrowRightIcon className="group-hover:translate-x-1 transition-all dark:text-white" />
              </h2>
              <p className="text-sm md:text-lg text-white dark:text-slate-300">
                Let&apos;s see As&apos;ad&apos;s playing cards
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div
        data-scrambled={scrambled}
        className="mt-6 animate-none data-[scrambled=true]:animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <Link href="/about">
          <div
            data-scrambled={scrambled}
            className="rotate-0 data-[scrambled=true]:-rotate-3 group p-1 rounded-lg bg-gradient-to-r from-red-700 to-orange-600 active:scale-95 transition"
          >
            <div className="w-full h-full p-4 md:px-8 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
              <h2 className="text-xl md:text-3xl flex items-center gap-2 text-white dark:text-white">
                <span>About</span>
                <ArrowRightIcon className="group-hover:translate-x-1 transition-all dark:text-white" />
              </h2>
              <p className="text-sm md:text-lg text-white dark:text-slate-300">
                Read a boring story about my journey
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div
        data-scrambled={scrambled}
        className="mt-6 animate-none data-[scrambled=true]:animate-float data-[scrambled=true]:mt-14"
        style={{ animationDelay: "0.8s" }}
      >
        <a
          href="https://asadghanim.notion.site/be2974dfd64245ae9d0023d947d296ef?v=d9bffec2c5c541218f9df5cba411bae5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            data-scrambled={scrambled}
            className="rotate-0 data-[scrambled=true]:rotate-[185deg] group p-1 rounded-lg bg-gradient-to-r from-green-600 to-teal-800 active:scale-95 transition"
          >
            <div className="w-full h-full p-4 md:px-8 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
              <h2 className="text-xl md:text-3xl flex gap-1 text-white dark:text-white">
                <span>Blogs</span>
                <ArrowUpRightIcon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h2>
              <p className="text-sm md:text-lg text-white dark:text-slate-300">
                Discover what&apos;s inside my head
              </p>
            </div>
          </div>
        </a>
      </div>
      <footer className="mt-20">
        <p className="dark:text-white">Please fix this site 😢</p>
        <button
          className="text-slate-800 bg-slate-200 dark:text-white py-2 px-4 dark:bg-slate-800 rounded-lg mt-4 active:scale-90 transition-all duration-300"
          onClick={() => setScrambled((p) => !p)}
        >
          {scrambled ? "Fix it! 🔨" : "Break it 🔥"}
        </button>
      </footer>
    </main>
  );
}
