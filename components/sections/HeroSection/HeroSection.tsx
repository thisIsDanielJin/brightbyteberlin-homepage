"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroMockup } from "@/components/hero/HeroMockup";
import { useLocale } from "@/contexts/LocaleContext";
import Link from "next/link";

const C = {
  ink: "#14130F",
  surface: "#FBF8F1",
  sub: "#6B665C",
  accent: "#6B3977",
  hairStrong: "rgba(20,19,15,0.14)",
};

export function HeroSection() {
  const [phase, setPhase] = useState(0);
  const { t } = useLocale();

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section style={{ padding: "140px 56px 56px", position: "relative", background: "linear-gradient(180deg, #F7F3EB 0%, #F5F1E8 35%, #FAF7F0 100%)", overflow: "hidden" }}>
      {/* Plum gradient spotlights */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "75%", height: "80%", background: "radial-gradient(ellipse at 15% 100%, rgba(107,57,119,0.22) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "75%", height: "80%", background: "radial-gradient(ellipse at 85% 100%, rgba(107,57,119,0.22) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Grain texture */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.35 }}>
        <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={4} stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#grain)" opacity="0.04" />
      </svg>

      {/* Headline + subtitle + CTAs */}
      <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px", position: "relative" }}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 80, lineHeight: 0.96, letterSpacing: "-0.04em", fontWeight: 600, color: C.ink, marginBottom: 20 }}
        >
          {t.hero.h1Line1}<br />
          <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>{t.hero.h1Not}</span>{" "}
          <span style={{ color: C.accent }}>{t.hero.h1Months}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 18, lineHeight: 1.55, color: C.sub, maxWidth: 520, margin: "0 auto 28px" }}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center" }}
        >
          <Link
            href="/#contact"
            className="btn-hover"
            style={{ padding: "14px 28px", background: C.ink, color: C.surface, borderRadius: 99, fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 8, cursor: "pointer", textDecoration: "none" }}
          >
            {t.hero.cta} <span style={{ color: C.accent }}>→</span>
          </Link>
          <Link
            href="/#work"
            className="btn-hover outline-hover"
            style={{ padding: "14px 24px", color: C.ink, borderRadius: 99, fontSize: 14, fontWeight: 500, border: `1px solid ${C.hairStrong}`, display: "flex", alignItems: "center", gap: 8, cursor: "pointer", textDecoration: "none" }}
          >
            <span style={{ width: 6, height: 6, background: C.accent, borderRadius: "50%", display: "inline-block" }} />
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>

      {/* Browser mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: 1100, width: "100%", margin: "0 auto", position: "relative" }}
      >
        <HeroMockup phase={phase} />
      </motion.div>
    </section>
  );
}
