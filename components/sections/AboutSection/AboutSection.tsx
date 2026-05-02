"use client";

import Image from "next/image";

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
    <section id="about" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28" style={{ background: C.surface, borderBottom: `1px solid ${C.hair}` }}>
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr_180px] gap-8 lg:gap-12 items-start">
        <div>
          <div className="aspect-square rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #EDE5F0 0%, #C4ADCF 60%, #6B3977 100%)" }}>
            <Image
              src="/daniel-profile.jpg"
              alt="Daniel Jin Wodke"
              fill
              sizes="300px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div>
          <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>05 · About</div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium tracking-tight leading-tight mb-5 lg:mb-6" style={{ color: C.ink }}>
            Hi, I&apos;m <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>Daniel.</span>
          </h2>
          <div className="text-[15px] lg:text-base leading-[1.75] max-w-[560px]" style={{ color: C.inkSoft }}>
            <p className="mb-3">I studied CS at TU Berlin and Seoul National University, then spent six years building for agencies and enterprise clients at SAP.</p>
            <p className="mb-3">In 2025 I started Brightbyte because <span style={{ color: C.ink, fontWeight: 500 }}>small businesses deserve the same quality code the big companies get</span>, without the big company overhead.</p>
            <p>I work in German and English, take three to four clients a quarter, and reply within a day. If we work together, you talk to me, the person writing the code.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:pt-9 lg:border-l lg:pl-8" style={{ borderColor: C.hair }}>
          {([["Based in", "Berlin · CET"], ["Languages", "EN · DE"], ["Background", "6 yrs agencies + SAP"], ["Founded", "2025"]] as const).map(([k, v]) => (
            <div key={k}>
              <div className="mono" style={{ fontSize: 9, color: C.sub, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{k}</div>
              <div style={{ fontSize: 14, color: C.ink, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
