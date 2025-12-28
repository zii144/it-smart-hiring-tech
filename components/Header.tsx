"use client";

import React from "react";
import ScrollText from "@/components/ui/scroll-text";

export default function Header() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
        <div className="flex flex-col items-center">
          <ScrollText
            text="智晟資訊服務股份"
            direction="down"
            classname="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.1] sm:leading-none [text-shadow:0_1px_3px_rgba(0,0,0,0.15)] px-2"
          />
          <ScrollText
            text="有限公司"
            direction="down"
            classname="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.1] sm:leading-none [text-shadow:0_1px_3px_rgba(0,0,0,0.15)] px-2"
          />
        </div>
        <div className="w-16 sm:w-20 h-px bg-white/40 mx-auto my-2 sm:my-3 md:my-4"></div>
        <ScrollText
          text="職缺2026"
          direction="up"
          classname="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
        />
      </div>
    </div>
  );
}

