import { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  watermark?: string;
  variant?: "dark" | "cream";
}

export default function PageHero({ eyebrow, title, subtitle, watermark, variant = "dark" }: Props) {
  const dark = variant === "dark";
  return (
    <section className={`relative overflow-hidden pt-40 pb-28 ${dark ? "bg-aurora text-brand-cream" : "bg-cream-pattern text-brand-dark"}`}>
      {/* Multi-layered backdrop blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute -top-32 -left-32 w-[520px] h-[520px] blob-2 blur-3xl ${dark ? "bg-brand-leafdeep/40" : "bg-brand-sage/30"}`} />
        <div className={`absolute -bottom-40 -right-32 w-[600px] h-[600px] blob-3 blur-3xl ${dark ? "bg-brand-gold/20" : "bg-brand-goldlight/40"}`} />
        <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-overlay" />
      </div>

      {watermark && (
        <div className={`absolute bottom-0 left-0 right-0 text-[18vw] font-serif font-bold leading-none whitespace-nowrap pointer-events-none select-none ${dark ? "text-outline-cream" : "text-outline-dark"}`}>
          {watermark}
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          {eyebrow && (
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-sm mb-6 ${dark ? "border border-brand-cream/10 bg-brand-cream/5" : "border border-brand-dark/10 bg-white/60"}`}>
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className={`font-sans text-[11px] tracking-[0.3em] uppercase ${dark ? "text-brand-goldlight" : "text-brand-navy"}`}>{eyebrow}</span>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className={`font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] max-w-5xl ${dark ? "text-brand-cream" : "text-brand-dark"}`}>
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.25}>
            <p className={`font-sans text-lg md:text-xl max-w-2xl mt-8 font-light leading-relaxed ${dark ? "text-brand-cream/70" : "text-brand-dark/70"}`}>
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
