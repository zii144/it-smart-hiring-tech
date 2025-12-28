"use client";
import ScrollText from "@/components/ui/scroll-text";
import MotionDrawerNav from "@/components/MotionDrawerNav";
import { Sparkles } from "@/components/sparkles";
import SectionMarquee from "@/components/SectionMarquee";
import React, { useState, useEffect } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative">
      <MotionDrawerNav />
      {/* Dynamic Marquee - Changes based on viewing section */}
      <div className="fixed bottom-0 left-0 right-0 z-20 pointer-events-none">
        <SectionMarquee />
      </div>
      {isMounted && (
        <div className="fixed inset-0 -z-10">
          <ShaderGradientCanvas
            style={{
              width: "100%",
              height: "100%",
            }}
            lazyLoad={undefined}
            fov={undefined}
            pixelDensity={1}
            pointerEvents="none"
          >
            <ShaderGradient
              animate="on"
              type="sphere"
              wireframe={false}
              shader="defaults"
              uTime={0}
              uSpeed={0.3}
              uStrength={0.3}
              uDensity={0.8}
              uFrequency={5.5}
              uAmplitude={3.2}
              positionX={-0.1}
              positionY={0}
              positionZ={0}
              rotationX={0}
              rotationY={130}
              rotationZ={70}
              color1="#73bfc4"
              color2="#ff810a"
              color3="#8da0ce"
              reflection={0.4}
              // View (camera) props
              cAzimuthAngle={270}
              cPolarAngle={180}
              cDistance={0.5}
              cameraZoom={15.1}
              // Effect props
              lightType="env"
              brightness={0.8}
              envPreset="city"
              grain="on"
              // Tool props
              toggleAxis={false}
              zoomOut={false}
              hoverState=""
              // Optional - if using transition features
              enableTransition={false}
            />
          </ShaderGradientCanvas>
        </div>
      )}

      {/* Header */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
          <ScrollText
            text="智晟資訊服務股份有限公司"
            direction="down"
            classname="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none [text-shadow:0_1px_3px_rgba(0,0,0,0.15)]"
          />
          <div className="w-20 h-px bg-white/40 mx-auto my-2 md:my-4"></div>
          <ScrollText
            text="職缺2026"
            direction="up"
            classname="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] uppercase [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>

      {/* 初階軟體工程師 */}
      <div
        id="role-1"
        className="min-h-screen flex flex-col justify-center items-start text-left relative z-10 px-4 md:px-8"
      >
        <div className="max-w-4xl">
          <ScrollText
            as="h2"
            text="初階軟體工程師"
            direction="left"
            classname="text-6xl md:text-8xl font-bold mb-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          />
          <ScrollText
            as="h3"
            text="從功能實作到系統理解的起點"
            direction="left"
            classname="text-3xl md:text-5xl font-semibold mb-6 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          />
          <div className="text-xl md:text-2xl leading-relaxed space-y-4 text-left">
            <ScrollText
              as="p"
              text="這個角色適合想要真正參與系統開發、
              在資深工程師帶領下，學習如何把需求變成穩定可維護的程式。"
              direction="left"
              classname="text-xl md:text-2xl leading-relaxed space-y-4 text-left [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            />
            <ScrollText
              as="p"
              text="你會接觸真實上線的系統，
              學習用 AI 逐步建立對程式碼、架構與交付流程的理解。"
              direction="left"
              classname="text-xl md:text-2xl leading-relaxed space-y-4 text-left [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>

      {/* 系統使用品質協調師 */}
      <div
        id="role-2"
        className="min-h-screen flex flex-col justify-center items-end text-right relative z-10 px-4 md:px-8"
      >
        <div className="max-w-4xl">
          <ScrollText
            as="h2"
            text="系統使用品質協調師"
            direction="right"
            classname="text-6xl md:text-8xl font-bold mb-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          />
          <ScrollText
            as="h3"
            text="站在使用者與系統之間的關鍵角色"
            direction="right"
            classname="text-3xl md:text-5xl font-semibold mb-6 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          />
          <div className="text-xl md:text-2xl leading-relaxed space-y-4 text-right">
            <ScrollText
              as="p"
              text="這不是傳統只回訊息的客服，也不是只跑測試的 QA。
              你會直接接觸實際使用系統的人，理解他們卡在哪裡，
              並把這些問題整理成工程與設計能真正改善的回饋。"
              direction="right"
              classname="text-xl md:text-2xl leading-relaxed space-y-4 text-right [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            />
            <ScrollText
              as="p"
              text="如果你擅長溝通、觀察流程、在混亂中找出問題結構，
              這會是一個影響力很大的位置。"
              direction="right"
              classname="text-xl md:text-2xl leading-relaxed space-y-4 text-right [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>

      {/* 數位教育內容架構師 */}
      <div
        id="role-3"
        className="min-h-screen flex flex-col justify-center items-start text-left relative z-10 px-4 md:px-8"
      >
        <div className="max-w-4xl">
          <ScrollText
            as="h2"
            text="數位教育內容架構師"
            direction="left"
            classname="text-6xl md:text-8xl font-bold mb-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          />
          <ScrollText
            as="h3"
            text="把知識變成「能被學會」的系統"
            letterAnime={true}
            classname="text-3xl md:text-5xl font-semibold mb-6 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          />
          <div className="text-xl md:text-2xl leading-relaxed space-y-4 text-left">
            <ScrollText
              as="p"
              text="這個角色專注在教學設計與內容結構。
              你會負責把知識拆解、編排成清楚的學習路徑，
              並與工程、產品協作，讓內容能在系統中被正確呈現與評估。"
              direction="left"
              classname="text-xl md:text-2xl leading-relaxed space-y-4 text-left [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            />
            <ScrollText
              as="p"
              text="如果你在意「學習怎麼真正發生」， 這會是你發揮教育專業的核心位置。"
              direction="left"
              classname="text-xl md:text-2xl leading-relaxed space-y-4 text-left [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>

      {/* 平面視覺設計師 */}
      <div
        id="role-4"
        className="min-h-screen flex flex-col justify-center items-end text-right relative z-10 px-4 md:px-8"
      >
        <div className="max-w-4xl">
          <ScrollText
            as="h2"
            text="平面視覺設計師"
            direction="right"
            classname="text-6xl md:text-8xl font-bold mb-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          />
          <ScrollText
            as="h3"
            text="讓內容被看懂、被使用、被記住"
            direction="right"
            classname="text-3xl md:text-5xl font-semibold mb-6 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          />
          <div className="text-xl md:text-2xl leading-relaxed space-y-4 text-right">
            <ScrollText
              as="p"
              text="我們需要的不是只追求好看的設計，
              而是能理解「為什麼要這樣設計」的人。"
              direction="right"
              classname="text-xl md:text-2xl leading-relaxed space-y-4 text-right [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            />
            <ScrollText
              as="p"
              text="你的作品會出現在教材、簡報、系統說明、教學影片中，
              幫助使用者更快理解資訊、完成操作、做出決策。"
              direction="right"
              classname="text-xl md:text-2xl leading-relaxed space-y-4 text-right [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative min-h-screen flex flex-col justify-end items-center text-center z-10 px-4 md:px-8 pb-20 md:pb-32">
        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollText
            text="© 2025 智晟資訊服務股份有限公司｜資訊部主管 Zii"
            direction="up"
            classname="text-xl md:text-2xl font-light mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          />
        </div>
      </footer>
    </div>
  );
}
