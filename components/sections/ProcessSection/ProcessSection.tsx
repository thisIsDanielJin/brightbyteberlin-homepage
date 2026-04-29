"use client";

import { useState, useEffect } from "react";
import { PROCESS } from "@/data/content";

const C = {
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  accent: "#6B3977",
  accentBg: "#EDE5F0",
  hair: "rgba(20,19,15,0.08)",
  hairStrong: "rgba(20,19,15,0.14)",
};

export function ProcessSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % PROCESS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="process" style={{ padding: "112px 56px", background: `radial-gradient(ellipse at 50% 0%, rgba(237,229,240,0.3) 0%, ${C.surface} 70%)`, borderBottom: `1px solid ${C.hair}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginBottom: 72, alignItems: "baseline" }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase" }}>03 · Process</div>
        <div>
          <h2 style={{ fontSize: 56, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.02, marginBottom: 18 }}>
            Four steps,<br />
            <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>no surprises.</span>
          </h2>
          <p style={{ fontSize: 17, color: C.sub, maxWidth: 520, lineHeight: 1.6 }}>
            From kickoff to launch — predictable, transparent, with weekly demos so you always know where things stand.
          </p>
        </div>
      </div>
      <div style={{ position: "relative", paddingTop: 32 }}>
        <div style={{ position: "absolute", left: "calc(12.5% - 1px)", right: "calc(12.5% - 1px)", top: 61, height: 2, background: `repeating-linear-gradient(to right, ${C.hairStrong} 0 4px, transparent 4px 8px)` }} />
        <div style={{ position: "absolute", left: "calc(12.5% - 1px)", top: 61, height: 2, background: C.accent, width: `calc((100% - 25%) * ${active / (PROCESS.length - 1)})`, transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative", zIndex: 1 }}>
          {PROCESS.map((p, i) => {
            const isActive = i === active;
            const isPast = i < active;
            return (
              <div key={p.n} onClick={() => setActive(i)} style={{ padding: "0 16px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", cursor: "pointer" }}>
                <div style={{ height: 58, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <div style={{
                    width: isActive ? 50 : 36, height: isActive ? 50 : 36, borderRadius: "50%",
                    background: isPast || isActive ? C.accent : C.surface,
                    border: (!isPast && !isActive) ? `1.5px solid ${C.hairStrong}` : "none",
                    boxShadow: isActive ? `0 0 0 8px ${C.accentBg}, 0 8px 20px rgba(107,57,119,0.25)` : "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
                  }}>
                    <span className="mono" style={{ fontSize: isActive ? 13 : 11, fontWeight: 600, color: (isPast || isActive) ? C.surface : C.sub }}>
                      {isPast ? "✓" : p.n}
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em", marginBottom: 10 }}>
                  {p.t}
                  {isActive && <span className="mono" style={{ display: "block", marginTop: 6, fontSize: 10, color: C.accent, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>● in progress</span>}
                </div>
                <p style={{ fontSize: 13.5, color: C.sub, lineHeight: 1.65, maxWidth: 240, minHeight: 66 }}>{p.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
