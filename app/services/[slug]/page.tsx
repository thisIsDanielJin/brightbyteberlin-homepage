import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES_DETAIL } from "@/data/content";
import { ServiceImage } from "@/components/ui/ServiceImage/ServiceImage";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  hair: "rgba(20,19,15,0.08)",
};

export function generateStaticParams() {
  return SERVICES_DETAIL.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAIL.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | BrightByte Berlin`,
    description: service.value,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DETAIL.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "var(--font-geist)", minHeight: "100vh" }}>
      {/* Hero */}
      <div className="px-5 pt-12 pb-10 sm:px-8 sm:pt-16 lg:px-14 lg:pt-20 lg:pb-16">
        <Link href="/#services" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: C.sub, textDecoration: "none", marginBottom: 32 }}>
          ← All services
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-center mt-8">
          <div>
            <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
              {service.timeline} · {service.pricing}
            </div>
            <h1 style={{ fontSize: 48, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 20 }}>
              {service.title}
            </h1>
            <p style={{ fontSize: 18, color: C.sub, lineHeight: 1.6, maxWidth: 520 }}>
              {service.value}
            </p>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", height: 200 }}>
            <ServiceImage kind={service.img} />
          </div>
        </div>
      </div>

      {/* What you get */}
      <div className="px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16" style={{ background: C.surface, borderTop: `1px solid ${C.hair}`, borderBottom: `1px solid ${C.hair}` }}>
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 lg:gap-12">
          <div>
            <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              What you get
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-8">
            {service.deliverables.map((d) => (
              <div key={d} style={{ display: "flex", alignItems: "baseline", gap: 10, fontSize: 14, color: C.ink, lineHeight: 1.6 }}>
                <span style={{ color: C.accent, fontWeight: 600, flexShrink: 0 }}>✓</span>
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Outcomes */}
      <div className="px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 lg:gap-12">
          <div>
            <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              What changes
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {service.outcomes.map((o) => (
              <div key={o} style={{ display: "flex", alignItems: "baseline", gap: 12, fontSize: 16, color: C.ink, lineHeight: 1.6, fontWeight: 500 }}>
                <span style={{ color: C.accentSoft, fontSize: 20, flexShrink: 0 }}>→</span>
                {o}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ideal for */}
      <div className="px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16" style={{ background: C.surface, borderTop: `1px solid ${C.hair}`, borderBottom: `1px solid ${C.hair}` }}>
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 lg:gap-12">
          <div>
            <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Ideal for
            </div>
          </div>
          <p style={{ fontSize: 16, color: C.inkSoft, lineHeight: 1.7, maxWidth: 600 }}>
            {service.idealFor}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20 text-center">
        <h2 style={{ fontSize: 32, fontWeight: 500, color: C.ink, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Ready to <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>start?</span>
        </h2>
        <p style={{ fontSize: 15, color: C.sub, marginBottom: 32, maxWidth: 400, margin: "0 auto 32px" }}>
          Tell me what you&apos;re building. I reply within 24 hours with questions or a clear yes.
        </p>
        <Link href="/#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: C.ink, color: C.surface, borderRadius: 99, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>
          Start a project <span style={{ color: C.accent }}>→</span>
        </Link>
      </div>
    </div>
  );
}
