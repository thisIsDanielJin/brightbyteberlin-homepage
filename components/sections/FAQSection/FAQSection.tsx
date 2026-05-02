"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { FAQAccordion } from "@/components/ui/FAQAccordion/FAQAccordion";
import Link from "next/link";

const C = {
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  accent: "#6B3977",
  hair: "rgba(20,19,15,0.08)",
  hairStrong: "rgba(20,19,15,0.14)",
};

export function FAQSection() {
  const { t } = useLocale();

  return (
    <section id="faq" style={{ padding: "112px 56px", background: C.surface, borderBottom: `1px solid ${C.hair}` }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 40, marginBottom: 56 }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", flexShrink: 0 }}>{t.faq.label}</div>
        <h2 style={{ fontSize: 48, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
          {t.faq.heading} <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>{t.faq.headingItalic.replace(".", "")}</span>.
        </h2>
        <Link href="/#contact" className="outline-hover" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", border: `1px solid ${C.hairStrong}`, borderRadius: 99, fontSize: 13, fontWeight: 500, color: C.ink, flexShrink: 0, cursor: "pointer", textDecoration: "none" }}>
          {t.faq.askCta} <span style={{ color: C.accent }}>→</span>
        </Link>
      </div>

      <FAQAccordion items={t.faq.items} mostAskedLabel={t.faq.mostAsked} />
    </section>
  );
}
