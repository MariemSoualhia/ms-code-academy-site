"use client";

import { useEffect, useRef, useState } from "react";

const HIDDEN = {
  up: "translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  scale: "scale-95",
};

/**
 * Fait apparaître son contenu quand il entre dans l'écran.
 * - delay : décalage en ms (pour créer des cascades)
 * - direction : "up" | "left" | "right" | "scale"
 * Respecte prefers-reduced-motion (contenu visible immédiatement).
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `opacity-0 ${HIDDEN[direction] ?? HIDDEN.up}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
