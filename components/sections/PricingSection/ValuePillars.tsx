import { VALUE_PILLARS } from "@/data/pricing";

const C = {
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  accent: "#6B3977",
  hair: "rgba(20,19,15,0.08)",
};

export function ValuePillars() {
  return (
    <div className="p-4 sm:p-5 lg:p-6 mb-7 rounded-xl" style={{ background: C.surface, border: `1px solid ${C.hair}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div className="mono" style={{ fontSize: 10, color: C.accent, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>Why custom code?</div>
        <div style={{ flex: 1, height: 1, background: C.hair }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {VALUE_PILLARS.map((p) => (
          <div key={p.label} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ fontSize: 14, color: C.accent, lineHeight: 1, marginTop: 2 }}>{p.icon}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.ink, letterSpacing: "-0.01em", marginBottom: 1 }}>{p.label}</div>
              <div className="mono" style={{ fontSize: 9, color: C.sub, letterSpacing: "0.02em" }}>{p.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
