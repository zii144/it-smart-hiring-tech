"use client";

import { useState, useEffect } from "react";

export function useSectionInView(
  sectionIds: string[],
  threshold: number = 0.3
): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const findMostVisibleSection = () => {
      let maxVisibility = 0;
      let mostVisibleId: string | null = null;
      const viewportHeight = window.innerHeight;

      // Check if we have the first section element
      const firstSectionElement = document.getElementById(sectionIds[0]);
      if (!firstSectionElement) {
        return { mostVisibleId: null, maxVisibility: 0 };
      }

      const firstSectionRect = firstSectionElement.getBoundingClientRect();

      // If the first section's top is below the middle of the viewport,
      // we're still in the header section, so return null
      if (firstSectionRect.top > viewportHeight * 0.5) {
        return { mostVisibleId: null, maxVisibility: 0 };
      }

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const sectionTop = Math.max(0, rect.top);
        const sectionBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, sectionBottom - sectionTop);
        const visibility =
          visibleHeight / Math.min(viewportHeight, rect.height);

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleId = id;
        }
      });

      return { mostVisibleId, maxVisibility };
    };

    const observers: IntersectionObserver[] = [];

    // Create intersection observer for each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        () => {
          const { mostVisibleId, maxVisibility } = findMostVisibleSection();
          if (mostVisibleId && maxVisibility >= threshold) {
            setActiveSection(mostVisibleId);
          } else {
            setActiveSection(null);
          }
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: "-20% 0px -20% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    // Initial check
    const checkInitial = () => {
      const { mostVisibleId, maxVisibility } = findMostVisibleSection();
      if (mostVisibleId && maxVisibility >= threshold) {
        setActiveSection(mostVisibleId);
      } else {
        setActiveSection(null);
      }
    };

    const timeoutId = setTimeout(checkInitial, 100);
    const scrollHandler = () => requestAnimationFrame(checkInitial);

    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [sectionIds, threshold]);

  return activeSection;
}
