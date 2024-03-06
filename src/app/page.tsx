import ArrowRightIcon from "@/app/_icon/arrow-right";
import ArrowUpRightIcon from "@/app/_icon/arrow-up-right";
import Image from "next/image";
import Link from "next/link";
import EmailWithCopy from "@/app/_components/email-with-copy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - As'ad Personal Site",
  description: "A website of As'ad Ghanim, a software engineer.",
};

export default function Home() {
  return (
    <main className="max-w-lg md:max-w-7xl mx-auto w-screen h-screen flex items-center flex-col justify-between py-8 md:py-20 px-4 gap-8">
      <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
        <a
          href="https://github.com/AsadSaleh"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs p-4 rounded-xl bg-slate-800 text-white flex items-center active:scale-95 transition"
        >
          <p>GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/as-ad-saleh-umar-876608a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs p-4 rounded-xl bg-[#0077b5] text-white flex items-center active:scale-95 transition"
        >
          <p>LinkedIn</p>
        </a>
        <a
          href="https://stackoverflow.com/users/9844546/asad-s"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs p-4 rounded-xl bg-[#F48024] text-white flex items-center active:scale-95 transition"
        >
          <p>StackOverflow</p>
        </a>
        <EmailWithCopy />
        <a
          href="/documents/CV_Asad_Saleh_Umar.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs p-4 rounded-xl bg-green-700 text-white flex items-center active:scale-95 transition gap-1"
        >
          Latest CV
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
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

      <div className="w-full md:pb-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:gap-8">
        <Link
          href="/porto"
          className="group p-1 rounded-lg bg-gradient-to-r from-violet-700 to-blue-600 active:scale-95 transition-all"
        >
          <div className="w-full h-full p-2 md:px-8 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
            <h2 className="text-xl md:text-3xl flex items-center gap-2 text-white dark:text-white">
              <span>Portfolio</span>
              <ArrowRightIcon className="group-hover:translate-x-1 transition-all dark:text-white" />
            </h2>
            <p className="text-sm md:text-lg text-white dark:text-white">
              Let&apos;s see As&apos;ad&apos;s playing cards
            </p>
          </div>
        </Link>

        <Link
          href="/about"
          className="group p-1 rounded-lg bg-gradient-to-r from-red-700 to-orange-600 active:scale-95 transition"
        >
          <div className="w-full h-full p-2 md:px-8 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
            <h2 className="text-xl md:text-3xl flex items-center gap-2 text-white dark:text-white">
              <span>About</span>
              <ArrowRightIcon className="group-hover:translate-x-1 transition-all dark:text-white" />
            </h2>
            <p className="text-sm md:text-lg text-white dark:text-white">
              Read a boring stroy about my journey
            </p>
          </div>
        </Link>

        <a
          href="https://asadghanim.notion.site/be2974dfd64245ae9d0023d947d296ef?v=d9bffec2c5c541218f9df5cba411bae5"
          className="group p-1 rounded-lg bg-gradient-to-r from-green-600 to-teal-800 active:scale-95 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full p-2 md:px-8 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
            <h2 className="text-xl md:text-3xl flex gap-1 text-white dark:text-white">
              <span>Blogs</span>
              <ArrowUpRightIcon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </h2>
            <p className="text-sm md:text-lg text-white dark:text-white">
              Discover what&apos;s inside my head
            </p>
          </div>
        </a>
      </div>
    </main>
  );
}
