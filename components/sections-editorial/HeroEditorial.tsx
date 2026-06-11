"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/redesign/Reveal";
import { ShaderBoundary } from "@/components/redesign/ShaderBoundary";
import { VisibleOnScreen } from "@/components/redesign/VisibleOnScreen";

const Strands = dynamic(() => import("@/components/reactbits/Strands"), {
  ssr: false,
});

/**
 * Editorial Hero — 2-col layout.
 *  Left: eyebrow / Fraunces serif headline (with italic accent in plum) /
 *        18px sub copy / single CTA + quiet secondary / signal line.
 *  Right: Strands shader inside a contained card, framed like an art piece.
 */
export function HeroEditorial() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-12 px-6 pb-24 pt-32 md:grid-cols-12 md:gap-10 md:pb-32 md:pt-40 lg:px-12">
        {/* Left column — copy */}
        <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow">BrightByte / Berlin · Studio</p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="display mt-8 text-[clamp(3rem,5.6vw,5.4rem)]">
              Websites that{" "}
              <span className="display-em">get you</span>{" "}
              found.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p
              className="mt-8 max-w-md text-[18px] leading-[1.6]"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Code-built websites for small businesses ready to grow. Shipped
              in weeks. Owned by you on day one. Berlin-based, working
              worldwide.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a href="#contact" className="btn-plum">
                Start a project
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </a>
              <a href="#work" className="btn-quiet">
                View work
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div
              className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 mono text-[11px] uppercase tracking-[0.18em]"
              style={{ color: "var(--color-sub)" }}
            >
              <span className="inline-flex items-center gap-2">
                <span
                  className="size-1.5 rounded-full"
                  style={{ background: "var(--color-accent)" }}
                />
                Booking · Q3 2026
              </span>
              <span>Berlin · CET</span>
              <span>Reply in 24h</span>
            </div>
          </Reveal>
        </div>

        {/* Right column — Strands as contained art object */}
        <div className="md:col-span-7 lg:col-span-7">
          <Reveal delay={200}>
            <div
              className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6] lg:aspect-[1/1]"
              style={{
                background: "var(--color-ink)",
                borderRadius: "2px",
                boxShadow:
                  "0 1px 0 var(--color-hair) inset, 0 30px 60px -20px rgba(20,19,15,0.18)",
              }}
            >
              <VisibleOnScreen
                rootMargin="200px"
                fallback={
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_55%,rgba(196,173,207,0.55),transparent_70%)]" />
                }
              >
                <ShaderBoundary
                  fallback={
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_55%,rgba(196,173,207,0.55),transparent_70%)]" />
                  }
                >
                  <Strands
                    colors={["#6B3977", "#C4ADCF", "#E9D7B7", "#F5F1E8"]}
                    count={4}
                    speed={0.45}
                    amplitude={1}
                    waviness={1.1}
                    thickness={0.7}
                    glow={2.4}
                    taper={3.2}
                    spread={1}
                    intensity={0.7}
                    saturation={1.3}
                    opacity={1}
                    scale={1.5}
                  />
                </ShaderBoundary>
              </VisibleOnScreen>

              {/* Mono caption like an art print label */}
              <div
                className="absolute bottom-5 left-5 right-5 flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em]"
                style={{ color: "rgba(245,241,232,0.6)" }}
              >
                <span>BrightByte / Studio Strands</span>
                <span>2026 · No 01</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
