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
    <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-12 relative overflow-hidden" style={{ background: C.ink }}>
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(107,57,119,0.25) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(107,57,119,0.15) 0%, transparent 50%)" }} />
      <div className="relative z-[1] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-12">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-2" style={{ color: C.surface }}>
            {t.ctaBanner.heading.split(/(?<=\.)/).map((part, i) => i === 0 ? part : <span key={i} className="serif" style={{ fontStyle: "italic", fontWeight: 400, color: C.accentSoft }}>{part}</span>)}
          </h2>
          <p className="text-sm" style={{ color: "rgba(251,248,241,0.55)", lineHeight: 1.5 }}>
            {t.ctaBanner.subtitle}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 shrink-0 items-start sm:items-center">
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
