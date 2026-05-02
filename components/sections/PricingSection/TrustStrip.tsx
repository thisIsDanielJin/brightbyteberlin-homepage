import { TRUST_ITEMS } from "@/data/pricing";

const C = {
  sub: "#6B665C",
  subLight: "#9A958A",
};

export function TrustStrip() {
  return (
    <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
      {TRUST_ITEMS.map((t, i) => (
        <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 24 }}>
          {i > 0 && <span style={{ color: C.subLight, fontSize: 10 }}>·</span>}
          <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{t}</span>
        </span>
      ))}
    </div>
  );
}
