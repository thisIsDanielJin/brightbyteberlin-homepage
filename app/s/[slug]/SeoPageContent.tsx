"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { SeoPage } from "@/data/seo-pages";
import { testimonials } from "@/data/testimonials";
import { PROCESS } from "@/data/content";
import { LangToggle } from "./LangToggle";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  subLight: "#9A958A",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  accentBg: "#EDE5F0",
  hair: "rgba(20,19,15,0.08)",
  hairStrong: "rgba(20,19,15,0.14)",
};

const categoryLabels: Record<SeoPage["category"], { de: string; en: string }> = {
  service: { de: "Service", en: "Service" },
  industry: { de: "Branche", en: "Industry" },
  need: { de: "Lösung", en: "Solution" },
  location: { de: "Standort", en: "Location" },
};

const DEFAULT_METRICS = [
  { value: "12+", label: "Projekte ausgeliefert", labelEn: "projects shipped" },
  { value: "97", label: "Ø Lighthouse Score", labelEn: "avg. Lighthouse score" },
  { value: "< 24h", label: "Antwortzeit", labelEn: "response time" },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        padding: "20px 24px",
        background: C.surface,
        border: `1px solid ${isOpen ? C.accentSoft : C.hair}`,
        borderRadius: 14,
        cursor: "pointer",
        transition: "border-color 0.2s",
      }}
      onClick={onToggle}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.4 }}>{q}</h3>
        <span style={{ fontSize: 18, color: C.sub, flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
      </div>
      {isOpen && (
        <p style={{ fontSize: 14, lineHeight: 1.6, color: C.sub, marginTop: 12 }}>{a}</p>
      )}
    </div>
  );
}

export function SeoPageContent({ page }: { page: SeoPage }) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "en" ? "en" : "de";
  const isEn = lang === "en";
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const subtextBlocks = (isEn ? page.heroSubtextEn : page.heroSubtext).split("\n\n");
  const heroLead = subtextBlocks[0];
  const problemText = subtextBlocks.slice(1).join("\n\n");
  const metrics = page.trustMetrics || DEFAULT_METRICS;

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "var(--font-geist)" }}>
      {/* Language toggle bar */}
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "12px 56px" }}>
        <LangToggle />
      </div>

      {/* ─── HERO ─── 2-column split */}
      <section style={{ padding: "64px 56px 80px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }}>
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
            {categoryLabels[page.category][lang]}
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 24, whiteSpace: "pre-line" }}>
            {isEn ? page.heroHeadlineEn : page.heroHeadline}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: C.inkSoft, marginBottom: 32, maxWidth: 520 }}>
            {heroLead}
          </p>
          <Link
            href="/#contact"
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

        {/* Right — Metric proof cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {metrics.map((m, i) => (
            <div
              key={i}
              style={{
                padding: "20px 24px",
                background: C.surface,
                border: `1px solid ${C.hair}`,
                borderRadius: 14,
                display: "flex",
                alignItems: "baseline",
                gap: 14,
              }}
            >
              <span style={{ fontSize: 28, fontWeight: 700, color: C.ink, letterSpacing: "-0.02em" }}>{m.value}</span>
              <span style={{ fontSize: 14, color: C.sub }}>{isEn ? m.labelEn : m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRUST BAR ─── dark full-width strip */}
      <section style={{ padding: "28px 56px", background: C.ink, display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
        {[
          { icon: "✓", text: isEn ? "Fixed price" : "Festpreis" },
          { icon: "✓", text: isEn ? "Full ownership" : "Volle Eigentumsrechte" },
          { icon: "✓", text: isEn ? "Reply in < 24h" : "Antwort in < 24h" },
          { icon: "✓", text: isEn ? "No surprises" : "Keine Überraschungen" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: C.accentSoft, fontWeight: 600, fontSize: 13 }}>{item.icon}</span>
            <span className="mono" style={{ fontSize: 12, color: "rgba(251,248,241,0.7)", letterSpacing: "0.04em" }}>{item.text}</span>
          </div>
        ))}
      </section>

      {/* ─── PROBLEM / SOLUTION ─── 2-column */}
      <section style={{ padding: "80px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
        {/* Left — problem / context */}
        <div>
          <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
            {isEn ? "The challenge" : "Die Herausforderung"}
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: C.inkSoft }}>
            {problemText.split("\n\n").map((p, i) => (
              <p key={i} style={{ marginBottom: 16 }}>{p}</p>
            ))}
          </div>
        </div>

        {/* Right — benefits */}
        <div>
          <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
            {isEn ? "How BrightByte helps" : "So hilft BrightByte"}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {page.benefits.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 20px", background: C.surface, border: `1px solid ${C.hair}`, borderRadius: 12 }}>
                <span style={{ color: C.accent, fontWeight: 700, fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 15, color: C.ink, lineHeight: 1.5 }}>{isEn ? b.textEn : b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── 3-column */}
      <section style={{ padding: "64px 56px", background: C.surface, borderTop: `1px solid ${C.hair}`, borderBottom: `1px solid ${C.hair}` }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>
          {isEn ? "What clients say" : "Was Kunden sagen"}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {testimonials.map((t) => (
            <div key={t.id} style={{ padding: "24px 28px", background: C.bg, border: `1px solid ${C.hair}`, borderRadius: 14 }}>
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

      {/* ─── PROCESS ─── 4-column strip */}
      <section style={{ padding: "72px 56px" }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>
          {isEn ? "How it works" : "So läuft es ab"}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 24, position: "relative" }}>
          <div style={{ position: "absolute", top: 16, left: "12.5%", right: "12.5%", height: 2, background: `repeating-linear-gradient(to right, ${C.hairStrong} 0 4px, transparent 4px 8px)`, zIndex: 0 }} />
          {PROCESS.map((step, i) => (
            <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.bg, border: `2px solid ${C.accent}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                <span className="mono" style={{ fontSize: 10, fontWeight: 600, color: C.accent }}>{step.n}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.ink, marginBottom: 4 }}>{step.t}</div>
              <div style={{ fontSize: 12, color: C.sub, lineHeight: 1.4, maxWidth: 180, margin: "0 auto" }}>{step.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── 2-column accordion */}
      <section style={{ padding: "64px 56px 80px", background: C.surface, borderTop: `1px solid ${C.hair}` }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>
          {isEn ? "Frequently asked" : "Häufige Fragen"}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {page.faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={isEn ? faq.qEn : faq.q}
              a={isEn ? faq.aEn : faq.a}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* ─── CTA ─── full-width centered */}
      <section style={{ padding: "80px 56px 96px", textAlign: "center", background: `linear-gradient(180deg, ${C.bg} 0%, #F0ECE2 100%)` }}>
        <h2 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 }}>
          {isEn ? "Ready to get started?" : "Bereit loszulegen?"}
        </h2>
        <p style={{ fontSize: 17, color: C.sub, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
          {isEn
            ? "Let's talk about your project. No commitment, no cost."
            : "Lassen Sie uns über Ihr Projekt sprechen. Unverbindlich und kostenlos."}
        </p>
        <Link
          href="/#contact"
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
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 24 }}>
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
