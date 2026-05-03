import { useEffect, useRef } from "react";

/**
 * Triple E custom cursor — leaf-green dot + trailing outline.
 * Uses transform-based positioning + rAF lerp for the trailing outline
 * so it renders reliably on all browsers.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    // Start centered so the cursor is visible before first mouse move.
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;

    const setTransform = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    setTransform(dot, mouseX, mouseY);
    setTransform(outline, outlineX, outlineY);

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setTransform(dot, mouseX, mouseY);
    };

    let rafId = 0;
    const tick = () => {
      // Smooth lerp toward mouse position for trailing effect.
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;
      setTransform(outline, outlineX, outlineY);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const enter = () => outline.classList.add("is-hover");
    const leave = () => outline.classList.remove("is-hover");

    const hoverSelector =
      'a, button, .link-hover, [role="button"], input, textarea, select, label';

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest && t.closest(hoverSelector)) enter();
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest && t.closest(hoverSelector)) leave();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    const onLeaveWindow = () => {
      dot.style.opacity = "0";
      outline.style.opacity = "0";
    };
    const onEnterWindow = () => {
      dot.style.opacity = "1";
      outline.style.opacity = "1";
    };
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" aria-hidden />
      <div ref={outlineRef} className="cursor-outline hidden lg:block" aria-hidden />
    </>
  );
}
