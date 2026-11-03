"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/** Lenis smooth scrolling + eased anchor navigation for every in-page "#id" link. */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = new Lenis({ duration: reduce ? 0 : 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), anchors: false });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const target = id ? document.getElementById(id) : document.body;
      if (!target) return;
      e.preventDefault();
      const header = document.querySelector<HTMLElement>("[data-site-header]");
      const offset = id === "top" ? 0 : -(header?.offsetHeight ?? 0);
      lenis.scrollTo(id === "top" ? 0 : target, { offset, duration: reduce ? 0 : 1.4 });
      history.replaceState(null, "", id ? `#${id}` : location.pathname);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
  return null;
}
