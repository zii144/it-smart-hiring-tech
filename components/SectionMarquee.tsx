"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import ScrollBaseAnimation from "@/components/ui/scroll-text-marque";
import { useSectionInView } from "@/hooks/useSectionInView";

interface SectionTextMap {
  [key: string]: string;
}

const sectionTextMap: SectionTextMap = {
  "role-1": "＃用程式結構解決問題 ＃設計模式 ＃系統思考 ＃AI 協作開發 ＃",
  "role-2": "＃使用者體驗優化 ＃問題診斷 ＃流程改善 ＃溝通協調 ＃",
  "role-3": "＃教學設計 ＃知識架構 ＃內容編排 ＃學習路徑規劃 ＃",
  "role-4": "＃視覺傳達 ＃資訊設計 ＃品牌識別 ＃介面設計 ＃",
};

const defaultText = "Best Component library For Developer";
const sectionIds = ["role-1", "role-2", "role-3", "role-4"];

export default function SectionMarquee() {
  const activeSection = useSectionInView(sectionIds);

  const displayText = activeSection
    ? sectionTextMap[activeSection] || defaultText
    : defaultText;

  return (
    <AnimatePresence>
      {activeSection && (
        <motion.div
          key="marquee-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="h-24 md:h-32 grid place-content-center bg-black/20 backdrop-blur-sm border-t border-white/10 relative overflow-hidden"
        >
          <AnimatePresence>
            <motion.div
              key={displayText}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <ScrollBaseAnimation
                baseVelocity={3}
                scrollDependent={true}
                className="font-bold tracking-[-0.07em] leading-[90%] text-white text-2xl md:text-4xl lg:text-5xl [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"
              >
                {displayText}
              </ScrollBaseAnimation>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
