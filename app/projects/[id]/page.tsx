import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug, getNextProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectBySlug(id);
  if (!project) return {};

  return {
    title: `${project.title} | BrightByte Berlin`,
    description: project.subtitle,
    alternates: { canonical: `/projects/${id}` },
    openGraph: {
      title: `${project.title} | BrightByte Berlin`,
      description: project.subtitle,
      url: `https://brightbyte-berlin.com/projects/${id}`,
    },
  };
}

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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = getProjectBySlug(id);
  if (!p) notFound();

  const next = getNextProject(p.nextSlug);

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "var(--font-geist)" }}>
      {/* Hero — full-width browser mockup */}
      <div className="px-5 pt-10 pb-8 sm:px-8 sm:pt-14 lg:px-14 lg:pt-16 lg:pb-12 relative" style={{ background: `linear-gradient(180deg, ${C.bg} 0%, ${C.surface} 100%)` }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: `radial-gradient(ellipse at 50% 80%, ${p.accentColor}15 0%, transparent 60%)`, pointerEvents: "none" }} />
        {/* Browser mockup */}
        <div style={{ maxWidth: 1000, margin: "0 auto", borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 80px -12px rgba(20,19,15,0.18), 0 0 0 1px rgba(20,19,15,0.06)", position: "relative" }}>
          {/* Chrome bar */}
          <div style={{ padding: "10px 16px", background: "#2A2926", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#FF5C5C", "#FFC83D", "#28C940"].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <div style={{ flex: 1, marginLeft: 12, height: 24, background: "rgba(255,255,255,0.08)", borderRadius: 6, display: "flex", alignItems: "center", paddingLeft: 12 }}>
              <span className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>www.{p.slug.replace("-", "")}.de</span>
            </div>
          </div>
          {/* Mock site content */}
          {p.slug === "learnstep" ? (
            <div style={{ background: C.surface, padding: "40px 48px", minHeight: 400 }}>
              {/* Centered nav */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 32, marginBottom: 48 }}>
                <div style={{ width: 60, height: 8, borderRadius: 3, background: C.hair }} />
                <div style={{ width: 48, height: 8, borderRadius: 3, background: C.hair }} />
                <div style={{ width: 72, height: 10, borderRadius: 4, background: p.accentColor, opacity: 0.7 }} />
                <div style={{ width: 48, height: 8, borderRadius: 3, background: C.hair }} />
                <div style={{ width: 56, height: 8, borderRadius: 3, background: C.hair }} />
              </div>
              {/* Centered heading block */}
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <div style={{ width: 280, height: 14, borderRadius: 4, background: C.ink, opacity: 0.8, margin: "0 auto 10px" }} />
                <div style={{ width: 200, height: 8, borderRadius: 3, background: C.hair, margin: "0 auto" }} />
              </div>
              {/* Session cards grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ background: C.bg, borderRadius: 10, padding: "20px 16px", border: `1px solid ${C.hair}` }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${p.accentColor}${i === 1 ? "44" : "22"}`, marginBottom: 12 }} />
                    <div style={{ width: "80%", height: 8, borderRadius: 3, background: C.ink, opacity: 0.6, marginBottom: 8 }} />
                    <div style={{ width: "60%", height: 6, borderRadius: 2, background: C.hair, marginBottom: 6 }} />
                    <div style={{ width: "70%", height: 6, borderRadius: 2, background: C.hair, marginBottom: 14 }} />
                    <div style={{ width: 72, height: 24, borderRadius: 99, background: p.accentColor, opacity: i === 1 ? 0.85 : 0.4 }} />
                  </div>
                ))}
              </div>
              {/* Testimonial block */}
              <div style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${p.accentColor}33`, margin: "0 auto 10px" }} />
                <div style={{ width: "90%", height: 6, borderRadius: 2, background: C.hair, margin: "0 auto 5px" }} />
                <div style={{ width: "70%", height: 6, borderRadius: 2, background: C.hair, margin: "0 auto" }} />
              </div>
            </div>
          ) : (
            <div style={{ background: C.surface, padding: "40px 48px", minHeight: 400 }}>
              {/* Mock nav */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
                <div style={{ width: 80, height: 12, borderRadius: 4, background: C.ink, opacity: 0.8 }} />
                <div style={{ display: "flex", gap: 20 }}>
                  {[48, 36, 42, 36].map((w, i) => (
                    <div key={i} style={{ width: w, height: 8, borderRadius: 3, background: C.hair }} />
                  ))}
                </div>
              </div>
              {/* Mock hero */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
                <div>
                  <div style={{ width: "90%", height: 16, borderRadius: 4, background: C.ink, marginBottom: 10, opacity: 0.85 }} />
                  <div style={{ width: "70%", height: 16, borderRadius: 4, background: C.ink, marginBottom: 20, opacity: 0.6 }} />
                  <div style={{ width: "100%", height: 8, borderRadius: 3, background: C.hair, marginBottom: 6 }} />
                  <div style={{ width: "85%", height: 8, borderRadius: 3, background: C.hair, marginBottom: 6 }} />
                  <div style={{ width: "90%", height: 8, borderRadius: 3, background: C.hair, marginBottom: 24 }} />
                  <div style={{ width: 120, height: 36, borderRadius: 99, background: p.accentColor, opacity: 0.8 }} />
                </div>
                <div style={{ height: 220, borderRadius: 10, background: `linear-gradient(135deg, ${p.accentColor}22 0%, ${p.accentColor}44 100%)`, border: `1px solid ${C.hair}` }} />
              </div>
              {/* Mock sections */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 40 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ height: 100, borderRadius: 8, background: C.hair, opacity: 0.4 }} />
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Title below mockup */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <h1 style={{ fontSize: 48, fontWeight: 600, color: C.ink, letterSpacing: "-0.03em", marginBottom: 10 }}>{p.title}</h1>
          <p style={{ fontSize: 17, color: C.sub, maxWidth: 480, margin: "0 auto" }}>{p.subtitle}</p>
        </div>
      </div>

      {/* Meta bar */}
      <div className="px-5 py-4 sm:px-8 lg:px-14 flex items-center gap-4 sm:gap-6 flex-wrap" style={{ borderTop: `1px solid ${C.hair}`, borderBottom: `1px solid ${C.hair}` }}>
        <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{p.client}</span>
        <span style={{ width: 3, height: 3, borderRadius: "50%", background: C.subLight }} />
        <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{p.year}</span>
        <span style={{ width: 3, height: 3, borderRadius: "50%", background: C.subLight }} />
        <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{p.type}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          {p.tech.map((t) => (
            <span key={t} className="mono" style={{ fontSize: 10, color: C.accent, background: C.accentBg, padding: "4px 10px", borderRadius: 99, letterSpacing: "0.02em" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Challenge / Brief */}
      <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28" style={{ borderBottom: `1px solid ${C.hair}` }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12">
          <div>
            <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>01 · Challenge</div>
            <h2 style={{ fontSize: 36, fontWeight: 500, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              The <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>brief.</span>
            </h2>
          </div>
          <div style={{ paddingTop: 8 }}>
            <p style={{ fontSize: 17, color: C.inkSoft, lineHeight: 1.7, maxWidth: 580 }}>{p.brief}</p>
          </div>
        </div>
      </div>

      {/* Solution / Approach */}
      <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28" style={{ borderBottom: `1px solid ${C.hair}` }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12">
          <div>
            <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>02 · Solution</div>
            <h2 style={{ fontSize: 36, fontWeight: 500, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              The <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>approach.</span>
            </h2>
          </div>
          <div style={{ paddingTop: 8 }}>
            <p style={{ fontSize: 17, color: C.inkSoft, lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>{p.solution}</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {p.solutionBullets.map((b, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent, marginTop: 8, flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: C.inkSoft, lineHeight: 1.6 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28" style={{ borderBottom: `1px solid ${C.hair}` }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 48 }}>03 · Gallery</div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
          {/* Large desktop mockup */}
          <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 32px rgba(20,19,15,0.08)", border: `1px solid ${C.hair}` }}>
            <div style={{ padding: "8px 14px", background: "#F0ECE4", borderBottom: `1px solid ${C.hair}`, display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {["#FF5C5C", "#FFC83D", "#28C940"].map((c) => (
                  <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{ flex: 1, height: 16, marginLeft: 8, background: "rgba(20,19,15,0.04)", borderRadius: 4 }} />
            </div>
            <div style={{ height: 320, background: `linear-gradient(180deg, ${C.surface} 0%, ${p.accentColor}11 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "70%", height: "80%", borderRadius: 8, background: C.hair, opacity: 0.3 }} />
            </div>
          </div>
          {/* Smaller views stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Mobile mockup */}
            <div style={{ flex: 1, borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 32px rgba(20,19,15,0.08)", border: `1px solid ${C.hair}`, display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "6px 10px", background: "#F0ECE4", borderBottom: `1px solid ${C.hair}`, display: "flex", justifyContent: "center" }}>
                <div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(20,19,15,0.15)" }} />
              </div>
              <div style={{ flex: 1, background: `linear-gradient(180deg, ${C.surface} 0%, ${p.accentColor}11 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "60%", height: "70%", borderRadius: 6, background: C.hair, opacity: 0.3 }} />
              </div>
            </div>
            {/* Detail crop */}
            <div style={{ flex: 1, borderRadius: 12, background: `linear-gradient(135deg, ${p.accentColor}18 0%, ${p.accentColor}33 100%)`, border: `1px solid ${C.hair}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.06em" }}>DETAIL VIEW</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28" style={{ borderBottom: `1px solid ${C.hair}` }}>
        <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 48 }}>04 · Results</div>
        {/* Metric cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 64 }}>
          {p.metrics.map((m, i) => (
            <div key={i} style={{ background: C.surface, borderRadius: 12, padding: "28px 24px", border: `1px solid ${C.hair}`, borderTop: "2px solid rgba(107,57,119,0.15)", textAlign: "center" }}>
              <div style={{ fontSize: 40, fontWeight: 700, color: C.ink, letterSpacing: "-0.03em", marginBottom: 6 }}>{m.value}</div>
              <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.06em", marginBottom: 8 }}>{m.label}</div>
              <span className="mono" style={{ fontSize: 11, fontWeight: 600, color: "#16A34A", background: "rgba(22,163,74,0.1)", padding: "3px 10px", borderRadius: 99 }}>{m.delta}</span>
            </div>
          ))}
        </div>
        {/* Client quote */}
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <p className="serif" style={{ fontSize: 22, fontStyle: "italic", color: C.ink, lineHeight: 1.6, marginBottom: 16 }}>{p.quote}</p>
          <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>— {p.quoteAuthor}</span>
        </div>
      </div>

      {/* Next project */}
      <Link href={`/projects/${next.slug}`} style={{ textDecoration: "none" }}>
        <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20" style={{ background: C.ink }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "rgba(251,248,241,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Next project</div>
              <div style={{ fontSize: 32, fontWeight: 600, color: C.surface, letterSpacing: "-0.02em" }}>{next.title}</div>
              <div style={{ fontSize: 14, color: "rgba(251,248,241,0.6)", marginTop: 6 }}>{next.subtitle}</div>
            </div>
            <div style={{ width: 180, height: 100, borderRadius: 10, background: `linear-gradient(135deg, ${next.accentColor}33 0%, ${next.accentColor}55 100%)`, border: "1px solid rgba(251,248,241,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 28, color: C.surface, fontWeight: 300 }}>→</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
