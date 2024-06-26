"use client";

import CheckIcon from "@/app/_icon/check";
import DocumentDuplicateIcon from "@/app/_icon/document-duplicate";
import { useEffect, useState } from "react";

export default function EmailWithCopy({
  scrambled = false,
}: {
  scrambled?: boolean;
}) {
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
    <div
      className={scrambled ? "animate-float-2" : ""}
      style={{ animationDelay: "1.5s" }}
    >
      <button
        onClick={copyEmailToClipboard}
        data-scramble={scrambled}
        className="h-min hover:scale-110 font-mono text-xs p-4 rounded-xl bg-red-700 text-white flex items-center active:scale-95 gap-2 transition-all duration-300 data-[scramble=true]:mt-10 data-[scramble=true]:rotate-[-20deg]"
        type="button"
      >
        Email
        {coppied ? (
          <CheckIcon className="w-4 h-4 text-white font-bold" />
        ) : (
          <DocumentDuplicateIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
