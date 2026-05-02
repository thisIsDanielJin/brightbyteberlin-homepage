"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/content";
import { ServiceImage } from "./ServiceImage";
import { useLocale } from "@/contexts/LocaleContext";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  accent: "#6B3977",
  hair: "rgba(20,19,15,0.08)",
};

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28" style={{ background: `linear-gradient(180deg, ${C.bg} 0%, #F8F4EC 100%)` }}>
      <div className="mb-12 lg:mb-[72px] pb-5 border-b" style={{ borderColor: C.hair }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>{t.services.label}</div>
        <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-medium tracking-tight leading-none mb-3 text-center" style={{ color: C.ink }}>
          {t.services.heading} <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>{t.services.headingItalic}</span>
        </h2>
        <p className="text-sm leading-relaxed max-w-[480px] mx-auto text-center" style={{ color: C.sub }}>
          {t.services.subtitle}
        </p>
      </div>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {SERVICES.map((s, idx) => (
          <Link key={s.tag} href={`/services/${s.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="card-hover" style={{ background: C.surface, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer", height: "100%", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${idx * 0.15}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${idx * 0.15}s` }}>
              <div style={{ height: 130, position: "relative" }}>
                <ServiceImage kind={s.img} />
                <div style={{ position: "absolute", top: 14, left: 14, padding: "4px 10px", background: "rgba(251,248,241,0.85)", borderRadius: 99, backdropFilter: "blur(4px)", border: "1px solid rgba(20,19,15,0.08)", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }} className="mono">
                  <span style={{ fontSize: 10, color: C.ink, letterSpacing: "0.06em", fontWeight: 500 }}>{t.services.items[idx].tag}</span>
                </div>
              </div>
              <div style={{ padding: "22px 24px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em", marginBottom: 10 }}>{t.services.items[idx].title}</h3>
                <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.6, marginBottom: 24, flex: 1 }}>{t.services.items[idx].desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 18, borderTop: `1px solid ${C.hair}` }}>
                  <span className="mono" style={{ fontSize: 11, color: C.ink, letterSpacing: "0.04em" }}>{t.services.items[idx].meta}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: C.accent, fontWeight: 500 }}>
                    {t.services.learnMore}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
