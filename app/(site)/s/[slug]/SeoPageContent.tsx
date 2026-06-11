"use client";

import Link from "next/link";
import Image from "next/image";
import type { SeoPage } from "@/data/seo-pages";
import { testimonials } from "@/data/testimonials";
import { useLocale } from "@/contexts/LocaleContext";
import { FAQAccordion } from "@/components/ui/FAQAccordion/FAQAccordion";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  accentBg: "#EDE5F0",
  hair: "rgba(20,19,15,0.08)",
};

const categoryLabels: Record<SeoPage["category"], { de: string; en: string }> = {
  service: { de: "Service", en: "Service" },
  industry: { de: "Branche", en: "Industry" },
  need: { de: "Lösung", en: "Solution" },
  location: { de: "Standort", en: "Location" },
};

const slugImages: Record<string, string> = {
  "website-fuer-aerzte": "/images/seo/website-fuer-aerzte.jpg",
  "website-fuer-restaurants": "/images/seo/website-fuer-restaurants.jpg",
  "website-fuer-startups": "/images/seo/website-fuer-startups.jpg",
  "website-fuer-anwaelte": "/images/seo/website-fuer-anwaelte.jpg",
  "website-fuer-immobilien": "/images/seo/website-fuer-immobilien.jpg",
  "website-fuer-handwerker": "/images/seo/website-fuer-handwerker.jpg",
  "website-fuer-coaches": "/images/seo/website-fuer-coaches.jpg",
  "wordpress-alternative": "/images/seo/wordpress-alternative.jpg",
  "react-entwicklung-berlin": "/images/seo/react-entwicklung-berlin.jpg",
  "webdesign-fuer-kmu": "/images/seo/webdesign-fuer-kmu.jpg",
  "lead-generation-berlin": "/images/seo/lead-generation-berlin.jpg",
  "online-booking-integration": "/images/seo/online-booking-integration.jpg",
  "mehrsprachige-website": "/images/seo/mehrsprachige-website.jpg",
  "dsgvo-konforme-website": "/images/seo/dsgvo-konforme-website.jpg",
  "webdesign-friedrichshain": "/images/seo/webdesign-friedrichshain.jpg",
  "webdesign-neukoelln": "/images/seo/webdesign-neukoelln.jpg",
};

const categoryImages: Record<SeoPage["category"], string> = {
  industry: "/images/seo/industry.jpg",
  service: "/images/seo/service.jpg",
  need: "/images/seo/need.jpg",
  location: "/images/seo/location.jpg",
};

