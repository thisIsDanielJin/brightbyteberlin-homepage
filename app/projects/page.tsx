import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | BrightByte Berlin",
  description: "A selection of web projects shipped by BrightByte Berlin. Real businesses, real outcomes.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | BrightByte Berlin",
    description: "A selection of web projects shipped by BrightByte Berlin.",
    url: "https://brightbyte-berlin.com/projects",
  },
};

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  subLight: "#9A958A",
  accent: "#6B3977",
  accentBg: "rgba(107,57,119,0.08)",
  accentSoft: "#C4ADCF",
  hair: "rgba(20,19,15,0.08)",
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

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "var(--font-geist)" }}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 56px", borderBottom: `1px solid ${C.hair}` }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <BrightByteLogo size={28} />
          <div style={{ fontSize: 15, letterSpacing: "-0.01em" }}>
            <span style={{ fontWeight: 600, color: C.ink }}>bright</span>
            <span className="serif" style={{ fontStyle: "italic", fontWeight: 400, color: C.accent }}>byte</span>
            <span style={{ color: C.sub, fontWeight: 400 }}>.berlin</span>
          </div>
        </Link>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>← Back to home</span>
        </Link>
      </div>

      {/* Section Header */}
      <div style={{ padding: "80px 56px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "baseline" }}>
          <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase" }}>Projects</div>
          <div>
            <h1 style={{ fontSize: 48, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.02, marginBottom: 18 }}>
              All <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>projects</span>.
            </h1>
            <p style={{ fontSize: 17, color: C.sub, maxWidth: 520, lineHeight: 1.6 }}>
              A selection of work shipped for real businesses. Each project is scoped, built, and launched within weeks.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Project */}
      <div style={{ padding: "0 56px 48px" }}>
        <Link href={`/projects/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
          <div style={{ background: C.surface, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.hair}`, display: "grid", gridTemplateColumns: "1.4fr 1fr", cursor: "pointer" }}>
            <div style={{ height: 400, background: `linear-gradient(135deg, ${featured.accentColor}33 0%, ${featured.accentColor}55 100%)`, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "70%", height: "60%", borderRadius: 10, background: `linear-gradient(180deg, ${featured.accentColor}22 0%, ${featured.accentColor}44 100%)`, border: `1px solid ${featured.accentColor}33`, boxShadow: "0 8px 32px rgba(20,19,15,0.08)" }} />
              </div>
            </div>
            <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Featured</div>
              <h2 style={{ fontSize: 28, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em", marginBottom: 8 }}>{featured.title}</h2>
              <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.6, marginBottom: 20 }}>{featured.subtitle}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{featured.type}</span>
                <span style={{ width: 3, height: 3, borderRadius: "50%", background: C.subLight }} />
                <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{featured.year}</span>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                {featured.tech.map((t) => (
                  <span key={t} className="mono" style={{ fontSize: 10, color: C.accent, background: C.accentBg, padding: "4px 10px", borderRadius: 99, letterSpacing: "0.02em" }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.accent }}>View project</span>
                <span style={{ color: C.accent }}>→</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Remaining Projects Grid */}
      <div style={{ padding: "0 56px 112px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {rest.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{ background: C.surface, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.hair}`, cursor: "pointer" }}>
                <div style={{ height: 220, background: `linear-gradient(135deg, ${project.accentColor}33 0%, ${project.accentColor}55 100%)`, position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "60%", height: "55%", borderRadius: 8, background: `linear-gradient(180deg, ${project.accentColor}22 0%, ${project.accentColor}44 100%)`, border: `1px solid ${project.accentColor}33`, boxShadow: "0 4px 16px rgba(20,19,15,0.06)" }} />
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: C.ink, letterSpacing: "-0.02em" }}>{project.title}</h3>
                    <span style={{ fontSize: 13, color: C.accent }}>→</span>
                  </div>
                  <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.5, marginBottom: 12 }}>{project.subtitle}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <span className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em" }}>{project.type}</span>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: C.subLight }} />
                    <span className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em" }}>{project.year}</span>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {project.tech.map((t) => (
                      <span key={t} className="mono" style={{ fontSize: 10, color: C.accent, background: C.accentBg, padding: "3px 8px", borderRadius: 99, letterSpacing: "0.02em" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "48px 56px 32px", background: C.ink, borderTop: "1px solid rgba(251,248,241,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <BrightByteLogo size={24} />
            <span style={{ fontSize: 13, color: "rgba(251,248,241,0.7)" }}>
              <span style={{ fontWeight: 600, color: C.surface }}>bright</span>
              <span className="serif" style={{ fontStyle: "italic", color: C.accentSoft }}>byte</span>
              <span style={{ color: "rgba(251,248,241,0.5)" }}>.berlin</span>
            </span>
          </Link>
          <span className="mono" style={{ fontSize: 11, color: "rgba(251,248,241,0.5)", letterSpacing: "0.04em" }}>© 2026 Brightbyte · Berlin</span>
        </div>
      </div>
    </div>
  );
}
