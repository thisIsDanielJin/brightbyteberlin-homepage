import Link from "next/link";

const C = {
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  accent: "#6B3977",
  accentBg: "#EDE5F0",
  hair: "rgba(20,19,15,0.08)",
};

interface ScopeOption {
  id: string;
  title: string;
  priceFrom: string;
  tagline: string;
  timeline: string;
  includes: string[];
  advantages: string[];
  ideal: string;
}

export function ScopeCard({ scope }: { scope: ScopeOption }) {
  return (
    <div className="p-5 sm:p-7 lg:p-9 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 lg:gap-12 rounded-2xl" style={{
      background: C.surface,
      border: `1px solid ${C.hair}`,
    }}>
      {/* Left — identity & CTA */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: C.accent, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>
            {scope.timeline}
          </div>
          <h3 style={{ fontSize: 22, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em", marginBottom: 6 }}>{scope.title}</h3>
          <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.5, marginBottom: 16 }}>{scope.tagline}</p>
          <div style={{ padding: "8px 12px", background: C.accentBg, borderRadius: 8, display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.accent }} />
            <span style={{ fontSize: 12, color: C.accent, fontWeight: 500 }}>Ideal for: {scope.ideal}</span>
          </div>
        </div>
        <div style={{ marginTop: 24 }}>
          <Link
            href="/#contact"
            className="btn-hover"
            style={{
              padding: "12px 24px",
              background: C.ink,
              color: C.surface,
              borderRadius: 99,
              fontSize: 13,
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Get a free quote <span style={{ color: C.accent }}>→</span>
          </Link>
          <div className="mono" style={{ fontSize: 10, color: C.sub, marginTop: 10, letterSpacing: "0.02em" }}>Reply within 24h. No obligation.</div>
        </div>
      </div>

      {/* Right — what's included */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>What&apos;s included</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-6">
          {scope.includes.map((f) => (
            <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, lineHeight: 1.5, color: C.inkSoft }}>
              <span style={{ color: C.accent, marginTop: 2, flexShrink: 0 }}>✓</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
