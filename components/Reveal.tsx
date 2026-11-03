"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/** Fade-up when scrolled into view. */
export function Reveal({
  children, delay = 0, className, style, as = "div",
}: { children: ReactNode; delay?: number; className?: string; style?: CSSProperties; as?: "div" | "section" | "article" | "li" | "span" }) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={item}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

/** Container whose Reveal-style children animate in sequence. */
export function Stagger({
  children, className, style, gap = 0.08, as = "div",
}: { children: ReactNode; className?: string; style?: CSSProperties; gap?: number; as?: "div" | "ol" | "ul" | "section" }) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children, className, style, as = "div",
}: { children: ReactNode; className?: string; style?: CSSProperties; as?: "div" | "li" | "article" | "span" }) {
  const Tag = motion[as] as typeof motion.div;
  return <Tag className={className} style={style} variants={item}>{children}</Tag>;
}
