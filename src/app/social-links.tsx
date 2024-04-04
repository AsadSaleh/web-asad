"use client";

import EmailWithCopy from "./_components/email-with-copy";

export default function SocialLinks({ scrambled }: { scrambled: boolean }) {
  return (
    <div className="flex gap-2 md:gap-4 flex-wrap justify-center items-start">
      <a
        href="https://github.com/AsadSaleh"
        target="_blank"
        rel="noopener noreferrer"
        data-scramble={scrambled}
        className="h-min hover:scale-110 font-mono text-xs p-4 rounded-xl bg-slate-800 text-white flex items-center active:scale-95 transition-all duration-300 data-[scramble=true]:mt-10 data-[scramble=true]:-rotate-12"
      >
        <p>GitHub</p>
      </a>
      <a
        href="https://www.linkedin.com/in/as-ad-saleh-umar-876608a4/"
        target="_blank"
        rel="noopener noreferrer"
        data-scramble={scrambled}
        className="h-min hover:scale-110 font-mono text-xs p-4 rounded-xl bg-[#0077b5] text-white flex items-center active:scale-95 transition-all duration-300 data-[scramble=true]:mt-20 data-[scramble=true]:rotate-6"
      >
        <p>LinkedIn</p>
      </a>
      <a
        href="https://stackoverflow.com/users/9844546/asad-s"
        target="_blank"
        rel="noopener noreferrer"
        data-scramble={scrambled}
        className="h-min hover:scale-110 font-mono text-xs p-4 rounded-xl bg-[#F48024] text-white flex items-center active:scale-95 transition-all duration-300 data-[scramble=true]:mb-15  data-[scramble=true]:rotate-12"
      >
        <p>StackOverflow</p>
      </a>
      <EmailWithCopy scramble={scrambled} />
      <a
        href="/documents/CV_Asad_Saleh_Umar.pdf"
        target="_blank"
        rel="noopener noreferrer"
        data-scramble={scrambled}
        className="h-min hover:scale-110 font-mono text-xs p-4 rounded-xl bg-green-700 text-white flex items-center active:scale-95 gap-1 transition-all duration-300 data-[scramble=true]:-mt-10 data-[scramble=true]:-ml-10 data-[scramble=true]:-rotate-3"
      >
        Latest CV
      </a>
    </div>
  );
}
