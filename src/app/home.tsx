"use client";

import ArrowRightIcon from "@/app/_icon/arrow-right";
import ArrowUpRightIcon from "@/app/_icon/arrow-up-right";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";
import { useState } from "react";

function useLocaleStorageState<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    }
  });

  const setLocalStorageState = (value: T) => {
    setState(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return [state, setLocalStorageState];
}

export default function Home() {
  const [scrambled, setScrambled] = useLocaleStorageState(
    "web:asad:scramble",
    true
  );

  return (
    <main className="max-w-lg md:max-w-2xl mx-auto py-8 md:py-20">
      <SocialLinks scrambled={scrambled} />

      <section className="mt-20 flex flex-col md:flex-row gap-4 items-center justify-center">
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
              Pro Max Ultra
            </span>{" "}
            software engineer.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <p
              className="dark:text-stone-400 text-stone-500 data-[hide=true]:hidden"
              data-hide={!scrambled}
            >
              Please fix this site 😢
            </p>
            <button
              className="text-slate-800 bg-slate-200 dark:text-white py-2 px-4 dark:bg-slate-800 rounded-lg active:scale-90 transition-all duration-300"
              onClick={() => setScrambled(!scrambled)}
            >
              {scrambled ? "Fix it! 🔨" : "Break it 🔥"}
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 mt-20 gap-4 px-4 md:px-0">
        <Link
          href="/porto"
          data-scrambled={scrambled}
          className="block animate-none data-[scrambled=true]:animate-float-2 data-[scrambled=true]:mt-40"
        >
          <div
            data-scrambled={scrambled}
            className="block h-full rotate-0 data-[scrambled=true]:rotate-6 group rounded-lg bg-gradient-to-r from-violet-700 to-blue-600 active:scale-95 transition-all"
          >
            <div className="w-full h-full p-4 md:px-6 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
              <div className=" flex items-center justify-between gap-2 text-white dark:text-white">
                <h4 className="text-xl md:text-2xl">Portfolio</h4>
                <ArrowRightIcon className="group-hover:translate-x-1 transition-all dark:text-white" />
              </div>
              <p className="text-sm md:text-base text-slate-200 dark:text-slate-300">
                Let&apos;s see As&apos;ad&apos;s playing cards
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/about"
          data-scrambled={scrambled}
          className="block animate-none data-[scrambled=true]:animate-float data-[scrambled=true]:mt-10"
          style={{ animationDelay: "0.75s" }}
        >
          <div
            data-scrambled={scrambled}
            className="block h-full rotate-0 data-[scrambled=true]:-rotate-3 group rounded-lg bg-gradient-to-r from-red-700 to-orange-600 active:scale-95 transition"
          >
            <div className="w-full h-full p-4 md:px-6 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
              <div className="text-xl md:text-3xl flex items-center justify-between gap-2 text-white dark:text-white">
                <h4 className="text-xl md:text-2xl">About</h4>
                <ArrowRightIcon className="group-hover:translate-x-1 transition-all dark:text-white" />
              </div>
              <p className="text-sm md:text-base text-slate-200 dark:text-slate-300">
                Read story about my journey
              </p>
            </div>
          </div>
        </Link>

        <a
          href="https://asadghanim.notion.site/be2974dfd64245ae9d0023d947d296ef?v=d9bffec2c5c541218f9df5cba411bae5"
          target="_blank"
          rel="noopener noreferrer"
          data-scrambled={scrambled}
          className="block animate-none data-[scrambled=true]:animate-float data-[scrambled=true]:mt-14"
          style={{ animationDelay: "1.5s" }}
        >
          <div
            data-scrambled={scrambled}
            className="rotate-0 h-full data-[scrambled=true]:rotate-[160deg] group rounded-lg bg-gradient-to-r from-green-600 to-teal-800 active:scale-95 transition"
          >
            <div className="w-full h-full p-4 md:px-6 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
              <div className="text-xl flex justify-between md:text-3xl gap-1 text-white dark:text-white">
                <h4 className="text-xl md:text-2xl">Blogs</h4>
                <ArrowUpRightIcon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-sm md:text-base text-slate-200 dark:text-slate-300">
                Discover what&apos;s inside my head
              </p>
            </div>
          </div>
        </a>

        <a
          data-scrambled={scrambled}
          href="https://www.tanggabelajar.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="block animate-none data-[scrambled=true]:animate-float"
          style={{ animationDelay: "2.2s" }}
        >
          <div
            data-scrambled={scrambled}
            className="rotate-0 h-full data-[scrambled=true]:rotate-[45deg] group rounded-lg bg-gradient-to-r from-orange-600 to-yellow-500 active:scale-95 transition"
          >
            <div className="w-full p-4 md:px-6 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
              <div className="text-xl flex justify-between md:text-3xl gap-1 text-white dark:text-white">
                <h4 className="text-xl md:text-2xl">Learn Coding</h4>
                <ArrowUpRightIcon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-sm md:text-base text-slate-200 dark:text-slate-300">
                Free coding course
              </p>
            </div>
          </div>
        </a>
      </section>

      <footer className="mt-20 px-2">
        <p className="text-xs text-center text-stone-400 dark:text-stone-500">
          © {new Date().getFullYear()} As&apos;ad Ghanim. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
