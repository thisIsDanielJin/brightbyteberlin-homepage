const C = {
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  hair: "rgba(20,19,15,0.08)",
};

export function WorkImage({ tag }: { tag: "lindner" | "atlas" | "verdant" }) {
  const variants = {
    lindner: (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #E8C9BC 0%, #B85432 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 32, left: 32 }}>
          <div className="serif" style={{ fontSize: 42, color: C.surface, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1 }}>Lindner</div>
          <div className="mono" style={{ fontSize: 10, color: C.surface, marginTop: 8, letterSpacing: "0.12em", opacity: 0.85 }}>BÄCKEREI · BERLIN</div>
        </div>
        <div style={{ position: "absolute", bottom: 24, right: 24, padding: "10px 16px", background: "rgba(251,248,241,0.9)", borderRadius: 8 }}>
          <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.06em", marginBottom: 2 }}>BOOKINGS</div>
          <div style={{ fontSize: 20, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em" }}>+34%</div>
        </div>
      </div>
    ),
    atlas: (
      <div style={{ width: "100%", height: "100%", background: "#0F0D1A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 60% 40%, rgba(107,57,119,0.3) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "10px 16px", background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 5, alignItems: "center" }}>
          {["#FF5C5C", "#FFC83D", "#28C940"].map((c) => <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />)}
          <span className="mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", marginLeft: 10 }}>app.atlasstudio.de</span>
        </div>
        <div style={{ padding: "48px 20px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 6, padding: 12, height: 64 }}>
            <div className="mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>REVENUE</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "white", letterSpacing: "-0.02em" }}>€24.8K</div>
          </div>
          <div style={{ background: C.accent, borderRadius: 6, padding: 12, height: 64, opacity: 0.85 }}>
            <div className="mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>ACTIVE</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "white", letterSpacing: "-0.02em" }}>183</div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 16, left: 16 }} className="mono">
          <span style={{ fontSize: 10, color: "rgba(196,173,207,0.7)", letterSpacing: "0.06em" }}>10× faster than legacy</span>
        </div>
      </div>
    ),
    verdant: (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #E0EDD8 0%, #B5CF9F 100%)", position: "relative", overflow: "hidden" }}>
        <svg viewBox="0 0 220 180" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d="M0 150 Q60 70, 110 90 T220 60 L220 180 L0 180 Z" fill="rgba(20,19,15,0.08)" />
        </svg>
        <div style={{ position: "absolute", top: 28, left: 28 }}>
          <div className="serif" style={{ fontSize: 34, color: C.ink, fontWeight: 500, letterSpacing: "-0.02em", fontStyle: "italic" }}>Verdant</div>
          <div className="mono" style={{ fontSize: 10, color: C.inkSoft, marginTop: 6, letterSpacing: "0.16em", opacity: 0.8 }}>YOGA · KREUZBERG</div>
        </div>
        <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, display: "flex", gap: 8 }}>
          {([["LIGHTHOUSE", "100"], ["FCP", "0.6s"]] as const).map(([k, v]) => (
            <div key={k} style={{ flex: 1, padding: "8px 10px", background: "rgba(251,248,241,0.88)", borderRadius: 6 }} className="mono">
              <div style={{ fontSize: 8, color: C.sub, marginBottom: 2 }}>{k}</div>
              <div style={{ fontSize: 14, color: C.ink, fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  };
  return variants[tag] || null;
}
