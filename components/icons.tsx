import type { ReactNode } from "react";

export const Svg = ({ size = 24, stroke = "currentColor", sw = 2, children }: { size?: number; stroke?: string; sw?: number; children: ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
export const Arrow = () => <Svg size={18}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>;
export const Check = ({ size = 16, stroke = "#FF8A4C", sw = 3 }: { size?: number; stroke?: string; sw?: number }) => <Svg size={size} stroke={stroke} sw={sw}><path d="m5 12 5 5L20 7" /></Svg>;