export function SeoPageContent({ page }: { page: SeoPage }) {
  const { locale } = useLocale();
  const isEn = locale === "en";

  const subtextBlocks = (isEn ? page.heroSubtextEn : page.heroSubtext).split("\n\n");
  const heroLead = subtextBlocks[0];

  const faqItems = page.faqs.map((faq) => ({
    q: isEn ? faq.qEn : faq.q,
    a: isEn ? faq.aEn : faq.a,
  }));

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "var(--font-geist)" }}>
      {/* ─── HERO ─── */}
      <section className="px-5 pt-16 pb-16 sm:px-8 sm:pt-20 sm:pb-20 lg:px-14 lg:pt-20 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <div
            className="mono"
            style={{
              display: "inline-block",
              fontSize: 11,
              color: C.accent,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 24,
              padding: "4px 12px",
              background: C.accentBg,
              borderRadius: 99,
            }}
          >
            {categoryLabels[page.category][locale]}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.08] mb-6" style={{ whiteSpace: "pre-line" }}>
            {isEn ? page.heroHeadlineEn : page.heroHeadline}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: C.inkSoft, marginBottom: 32, maxWidth: 520 }}>
            {heroLead}
          </p>
          <Link
            href="/#contact"
            className="btn-hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              background: C.ink,
              color: C.surface,
              borderRadius: 99,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            {isEn ? page.ctaTextEn : page.ctaText}
            <span style={{ color: C.accentSoft }}>→</span>
          </Link>
        </div>

        {/* Right — category image */}
        <div className="hidden lg:block" style={{ aspectRatio: "4/3", borderRadius: 20, overflow: "hidden", position: "relative" }}>
          <Image
            src={slugImages[page.slug] || categoryImages[page.category]}
            alt={isEn ? page.heroHeadlineEn : page.heroHeadline}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
            <div style={{ background: "rgba(251,248,241,0.9)", backdropFilter: "blur(8px)", borderRadius: 12, padding: "16px 20px", border: `1px solid rgba(20,19,15,0.06)` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4CAF50" }} />
                <span className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.06em" }}>
                  {isEn ? "YOUR WEBSITE" : "IHRE WEBSITE"}
                </span>
              </div>
              <div style={{ fontSize: 13, color: C.ink, fontWeight: 500 }}>
                {isEn ? "Fast, professional, converting visitors into customers" : "Schnell, professionell, Besucher werden zu Kunden"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BODY TEXT ─── */}
      {subtextBlocks.length > 1 && (
        <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
          <div className={`grid gap-8 lg:gap-12 ${subtextBlocks.length > 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
            {subtextBlocks.slice(1).map((block, i) => (
              <p key={i} style={{ fontSize: 16, lineHeight: 1.85, color: C.inkSoft, margin: 0 }}>
                {block}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* ─── BENEFITS ─── */}
      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-[72px]" style={{ background: C.surface, borderTop: `1px solid ${C.hair}`, borderBottom: `1px solid ${C.hair}` }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>
          {isEn ? "How BrightByte helps" : "So hilft BrightByte"}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {page.benefits.map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "20px 24px", background: C.bg, border: `1px solid ${C.hair}`, borderRadius: 14 }}>
              <span style={{ color: C.accent, fontWeight: 700, fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
              <span style={{ fontSize: 15, color: C.ink, lineHeight: 1.5 }}>{isEn ? b.textEn : b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-[72px]">
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>
          {isEn ? "What clients say" : "Was Kunden sagen"}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.id} style={{ padding: "24px 28px", background: C.surface, border: `1px solid ${C.hair}`, borderRadius: 14 }}>
              <div style={{ fontSize: 14, color: "#D4A017", marginBottom: 12, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: C.inkSoft, marginBottom: 16, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.accentBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: C.accent }}>{t.author[0]}</span>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>{t.author}</div>
                  <div style={{ fontSize: 11, color: C.sub }}>{t.role}{t.company ? `, ${t.company}` : ""}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-[72px]" style={{ background: C.surface, borderTop: `1px solid ${C.hair}` }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>
          {isEn ? "Frequently asked" : "Häufige Fragen"}
        </div>
        <FAQAccordion
          items={faqItems}
          mostAskedLabel={isEn ? "MOST ASKED" : "MEISTGEFRAGT"}
        />
      </section>

      {/* ─── CTA ─── */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 text-center" style={{ background: `linear-gradient(180deg, ${C.bg} 0%, #F0ECE2 100%)` }}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-4">
          {isEn ? "Ready to get started?" : "Bereit loszulegen?"}
        </h2>
        <p style={{ fontSize: 17, color: C.sub, maxWidth: 480, margin: "0 auto 32px" }}>
          {isEn
            ? "Let's talk about your project. No commitment, no cost."
            : "Lassen Sie uns über Ihr Projekt sprechen. Unverbindlich und kostenlos."}
        </p>
        <Link
          href="/#contact"
          className="btn-hover"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "16px 32px",
            background: C.ink,
            color: C.surface,
            borderRadius: 99,
            fontSize: 15,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          {isEn ? page.ctaTextEn : page.ctaText}
          <span style={{ color: C.accentSoft }}>→</span>
        </Link>
        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap mt-6">
          {[
            isEn ? "Fixed price" : "Festpreis",
            isEn ? "No obligation" : "Unverbindlich",
            isEn ? "Reply in 24h" : "Antwort in 24h",
          ].map((item, i) => (
            <span key={i} className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{item}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
