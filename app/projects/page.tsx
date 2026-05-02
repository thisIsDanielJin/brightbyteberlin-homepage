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

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "var(--font-geist)" }}>
      {/* Section Header */}
      <div className="px-5 pt-12 pb-8 sm:px-8 sm:pt-16 sm:pb-10 lg:px-14 lg:pt-20 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12 items-baseline">
          <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase" }}>Projects</div>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight leading-[1.02] mb-4" style={{ color: C.ink }}>
              All <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>projects</span>.
            </h1>
            <p className="text-[15px] lg:text-[17px] max-w-[520px] leading-relaxed" style={{ color: C.sub }}>
              A selection of work shipped for real businesses. Each project is scoped, built, and launched within weeks.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Project */}
      <div className="px-5 sm:px-8 lg:px-14 pb-8 lg:pb-12">
        <Link href={`/projects/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] rounded-2xl overflow-hidden cursor-pointer" style={{ background: C.surface, border: `1px solid ${C.hair}` }}>
            <div className="h-[240px] sm:h-[300px] lg:h-[400px] relative" style={{ background: `linear-gradient(135deg, ${featured.accentColor}33 0%, ${featured.accentColor}55 100%)` }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "70%", height: "60%", borderRadius: 10, background: `linear-gradient(180deg, ${featured.accentColor}22 0%, ${featured.accentColor}44 100%)`, border: `1px solid ${featured.accentColor}33`, boxShadow: "0 8px 32px rgba(20,19,15,0.08)" }} />
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Featured</div>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold tracking-tight mb-2" style={{ color: C.ink }}>{featured.title}</h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: C.sub }}>{featured.subtitle}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{featured.type}</span>
                <span style={{ width: 3, height: 3, borderRadius: "50%", background: C.subLight }} />
                <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{featured.year}</span>
              </div>
              <div className="flex gap-2 flex-wrap mb-6">
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
      <div className="px-5 sm:px-8 lg:px-14 pb-16 lg:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{ background: C.surface, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.hair}`, cursor: "pointer" }}>
                <div className="h-[180px] sm:h-[200px] lg:h-[220px] relative" style={{ background: `linear-gradient(135deg, ${project.accentColor}33 0%, ${project.accentColor}55 100%)` }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "60%", height: "55%", borderRadius: 8, background: `linear-gradient(180deg, ${project.accentColor}22 0%, ${project.accentColor}44 100%)`, border: `1px solid ${project.accentColor}33`, boxShadow: "0 4px 16px rgba(20,19,15,0.06)" }} />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
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
    </div>
  );
}
