import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Flying-card marquee.
 * Each tagline is a uniquely-shaped, multi-colored card that
 * flies in from the right, slows near center, then flies out left.
 */
type Card = {
  text: string;
  bg: string;          // background utility (token-based)
  fg: string;          // foreground utility (token-based)
  ring: string;        // accent ring/dot color
  shape: string;       // border-radius blob class
  rotate: number;      // subtle tilt in degrees
  icon: string;        // leading glyph
};

const cards: Card[] = [
  { text: "Character & Competence", bg: "bg-brand-navy",     fg: "text-brand-cream",     ring: "bg-brand-leaf",      shape: "rounded-[42px_14px_42px_14px]", rotate: -2, icon: "✦" },
  { text: "Gift to Humanity",       bg: "bg-brand-leaf",     fg: "text-brand-navy",      ring: "bg-brand-navy",      shape: "rounded-[60px_22px_60px_22px]", rotate:  1, icon: "❋" },
  { text: "Maximum Output",         bg: "bg-brand-gold",     fg: "text-brand-navy",      ring: "bg-brand-leafdeep",  shape: "rounded-[14px_42px_14px_42px]", rotate: -1, icon: "▲" },
  { text: "Divine Alignment",       bg: "bg-brand-leafdeep", fg: "text-brand-leaflight", ring: "bg-brand-gold",      shape: "rounded-[50px_50px_14px_50px]", rotate:  2, icon: "✶" },
  { text: "Academic Rigor",         bg: "bg-brand-cream",    fg: "text-brand-navy",      ring: "bg-brand-leaf",      shape: "rounded-[14px_50px_50px_14px]", rotate: -2, icon: "❖" },
  { text: "Counsellingpreneurship", bg: "bg-brand-dark",     fg: "text-brand-leaflight", ring: "bg-brand-gold",      shape: "rounded-[42px_14px_42px_14px]", rotate:  1, icon: "◆" },
  { text: "The Ebenezer Code",      bg: "bg-brand-leaflight",fg: "text-brand-leafdeep",  ring: "bg-brand-navy",      shape: "rounded-[60px_60px_14px_60px]", rotate: -1, icon: "✧" },
];

export default function Marquee() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % cards.length), 2600);
    return () => clearInterval(t);
  }, []);

  const card = cards[i];

  return (
    <div className="relative bg-brand-navy py-10 overflow-hidden border-y border-brand-leaf/20">
      {/* Multi-layered backdrop pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[420px] h-[420px] bg-brand-leaf/10 blob-2 blur-[80px]" />
        <div className="absolute -bottom-20 right-1/4 w-[420px] h-[420px] bg-brand-gold/10 blob-3 blur-[80px]" />
        <div className="absolute inset-0 bg-grid-soft opacity-30" />
      </div>

      {/* Side fade masks to sell the fly-in / fly-out illusion */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-56 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-56 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

      {/* Stage */}
      <div className="relative h-20 md:h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ x: "60vw", opacity: 0, rotate: card.rotate + 8, scale: 0.85 }}
            animate={{
              x: 0,
              opacity: 1,
              rotate: card.rotate,
              scale: 1,
              transition: {
                x:       { type: "spring", stiffness: 70, damping: 16, mass: 0.9 },
                rotate:  { type: "spring", stiffness: 70, damping: 18 },
                scale:   { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.35 },
              },
            }}
            exit={{
              x: "-60vw",
              opacity: 0,
              rotate: card.rotate - 8,
              scale: 0.9,
              transition: { duration: 0.55, ease: [0.7, 0, 0.84, 0] },
            }}
            className={`absolute inline-flex items-center gap-4 md:gap-5 px-7 md:px-10 py-4 md:py-5
                        ${card.bg} ${card.fg} ${card.shape}
                        shadow-[0_24px_60px_-20px_hsl(var(--brand-dark)/0.55)]
                        border border-brand-cream/10`}
            style={{ transformOrigin: "center" }}
          >
            <span className={`w-3 h-3 md:w-3.5 md:h-3.5 blob-1 ${card.ring}`} aria-hidden />
            <span aria-hidden className="font-serif italic text-lg md:text-xl opacity-80">{card.icon}</span>
            <span className="font-sans font-bold uppercase tracking-[0.22em] text-sm md:text-base whitespace-nowrap">
              {card.text}
            </span>
            <span aria-hidden className="font-serif italic text-lg md:text-xl opacity-80">{card.icon}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress pips */}
      <div className="relative z-10 flex items-center justify-center gap-2 mt-3">
        {cards.map((_, idx) => (
          <span
            key={idx}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === i ? "w-8 bg-brand-leaf" : "w-1.5 bg-brand-cream/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
