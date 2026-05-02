"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

const C = {
  ink: "#14130F",
  surface: "#FBF8F1",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
};

export function CTABanner() {
  const { t } = useLocale();

  return (
    <section style={{ padding: "48px 56px", background: C.ink, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(107,57,119,0.25) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(107,57,119,0.15) 0%, transparent 50%)" }} />
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 48 }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 36, fontWeight: 600, color: C.surface, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 8 }}>
            {t.ctaBanner.heading.split(/(?<=\.)/).map((part, i) => i === 0 ? part : <span key={i} className="serif" style={{ fontStyle: "italic", fontWeight: 400, color: C.accentSoft }}>{part}</span>)}
          </h2>
          <p style={{ fontSize: 14, color: "rgba(251,248,241,0.55)", lineHeight: 1.5 }}>
            {t.ctaBanner.subtitle}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 12, flexShrink: 0, alignItems: "center" }}>
          <Link href="/#contact" className="btn-hover-dark btn-hover-dark-primary" style={{ padding: "14px 28px", background: C.accent, color: C.surface, borderRadius: 99, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", cursor: "pointer", textDecoration: "none" }}>
            {t.ctaBanner.cta}
          </Link>
          <Link href="/#work" className="btn-hover-dark btn-hover-dark-secondary" style={{ padding: "14px 26px", color: C.surface, borderRadius: 99, fontSize: 14, fontWeight: 500, border: "1px solid rgba(251,248,241,0.2)", display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", cursor: "pointer", textDecoration: "none" }}>
            {t.ctaBanner.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
