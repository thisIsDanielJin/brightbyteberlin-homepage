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
    <section id="faq" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28" style={{ background: C.surface, borderBottom: `1px solid ${C.hair}` }}>
      <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-4 lg:gap-10 mb-10 lg:mb-14">
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", flexShrink: 0 }}>{t.faq.label}</div>
        <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-medium tracking-tight leading-[1.02]" style={{ color: C.ink }}>
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
