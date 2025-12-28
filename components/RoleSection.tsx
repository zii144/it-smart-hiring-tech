"use client";

import React, { ReactNode } from "react";
import ScrollText from "@/components/ui/scroll-text";
import CTAButton from "@/components/ui/cta-button";

interface RoleSectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  alignment: "left" | "right";
  ctaUrl: string;
  subtitleLetterAnime?: boolean;
}

export default function RoleSection({
  id,
  title,
  subtitle,
  children,
  alignment,
  ctaUrl,
  subtitleLetterAnime = false,
}: RoleSectionProps) {
  const isLeft = alignment === "left";
  const containerClasses = isLeft
    ? "min-h-screen flex flex-col justify-center items-start text-left relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20"
    : "min-h-screen flex flex-col justify-center items-end text-right relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20";

  const textDirection = isLeft ? "left" : "right";
  const contentAlignment = isLeft ? "text-left" : "text-right";

  return (
    <div id={id} className={containerClasses}>
      <div className="w-full paragraph-container">
        <ScrollText
          as="h2"
          text={title}
          direction={textDirection}
          classname="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
        />
        <ScrollText
          as="h3"
          text={subtitle}
          direction={textDirection}
          letterAnime={subtitleLetterAnime}
          classname="text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold mb-4 sm:mb-5 md:mb-6 leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
        />
        <div
          className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed space-y-3 sm:space-y-4 ${contentAlignment}`}
        >
          {children}
        </div>
        <CTAButton href={ctaUrl} align={alignment} />
      </div>
    </div>
  );
}

