import Link from "next/link";

export default function Porto() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="flex">
        <Link
          href="/"
          className="my-4 px-4 py-2 rounded hover:bg-stone-400 bg-stone-700 transition"
        >
          To Home
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <h1>Hello I&apos;m porto page</h1>

        <div className="px-6 py-2 border-stone-600 rounded-xl border">
          <p>https://github.com/AsadSaleh/drop-em</p>
          <p className="text-xl tracking-wide">Drop Em</p>
          <p className="text-lg text-stone-400">
            An NPM Library for creating Drag & Drop React component
          </p>
        </div>

        <div className="px-6 py-2 border-stone-600 rounded-xl border">
          <p>https://github.com/AsadSaleh/time-ui</p>
          <p>https://timezone-jakarta-ui.netlify.app/</p>
          <p className="text-xl tracking-wide">Time UI</p>
          <p className="text-lg text-stone-400">
            A simple web for managing your preferred global clocks
          </p>
        </div>

        <div className="px-6 py-2 border-stone-600 rounded-xl border">
          <p>https://infradigitalfoundation.netlify.app/</p>
          <p className="text-xl tracking-wide">
            A website for Infradigital Foundation company profile
          </p>
        </div>

        <div className="px-6 py-2 border-stone-600 rounded-xl border">
          <p>https://iyada.id/</p>
          <p className="text-xl tracking-wide">
            A website for PT Iyada company profile
          </p>
        </div>

        <div className="px-6 py-2 border-stone-600 rounded-xl border">
          <p>https://github.com/AsadSaleh/flip_react_native_app</p>
          <p className="text-lg text-stone-400">
            A sample React Native app which follows Flip&apos;s delightful UI
          </p>
        </div>

        <div className="px-6 py-2 border-stone-600 rounded-xl border">
          <p>https://github.com/AsadSaleh/web-asad</p>
          <p className="text-xl tracking-wide">This website</p>
        </div>
      </div>
    </main>
  );
}
