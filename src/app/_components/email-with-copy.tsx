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
        className="flex h-min items-center gap-2 rounded-xl bg-red-700 p-4 font-mono text-xs text-white transition-all duration-300 hover:scale-110 active:scale-95 data-[scramble=true]:mt-10 data-[scramble=true]:rotate-[-20deg]"
        type="button"
      >
        Email
        {coppied ? (
          <CheckIcon className="h-4 w-4 font-bold text-white" />
        ) : (
          <DocumentDuplicateIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
