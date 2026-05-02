"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { EChartsPie } from "./EChartsPie";

const EChartsBar = dynamic(
  () => import("./EChartsBar").then((mod) => mod.EChartsBar),
  { ssr: false }
);

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  sub: "#6B665C",
  subLight: "#9A958A",
  accent: "#6B3977",
  hair: "rgba(20,19,15,0.08)",
  green: "#16A34A",
};

const ACTIVITY_ITEMS = [
  { icon: "●", color: "#6B3977", label: "New lead received", time: "2m ago" },
  { icon: "↑", color: "#16A34A", label: "Traffic +42%", time: "1h ago" },
  { icon: "↑", color: "#16A34A", label: "Revenue +€2.4k", time: "3h ago" },
  { icon: "✓", color: "#16A34A", label: "Deploy successful", time: "5h ago" },
  { icon: "●", color: "#6B3977", label: "Form submission", time: "8h ago" },
];

export function HeroMockup({ phase }: { phase: number }) {
  const [visibleItems, setVisibleItems] = useState(0);
  const activityStarted = useRef(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setVisibleItems(ACTIVITY_ITEMS.length);
      return;
    }
    if (phase < 2 || activityStarted.current) return;
    activityStarted.current = true;
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setVisibleItems(count);
      if (count >= ACTIVITY_ITEMS.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, [phase, prefersReduced]);
  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        border: `1px solid ${C.hair}`,
        boxShadow: phase >= 4 ? "0 32px 64px -24px rgba(20,19,15,0.18), 0 0 0 1px rgba(20,19,15,0.04)" : "0 16px 40px -16px rgba(20,19,15,0.12)",
        transform: phase >= 1 ? "scale(1)" : "scale(0.96)",
        opacity: phase >= 1 ? 1 : 0,
        transition: prefersReduced ? "none" : "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Chrome bar */}
      <div style={{ background: "#2A2926", padding: "11px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 5 }}>
            {["#FF5C5C", "#FFC83D", "#28C940"].map((c) => (
              <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div style={{ marginLeft: 12, padding: "4px 14px", background: "rgba(251,248,241,0.08)", borderRadius: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", border: "1.5px solid rgba(251,248,241,0.3)" }} />
            <span className="mono" style={{ fontSize: 10, color: "rgba(251,248,241,0.5)", letterSpacing: "0.04em" }}>client-site-preview.de</span>
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div style={{ background: C.surface, padding: 0, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {/* 4-column grid */}
        <div style={{ padding: "14px 20px 16px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 0.85fr", gap: 14, opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? "translateY(0)" : "translateY(12px)", transition: prefersReduced ? "none" : "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}>

          {/* Left — Mini site preview + KPIs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            {/* Mini site preview */}
            <div style={{ flex: "0 0 55%", background: C.bg, borderRadius: 10, border: `1px solid ${C.hair}`, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {/* Mini chrome */}
              <div style={{ padding: "6px 10px", background: "#F0ECE4", borderBottom: `1px solid ${C.hair}`, display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ display: "flex", gap: 3 }}>
                  {["#FF5C5C", "#FFC83D", "#28C940"].map((c) => (
                    <div key={c} style={{ width: 5, height: 5, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{ flex: 1, marginLeft: 6, height: 8, background: "rgba(20,19,15,0.06)", borderRadius: 4, display: "flex", alignItems: "center", paddingLeft: 4 }}>
                  <span className="mono" style={{ fontSize: 6, color: C.subLight, letterSpacing: "0.02em" }}>client-site-preview.de</span>
                </div>
              </div>
              {/* Mini page content */}
              <div style={{ padding: "8px 12px", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div style={{ width: 32, height: 5, borderRadius: 2, background: C.ink }} />
                  <div style={{ display: "flex", gap: 6 }}>
                    {[16, 12, 14].map((w, i) => (
                      <div key={i} style={{ width: w, height: 3, borderRadius: 1, background: C.hair }} />
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <div style={{ width: "80%", height: 6, borderRadius: 2, background: C.ink, marginBottom: 3, opacity: 0.8 }} />
                  <div style={{ width: "55%", height: 6, borderRadius: 2, background: C.ink, marginBottom: 6, opacity: 0.6 }} />
                  <div style={{ width: "90%", height: 3, borderRadius: 1, background: C.hair, marginBottom: 2 }} />
                  <div style={{ width: "75%", height: 3, borderRadius: 1, background: C.hair, marginBottom: 6 }} />
                  <div style={{ width: 44, height: 12, borderRadius: 99, background: C.accent, opacity: 0.8 }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginTop: 6 }}>
                  <div style={{ height: 20, borderRadius: 4, background: C.hair, opacity: 0.5 }} />
                  <div style={{ height: 20, borderRadius: 4, background: C.hair, opacity: 0.5 }} />
                </div>
              </div>
              {/* Status badge */}
              <div style={{ padding: "5px 10px", borderTop: `1px solid ${C.hair}`, display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#28A745", animation: "pulse 2s ease-in-out infinite" }} />
                <span className="mono" style={{ fontSize: 7, color: C.sub, letterSpacing: "0.04em" }}>LIVE · 12 visitors</span>
              </div>
            </div>
            {/* KPI cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
              {([["SESSIONS", "12.4K", "+18%"], ["LEADS", "47", "+34%"], ["SPEED", "98", "/100"]] as const).map(([label, val, delta]) => (
                <div key={label} style={{ background: C.bg, borderRadius: 6, padding: "8px 6px", border: `1px solid ${C.hair}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
                  <div className="mono" style={{ fontSize: 9, color: C.sub, letterSpacing: "0.06em", fontWeight: 500 }}>{label}</div>
                  <span style={{ fontSize: 20, fontWeight: 700, color: C.ink, letterSpacing: "-0.02em" }}>{val}</span>
                  <span className="mono" style={{ fontSize: 10, fontWeight: 600, color: "#16A34A", background: "rgba(22,163,74,0.1)", padding: "2px 6px", borderRadius: 3 }}>{delta}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Middle — Donut chart */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ background: C.bg, borderRadius: 8, padding: "6px 8px 4px", border: `1px solid ${C.hair}`, display: "flex", flexDirection: "column" }}
          >
            <EChartsPie />
          </motion.div>

          {/* Right — Bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ background: C.bg, borderRadius: 8, padding: "6px 8px 4px", border: `1px solid ${C.hair}`, display: "flex", flexDirection: "column" }}
          >
            <EChartsBar />
          </motion.div>

          {/* Activity feed */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ background: C.bg, borderRadius: 8, padding: "12px 10px 8px", border: `1px solid ${C.hair}`, display: "flex", flexDirection: "column", overflow: "hidden" }}
          >
            <div className="mono" style={{ fontSize: 9, color: C.sub, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10, fontWeight: 600 }}>Activity</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
              {ACTIVITY_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "center", gap: 7, padding: "6px 8px",
                    background: C.surface, borderRadius: 6, border: `1px solid ${C.hair}`,
                    opacity: i < visibleItems ? 1 : 0,
                    transform: i < visibleItems ? "translateY(0)" : "translateY(6px)",
                    transition: prefersReduced ? "none" : `all 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s`,
                  }}
                >
                  <span style={{ fontSize: 9, color: item.color, flexShrink: 0 }}>{item.icon}</span>
                  <span className="mono" style={{ fontSize: 10, color: C.ink, letterSpacing: "0.01em", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.label}</span>
                  <span className="mono" style={{ fontSize: 8, color: C.subLight, flexShrink: 0 }}>{item.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Keyframe for pulse animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%, 100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(0.75); }
        }
      ` }} />
    </div>
  );
}
