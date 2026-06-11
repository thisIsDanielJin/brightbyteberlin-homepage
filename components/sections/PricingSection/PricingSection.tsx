"use client";

import { ComparisonTable } from "./ComparisonTable";
import { TrustStrip } from "./TrustStrip";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  accent: "#6B3977",
  hair: "rgba(20,19,15,0.08)",
};

export function PricingSection() {
  const { t } = useLocale();

  return (
    <section
      id="pricing"
      className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32"
      style={{
        background: `linear-gradient(180deg, #F8F4EC 0%, ${C.bg} 100%)`,
        borderBottom: `1px solid ${C.hair}`,
      }}
    >
      <div style={{ maxWidth: 820, marginInline: "auto" }}>
      {/* Section header */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-3 lg:gap-10 mb-12 items-baseline">
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase" }}>{t.pricing.label}</div>
        <div>
          <h2 className="text-[28px] sm:text-4xl lg:text-[48px] font-medium tracking-tight leading-[1.02] mb-3" style={{ color: C.ink }}>
            {t.pricing.heading}{" "}
            <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>{t.pricing.headingItalic}</span>
          </h2>
          <p className="text-[15px] max-w-[480px] leading-relaxed" style={{ color: C.sub }}>
            {t.pricing.subtitle}
          </p>
        </div>
      </div>

      <ComparisonTable />

      <div style={{ marginTop: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <Link
          href="/#contact"
          className="btn-hover"
          style={{
            padding: "14px 28px",
            background: C.ink,
            color: C.surface,
            borderRadius: 99,
            fontSize: 14,
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          {t.pricing.cta} <span style={{ color: C.accent }}>→</span>
        </Link>
        <TrustStrip />
      </div>
      </div>
    </section>
  );
}
