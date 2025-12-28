"use client";

import MotionDrawer from "@/components/ui/motion-drawer";
import React, { useState } from "react";

interface ListItem {
  name: string;
  url: string;
}

const data: ListItem[] = [
  { name: "初階軟體工程師", url: "#role-1" },
  { name: "系統使用品質協調師", url: "#role-2" },
  { name: "數位教育內容架構師", url: "#role-3" },
  { name: "平面視覺設計師", url: "#role-4" },
];

function MotionDrawerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <MotionDrawer
      direction="left"
      width={300}
      className="text-white"
      backgroundColor="#1a1a1a"
      contentClassName="bg-[#1a1a1a] sm:max-w-[300px] max-w-[85vw]"
      isOpen={isOpen}
      onToggle={setIsOpen}
    >
      <nav className="space-y-2">
        <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">職缺選單</h2>
        {data.map((item, index) => (
          <a
            key={index}
            href={item.url}
            onClick={(e) => handleAnchorClick(e, item.url)}
            className="block p-3 sm:p-4 text-sm sm:text-base hover:bg-gray-800 rounded-sm transition-colors duration-200 text-white hover:text-gray-200 cursor-pointer"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </MotionDrawer>
  );
}

export default MotionDrawerNav;
