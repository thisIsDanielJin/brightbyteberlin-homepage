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
        <div style={{ width: 220, height: 102, background: C.surface, borderRadius: 8, boxShadow: "0 8px 24px rgba(20,19,15,0.14)", overflow: "hidden", position: "relative" }}>
          <div style={{ height: 22, background: C.bg, borderBottom: `1px solid ${C.hair}`, display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
            {["#FF5C5C", "#FFC83D", "#28C940"].map((c) => <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />)}
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
        <div style={{ position: "absolute", top: 12, right: 14, padding: "3px 8px", background: "rgba(107,57,119,0.85)", borderRadius: 4, backdropFilter: "blur(4px)" }} className="mono">
          <span style={{ fontSize: 9, color: C.surface, letterSpacing: "0.06em" }}>LIVE · 98/100</span>
        </div>
      </div>
    ),
    app: (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #1E1A2E 0%, #2C2040 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 220, height: 104, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(196,173,207,0.2)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
          <div style={{ height: 28, background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(196,173,207,0.15)", display: "flex", alignItems: "center", padding: "0 12px", gap: 12 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.accent, opacity: 0.7 }} />
            <span className="mono" style={{ fontSize: 9, color: "rgba(196,173,207,0.6)", letterSpacing: "0.06em" }}>dashboard.atlasstudio.de</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", height: "calc(100% - 28px)" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(196,173,207,0.1)", padding: 8, display: "flex", flexDirection: "column", gap: 6 }}>
              {[C.accent, "rgba(196,173,207,0.3)", "rgba(196,173,207,0.3)"].map((bg, i) => <div key={i} style={{ height: 6, borderRadius: 1, background: bg }} />)}
            </div>
            <div style={{ padding: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              <div style={{ background: "rgba(196,173,207,0.08)", borderRadius: 4, padding: 8 }}>
                <div className="mono" style={{ fontSize: 8, color: "rgba(196,173,207,0.5)", marginBottom: 4 }}>USERS</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.accentSoft }}>183</div>
              </div>
              <div style={{ background: C.accent, borderRadius: 4, padding: 8, opacity: 0.85 }}>
                <div className="mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>REV.</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "white" }}>€24k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    ai: (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #1A2430 0%, #0F1A22 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 220, height: 104, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(107,57,119,0.4)", background: "rgba(20,13,24,0.9)", boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 40px rgba(107,57,119,0.2)" }}>
          <div style={{ height: 24, background: "rgba(107,57,119,0.2)", borderBottom: "1px solid rgba(107,57,119,0.3)", display: "flex", alignItems: "center", padding: "0 10px", gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent }} />
            <span className="mono" style={{ fontSize: 9, color: C.accentSoft, letterSpacing: "0.06em" }}>AI assistant · online</span>
          </div>
          <div style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
              <div style={{ background: "rgba(107,57,119,0.6)", borderRadius: "8px 8px 2px 8px", padding: "5px 8px", maxWidth: "70%" }}>
                <span className="mono" style={{ fontSize: 9, color: C.accentSoft }}>How can I track leads?</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", background: C.accent, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 8, color: "white" }}>AI</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "2px 8px 8px 8px", padding: "5px 8px", maxWidth: "80%" }}>
                <span className="mono" style={{ fontSize: 9, color: "rgba(196,173,207,0.9)", lineHeight: 1.4 }}>Your dashboard shows leads in real time. 47 this month…</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    sup: (
      <div style={{ width: "100%", height: "100%", background: `linear-gradient(160deg, #F4E0D5 0%, ${C.accentBg} 100%)`, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 220, height: 104, borderRadius: 8, overflow: "hidden", background: C.surface, border: `1px solid ${C.hair}`, boxShadow: "0 8px 24px rgba(20,19,15,0.1)" }}>
          <div style={{ padding: "10px 14px 8px", borderBottom: `1px solid ${C.hair}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span className="mono" style={{ fontSize: 9, color: C.sub, letterSpacing: "0.06em" }}>UPTIME · 90 DAYS</span>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.green }} />
                <span className="mono" style={{ fontSize: 9, color: C.green, fontWeight: 600 }}>99.98%</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 1.5, height: 16 }}>
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} style={{ flex: 1, background: i === 14 ? "#FFC83D" : C.green, borderRadius: 1, opacity: i === 14 ? 0.9 : 0.55 + (((i * 7 + 3) % 11) / 11) * 0.3 }} />
              ))}
            </div>
          </div>
          <div style={{ padding: "8px 14px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {([["FCP", "0.6s"], ["LCP", "1.1s"], ["CLS", "0.01"]] as const).map(([k, v]) => (
              <div key={k}>
                <div className="mono" style={{ fontSize: 8, color: C.sub, marginBottom: 3, letterSpacing: "0.06em" }}>{k}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.ink, letterSpacing: "-0.01em" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  };
  return items[kind] || null;
}
