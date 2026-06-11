"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders children only while the wrapper is intersecting the viewport
 * (with a configurable rootMargin pre-roll). Used to pause expensive
 * WebGL shaders when the user has scrolled past them.
 *
 * Pass `keepMounted` to keep the children mounted but stop rendering them —
 * better for shaders that take time to spin up. We just toggle visibility,
 * but the inner ref-using effects in shaders still run a per-frame raf,
 * so the cleaner perf win is to fully unmount when off-screen.
 */
export function VisibleOnScreen({
  children,
  fallback,
  rootMargin = "200px",
  className = "",
}: {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setVisible(e.isIntersecting);
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={`absolute inset-0 ${className}`}>
      {visible ? children : fallback ?? null}
    </div>
  );
}
