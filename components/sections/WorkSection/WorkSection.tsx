"use client";

import { useRef, useState, useEffect } from "react";
import { WORK } from "@/data/content";
import { WorkImage } from "./WorkImage";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  accent: "#6B3977",
  accentBg: "#EDE5F0",
  hair: "rgba(20,19,15,0.08)",
  hairStrong: "rgba(20,19,15,0.14)",
};

export function WorkSection() {
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
    <section id="work" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28" style={{ background: `linear-gradient(180deg, ${C.bg} 0%, #F3EFE5 100%)`, borderBottom: `1px solid ${C.hair}` }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12 mb-10 lg:mb-16 items-baseline">
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase" }}>{t.work.label}</div>
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-medium tracking-tight leading-[1.02] mb-4" style={{ color: C.ink }}>
            {t.work.heading} <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>{t.work.headingItalic.replace(".", "")}</span>.
          </h2>
          <p className="text-[15px] lg:text-[17px] max-w-[520px] leading-relaxed" style={{ color: C.sub }}>
            {t.work.subtitle}
          </p>
        </div>
      </div>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WORK.map((w, idx) => (
          <Link key={w.tag} href={`/projects/${w.slug}`} style={{ textDecoration: "none" }}>
            <div className="work-card" style={{ background: C.surface, borderRadius: 16, overflow: "hidden", cursor: "pointer", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${idx * 0.18}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${idx * 0.18}s`, border: `1px solid ${C.hair}`, height: "100%" }}>
              <div style={{ height: 240 }}><WorkImage tag={w.tag} /></div>
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", gap: 3, alignItems: "center", marginBottom: 10 }}>
                  {Array.from({ length: w.stars }).map((_, i) => (
                    <span key={i} style={{ color: C.accent, fontSize: 16 }}>★</span>
                  ))}
                  <span className="mono" style={{ fontSize: 11, color: C.ink, fontWeight: 600, marginLeft: 6 }}>5.0</span>
                </div>
                <p style={{ fontSize: 13, color: C.sub, fontStyle: "italic", lineHeight: 1.55, marginBottom: 14 }}>{t.work.items[idx].quote}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em" }}>{t.work.items[idx].client}</h3>
                  <span className="work-arrow" style={{ fontSize: 13, color: C.accent, display: "inline-flex", transition: "transform 0.25s ease" }}>→</span>
                </div>
                <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 12 }}>{t.work.items[idx].kind}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", background: C.accentBg, borderRadius: 99 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.accent }} />
                  <span className="mono" style={{ fontSize: 11, color: C.accent, fontWeight: 600 }}>{t.work.items[idx].metric}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 lg:mt-12 flex justify-center">
        <Link href="/projects" className="outline-hover" style={{ padding: "12px 24px", border: `1px solid ${C.hairStrong}`, borderRadius: 99, fontSize: 14, fontWeight: 500, color: C.ink, display: "flex", alignItems: "center", gap: 8, cursor: "pointer", textDecoration: "none" }}>
          {t.work.seeAll} <span style={{ color: C.accent }}>→</span>
        </Link>
      </div>
    </section>
  );
}
