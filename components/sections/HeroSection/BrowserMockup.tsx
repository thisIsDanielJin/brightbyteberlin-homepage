"use client";

import { motion } from "framer-motion";

function BrowserMockup() {
  const d = 0.8; // base delay for stagger

  return (
    <div className="relative w-full flex items-center justify-center py-8">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-bright/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -4 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-lg"
        style={{ perspective: "1200px" }}
      >
        {/* Floating animation wrapper */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d", transform: "rotateY(-8deg) rotateX(4deg)" }}
        >
          {/* Browser shadow — layered for depth */}
          <div className="absolute -inset-6 bg-bright/[0.09] rounded-3xl blur-3xl" />
          <div className="absolute -inset-10 bg-bright/[0.04] rounded-[2rem] blur-[60px]" />
          {/* Animated glow border ring */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-bright/25 via-bright/[0.06] to-bright/15 pointer-events-none"
          />

          <div className="relative rounded-2xl border border-white/[0.10] overflow-hidden bg-[#0C0C0E] shadow-2xl shadow-black/70" style={{ boxShadow: "0 25px 60px -12px rgba(0,0,0,0.7), 0 0 40px rgba(251,191,36,0.06)" }}>
            {/* Shine sweep — periodic gleam across the browser */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "200%", opacity: [0, 0.18, 0] }}
              transition={{ duration: 1.8, delay: d + 2.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 6 }}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
              }}
            />

            {/* Browser chrome */}
            <div className="flex items-center px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.05] max-w-[260px] mx-auto">
                  <svg className="w-2.5 h-2.5 text-green-400/70 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] text-text-muted/70 font-mono truncate">your-brand.com</span>
                </div>
              </div>
            </div>

            {/* Mini website content */}
            <div className="relative">
              {/* Mini site nav */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: d }}
                className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.03]"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-bright/40" />
                  <div className="h-2 w-14 rounded-full bg-white/15" />
                </div>
                <div className="flex gap-3">
                  <div className="h-1.5 w-8 rounded-full bg-white/8" />
                  <div className="h-1.5 w-8 rounded-full bg-white/8" />
                  <div className="h-1.5 w-8 rounded-full bg-white/8" />
                </div>
                <div className="h-5 w-14 rounded-md bg-white/[0.08]" />
              </motion.div>

              {/* Hero section of mock site */}
              <div className="px-5 pt-5 pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: d + 0.15 }}
                  className="mb-4"
                >
                  <div className="h-1.5 w-20 rounded-full bg-bright/25 mb-3" />
                  <div className="space-y-1.5 mb-3">
                    <div className="h-4.5 w-60 rounded bg-white/20" />
                    <div className="h-4.5 w-40 rounded bg-white/12" />
                  </div>
                  <div className="h-1.5 w-44 rounded-full bg-white/[0.06]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: d + 0.35 }}
                  className="flex gap-2 mb-5"
                >
                  <div className="h-7 w-24 rounded-lg bg-white/[0.10] border border-white/[0.08] flex items-center justify-center">
                    <div className="h-1.5 w-14 rounded-full bg-white/15" />
                  </div>
                  <div className="h-7 w-20 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center">
                    <div className="h-1.5 w-10 rounded-full bg-white/15" />
                  </div>
                </motion.div>

                {/* Image/visual area */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: d + 0.55 }}
                  className="h-28 rounded-xl bg-gradient-to-br from-bright/[0.06] via-white/[0.02] to-electric/[0.04] border border-white/[0.04] relative overflow-hidden px-4 py-3"
                >
                  {/* Mini chart header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-1.5 w-14 rounded-full bg-white/10" />
                    <div className="text-[8px] text-bright/60 font-mono">+27%</div>
                  </div>
                  {/* Mini bar chart */}
                  <div className="flex items-end gap-[4px] h-14">
                    {[35, 50, 40, 65, 55, 80, 70, 90, 75, 95, 85, 100].map((h, i, arr) => {
                      const t = i / (arr.length - 1);
                      const r = Math.round(255 * (0.08 + t * 0.92));
                      const g = Math.round(255 * (0.08 + t * 0.67));
                      const b = Math.round(255 * (0.08 + t * 0.06));
                      const a = 0.12 + t * 0.45;
                      return (
                        <motion.div
                          key={i}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.4, delay: d + 0.7 + i * 0.04 }}
                          className="flex-1 rounded-sm origin-bottom"
                          style={{
                            height: `${h}%`,
                            background: `rgba(${r}, ${g}, ${b}, ${a})`,
                          }}
                        />
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: d + 0.75 }}
                className="px-5 pb-3 flex gap-4"
              >
                {["24%", "1.2k", "98%"].map((val, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div className="text-[11px] font-bold text-bright/70">{val}</div>
                    <div className="h-1 w-8 mx-auto rounded-full bg-white/6 mt-0.5" />
                  </div>
                ))}
              </motion.div>

              {/* Card grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: d + 0.9 }}
                className="px-5 pb-5 grid grid-cols-3 gap-2"
              >
                {[
                  { color: "bg-bright/12", border: "border-bright/10" },
                  { color: "bg-white/[0.03]", border: "border-white/[0.05]" },
                  { color: "bg-bright/8", border: "border-bright/[0.06]" },
                ].map((card, i) => (
                  <div
                    key={i}
                    className={`h-[56px] rounded-lg border ${card.border} ${card.color} p-2.5 flex flex-col justify-between`}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded bg-white/[0.08]" />
                      <div className="h-1 w-8 rounded-full bg-white/[0.08]" />
                    </div>
                    <div className="flex gap-1">
                      <div className="h-1 flex-1 rounded-full bg-bright/20" />
                      <div className="h-1 flex-[0.6] rounded-full bg-white/[0.04]" />
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Animated cursor — browses through the page */}
              <motion.div
                animate={{
                  x:       [280, 200, 200, 60,  60,  60, 200, 200, 200, 60,  60,  60,  280],
                  y:       [30,  38,  38,  100, 100, 100, 190, 190, 190, 275, 275, 275, 30],
                  opacity: [0,   1,   1,   1,   1,   1,  1,   1,   1,   1,   1,   0.5, 0],
                }}
                transition={{
                  duration: 8,
                  delay: d + 1.2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                  times: [0, 0.08, 0.12, 0.22, 0.26, 0.30, 0.45, 0.49, 0.53, 0.68, 0.72, 0.90, 1],
                }}
                className="absolute pointer-events-none z-10"
              >
                <svg width="18" height="22" viewBox="0 0 16 20" fill="none">
                  <path d="M1 1L1 14.5L4.5 11L8.5 18L11 17L7 10L12 10L1 1Z" fill="white" fillOpacity="0.9" stroke="#09090B" strokeWidth="1.2" />
                </svg>
                {[
                  { delay: d + 1.2 + 8 * 0.12 },
                  { delay: d + 1.2 + 8 * 0.26 },
                  { delay: d + 1.2 + 8 * 0.49 },
                  { delay: d + 1.2 + 8 * 0.72 },
                ].map((click, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [0, 1.5, 2.5],
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      delay: click.delay,
                      repeat: Infinity,
                      repeatDelay: 9.5,
                    }}
                    className="absolute top-0 left-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bright/60"
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Performance badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: d + 1.3, type: "spring", stiffness: 300 }}
            className="absolute -right-6 top-20 px-5 py-3.5 rounded-xl bg-[#111113] border border-white/[0.08] shadow-xl shadow-black/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-text-muted uppercase tracking-wider font-medium">Speed</div>
                <div className="text-2xl font-bold text-green-400 leading-none">98</div>
              </div>
            </div>
          </motion.div>

          {/* SEO badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: d + 1.6, type: "spring", stiffness: 300 }}
            className="absolute -left-6 bottom-24 px-5 py-3.5 rounded-xl bg-[#111113] border border-white/[0.08] shadow-xl shadow-black/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-bright/10 border border-bright/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-text-muted uppercase tracking-wider font-medium">SEO</div>
                <div className="text-2xl font-bold text-bright leading-none">100</div>
              </div>
            </div>
          </motion.div>

          {/* Live notification toast */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: d + 1.9, ease: "easeOut" }}
            className="absolute -right-6 bottom-8 rounded-2xl bg-[#111113] border border-bright/25 shadow-2xl shadow-bright/[0.08] overflow-hidden"
          >
            <div className="absolute -inset-4 bg-bright/[0.04] rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative flex items-center gap-3.5 pl-4 pr-6 py-4">
              <div className="w-11 h-11 rounded-xl bg-bright/15 border border-bright/25 flex items-center justify-center shrink-0">
                <svg className="w-5.5 h-5.5 text-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <div className="text-[15px] font-semibold text-text-primary leading-tight">New lead received</div>
                <div className="text-[11px] text-text-muted mt-0.5">via contact form, just now</div>
              </div>
            </div>
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 20, delay: d + 2.2, ease: "linear" }}
              className="h-0.5 bg-bright/60 origin-left"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BrowserMockup;
