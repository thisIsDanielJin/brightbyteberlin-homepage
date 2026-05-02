const C = {
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  green: "#16A34A",
  hair: "rgba(20,19,15,0.08)",
};

export function WorkImage({ tag }: { tag: "lindner" | "atlas" | "verdant" }) {
  const variants = {
    lindner: (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #E8C9BC 0%, #B85432 100%)", position: "relative", overflow: "hidden" }}>
        {/* Wheat pattern */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(${180 + i * 12}, ${40 + i * 30}) rotate(${15 + i * 8})`}>
              <ellipse cx={0} cy={0} rx={3} ry={12} fill={C.surface} />
              <line x1={0} y1={12} x2={0} y2={28} stroke={C.surface} strokeWidth={1} />
            </g>
          ))}
        </svg>
        <div style={{ position: "absolute", top: 28, left: 28 }}>
          <div className="serif" style={{ fontSize: 38, color: C.surface, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1 }}>Lindner</div>
          <div className="mono" style={{ fontSize: 10, color: C.surface, marginTop: 8, letterSpacing: "0.12em", opacity: 0.85 }}>BÄCKEREI · BERLIN</div>
        </div>
        {/* Mini browser frame */}
        <div style={{ position: "absolute", top: 24, right: 20, width: 100, height: 68, borderRadius: 6, overflow: "hidden", boxShadow: "0 4px 16px rgba(20,19,15,0.2)", border: "1px solid rgba(251,248,241,0.3)" }}>
          <div style={{ height: 14, background: "rgba(251,248,241,0.95)", display: "flex", alignItems: "center", padding: "0 6px", gap: 3 }}>
            {["#FF5C5C", "#FFC83D", "#28C940"].map((c) => <div key={c} style={{ width: 4, height: 4, borderRadius: "50%", background: c }} />)}
          </div>
          <div style={{ background: "rgba(251,248,241,0.85)", padding: 6, height: "calc(100% - 14px)" }}>
            <div style={{ height: 6, width: "70%", background: C.ink, borderRadius: 2, opacity: 0.6, marginBottom: 4 }} />
            <div style={{ height: 4, width: "90%", background: C.hair, borderRadius: 1, marginBottom: 3 }} />
            <div style={{ height: 4, width: "60%", background: C.hair, borderRadius: 1 }} />
          </div>
        </div>
        {/* Bookings card with sparkline */}
        <div style={{ position: "absolute", bottom: 20, right: 20, padding: "10px 14px", background: "rgba(251,248,241,0.92)", borderRadius: 8, boxShadow: "0 4px 12px rgba(20,19,15,0.1)" }}>
          <div className="mono" style={{ fontSize: 9, color: C.sub, letterSpacing: "0.06em", marginBottom: 4 }}>BOOKINGS</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <div style={{ fontSize: 22, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1 }}>+34%</div>
            <svg width={40} height={16} viewBox="0 0 40 16">
              <path d="M0,14 L6,12 L12,13 L18,9 L24,10 L30,6 L36,4 L40,2" fill="none" stroke={C.green} strokeWidth={1.5} strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    ),
    atlas: (
      <div style={{ width: "100%", height: "100%", background: "#0F0D1A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 60% 40%, rgba(107,57,119,0.3) 0%, transparent 60%)" }} />
        {/* Grid texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(196,173,207,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(196,173,207,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "10px 16px", background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 5, alignItems: "center" }}>
          {["#FF5C5C", "#FFC83D", "#28C940"].map((c) => <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />)}
          <span className="mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", marginLeft: 10 }}>app.atlasstudio.de</span>
          {/* Notification badge */}
          <div style={{ marginLeft: "auto", width: 14, height: 14, borderRadius: "50%", background: "rgba(107,57,119,0.8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 7, color: "white", fontWeight: 700 }}>3</span>
          </div>
        </div>
        <div style={{ padding: "44px 16px 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 6, padding: "10px 12px", height: 60 }}>
            <div className="mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>REVENUE</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "white", letterSpacing: "-0.02em" }}>€24.8K</div>
          </div>
          <div style={{ background: C.accent, borderRadius: 6, padding: "10px 12px", height: 60, opacity: 0.85 }}>
            <div className="mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>ACTIVE</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "white", letterSpacing: "-0.02em" }}>183</div>
          </div>
          {/* Growth chart */}
          <div style={{ gridColumn: "1 / -1", background: "rgba(255,255,255,0.03)", borderRadius: 6, padding: "10px 12px", height: 80 }}>
            <div className="mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", marginBottom: 8 }}>GROWTH · 6 MONTHS</div>
            <svg width="100%" height={40} viewBox="0 0 200 40" preserveAspectRatio="none">
              <path d="M0,35 L25,30 L50,28 L75,22 L100,18 L125,14 L150,10 L175,7 L200,3" fill="none" stroke={C.accentSoft} strokeWidth={1.5} strokeLinecap="round" />
              <path d="M0,35 L25,30 L50,28 L75,22 L100,18 L125,14 L150,10 L175,7 L200,3 L200,40 L0,40 Z" fill={C.accent} opacity={0.15} />
              <circle cx={200} cy={3} r={3} fill={C.accent} />
            </svg>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 14, left: 16 }} className="mono">
          <span style={{ fontSize: 10, color: "rgba(196,173,207,0.7)", letterSpacing: "0.06em" }}>10× faster than legacy</span>
        </div>
      </div>
    ),
    verdant: (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #E0EDD8 0%, #B5CF9F 100%)", position: "relative", overflow: "hidden" }}>
        <svg viewBox="0 0 240 240" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d="M0 180 Q60 100, 120 120 T240 80 L240 240 L0 240 Z" fill="rgba(20,19,15,0.06)" />
          {/* Leaf motif */}
          <g transform="translate(180, 40) rotate(15)" opacity={0.15}>
            <path d="M0,0 C10,-20 30,-25 20,-5 C30,-25 50,-20 40,0 C50,20 30,25 20,5 C30,25 10,20 0,0 Z" fill={C.ink} />
            <line x1={20} y1={5} x2={20} y2={35} stroke={C.ink} strokeWidth={1} />
          </g>
        </svg>
        <div style={{ position: "absolute", top: 24, left: 24 }}>
          <div className="serif" style={{ fontSize: 32, color: C.ink, fontWeight: 500, letterSpacing: "-0.02em", fontStyle: "italic" }}>Verdant</div>
          <div className="mono" style={{ fontSize: 10, color: C.inkSoft, marginTop: 6, letterSpacing: "0.16em", opacity: 0.8 }}>YOGA · KREUZBERG</div>
        </div>
        {/* Schedule widget */}
        <div style={{ position: "absolute", top: 24, right: 20, width: 96, padding: "8px 10px", background: "rgba(251,248,241,0.88)", borderRadius: 6, boxShadow: "0 2px 8px rgba(20,19,15,0.08)" }}>
          <div className="mono" style={{ fontSize: 7, color: C.sub, letterSpacing: "0.08em", marginBottom: 5 }}>TODAY</div>
          {([["9:00", "Vinyasa"], ["10:30", "Yin"], ["12:00", "Hatha"]] as const).map(([t, n]) => (
            <div key={t} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 3 }}>
              <span className="mono" style={{ fontSize: 7, color: C.sub, width: 24 }}>{t}</span>
              <span style={{ fontSize: 9, color: C.ink, fontWeight: 500 }}>{n}</span>
            </div>
          ))}
        </div>
        {/* Bottom metrics with ring indicators */}
        <div style={{ position: "absolute", bottom: 18, left: 18, right: 18, display: "flex", gap: 8 }}>
          {([["LIGHTHOUSE", "100", C.green], ["FCP", "0.6s", C.accent]] as const).map(([k, v, color]) => (
            <div key={k} style={{ flex: 1, padding: "8px 10px", background: "rgba(251,248,241,0.9)", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
              <svg width={22} height={22} viewBox="0 0 22 22">
                <circle cx={11} cy={11} r={8} fill="none" stroke="rgba(20,19,15,0.08)" strokeWidth={2} />
                <circle cx={11} cy={11} r={8} fill="none" stroke={color} strokeWidth={2} strokeDasharray={`${2 * Math.PI * 8 * 0.98} ${2 * Math.PI * 8}`} strokeLinecap="round" transform="rotate(-90 11 11)" />
              </svg>
              <div>
                <div className="mono" style={{ fontSize: 7, color: C.sub, marginBottom: 1 }}>{k}</div>
                <div style={{ fontSize: 13, color: C.ink, fontWeight: 600 }}>{v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  };
  return variants[tag] || null;
}
