"use client";

import CheckIcon from "@/app/_icon/check";
import DocumentDuplicateIcon from "@/app/_icon/document-duplicate";
import { useEffect, useState } from "react";

export default function EmailWithCopy() {
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
    <button
      onClick={copyEmailToClipboard}
      className="glow font-mono text-xs p-4 rounded-xl bg-red-700 text-white flex items-center active:scale-95 transition gap-2"
      type="button"
    >
      Email
      {coppied ? (
        <CheckIcon className="w-4 h-4 text-white font-bold" />
      ) : (
        <DocumentDuplicateIcon className="w-4 h-4" />
      )}
    </button>
  );
}
