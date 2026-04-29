const C = {
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  hair: "rgba(20,19,15,0.08)",
  bg: "#F5F1E8",
};

export function ServiceImage({ kind }: { kind: "lp" | "app" | "ai" }) {
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
        <div style={{ position: "absolute", top: 12, right: 14, padding: "3px 8px", background: "rgba(107,57,119,0.85)", borderRadius: 4, backdropFilter: "blur(4px)" }} className="mono">
          <span style={{ fontSize: 9, color: C.surface, letterSpacing: "0.06em" }}>LIVE · 98/100</span>
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
                <div style={{ fontSize: 16, fontWeight: 600, color: "white" }}>€24k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ai
  return (
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
  );
}
