"use client";

import { useRef, useState, useEffect } from "react";
import { SERVICES } from "@/data/content";
import { ServiceImage } from "./ServiceImage";

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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" style={{ padding: "112px 56px", background: `linear-gradient(180deg, ${C.bg} 0%, #F8F4EC 100%)` }}>
      <div style={{ marginBottom: 72, paddingBottom: 20, borderBottom: `1px solid ${C.hair}` }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>02 · Services</div>
        <h2 style={{ fontSize: 44, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.0, marginBottom: 12, textAlign: "center" }}>
          What I <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>build.</span>
        </h2>
        <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.55, maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
          Every project ships with a fixed price, a clear timeline, and me on the other end of every call.
        </p>
      </div>
      <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {SERVICES.map((s, idx) => (
          <div key={s.tag} className="card-hover" style={{ background: C.surface, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${idx * 0.15}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${idx * 0.15}s` }}>
            <div style={{ height: 130, position: "relative" }}>
              <ServiceImage kind={s.img} />
              <div style={{ position: "absolute", top: 14, left: 14, padding: "4px 10px", background: "rgba(251,248,241,0.85)", borderRadius: 99, backdropFilter: "blur(4px)", border: "1px solid rgba(20,19,15,0.08)", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }} className="mono">
                <span style={{ fontSize: 10, color: C.ink, letterSpacing: "0.06em", fontWeight: 500 }}>{s.tag}</span>
              </div>
            </div>
            <div style={{ padding: "22px 24px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.6, marginBottom: 24, flex: 1 }}>{s.desc}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 18, borderTop: `1px solid ${C.hair}` }}>
                <span className="mono" style={{ fontSize: 11, color: C.ink, letterSpacing: "0.04em" }}>{s.meta}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: C.accent, fontWeight: 500 }}>
                  Learn more →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
