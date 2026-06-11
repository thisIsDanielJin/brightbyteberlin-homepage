"use client";

import { Reveal } from "@/components/redesign/Reveal";
import { MANIFESTO } from "@/data/content";

/**
 * Editorial Manifesto — quiet, type-driven. No grid borders.
 * Each principle is a numbered editorial paragraph, hairline divider only.
 */
export function ManifestoEditorial() {
  return (
    <section
      id="manifesto"
      className="section-padding relative"
      style={{ borderTop: "1px solid var(--color-hair)" }}
    >
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Left intro */}
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">Manifesto / Studio principles</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display mt-8 text-[clamp(2.25rem,4vw,3.5rem)]">
                How we{" "}
                <span className="display-em">ship.</span>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p
                className="mt-6 max-w-sm text-[16px] leading-[1.6]"
                style={{ color: "var(--color-ink-soft)" }}
              >
                Four working principles that shape every BrightByte project —
                from the first kickoff call to the day we hand over the keys.
              </p>
            </Reveal>
          </div>

          {/* Right list */}
          <ol className="md:col-span-7 md:col-start-6 space-y-px">
            {MANIFESTO.map((m, i) => (
              <Reveal key={m.n} delay={i * 90}>
                <li
                  className="grid grid-cols-12 items-start gap-6 py-8"
                  style={{
                    borderTop: "1px solid var(--color-hair)",
                    ...(i === MANIFESTO.length - 1
                      ? { borderBottom: "1px solid var(--color-hair)" }
                      : {}),
                  }}
                >
                  <span
                    className="col-span-2 mono pt-1 text-[11px] uppercase tracking-[0.22em]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {m.n}
                  </span>
                  <div className="col-span-10">
                    <h3
                      className="display text-[clamp(1.4rem,2.4vw,2rem)]"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {m.t}
                    </h3>
                    <p
                      className="mt-3 max-w-xl text-[16px] leading-[1.65]"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      {m.d}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
