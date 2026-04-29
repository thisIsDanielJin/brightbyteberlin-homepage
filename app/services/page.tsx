import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES_DETAIL, PROCESS } from "@/data/content";
import { ServiceImage } from "@/components/ui/ServiceImage/ServiceImage";

export const metadata: Metadata = {
  title: "Services | BrightByte Berlin",
  description: "Fixed-price, fixed-timeline web builds. Landing pages, web apps, AI integrations.",
  alternates: { canonical: "/services" },
};

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  subLight: "#9A958A",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  hair: "rgba(20,19,15,0.08)",
  hairStrong: "rgba(20,19,15,0.15)",
};

function BrightByteLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="22" width="8" height="8" rx="1.5" fill="#C4ADCF" />
      <rect x="12" y="22" width="8" height="8" rx="1.5" fill="#C4ADCF" />
      <rect x="2" y="12" width="8" height="8" rx="1.5" fill="#C4ADCF" />
      <rect x="12" y="12" width="8" height="8" rx="3" fill="#C4ADCF" opacity="0.85" />
      <rect x="22" y="12" width="8" height="8" rx="4" fill="#C4ADCF" opacity="0.7" />
      <circle cx="26" cy="6" r="4.5" fill="#C4ADCF" opacity="0.45" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "var(--font-geist)" }}>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 56px", borderBottom: `1px solid ${C.hair}` }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <BrightByteLogo size={22} />
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em" }}>
            bright<span className="serif" style={{ fontStyle: "italic", fontWeight: 400, color: C.accent }}>byte</span>
            <span style={{ color: C.sub, fontWeight: 400 }}>.berlin</span>
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 14, color: C.sub }}>
          <Link href="/#work" style={{ textDecoration: "none", color: C.sub }}>Work</Link>
          <span style={{ color: C.ink, fontWeight: 500 }}>Services</span>
          <Link href="/#process" style={{ textDecoration: "none", color: C.sub }}>Process</Link>
          <Link href="/#contact" style={{ textDecoration: "none", color: C.sub }}>Contact</Link>
        </div>
      </div>

      {/* Hero — compact */}
      <div style={{ padding: "80px 56px 56px", textAlign: "center" }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Services</div>
        <h1 style={{ fontSize: 44, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 16 }}>
          Websites that work as hard<br />as <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>you do.</span>
        </h1>
        <p style={{ fontSize: 17, color: C.sub, lineHeight: 1.6, maxWidth: 520, margin: "0 auto" }}>
          Fixed-price, fixed-timeline builds. I handle the tech — you stay focused on your business.
        </p>
      </div>

      {/* Service Blocks */}
      <div style={{ padding: "0 56px 80px", display: "flex", flexDirection: "column", gap: 24 }}>
        {SERVICES_DETAIL.map((s, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "240px 1fr", background: C.surface, border: `1px solid ${C.hair}`, borderRadius: 16, overflow: "hidden" }}>
            <div style={{ height: "100%", minHeight: 220 }}>
              <ServiceImage kind={s.img} />
            </div>
            <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em", marginBottom: 6 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.5, marginBottom: 20 }}>{s.value}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px", marginBottom: 20, flex: 1 }}>
                {s.features.map((f, fi) => (
                  <div key={fi} style={{ display: "flex", alignItems: "baseline", gap: 8, fontSize: 13, color: C.ink, lineHeight: 1.5 }}>
                    <span style={{ color: C.accent, fontWeight: 600, flexShrink: 0 }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 16, borderTop: `1px solid ${C.hair}` }}>
                <span className="mono" style={{ fontSize: 11, color: C.ink, letterSpacing: "0.04em", padding: "4px 10px", border: `1px solid ${C.hair}`, borderRadius: 99 }}>⏱ {s.timeline}</span>
                <span style={{ fontSize: 13, color: C.sub, fontStyle: "italic" }}>Ideal for: {s.ideal}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Bar */}
      <div style={{ padding: "32px 56px", background: C.surface, borderTop: `1px solid ${C.hair}`, borderBottom: `1px solid ${C.hair}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 40 }}>
        {([["12+", "projects shipped"], ["97", "avg. Lighthouse"], ["< 24h", "response time"]] as const).map(([val, label]) => (
          <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 20, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em" }}>{val}</span>
            <span style={{ fontSize: 13, color: C.sub }}>{label}</span>
          </div>
        ))}
        <div style={{ width: 1, height: 24, background: C.hair }} />
        <div style={{ fontSize: 13, color: C.sub, fontStyle: "italic" }}>
          <span className="serif" style={{ fontStyle: "italic" }}>&ldquo;Finally a developer who speaks plain German.&rdquo;</span>
          <span style={{ marginLeft: 8, fontStyle: "normal", fontWeight: 500, color: C.ink }}>— Atlas Studio</span>
        </div>
      </div>

      {/* How It Works — compact process row */}
      <div style={{ padding: "72px 56px" }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>How it works</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 24, position: "relative" }}>
          {/* Dotted connector line */}
          <div style={{ position: "absolute", top: 16, left: "12.5%", right: "12.5%", height: 2, background: `repeating-linear-gradient(to right, ${C.hairStrong} 0 4px, transparent 4px 8px)`, zIndex: 0 }} />
          {PROCESS.map((step, i) => (
            <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.surface, border: `2px solid ${C.accent}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                <span className="mono" style={{ fontSize: 10, fontWeight: 600, color: C.accent }}>{step.n}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.ink, marginBottom: 4 }}>{step.t}</div>
              <div style={{ fontSize: 12, color: C.sub, lineHeight: 1.4, maxWidth: 180, margin: "0 auto" }}>{step.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Form */}
      <div style={{ padding: "80px 56px", background: `linear-gradient(180deg, ${C.bg} 0%, #F0ECE2 100%)`, borderTop: `1px solid ${C.hair}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "flex-start" }}>
          {/* Left */}
          <div>
            <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Start a project</div>
            <h2 style={{ fontSize: 48, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.0, marginBottom: 24 }}>
              Tell me what<br />you&apos;re <span className="serif" style={{ fontStyle: "italic", fontWeight: 400, color: C.accent }}>building.</span>
            </h2>
            <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.6, maxWidth: 380, marginBottom: 32 }}>
              Send a brief — what you need, when you need it, and anything else that helps. I reply within 24 hours.
            </p>
            {/* What happens next */}
            <div>
              <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 20 }}>What happens next</div>
              <div style={{ position: "relative", paddingLeft: 24 }}>
                <div style={{ position: "absolute", left: 5, top: 6, bottom: 6, width: 1.5, background: C.accentSoft, borderRadius: 1 }} />
                {([["24H", "I read your brief and reply with questions or a quick yes/no."], ["DAY 2", "30-min call to align on scope and timeline."], ["DAY 3", "Fixed-price proposal in your inbox — no obligation."]] as const).map(([when, what], i, arr) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < arr.length - 1 ? 16 : 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: -24, top: 5, width: 12, height: 12, borderRadius: "50%", background: C.surface, border: `2px solid ${C.accent}`, zIndex: 1 }} />
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                      <span className="mono" style={{ fontSize: 11, fontWeight: 600, color: C.accent, letterSpacing: "0.04em", flexShrink: 0, minWidth: 42 }}>{when}</span>
                      <span style={{ fontSize: 13, color: C.inkSoft, lineHeight: 1.5 }}>{what}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right — form */}
          <div style={{ background: C.surface, border: `1px solid ${C.hair}`, borderRadius: 18, padding: 40, boxShadow: "0 30px 60px -40px rgba(20,19,15,0.18)" }}>
            <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Project brief</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              {([["Your name", "Maria Becker"], ["Email", "maria@yourdomain.de"]] as const).map(([l, placeholder]) => (
                <div key={l}>
                  <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase" }}>{l}</div>
                  <div style={{ padding: "12px 14px", background: C.bg, border: `1px solid ${C.hair}`, borderRadius: 8, fontSize: 14, color: C.subLight }}>{placeholder}</div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 18 }}>
              <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase" }}>Type of project</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Landing page", "Multi-page site", "Web app / MVP", "AI integration", "Not sure yet"].map((opt, i) => (
                  <div key={opt} style={{ padding: "8px 14px", background: i === 0 ? C.ink : C.bg, color: i === 0 ? C.surface : C.ink, border: `1px solid ${i === 0 ? C.ink : C.hair}`, borderRadius: 99, fontSize: 13, fontWeight: 500 }}>{opt}</div>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase" }}>Tell me about it</div>
              <div style={{ padding: "14px 16px", background: C.bg, border: `1px solid ${C.hair}`, borderRadius: 8, fontSize: 14, color: C.subLight, minHeight: 100, lineHeight: 1.6 }}>
                We need a landing page for our new product launch next month. Mobile-first, fast, with a clear CTA…
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, borderTop: `1px solid ${C.hair}` }}>
              <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>Reply within 24h, guaranteed.</span>
              <div className="btn-hover" style={{ padding: "12px 24px", background: C.ink, color: C.surface, borderRadius: 99, fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                Send brief <span style={{ color: C.accent }}>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer — compact */}
      <div style={{ padding: "32px 56px", background: C.ink, color: C.surface, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <BrightByteLogo size={20} />
          <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: "-0.01em", color: C.surface }}>
            bright<span className="serif" style={{ fontStyle: "italic", fontWeight: 400, color: C.accentSoft }}>byte</span>
            <span style={{ color: "rgba(251,248,241,0.5)", fontWeight: 400 }}>.berlin</span>
          </span>
        </Link>
        <span style={{ fontSize: 12, color: "rgba(251,248,241,0.5)" }}>© 2026 BrightByte · Berlin</span>
      </div>
    </div>
  );
}
