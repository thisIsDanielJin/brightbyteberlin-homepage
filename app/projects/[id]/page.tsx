import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { HiCheckCircle, HiStar, HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal/ScrollReveal";
import { projects, getProjectById, getAdjacentProjects } from "@/data/projects";
import { LazyGrainient } from "@/components/reactbits/Grainient/LazyGrainient";

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};

  return {
    title: `${project.title} | BrightByte Berlin`,
    description: project.description,
    alternates: { canonical: `/projects/${id}` },
    openGraph: {
      title: `${project.title} | BrightByte Berlin`,
      description: project.description,
      url: `https://brightbyte-berlin.com/projects/${id}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Gradient map (stable by id)
// ---------------------------------------------------------------------------

const gradientMap: Record<string, string> = {
  "saas-dashboard": "from-bright/20 via-bright/10 to-electric/20",
  "ecommerce-platform": "from-electric/20 via-bright/5 to-bright/20",
  "restaurant-website": "from-bright/10 via-electric/10 to-bright/20",
  "portfolio-site": "from-electric/15 via-bright/10 to-electric/15",
};

const projectNumber: Record<string, number> = {
  "saas-dashboard": 1,
  "ecommerce-platform": 2,
  "restaurant-website": 3,
  "portfolio-site": 4,
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(id);
  const gradient = gradientMap[id] ?? "from-bright/15 via-electric/10 to-bright/15";
  const number = projectNumber[id] ?? 0;

  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-20 overflow-hidden">
      {/* ---- Grainient background — desktop only ---- */}
      <div className="hidden md:block absolute inset-0 opacity-40">
        <LazyGrainient
          color1="#FBBF24"
          color2="#F59E0B"
          color3="#0a0a0a"
          colorBalance={-0.15}
          centerX={0.3}
          centerY={0.0}
          zoom={0.9}
          timeSpeed={0.12}
          grainAmount={0.06}
          contrast={1.2}
          saturation={0.85}
          warpStrength={1.0}
          warpAmplitude={50}
          warpFrequency={5.0}
        />
      </div>

      {/* ---- CSS fallback for mobile ---- */}
      <div
        className="md:hidden absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 30% 0%, rgba(251, 191, 36, 0.35) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 60%),
            #0a0a0a
          `,
        }}
      />

      {/* ---- Dark overlay for text readability ---- */}
      <div className="absolute inset-0 bg-bg-primary/75 pointer-events-none" />

      <Container size="md" className="relative z-10">
        {/* ---- Back link ---- */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-bright transition-colors mb-8"
        >
          &larr; Back to Projects
        </Link>

        {/* ---- Hero ---- */}
        <ScrollReveal aboveFold>
          <div
            className={`relative w-full aspect-[21/9] sm:aspect-[21/9] rounded-2xl bg-gradient-to-br ${gradient} mb-10 overflow-hidden`}
          >
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Centered project number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-bg-primary/50 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <span className="text-3xl sm:text-4xl font-bold text-bright">
                  {number}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-text-secondary mb-6 max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-16">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/8 text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* ---- Scope bar ---- */}
        {project.scope && project.scope.length > 0 && (
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-text-muted mb-4">
                What was delivered
              </p>
              <div className="flex flex-wrap gap-3">
                {project.scope.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/8 text-sm text-text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ---- Long description ---- */}
        {project.longDescription && (
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-text-muted mb-4">
                About This Project
              </p>
              <div className="space-y-4 leading-relaxed max-w-3xl">
                {project.longDescription.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-text-primary text-lg"
                        : "text-text-secondary"
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ---- Highlights card ---- */}
        {project.highlights && project.highlights.length > 0 && (
          <ScrollReveal>
            <div className="bg-bg-card rounded-2xl border-[1.5px] border-white/8 p-8 mb-16 relative overflow-hidden">
              {/* Left accent */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-bright to-electric" />
              <h2 className="text-xl font-bold text-bright mb-6">
                Key Results
              </h2>
              <ul className="space-y-4">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-bright mt-0.5 shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* ---- Testimonial ---- */}
        {project.testimonial && (
          <ScrollReveal>
            <div className="bg-bg-secondary rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
              {/* Decorative open quote */}
              <span className="absolute -top-2 left-6 text-[8rem] leading-none text-bright/10 font-serif select-none pointer-events-none">
                &ldquo;
              </span>

              <div className="relative">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl italic text-text-primary leading-relaxed mb-6">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  {/* Initial-avatar circle */}
                  <div className="w-10 h-10 rounded-full bg-bright/20 flex items-center justify-center text-bright font-bold text-sm">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {project.testimonial.author}
                    </p>
                    <p className="text-xs text-text-muted">
                      {project.testimonial.role}
                      {project.testimonial.company &&
                        ` — ${project.testimonial.company}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ---- CTA ---- */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
              Want results like these?
            </h2>
            <p className="text-text-secondary mb-8">
              Let&apos;s talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild>
                <Link href="/#contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:hello@brightbyte-berlin.com">Send an Email</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* ---- Prev / Next nav ---- */}
        <ScrollReveal>
          <nav className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
            {prev ? (
              <Link
                href={`/projects/${prev.id}`}
                className="group flex flex-col gap-1 rounded-xl border border-white/8 p-4 hover:border-bright/30 hover:bg-white/[0.02] transition-all"
              >
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <HiArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  Previous
                </span>
                <span className="text-sm font-medium text-text-primary group-hover:text-bright transition-colors truncate">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link
                href={`/projects/${next.id}`}
                className="group flex flex-col items-end gap-1 rounded-xl border border-white/8 p-4 hover:border-bright/30 hover:bg-white/[0.02] transition-all"
              >
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  Next
                  <HiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-sm font-medium text-text-primary group-hover:text-bright transition-colors truncate">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </ScrollReveal>
      </Container>
    </div>
  );
}
