"use client";
import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

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
  const particlesInit = useCallback(async (container: any) => {
    // Initialize the engine with slim preset
    if (container?.engine) {
      await loadSlim(container.engine);
    }
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

  // Ensure direction is a valid type for tsparticles
  const validDirection = direction && ["top", "bottom", "left", "right", "none"].includes(direction)
    ? (direction as "top" | "bottom" | "left" | "right" | "none")
    : "none";

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
          direction: validDirection,
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
      validDirection,
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
      particlesLoaded={particlesInit}
      options={particlesOptions}
      className={className}
    />
  );
}
