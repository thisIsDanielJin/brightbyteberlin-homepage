"use client";

import { useState } from "react";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  hair: "rgba(20,19,15,0.08)",
};

export type FAQItem = { q: string; a: string };

interface FAQAccordionProps {
  items: FAQItem[];
  mostAskedLabel?: string;
}

export function FAQAccordion({ items, mostAskedLabel = "MOST ASKED" }: FAQAccordionProps) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  const main = items[0];
  const rest = items.slice(1);

  return (
    <div>
      {main && (
        <div style={{ background: C.bg, border: `1.5px solid ${C.accentSoft}`, borderRadius: 16, padding: "36px 40px", marginBottom: 24, position: "relative" }}>
          <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", padding: "3px 12px", background: C.accent, borderRadius: 99 }} className="mono">
            <span style={{ fontSize: 10, color: C.surface, letterSpacing: "0.1em", fontWeight: 600 }}>{mostAskedLabel}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em" }}>{main.q}</h3>
          </div>
          <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.7, maxWidth: 700 }}>{main.a}</p>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
        {rest.map((f, i) => (
          <div key={i} onClick={() => toggle(i)} style={{ background: C.bg, border: `1px solid ${open[i] ? C.accentSoft : C.hair}`, borderRadius: 14, padding: "24px 30px", cursor: "pointer", transition: "border-color 0.25s ease" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: C.ink, letterSpacing: "-0.01em" }}>{f.q}</h3>
              <span style={{ fontSize: 18, color: C.sub, transition: "transform 0.2s", transform: open[i] ? "rotate(45deg)" : "rotate(0deg)", flexShrink: 0, marginLeft: 12 }}>+</span>
            </div>
            {open[i] && (
              <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.65, marginTop: 14, paddingTop: 14, borderTop: `1px solid ${C.hair}` }}>{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
