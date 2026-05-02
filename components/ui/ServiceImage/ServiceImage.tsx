const C = {
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  hair: "rgba(20,19,15,0.08)",
  bg: "#F5F1E8",
  green: "#16A34A",
};

export function ServiceImage({ kind }: { kind: "lp" | "app" | "ai" | "sup" }) {
  if (kind === "lp") {
    return (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #EDE5F0 0%, #C4ADCF 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 220, height: 102, background: C.surface, borderRadius: 8, boxShadow: "0 8px 24px rgba(20,19,15,0.14)", overflow: "hidden", position: "relative" }}>
          <div style={{ height: 22, background: C.bg, borderBottom: `1px solid ${C.hair}`, display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF5C5C" }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#FFC83D" }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28C940" }} />
            <div style={{ flex: 1, marginLeft: 8, height: 10, background: C.hair, borderRadius: 99 }} />
          </div>
          <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ height: 10, width: "70%", background: C.ink, borderRadius: 2, opacity: 0.8 }} />
            <div style={{ height: 6, width: "90%", background: C.hair, borderRadius: 2 }} />
            <div style={{ height: 6, width: "80%", background: C.hair, borderRadius: 2 }} />
            <div style={{ height: 6, width: "55%", background: C.hair, borderRadius: 2 }} />
            <div style={{ height: 20, width: 72, background: C.accent, borderRadius: 99, marginTop: 4, opacity: 0.85 }} />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "app") {
    return (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #1E1A2E 0%, #2C2040 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 220, height: 104, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(196,173,207,0.2)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
          <div style={{ height: 28, background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(196,173,207,0.15)", display: "flex", alignItems: "center", padding: "0 12px", gap: 12 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.accent, opacity: 0.7 }} />
            <span className="mono" style={{ fontSize: 9, color: "rgba(196,173,207,0.6)", letterSpacing: "0.06em" }}>dashboard.atlasstudio.de</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", height: "calc(100% - 28px)" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(196,173,207,0.1)", padding: 8, display: "flex", flexDirection: "column", gap: 6 }}>
              {[C.accent, "rgba(196,173,207,0.3)", "rgba(196,173,207,0.3)"].map((bg, i) => (
                <div key={i} style={{ height: 6, borderRadius: 1, background: bg }} />
              ))}
            </div>
            <div style={{ padding: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              <div style={{ background: "rgba(196,173,207,0.08)", borderRadius: 4, padding: 8 }}>
                <div className="mono" style={{ fontSize: 8, color: "rgba(196,173,207,0.5)", marginBottom: 4 }}>USERS</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.accentSoft }}>183</div>
              </div>
              <div style={{ background: C.accent, borderRadius: 4, padding: 8, opacity: 0.85 }}>
                <div className="mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>REV.</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "white" }}>{"€"}24k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "sup") {
    return (
      <div style={{ width: "100%", height: "100%", background: `linear-gradient(160deg, #F4E0D5 0%, #EDE5F0 100%)`, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 224, height: 108, borderRadius: 8, overflow: "hidden", background: C.surface, border: `1px solid ${C.hair}`, boxShadow: "0 8px 24px rgba(20,19,15,0.1)" }}>
          <div style={{ padding: "7px 12px 5px", borderBottom: `1px solid ${C.hair}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
              <span className="mono" style={{ fontSize: 8, color: C.sub, letterSpacing: "0.06em" }}>UPTIME · 90 DAYS</span>
              <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.green, boxShadow: "0 0 6px rgba(22,163,74,0.5)" }} />
                <span className="mono" style={{ fontSize: 8, color: C.green, fontWeight: 600 }}>99.98%</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 1, height: 13 }}>
              {Array.from({ length: 45 }).map((_, i) => (
                <div key={i} style={{ flex: 1, background: i === 14 ? "#FFC83D" : C.green, borderRadius: 0.5, opacity: i === 14 ? 0.9 : 0.35 + (((i * 7 + 3) % 11) / 11) * 0.45 }} />
              ))}
            </div>
          </div>
          <div style={{ padding: "10px 16px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {([["FCP", "0.6s", "↓"], ["LCP", "1.1s", "↓"], ["CLS", "0.01", "—"]] as const).map(([k, v, trend]) => (
              <div key={k} style={{ textAlign: "center" }}>
                <div className="mono" style={{ fontSize: 8, color: C.sub, marginBottom: 4, letterSpacing: "0.06em" }}>{k}</div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 3 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.ink }}>{v}</span>
                  <span style={{ fontSize: 8, color: C.green }}>{trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ai - chip/processor visualization
  return (
    <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #1A2430 0%, #0F1A22 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(107,57,119,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(107,57,119,0.04) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
      <div style={{ width: 224, height: 108, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(107,57,119,0.3)", background: "rgba(20,13,24,0.85)", boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 40px rgba(107,57,119,0.1)", position: "relative", zIndex: 1 }}>
        <div style={{ height: 22, background: "rgba(107,57,119,0.15)", borderBottom: "1px solid rgba(107,57,119,0.25)", display: "flex", alignItems: "center", padding: "0 10px", gap: 6 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.accent, boxShadow: `0 0 6px ${C.accent}` }} />
          <span className="mono" style={{ fontSize: 8, color: C.accentSoft, letterSpacing: "0.06em" }}>ai-engine · active</span>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 3 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.green, boxShadow: "0 0 4px rgba(22,163,74,0.5)" }} />
            <span className="mono" style={{ fontSize: 7, color: C.green }}>live</span>
          </div>
        </div>
        <div style={{ height: "calc(100% - 22px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 10 }}>
          <svg width="100%" height="100%" viewBox="0 0 200 72" preserveAspectRatio="xMidYMid meet">
            {/* Circuit traces - left */}
            {[18, 30, 42, 54].map((y, i) => (
              <line key={`tl${i}`} x1={20} y1={y} x2={60} y2={y} stroke={C.accent} strokeWidth={1} opacity={i === 1 || i === 2 ? 0.5 : 0.2} />
            ))}
            {/* Circuit traces - right */}
            {[18, 30, 42, 54].map((y, i) => (
              <line key={`tr${i}`} x1={140} y1={y} x2={180} y2={y} stroke={C.accent} strokeWidth={1} opacity={i === 1 || i === 2 ? 0.5 : 0.2} />
            ))}
            {/* Circuit traces - top */}
            {[76, 100, 124].map((x, i) => (
              <line key={`tt${i}`} x1={x} y1={2} x2={x} y2={16} stroke={C.accent} strokeWidth={1} opacity={i === 1 ? 0.5 : 0.2} />
            ))}
            {/* Circuit traces - bottom */}
            {[76, 100, 124].map((x, i) => (
              <line key={`tb${i}`} x1={x} y1={56} x2={x} y2={70} stroke={C.accent} strokeWidth={1} opacity={i === 1 ? 0.5 : 0.2} />
            ))}
            {/* Trace endpoints - left */}
            {[18, 30, 42, 54].map((y, i) => (
              <rect key={`dl${i}`} x={16} y={y - 2} width={4} height={4} rx={1} fill={C.accent} opacity={i === 1 || i === 2 ? 0.7 : 0.3} />
            ))}
            {/* Trace endpoints - right */}
            {[18, 30, 42, 54].map((y, i) => (
              <rect key={`dr${i}`} x={180} y={y - 2} width={4} height={4} rx={1} fill={C.accent} opacity={i === 1 || i === 2 ? 0.7 : 0.3} />
            ))}
            {/* Central chip */}
            <rect x={60} y={16} width={80} height={40} rx={4} fill="rgba(107,57,119,0.15)" stroke={C.accent} strokeWidth={1.5} />
            {/* Inner chip - 3x3 grid */}
            {[0, 1, 2].map((row) =>
              [0, 1, 2].map((col) => (
                <rect
                  key={`c${row}${col}`}
                  x={72 + col * 22}
                  y={24 + row * 10}
                  width={14}
                  height={6}
                  rx={1.5}
                  fill={row === 1 && col === 1 ? C.accent : "rgba(107,57,119,0.3)"}
                  opacity={row === 1 && col === 1 ? 0.9 : (row === 1 || col === 1) ? 0.5 : 0.25}
                />
              ))
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}
