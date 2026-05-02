"use client";

import { useLocale } from "@/contexts/LocaleContext";

const C = {
  sub: "#6B665C",
  subLight: "#9A958A",
};

export function TrustStrip() {
  const { t } = useLocale();

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
      {t.trust.items.map((item, i) => (
        <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: 24 }}>
          {i > 0 && <span style={{ color: C.subLight, fontSize: 10 }}>·</span>}
          <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{item}</span>
        </span>
      ))}
    </div>
  );
}
