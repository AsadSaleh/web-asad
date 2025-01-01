"use client";

import EmailWithCopy from "./email-with-copy";

export default function SocialLinks({ scrambled }: { scrambled: boolean }) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-2 md:gap-4">
      <div className={scrambled ? "animate-float-2" : ""}>
        <a
          href="https://github.com/AsadSaleh"
          target="_blank"
          rel="noopener noreferrer"
          data-scramble={scrambled}
          className="flex h-min items-center rounded-xl bg-slate-800 p-4 font-mono text-xs text-white transition-all duration-300 hover:scale-110 active:scale-95 data-[scramble=true]:mt-10 data-[scramble=true]:-rotate-12"
        >
          <p>GitHub</p>
        </a>
      </div>
      <div
        className={scrambled ? "animate-float-2" : ""}
        style={{ animationDelay: "0.5s" }}
      >
        <a
          href="https://www.linkedin.com/in/as-ad-saleh-umar-876608a4/"
          target="_blank"
          rel="noopener noreferrer"
          data-scramble={scrambled}
          className="flex h-min items-center rounded-xl bg-[#0077b5] p-4 font-mono text-xs text-white transition-all duration-300 hover:scale-110 active:scale-95 data-[scramble=true]:mt-20 data-[scramble=true]:rotate-6"
        >
          <p>LinkedIn</p>
        </a>
      </div>
      <div
        className={scrambled ? "animate-float-2" : ""}
        style={{ animationDelay: "1s" }}
      >
        <a
          href="https://stackoverflow.com/users/9844546/asad-s"
          target="_blank"
          rel="noopener noreferrer"
          data-scramble={scrambled}
          className="data-[scramble=true]:mb-15 flex h-min items-center rounded-xl bg-[#F48024] p-4 font-mono text-xs text-white transition-all duration-300 hover:scale-110 active:scale-95 data-[scramble=true]:rotate-12"
        >
          <p>StackOverflow</p>
        </a>
      </div>
      <EmailWithCopy scrambled={scrambled} />
      <div
        className={scrambled ? "animate-float-2" : ""}
        style={{ animationDelay: "2s" }}
      >
        <a
          href="/documents/CV_Asad_Saleh_Umar.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-scramble={scrambled}
          className="flex h-min items-center gap-1 rounded-xl bg-green-700 p-4 font-mono text-xs text-white transition-all duration-300 hover:scale-110 active:scale-95 data-[scramble=true]:-ml-10 data-[scramble=true]:-mt-10 data-[scramble=true]:-rotate-3"
        >
          Latest CV
        </a>
      </div>
    </div>
  );
}
