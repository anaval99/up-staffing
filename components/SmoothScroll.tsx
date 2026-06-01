"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Page-wide momentum smooth scrolling (Lenis). Mounted once at the root.
 *
 * Lenis scrolls the real scroll position (it doesn't transform a wrapper),
 * so it plays nicely with the reveal-on-scroll IntersectionObserver, sticky
 * nav, and anchor links.
 *
 * Renders nothing. Respects `prefers-reduced-motion`: users who opt out keep
 * native scrolling untouched.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      // lerp = how much the scroll catches up each frame. Lower = floatier.
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
