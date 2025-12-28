"use client";

import React from "react";

interface CTAButtonProps {
  href: string;
  text?: string;
  align?: "left" | "right";
}

export default function CTAButton({
  href,
  text = "立即申請",
  align = "left",
}: CTAButtonProps) {
  const alignmentClasses =
    align === "right"
      ? "flex items-end justify-end"
      : "flex items-start";

  return (
    <div className={`mt-8 sm:mt-10 md:mt-12 ${alignmentClasses}`}>
      <a
        href={href}
        className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
      >
        <span>{text}</span>
        <svg
          className="ml-2 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}

