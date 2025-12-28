"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollBaseAnimationProps {
  children: React.ReactNode;
  baseVelocity?: number;
  scrollDependent?: boolean;
  className?: string;
  delay?: number;
}

export default function ScrollBaseAnimation({
  children,
  baseVelocity = 1,
  scrollDependent = false,
  className,
  delay = 0,
}: ScrollBaseAnimationProps) {
  const baseX = useMotionValue(0);
  const [velocity, setVelocity] = useState(baseVelocity);

  useAnimationFrame((t, delta) => {
    let moveBy = velocity * (delta / 1000);

    if (scrollDependent) {
      const scrollY = window.scrollY;
      moveBy = moveBy + scrollY * 0.0005;
    }

    moveBy = moveBy * -1;

    baseX.set(baseX.get() + moveBy);
  });

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setVelocity(baseVelocity);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setVelocity(baseVelocity);
    }
  }, [baseVelocity, delay]);

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        className={cn("flex whitespace-nowrap flex-nowrap", className)}
        style={{
          x: baseX,
        }}
      >
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
      </motion.div>
    </div>
  );
}

