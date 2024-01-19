import DocumentDuplicateIcon from "@/icon/document-duplicate";
import ArrowRightIcon from "@/icon/arrow-right";
import ArrowUpRightIcon from "@/icon/arrow-up-right";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CheckIcon from "@/icon/check";

export default function Home() {
  const [coppied, setCoppied] = useState(false);

  async function copyEmailToClipboard() {
    try {
      const emailAddress = "azzzad.s@gmail.com";
      await navigator.clipboard.writeText(emailAddress);
      setCoppied(true);
    } catch (error) {
      console.log("failed to copy text");
    }
  }

  useEffect(() => {
    if (coppied) {
      setTimeout(() => {
        setCoppied(false);
      }, 2000);
    }
  }, [coppied]);
  return (
    <>
      <Head>
        <title>As&apos;ad Personal Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex items-center flex-col justify-between py-8 md:py-20 px-4">
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/AsadSaleh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] p-4 border-[0.5px] border-[#6C6C6C] rounded-xl bg-black text-white flex items-center active:scale-95 transition"
          >
            <p>GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/as-ad-saleh-umar-876608a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] p-4 border-[0.5px] border-[#6C6C6C] rounded-xl bg-[#0077b5] text-white flex items-center active:scale-95 transition"
          >
            <p>LinkedIn</p>
          </a>
          <a
            href="https://stackoverflow.com/users/9844546/asad-s"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] p-4 border-[0.5px] border-[#6C6C6C] rounded-xl bg-[#F48024] text-white flex items-center active:scale-95 transition"
          >
            <p>StackOverflow</p>
          </a>
          <button
            onClick={copyEmailToClipboard}
            className="font-mono text-[12px] p-4 border-[0.5px] border-[#6C6C6C] rounded-xl bg-red-700 text-white flex items-center active:scale-95 transition gap-2"
          >
            Mail
            {coppied ? (
              <CheckIcon className="w-4 h-4 text-white font-bold" />
            ) : (
              <DocumentDuplicateIcon className="w-4 h-4" />
            )}
          </button>
          <a
            href="/documents/CV_Asad.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] p-4 px-6 border-[0.5px] border-[#6C6C6C] rounded-xl bg-green-700 text-white flex items-center active:scale-95 transition gap-1"
          >
            Latest CV
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Image
            src="/images/profile.jpg"
            width={80}
            height={80}
            alt="As'ad"
            className="rounded-full"
          />
          <div>
            <p className="text-xl text-stone-400 italic">
              Hello there! <br />
            </p>
            <p className="text-4xl dark:text-white">
              <span>My name is&nbsp;</span>
              <span className="">As&apos;ad</span>
            </p>
            <p className="text-3xl dark:text-white">
              I&apos;m a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-red-700 font-semibold bg-clip-text text-transparent">
                software engineer
              </span>{" "}
              from Indonesia.
            </p>
          </div>
          <p></p>
        </div>

        <div className="mt-10 pb-10 md:pb-0 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <Link
            href="/porto"
            className="group p-1 rounded-lg bg-gradient-to-r from-violet-700 to-blue-600 active:scale-95 transition-all"
          >
            <div className="w-full h-full p-2 md:px-8 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
              <h2 className="text-3xl flex items-center gap-2 text-white dark:text-white">
                <span>Portfolio</span>
                <ArrowRightIcon className="group-hover:translate-x-1 transition-all dark:text-white" />
              </h2>
              <p className="text-white dark:text-white">
                Let&apos;s see As&apos;ad&apos;s playing cards
              </p>
            </div>
          </Link>

          <Link
            href="/about"
            className="group p-1 rounded-lg bg-gradient-to-r from-red-700 to-orange-600 active:scale-95 transition"
          >
            <div className="w-full h-full p-2 md:px-8 md:py-4 dark:bg-black rounded-lg group-hover:bg-transparent transition-all">
              <h2 className="text-3xl flex items-center gap-2 text-white dark:text-white">
                <span>About</span>
                <ArrowRightIcon className="group-hover:translate-x-1 transition-all dark:text-white" />
              </h2>
              <p className="text-white dark:text-white">
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
              <h2 className="text-3xl flex gap-1 text-white dark:text-white">
                <span>Blogs</span>
                <ArrowUpRightIcon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h2>
              <p className="text-white dark:text-white">
                Discover what&apos;s inside my head
              </p>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
