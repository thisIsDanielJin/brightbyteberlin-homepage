"use client";

import { useState } from "react";

const DATA = [
  { value: 62, name: "Organic", color: "#6B3977" },
  { value: 24, name: "Direct", color: "rgba(107,57,119,0.55)" },
  { value: 14, name: "Social", color: "rgba(107,57,119,0.22)" },
];

const TOTAL = DATA.reduce((s, d) => s + d.value, 0);

function getArcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const start = {
    x: cx + r * Math.cos(startAngle),
    y: cy + r * Math.sin(startAngle),
  };
  const end = {
    x: cx + r * Math.cos(endAngle),
    y: cy + r * Math.sin(endAngle),
  };
  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
}

export function EChartsPie() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cx = 50, cy = 46, r = 34;
  let currentAngle = -Math.PI / 2;

  const slices = DATA.map((d, i) => {
    const angle = (d.value / TOTAL) * Math.PI * 2;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;
    const path = getArcPath(cx, cy, r, startAngle, endAngle);
    return { ...d, path, i };
  });

  return (
    <>
      <div className="mono" style={{ fontSize: 9, color: "#6B665C", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 2 }}>
        TRAFFIC
      </div>
      <div style={{ flex: 1, width: "100%", minHeight: 0, position: "relative", display: "flex", flexDirection: "column" }}>
        <svg viewBox="0 0 100 92" style={{ flex: 1, width: "100%" }} preserveAspectRatio="xMidYMid meet">
          {slices.map((s) => (
            <path
              key={s.i}
              d={s.path}
              fill={s.color}
              stroke="#F5F1E8"
              strokeWidth={0.5}
              style={{
                transform: hovered === s.i ? `scale(1.04)` : "scale(1)",
                transformOrigin: `${cx}px ${cy}px`,
                transition: "transform 0.2s ease",
                cursor: "pointer",
                filter: hovered === s.i ? "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" : "none",
              }}
              onMouseEnter={() => setHovered(s.i)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
        </svg>
        {hovered !== null && (
          <div
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              background: "rgba(20,19,15,0.85)",
              color: "#FBF8F1",
              padding: "4px 8px",
              borderRadius: 4,
              fontSize: 11,
              fontFamily: "Geist Mono, monospace",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            {DATA[hovered].name}: {Math.round((DATA[hovered].value / TOTAL) * 100)}%
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, paddingTop: 4 }}>
          {DATA.map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: d.color }} />
              <span className="mono" style={{ fontSize: 11, color: "#6B665C" }}>{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
