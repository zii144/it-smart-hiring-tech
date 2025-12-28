"use client";
import ScrollText from "@/components/ui/scroll-text";
import MotionDrawerNav from "@/components/MotionDrawerNav";
import SectionMarquee from "@/components/SectionMarquee";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoleSection from "@/components/RoleSection";
import ShaderBackground from "@/components/ShaderBackground";
import React, { useState, useEffect } from "react";

// Role data configuration
const roles = [
  {
    id: "role-1",
    title: "初階軟體工程師",
    subtitle: "從功能實作到系統理解的起點",
    alignment: "left" as const,
    ctaUrl: "https://it-smart-hiring-junior-dev.netlify.app/", // TODO: Replace with your application URL for 初階軟體工程師
    paragraphs: [
      "這個角色適合想要真正參與系統開發、",
      "在資深工程師帶領下，",
      "學習如何把需求變成穩定可維護的程式。",
    ],
    divider: true,
    additionalParagraphs: [
      "你會接觸真實上線的系統，\n學習用 AI 逐步建立對程式碼、架構與交付流程的理解。",
    ],
  },
  {
    id: "role-4",
    title: "平面視覺設計師",
    subtitle: "讓內容被看懂、被使用、被記住",
    alignment: "right" as const,
    ctaUrl: "https://it-smart-hiring-deisgner.netlify.app/", // TODO: Replace with your application URL for 平面視覺設計師
    paragraphs: [
      "我們需要的不是只追求好看的設計，",
      "而是能理解「為什麼要這樣設計」的人。",
    ],
    divider: true,
    additionalParagraphs: [
      "作品會出現在教材、簡報、說明、教學影片中，",
      "幫助用戶更快理解資訊、完成操作、做出決策。",
    ],
  },
  {
    id: "role-3",
    title: "數位教育內容架構師",
    subtitle: "把知識變成「能被學會」的系統",
    alignment: "left" as const,
    ctaUrl: "https://it-smart-hiring-instructional-desinge.netlify.app/", // TODO: Replace with your application URL for 數位教育內容架構師
    subtitleLetterAnime: true,
    paragraphs: [
      "這個角色專注在教學設計與內容結構。",
      "你會負責把知識拆解、編排成清楚的學習路徑，",
      "並團隊協作，讓內容能在系統正確呈現與評估。",
    ],
    divider: true,
    additionalParagraphs: [
      "如果你在意「學習怎麼真正發生」， 這會是你發揮教育專業的核心位置。",
    ],
  },
  {
    id: "role-2",
    title: "系統使用品質協調師",
    subtitle: "使用者與系統之間的關鍵角色",
    alignment: "right" as const,
    ctaUrl: "#", // TODO: Replace with your application URL for 系統使用品質協調師
    paragraphs: [
      "非傳統只回訊息的客服，",
      "也不是只跑測試的人。",
      "你會直接接觸實際使用系統者，理解痛點，",
      "並把這些問題整理成能改善的回饋。",
    ],
    divider: true,
    additionalParagraphs: [
      "如果你擅長溝通、觀察、在混亂中找出問題，\n這會是一個影響力很大的位置。",
    ],
  },
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pixelDensity, setPixelDensity] = useState(1);
  const [paragraphWidth, setParagraphWidth] = useState<string>("100%");

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    setIsMounted(true);

    // Calculate optimal paragraph width based on device width
    const calculateParagraphWidth = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      let calculatedWidth: string;

      if (width < 640) {
        // Mobile: Use 92% of viewport width (leaving space for padding)
        calculatedWidth = `${Math.floor(width * 0.92)}px`;
      } else if (width < 768) {
        // Small tablet: Use 85% of viewport width
        calculatedWidth = `${Math.floor(width * 0.85)}px`;
      } else if (width < 1024) {
        // Tablet: Use 75% of viewport width
        calculatedWidth = `${Math.floor(width * 0.75)}px`;
      } else if (width < 1280) {
        // Small desktop: Use 65% of viewport width, max 900px
        calculatedWidth = `${Math.min(Math.floor(width * 0.65), 900)}px`;
      } else {
        // Large desktop: Use 60% of viewport width, max 1000px for optimal readability
        calculatedWidth = `${Math.min(Math.floor(width * 0.6), 1000)}px`;
      }

      setParagraphWidth(calculatedWidth);
    };

    // Reduce pixel density on mobile for better performance
    const updatePixelDensity = () => {
      if (typeof window === "undefined") return;
      setPixelDensity(window.innerWidth < 768 ? 0.75 : 1);
    };

    const handleResize = () => {
      calculateParagraphWidth();
      updatePixelDensity();
    };

    // Initialize values
    calculateParagraphWidth();
    updatePixelDensity();

    // Wait for components to load before hiding loading screen
    // Use a shorter timeout and ensure it always completes
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Reduced from 1500ms for faster initial load

    // Fallback: ensure loading screen hides even if something goes wrong
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(loadingTimer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div
      className="relative"
      style={{ "--paragraph-width": paragraphWidth } as React.CSSProperties}
    >
      {/* Loading Screen */}
      {isLoading && <LoadingScreen />}

      <MotionDrawerNav />

      {/* Dynamic Marquee - Changes based on viewing section */}
      <div className="fixed bottom-0 left-0 right-0 z-20 pointer-events-none">
        <SectionMarquee />
      </div>

      {/* Shader Background */}
      {isMounted && <ShaderBackground pixelDensity={pixelDensity} />}

      {/* Header */}
      <Header />

      {/* Role Sections */}
      {roles.map((role) => (
        <RoleSection
          key={role.id}
          id={role.id}
          title={role.title}
          subtitle={role.subtitle}
          alignment={role.alignment}
          ctaUrl={role.ctaUrl}
          subtitleLetterAnime={role.subtitleLetterAnime}
        >
          {role.paragraphs.map((text, index) => (
            <ScrollText
              key={`${role.id}-para-${index}`}
              as="p"
              text={text}
              direction={role.alignment}
              classname="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            />
          ))}
          {role.divider && (
            <div className="w-full sm:w-20 h-px bg-white/40 mx-auto my-2 sm:my-3 md:my-4"></div>
          )}
          {role.additionalParagraphs.map((text, index) => (
            <ScrollText
              key={`${role.id}-add-para-${index}`}
              as="p"
              text={text}
              direction={role.alignment}
              classname="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            />
          ))}
        </RoleSection>
      ))}

      {/* Footer */}
      <Footer />
    </div>
  );
}
