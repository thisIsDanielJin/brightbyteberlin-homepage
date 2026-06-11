"use client";

import { Fragment } from "react";
import { useLocale } from "@/contexts/LocaleContext";

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
  const { t } = useLocale();

  return (
    <div className="p-5 sm:p-7 lg:p-8 rounded-[18px]" style={{ background: C.surface, border: `1px solid ${C.hair}` }}>
      <div className="mb-5 lg:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1.5" style={{ color: C.ink }}>
          {t.comparison.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: C.sub }}>
          {t.comparison.subtitle}
        </p>
      </div>

      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <div style={{ display: "grid", gridTemplateColumns: "140px 1fr 1fr 1fr", gap: 0, minWidth: 560 }}>
          {/* Header row */}
          <div style={{ padding: "12px 14px", borderBottom: `2px solid ${C.hair}` }} />
          <div style={{ padding: "12px 14px", borderBottom: `2px solid ${C.hair}`, background: C.accentBg, borderRadius: "8px 8px 0 0" }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: C.accent, letterSpacing: "0.04em" }}>{t.comparison.headers[0]}</div>
          </div>
          <div style={{ padding: "12px 14px", borderBottom: `2px solid ${C.hair}` }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: C.ink, letterSpacing: "0.04em" }}>{t.comparison.headers[1]}</div>
          </div>
          <div style={{ padding: "12px 14px", borderBottom: `2px solid ${C.hair}` }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: C.ink, letterSpacing: "0.04em" }}>{t.comparison.headers[2]}</div>
          </div>

          {/* Data rows */}
          {t.comparison.rows.map((row, i) => (
            <Fragment key={row.label}>
              <div style={{ padding: "14px", fontSize: 13, fontWeight: 600, color: C.ink, borderBottom: `1px solid ${C.hair}`, background: i % 2 === 0 ? "transparent" : C.bg }}>
                {row.label}
              </div>
              <div style={{ padding: "14px", fontSize: 13, fontWeight: 600, color: C.accent, borderBottom: `1px solid ${C.hair}`, background: i % 2 === 0 ? "rgba(237,229,240,0.3)" : "rgba(237,229,240,0.5)" }}>
                {row.custom}
              </div>
              <div style={{ padding: "14px", fontSize: 13, color: C.inkSoft, borderBottom: `1px solid ${C.hair}`, background: i % 2 === 0 ? "transparent" : C.bg }}>
                {row.platform}
              </div>
              <div style={{ padding: "14px", fontSize: 13, color: C.inkSoft, borderBottom: `1px solid ${C.hair}`, background: i % 2 === 0 ? "transparent" : C.bg }}>
                {row.agency}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
