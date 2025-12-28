"use client";

import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center loading-background">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-transparent border-r-white/40 rounded-full loading-spinner-reverse"></div>
        </div>
        <div className="text-white text-lg sm:text-xl md:text-2xl font-light tracking-wider">
          <span className="animate-pulse">載入中...</span>
        </div>
      </div>
    </div>
  );
}

