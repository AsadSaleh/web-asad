import Head from "next/head";
import Link from "next/link";

export default function Porto() {
  return (
    <>
      <Head>
        <title>Porto - As&apos;ad Personal Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-3xl p-6">
        <div className="flex">
          <Link
            href="/"
            className="my-4 px-4 py-2 rounded hover:bg-stone-400 bg-stone-700 transition"
          >
            To Home
          </Link>
        </div>

        <div className="mb-4 text-lg">
          Some of my public / hobby works are listed here
        </div>

        <div className="flex flex-col gap-4">
          <div className="px-6 py-2 border-stone-600 rounded-xl border flex items-center justify-between">
            <div>
              <p className="text-xl tracking-wide">Drop Em</p>
              <p className="text-lg text-stone-400">
                NPM Library for creating Drag & Drop React component
              </p>
            </div>
            <a
              href="https://github.com/AsadSaleh/drop-em"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] p-3 border-[0.5px] border-[#6C6C6C] rounded-xl bg-slate-900"
            >
              GitHub
            </a>
          </div>

          <div className="px-6 py-2 border-stone-600 rounded-xl border flex items-center justify-between">
            <div>
              <p className="text-xl tracking-wide">Time UI</p>
              <p className="text-lg text-stone-400">
                A simple web for managing your preferred global clocks
              </p>
            </div>
            <div className="flex justify-end gap-1">
              <a
                href="https://github.com/AsadSaleh/time-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] p-3 border-[0.5px] border-[#6C6C6C] rounded-xl bg-slate-900"
              >
                GitHub
              </a>
              <a
                href="https://timezone-jakarta-ui.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] p-3 border-[0.5px] border-[#6C6C6C] rounded-xl bg-stone-900"
              >
                Open App
              </a>
            </div>
          </div>

          <div className="px-6 py-2 border-stone-600 rounded-xl border flex items-center justify-between">
            <p className="text-lg text-stone-400">
              A website for Infradigital Foundation company profile
            </p>
            <a
              href="https://infradigitalfoundation.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] p-3 border-[0.5px] border-[#6C6C6C] rounded-xl bg-stone-900"
            >
              Open App
            </a>
          </div>

          <div className="px-6 py-2 border-stone-600 rounded-xl border flex items-center justify-between">
            <p className="text-lg text-stone-400">
              A website for Iyada company profile
            </p>
            <a
              href="https://iyada.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] p-3 border-[0.5px] border-[#6C6C6C] rounded-xl bg-stone-900"
            >
              Open App
            </a>
          </div>

          <div className="px-6 py-2 border-stone-600 rounded-xl border flex items-center justify-between">
            <p className="text-lg text-stone-400">
              A sample React Native app which follows Flip&apos;s delightful UI
            </p>
            <a
              href="https://github.com/AsadSaleh/flip_react_native_app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] p-3 border-[0.5px] border-[#6C6C6C] rounded-xl bg-slate-900"
            >
              GitHub
            </a>
          </div>

          <div className="px-6 py-2 border-stone-600 rounded-xl border flex items-center justify-between">
            <p className="text-lg text-stone-400">This website</p>
            <a
              href="https://github.com/AsadSaleh/web-asad"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] p-3 border-[0.5px] border-[#6C6C6C] rounded-xl bg-slate-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
