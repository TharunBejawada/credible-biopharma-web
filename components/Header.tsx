"use client";

import { useEffect, useState } from "react";

const links = [
  ["top", "Home"], ["about", "About Us"], ["products", "Products"], ["quality", "Quality"],
  ["international", "International Business"], ["contact", "Contact Us"],
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} data-site-header>
      <div className="header-in">
        <a href="#top" className="brand">
          <img src="/logo.jpg" alt="Credible Biopharma logo" />
          <span className="brand-t"><b>Credible</b><span>Biopharma</span></span>
        </a>
        <nav aria-label="Main" className="nav">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : undefined}>{label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-sm btn-accent">Request a Quote</a>
      </div>
    </header>
  );
}
