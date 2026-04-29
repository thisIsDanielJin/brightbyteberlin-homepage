"use client";

const C = {
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  accent: "#6B3977",
  hair: "rgba(20,19,15,0.08)",
};

export function AboutSection() {
  return (
    <section id="about" style={{ padding: "112px 56px", background: C.surface, borderBottom: `1px solid ${C.hair}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 48, alignItems: "flex-start" }}>
        <div>
          <div style={{ aspectRatio: "1/1", borderRadius: 16, overflow: "hidden", border: `1px solid ${C.hair}`, background: "linear-gradient(135deg, #EDE5F0 0%, #C4ADCF 60%, #6B3977 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/daniel-profile.jpg"
              alt="Daniel Jin Wodke"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
        </div>
        <div>
          <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>05 · About</div>
          <h2 style={{ fontSize: 40, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24 }}>
            Hi, I&apos;m <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>Daniel.</span>
          </h2>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: C.inkSoft, maxWidth: 560 }}>
            <p style={{ marginBottom: 12 }}>I studied CS at TU Berlin and Seoul National University, then spent six years building for agencies and enterprise clients at SAP.</p>
            <p style={{ marginBottom: 12 }}>In 2025 I started Brightbyte because <span style={{ color: C.ink, fontWeight: 500 }}>small businesses deserve the same quality code the big companies get</span>, without the big company overhead.</p>
            <p>I work in German and English, take three to four clients a quarter, and reply within a day. If we work together, you talk to me, the person writing the code.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginTop: 32, paddingTop: 24, borderTop: `1px solid ${C.hair}` }}>
            {([["Based in", "Berlin · CET"], ["Languages", "EN · DE"], ["Background", "6 yrs agencies + SAP"], ["Founded", "2025"]] as const).map(([k, v]) => (
              <div key={k}>
                <div className="mono" style={{ fontSize: 9, color: C.sub, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{k}</div>
                <div style={{ fontSize: 14, color: C.ink, fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
