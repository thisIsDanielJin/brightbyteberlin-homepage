"use client";

import { useIsMobile } from "@/hooks/useMediaQuery";
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
  const isMobile = useIsMobile();
  const { t } = useLocale();

  return (
    <section
      id="pricing"
      style={{
        padding: isMobile ? "64px 20px" : "96px 56px",
        background: `linear-gradient(180deg, #F8F4EC 0%, ${C.bg} 100%)`,
        borderBottom: `1px solid ${C.hair}`,
      }}
    >
      {/* Section header */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
        gap: isMobile ? 12 : 40,
        marginBottom: 40,
        alignItems: "baseline",
      }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase" }}>{t.pricing.label}</div>
        <div>
          <h2 style={{ fontSize: isMobile ? 36 : 48, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.02, marginBottom: 12 }}>
            {t.pricing.heading}{" "}
            <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>{t.pricing.headingItalic}</span>
          </h2>
          <p style={{ fontSize: 15, color: C.sub, maxWidth: 480, lineHeight: 1.5 }}>
            {t.pricing.subtitle}
          </p>
        </div>
      </div>

      <ComparisonTable />

      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
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
    </section>
  );
}
