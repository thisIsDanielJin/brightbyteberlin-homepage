const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  subLight: "#9A958A",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  accentBg: "#EDE5F0",
  green: "#16A34A",
  hair: "rgba(20,19,15,0.08)",
};

export function ServiceImage({ kind }: { kind: "lp" | "app" | "ai" | "sup" }) {
  const items = {
    lp: (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #EDE5F0 0%, #C4ADCF 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Dot grid background */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12 }}>
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 14 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 18 + 9} cy={row * 18 + 9} r={1.2} fill={C.ink} />
            ))
          )}
        </svg>
        {/* Shadow card (depth) */}
        <div style={{ position: "absolute", width: 210, height: 96, background: "rgba(251,248,241,0.5)", borderRadius: 7, transform: "translate(8px, -2px)", boxShadow: "0 4px 12px rgba(20,19,15,0.06)" }} />
        {/* Main browser */}
        <div style={{ width: 220, height: 102, background: C.surface, borderRadius: 8, boxShadow: "0 8px 24px rgba(20,19,15,0.14)", overflow: "hidden", position: "relative", zIndex: 1 }}>
          <div style={{ height: 22, background: C.bg, borderBottom: `1px solid ${C.hair}`, display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF5C5C" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FFC83D" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28C940" }} />
            <div style={{ flex: 1, marginLeft: 8, height: 10, background: C.hair, borderRadius: 99 }} />
          </div>
          <div style={{ padding: "8px 12px", display: "grid", gridTemplateColumns: "1fr 0.6fr", gap: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ height: 9, width: "85%", background: C.ink, borderRadius: 2, opacity: 0.8 }} />
              <div style={{ height: 5, width: "95%", background: C.hair, borderRadius: 2 }} />
              <div style={{ height: 5, width: "80%", background: C.hair, borderRadius: 2 }} />
              <div style={{ height: 5, width: "60%", background: C.hair, borderRadius: 2 }} />
              <div style={{ height: 16, width: 56, background: C.accent, borderRadius: 99, marginTop: 3, opacity: 0.85 }} />
            </div>
            <div style={{ background: `linear-gradient(135deg, ${C.accentBg} 0%, rgba(196,173,207,0.3) 100%)`, borderRadius: 6, border: `1px solid ${C.hair}` }} />
          </div>
        </div>
        {/* Lighthouse score ring */}
        <div style={{ position: "absolute", top: 10, right: 12, width: 32, height: 32, borderRadius: "50%", background: "rgba(251,248,241,0.92)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(20,19,15,0.1)", zIndex: 2 }}>
          <svg width={26} height={26} viewBox="0 0 26 26">
            <circle cx={13} cy={13} r={10} fill="none" stroke="#E8E3D6" strokeWidth={2.5} />
            <circle cx={13} cy={13} r={10} fill="none" stroke={C.green} strokeWidth={2.5} strokeDasharray={`${2 * Math.PI * 10 * 0.98} ${2 * Math.PI * 10}`} strokeLinecap="round" transform="rotate(-90 13 13)" />
          </svg>
          <span className="mono" style={{ position: "absolute", fontSize: 7, fontWeight: 700, color: C.ink }}>98</span>
        </div>
      </div>
    ),
    app: (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #1E1A2E 0%, #2C2040 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Grid texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(196,173,207,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(196,173,207,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div style={{ width: 224, height: 108, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(196,173,207,0.2)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)", position: "relative", zIndex: 1 }}>
          <div style={{ height: 24, background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(196,173,207,0.15)", display: "flex", alignItems: "center", padding: "0 10px", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent, opacity: 0.7 }} />
            <div className="mono" style={{ fontSize: 8, color: "rgba(196,173,207,0.6)", letterSpacing: "0.06em" }}>dashboard.app</div>
            {/* Notification badge */}
            <div style={{ marginLeft: "auto", width: 14, height: 14, borderRadius: "50%", background: "rgba(107,57,119,0.8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 7, color: "white", fontWeight: 700 }}>3</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "36px 1fr", height: "calc(100% - 24px)" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(196,173,207,0.1)", padding: "8px 6px", display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
              {[C.accent, "rgba(196,173,207,0.3)", "rgba(196,173,207,0.3)", "rgba(196,173,207,0.2)"].map((bg, i) => (
                <div key={i} style={{ width: i === 0 ? 8 : 6, height: i === 0 ? 8 : 6, borderRadius: i === 0 ? 2 : 1, background: bg }} />
              ))}
            </div>
            <div style={{ padding: "8px 10px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
              <div style={{ background: "rgba(196,173,207,0.08)", borderRadius: 4, padding: "6px 7px" }}>
                <div className="mono" style={{ fontSize: 7, color: "rgba(196,173,207,0.5)", marginBottom: 3 }}>USERS</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.accentSoft }}>183</div>
              </div>
              <div style={{ background: C.accent, borderRadius: 4, padding: "6px 7px", opacity: 0.85 }}>
                <div className="mono" style={{ fontSize: 7, color: "rgba(255,255,255,0.7)", marginBottom: 3 }}>REV.</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "white" }}>€24k</div>
              </div>
              {/* Bar chart row */}
              <div style={{ gridColumn: "1 / -1", background: "rgba(196,173,207,0.05)", borderRadius: 4, padding: "5px 7px", display: "flex", alignItems: "flex-end", gap: 2 }}>
                {[35, 55, 40, 65, 50, 72, 60, 80, 68, 90].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h * 0.28}px`, background: i >= 7 ? C.accent : "rgba(196,173,207,0.25)", borderRadius: 1, opacity: i >= 7 ? 0.8 : 0.6 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    ai: (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #1A2430 0%, #0F1A22 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Neural network background */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }} viewBox="0 0 240 140">
          {/* Layer 1 - Input (5 nodes) */}
          {[20, 40, 60, 80, 100].map((y, i) => (
            <circle key={`l1-${i}`} cx={40} cy={y + 10} r={2.5} fill={C.accent} opacity={i === 1 || i === 3 ? 0.8 : 0.5} />
          ))}
          {/* Layer 2 - Hidden 1 (7 nodes) */}
          {[12, 28, 44, 60, 76, 92, 108].map((y, i) => (
            <circle key={`l2-${i}`} cx={90} cy={y + 10} r={2.5} fill={C.accent} opacity={i === 2 || i === 4 ? 0.8 : 0.45} />
          ))}
          {/* Layer 3 - Hidden 2 (7 nodes) */}
          {[12, 28, 44, 60, 76, 92, 108].map((y, i) => (
            <circle key={`l3-${i}`} cx={150} cy={y + 10} r={2.5} fill={C.accent} opacity={i === 3 || i === 5 ? 0.8 : 0.45} />
          ))}
          {/* Layer 4 - Output (4 nodes) */}
          {[30, 55, 80, 105].map((y, i) => (
            <circle key={`l4-${i}`} cx={205} cy={y} r={2.5} fill={C.accent} opacity={i === 1 ? 0.8 : 0.5} />
          ))}
          {/* Connections L1→L2 (sparse) */}
          {[[0,0],[0,2],[1,1],[1,3],[1,4],[2,2],[2,3],[2,5],[3,3],[3,4],[3,6],[4,5],[4,6]].map(([from, to], i) => (
            <line key={`c12-${i}`} x1={40} y1={[20,40,60,80,100][from] + 10} x2={90} y2={[12,28,44,60,76,92,108][to] + 10} stroke={C.accent} strokeWidth={0.5} opacity={(from === 1 && to === 3) || (from === 3 && to === 4) ? 0.5 : 0.2} />
          ))}
          {/* Connections L2→L3 (sparse) */}
          {[[0,1],[1,0],[1,2],[2,2],[2,3],[3,3],[3,4],[4,3],[4,5],[5,4],[5,5],[5,6],[6,5],[6,6]].map(([from, to], i) => (
            <line key={`c23-${i}`} x1={90} y1={[12,28,44,60,76,92,108][from] + 10} x2={150} y2={[12,28,44,60,76,92,108][to] + 10} stroke={C.accent} strokeWidth={0.5} opacity={(from === 2 && to === 3) || (from === 4 && to === 5) ? 0.5 : 0.18} />
          ))}
          {/* Connections L3→L4 (sparse) */}
          {[[0,0],[1,0],[1,1],[2,1],[3,1],[3,2],[4,2],[5,2],[5,3],[6,3]].map(([from, to], i) => (
            <line key={`c34-${i}`} x1={150} y1={[12,28,44,60,76,92,108][from] + 10} x2={205} y2={[30,55,80,105][to]} stroke={C.accent} strokeWidth={0.5} opacity={(from === 3 && to === 1) || (from === 5 && to === 3) ? 0.5 : 0.18} />
          ))}
          {/* Highlight path (active inference) */}
          <polyline points="40,50 90,70 150,70 205,55" fill="none" stroke={C.accentSoft} strokeWidth={1} opacity={0.4} strokeLinecap="round" />
          <polyline points="40,90 90,102 150,102 205,105" fill="none" stroke={C.accentSoft} strokeWidth={0.8} opacity={0.3} strokeLinecap="round" />
          {/* Glow nodes */}
          <circle cx={90} cy={70} r={3.5} fill={C.accent} opacity={0.6}>
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx={150} cy={70} r={3.5} fill={C.accent} opacity={0.5}>
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx={205} cy={55} r={3} fill={C.accent} opacity={0.5}>
            <animate attributeName="opacity" values="0.5;0.85;0.5" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
        {/* Chat panel */}
        <div style={{ width: 220, height: 108, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(107,57,119,0.4)", background: "rgba(20,13,24,0.92)", boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 40px rgba(107,57,119,0.15)", position: "relative", zIndex: 1 }}>
          <div style={{ height: 22, background: "rgba(107,57,119,0.2)", borderBottom: "1px solid rgba(107,57,119,0.3)", display: "flex", alignItems: "center", padding: "0 10px", gap: 6 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.accent, boxShadow: `0 0 6px ${C.accent}` }} />
            <span className="mono" style={{ fontSize: 8, color: C.accentSoft, letterSpacing: "0.06em" }}>AI assistant · online</span>
          </div>
          <div style={{ padding: "6px 10px", display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", gap: 5, justifyContent: "flex-end" }}>
              <div style={{ background: "rgba(107,57,119,0.5)", borderRadius: "7px 7px 2px 7px", padding: "4px 7px", maxWidth: "65%" }}>
                <span className="mono" style={{ fontSize: 8, color: C.accentSoft }}>How can I track leads?</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: C.accent, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 8px rgba(107,57,119,0.4)" }}>
                <span style={{ fontSize: 7, color: "white" }}>AI</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "2px 7px 7px 7px", padding: "4px 7px", maxWidth: "78%", boxShadow: "0 0 12px rgba(107,57,119,0.08)" }}>
                <span className="mono" style={{ fontSize: 8, color: "rgba(196,173,207,0.9)", lineHeight: 1.4 }}>Your dashboard shows 47 leads this month. Up 23%…</span>
              </div>
            </div>
            {/* Typing indicator */}
            <div style={{ display: "flex", gap: 5, marginTop: 1 }}>
              <div style={{ width: 14, height: 14, flexShrink: 0 }} />
              <div style={{ display: "flex", gap: 3, padding: "3px 8px", background: "rgba(255,255,255,0.03)", borderRadius: 7 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: C.accentSoft, opacity: 0.6, animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Keyframes style tag */}
        <style>{`@keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.9; transform: scale(1.3); } }`}</style>
      </div>
    ),
    sup: (
      <div style={{ width: "100%", height: "100%", background: `linear-gradient(160deg, #F4E0D5 0%, ${C.accentBg} 100%)`, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
          <div style={{ padding: "5px 12px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
            {([["FCP", "0.6s", "↓"], ["LCP", "1.1s", "↓"], ["CLS", "0.01", "—"]] as const).map(([k, v, trend]) => (
              <div key={k}>
                <div className="mono" style={{ fontSize: 7, color: C.sub, marginBottom: 2, letterSpacing: "0.06em" }}>{k}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: C.ink }}>{v}</span>
                  <span style={{ fontSize: 7, color: C.green }}>{trend}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Sparkline */}
          <div style={{ padding: "3px 12px 5px" }}>
            <svg width="100%" height={14} viewBox="0 0 200 14" preserveAspectRatio="none">
              <path d="M0,11 L15,9 L30,10 L45,7 L60,8 L75,5 L90,6 L105,4 L120,5 L135,3 L150,4 L165,2.5 L180,3 L200,1.5" fill="none" stroke={C.accent} strokeWidth={1} opacity={0.4} />
              <path d="M0,11 L15,9 L30,10 L45,7 L60,8 L75,5 L90,6 L105,4 L120,5 L135,3 L150,4 L165,2.5 L180,3 L200,1.5 L200,14 L0,14 Z" fill={C.accent} opacity={0.05} />
            </svg>
          </div>
        </div>
      </div>
    ),
  };
  return items[kind] || null;
}
