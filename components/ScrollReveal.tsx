"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll driver. Mounted once at the root.
 *
 * Safety-first design: the hidden state in CSS is gated behind the
 * `reveal-ready` class on <html>, which this component only adds when it
 * is actually able to animate. If JS fails, reduced motion is on, or
 * IntersectionObserver is missing, the class is never added and all content
 * stays fully visible — it can never get stuck invisible.
 *
 * Renders nothing.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      return; // leave everything visible, no animation
    }

    const root = document.documentElement;
    // From here on, CSS hides [data-reveal] elements until revealed.
    root.classList.add("reveal-ready");

    const reveal = (el: Element) => el.classList.add("is-visible");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Reveal when it scrolls into view, OR when it's already been
          // scrolled past (top above the viewport) — so fast scrolling or
          // anchor jumps never leave content stranded invisible.
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      // No negative bottom margin: a page's last element (e.g. footer CTA)
      // can never scroll higher than the viewport bottom, so excluding the
      // bottom strip would leave it permanently hidden.
      { rootMargin: "0px", threshold: 0.15 }
    );

    const scan = () => {
      const els = document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not(.is-visible)"
      );
      els.forEach((el) => {
        // Reveal anything already on screen right away (e.g. the hero on
        // load) so above-the-fold never sits blank waiting for a scroll.
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          reveal(el);
        } else {
          observer.observe(el);
        }
      });
    };

    scan();

    // Catch content mounted later (e.g. client-side navigation).
    const mutation = new MutationObserver(scan);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
