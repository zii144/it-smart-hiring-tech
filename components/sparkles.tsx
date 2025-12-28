"use client";
import { useCallback, useMemo, useEffect, useRef } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number | null;
  density?: number;
  speed?: number;
  minSpeed?: number | null;
  opacity?: number;
  direction?: string;
  opacitySpeed?: number;
  minOpacity?: number | null;
  color?: string;
  mousemove?: boolean;
  hover?: boolean;
  background?: string;
  options?: Record<string, any>;
}

export function Sparkles({
  className = "",
  size = 1.2,
  minSize = null,
  density = 800,
  speed = 1.5,
  minSpeed = null,
  opacity = 1,
  direction = "",
  opacitySpeed = 3,
  minOpacity = null,
  color = "#ffffff",
  mousemove = false,
  hover = false,
  background = "transparent",
  options = {},
}: SparklesProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const finalSize = useMemo(() => {
    if (minSize !== null) {
      return { min: minSize, max: size };
    }
    return size;
  }, [size, minSize]);

  const finalSpeed = useMemo(() => {
    if (minSpeed !== null) {
      return { min: minSpeed, max: speed };
    }
    return speed;
  }, [speed, minSpeed]);

  const finalOpacity = useMemo(() => {
    if (minOpacity !== null) {
      return { min: minOpacity, max: opacity };
    }
    return opacity;
  }, [opacity, minOpacity]);

  const directionMap: Record<string, any> = {
    top: { x: 0, y: -1 },
    bottom: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
    "": { x: 0, y: 0 },
  };

  const moveDirection = directionMap[direction] || directionMap[""];

  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: background,
        },
      },
      particles: {
        number: {
          value: density,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: color,
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value:
            typeof finalOpacity === "object"
              ? finalOpacity
              : { min: finalOpacity * 0.5, max: finalOpacity },
          animation: {
            enable: true,
            speed: opacitySpeed,
            sync: false,
          },
        },
        size: {
          value:
            typeof finalSize === "object" ? finalSize : { min: finalSize * 0.5, max: finalSize },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: typeof finalSpeed === "object" ? finalSpeed : { min: finalSpeed * 0.5, max: finalSpeed },
          direction: direction || "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
          attract: {
            enable: false,
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: hover,
            mode: mousemove ? "trail" : "grab",
          },
          onClick: {
            enable: false,
          },
        },
        detectsOn: "canvas",
      },
      detectRetina: true,
      ...options,
    }),
    [
      density,
      speed,
      minSpeed,
      color,
      direction,
      opacity,
      minOpacity,
      opacitySpeed,
      size,
      minSize,
      background,
      mousemove,
      hover,
      finalSize,
      finalSpeed,
      finalOpacity,
      options,
    ]
  );

  return (
    <Particles
      id="tsparticles-sparkles"
      init={particlesInit}
      options={particlesOptions}
      className={className}
    />
  );
}
