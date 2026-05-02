import { Fragment } from "react";
import { COMPARISON_ROWS } from "@/data/pricing";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  accent: "#6B3977",
  accentBg: "#EDE5F0",
  hair: "rgba(20,19,15,0.08)",
};

export function ComparisonTable() {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.hair}`, borderRadius: 18, padding: "40px 48px" }}>
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: 24, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em", marginBottom: 6 }}>
          How custom code compares
        </h3>
        <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.5 }}>
          Custom build vs. platforms and agencies.
        </p>
      </div>

      <div style={{ overflowX: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr 1fr", gap: 0, minWidth: 600 }}>
          {/* Header row */}
          <div style={{ padding: "16px 20px", borderBottom: `2px solid ${C.hair}` }} />
          <div style={{ padding: "16px 20px", borderBottom: `2px solid ${C.hair}`, background: C.accentBg, borderRadius: "8px 8px 0 0" }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: C.accent, letterSpacing: "0.04em" }}>Custom Code</div>
          </div>
          <div style={{ padding: "16px 20px", borderBottom: `2px solid ${C.hair}` }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: C.ink, letterSpacing: "0.04em" }}>Webflow / Squarespace</div>
          </div>
          <div style={{ padding: "16px 20px", borderBottom: `2px solid ${C.hair}` }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: C.ink, letterSpacing: "0.04em" }}>Agency</div>
          </div>

          {/* Data rows */}
          {COMPARISON_ROWS.map((row, i) => (
            <Fragment key={row.label}>
              <div style={{ padding: "18px 20px", fontSize: 14, fontWeight: 600, color: C.ink, borderBottom: `1px solid ${C.hair}`, background: i % 2 === 0 ? "transparent" : C.bg }}>
                {row.label}
              </div>
              <div style={{ padding: "18px 20px", fontSize: 14, fontWeight: 600, color: C.accent, borderBottom: `1px solid ${C.hair}`, background: i % 2 === 0 ? "rgba(237,229,240,0.3)" : "rgba(237,229,240,0.5)" }}>
                {row.custom}
              </div>
              <div style={{ padding: "18px 20px", fontSize: 14, color: C.inkSoft, borderBottom: `1px solid ${C.hair}`, background: i % 2 === 0 ? "transparent" : C.bg }}>
                {row.platform}
              </div>
              <div style={{ padding: "18px 20px", fontSize: 14, color: C.inkSoft, borderBottom: `1px solid ${C.hair}`, background: i % 2 === 0 ? "transparent" : C.bg }}>
                {row.agency}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
