"use client";

import React from "react";
import ScrollText from "@/components/ui/scroll-text";

export default function Footer() {
  return (
    <footer className="relative min-h-screen flex flex-col justify-center items-center text-center z-10 px-4 sm:px-6 md:px-8">
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center">
        <ScrollText
          text="智晟歡迎你"
          direction="up"
          classname="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] text-center"
        />
        <div className="flex flex-col items-center">
          <ScrollText
            text="© 2025 智晟資訊服務"
            direction="up"
            classname="text-sm sm:text-base md:text-xl lg:text-2xl font-light [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] text-center"
          />
          <ScrollText
            text="股份有限公司｜資訊部主管 Zii"
            direction="up"
            classname="text-sm sm:text-base md:text-xl lg:text-2xl font-light mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] text-center"
          />
        </div>
      </div>
    </footer>
  );
}

