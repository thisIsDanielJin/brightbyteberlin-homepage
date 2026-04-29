import { PRICING } from "@/data/content";
import Link from "next/link";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  accentBg: "#EDE5F0",
  hair: "rgba(20,19,15,0.08)",
};

export function PricingSection() {
  return (
    <section id="pricing" style={{ padding: "112px 56px", background: `linear-gradient(180deg, #F8F4EC 0%, ${C.bg} 100%)`, borderBottom: `1px solid ${C.hair}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginBottom: 72, alignItems: "baseline" }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase" }}>06 · Pricing</div>
        <div>
          <h2 style={{ fontSize: 56, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.02, marginBottom: 18 }}>
            Honest <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>pricing</span>.
          </h2>
          <p style={{ fontSize: 17, color: C.sub, maxWidth: 520, lineHeight: 1.6 }}>
            Fixed costs, no hourly billing surprises. Most clients land somewhere in Growth.
          </p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
        {PRICING.map((p) => (
          <div key={p.name} style={{
            background: p.highlight ? C.ink : C.surface,
            color: p.highlight ? C.surface : C.ink,
            border: p.highlight ? "none" : `1px solid ${C.hair}`,
            borderRadius: 18, padding: "36px 32px", position: "relative",
            boxShadow: p.highlight ? "0 30px 60px -30px rgba(20,19,15,0.4)" : "none",
          }}>
            {p.highlight && (
              <div style={{ position: "absolute", top: -12, left: 32, padding: "4px 12px", background: C.accent, borderRadius: 99 }} className="mono">
                <span style={{ fontSize: 10, color: C.surface, letterSpacing: "0.12em", fontWeight: 600 }}>MOST CHOSEN</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em" }}>{p.name}</div>
              <div className="mono" style={{ fontSize: 10, color: p.highlight ? "rgba(251,248,241,0.5)" : C.sub, letterSpacing: "0.06em" }}>{p.period}</div>
            </div>
            <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8 }}>{p.price}</div>
            <div style={{ fontSize: 14, color: p.highlight ? "rgba(251,248,241,0.7)" : C.sub, marginBottom: 28 }}>{p.sub}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingBottom: 24, borderBottom: p.highlight ? "1px solid rgba(251,248,241,0.15)" : `1px solid ${C.hair}`, marginBottom: 16 }}>
              {p.features.map((f) => (
                <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5, lineHeight: 1.5 }}>
                  <span style={{ color: C.accent, marginTop: 2 }}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "14px 16px", background: p.highlight ? "rgba(107,57,119,0.3)" : C.accentBg, borderRadius: 10, marginBottom: 20, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.accent, display: "inline-block", marginTop: 4, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: p.highlight ? C.accentSoft : C.accent, letterSpacing: "-0.01em" }}>{p.value.label}</div>
                <div className="mono" style={{ fontSize: 10, color: p.highlight ? "rgba(251,248,241,0.5)" : C.sub, marginTop: 2, letterSpacing: "0.02em" }}>{p.value.sub}</div>
              </div>
            </div>
            <Link href="/#contact" className="btn-hover" style={{ display: "block", padding: "12px 20px", textAlign: "center", borderRadius: 99, background: p.highlight ? C.accent : C.ink, color: C.surface, fontSize: 14, fontWeight: 500, cursor: "pointer", textDecoration: "none" }}>{p.cta} →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
