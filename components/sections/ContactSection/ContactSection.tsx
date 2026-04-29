"use client";

import { useState, useRef } from "react";
import { validateContactForm, type ValidationErrors } from "@/lib/validation";
import type { ContactFormData, ContactFormState } from "@/types";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  inkSoft: "#3A3833",
  sub: "#6B665C",
  subLight: "#9A958A",
  accent: "#6B3977",
  accentSoft: "#C4ADCF",
  hair: "rgba(20,19,15,0.08)",
};

const PROJECT_TYPES = ["Landing page", "Multi-page site", "Web app / MVP", "AI integration", "Not sure yet"];

const initialFormData: ContactFormData = { name: "", email: "", message: "" };

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [state, setState] = useState<ContactFormState>("idle");
  const [serverError, setServerError] = useState("");
  const [selectedType, setSelectedType] = useState(1);
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const validationErrors = validateContactForm(formData);
    if (validationErrors) { setErrors(validationErrors); return; }
    setErrors({});
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website: honeypotRef.current?.value || "" }),
      });
      if (!res.ok) { const data = await res.json(); throw new Error(data.error || "Something went wrong."); }
      setState("success");
      setFormData(initialFormData);
      setTimeout(() => setState("idle"), 5000);
    } catch (err) {
      setState("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <section id="contact" style={{ padding: "112px 56px", background: `linear-gradient(180deg, ${C.bg} 0%, #F0ECE2 100%)`, borderBottom: `1px solid ${C.hair}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "flex-start" }}>
        {/* Left — context + timeline */}
        <div>
          <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>08 · Contact</div>
          <h2 style={{ fontSize: 64, fontWeight: 500, color: C.ink, letterSpacing: "-0.03em", lineHeight: 0.98, marginBottom: 32 }}>
            Let&apos;s build<br />
            <span className="serif" style={{ fontStyle: "italic", fontWeight: 400, color: C.accent }}>something together.</span>
          </h2>
          <p style={{ fontSize: 17, color: C.sub, lineHeight: 1.6, maxWidth: 400, marginBottom: 36 }}>
            Send a brief — what you&apos;re trying to do, what&apos;s in the way, when you&apos;d like to launch. I&apos;ll reply within 24 hours.
          </p>
          <div>
            <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 20 }}>What happens next</div>
            <div style={{ position: "relative", paddingLeft: 24 }}>
              <div style={{ position: "absolute", left: 5, top: 6, bottom: 6, width: 1.5, background: C.accentSoft, borderRadius: 1 }} />
              {([["24H", "I read your brief and reply with a few questions or a quick yes/no."], ["DAY 2", "We have a 30-min call to align on scope and timeline."], ["DAY 3", "You get a fixed-price proposal in your inbox — no obligation."]] as const).map(([when, what], i, arr) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < arr.length - 1 ? 16 : 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: -24, top: 5, width: 12, height: 12, borderRadius: "50%", background: C.surface, border: `2px solid ${C.accent}`, zIndex: 1 }} />
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                    <span className="mono" style={{ fontSize: 11, fontWeight: 600, color: C.accent, letterSpacing: "0.04em", flexShrink: 0, minWidth: 42 }}>{when}</span>
                    <span style={{ fontSize: 14, color: C.inkSoft, lineHeight: 1.5 }}>{what}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div style={{ background: C.surface, border: `1px solid ${C.hair}`, borderRadius: 18, padding: 40, boxShadow: "0 30px 60px -40px rgba(20,19,15,0.18)" }}>
          {state === "success" ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ width: 48, height: 48, margin: "0 auto 16px", borderRadius: "50%", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontSize: 22 }}>✓</span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: C.ink, marginBottom: 8 }}>Message sent!</h3>
              <p style={{ fontSize: 14, color: C.sub }}>I&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <div style={{ position: "absolute", left: -9999 }} aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
              </div>

              <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Project brief</div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                <div>
                  <label className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase", display: "block" }}>Your name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Maria Becker" style={{ padding: "12px 14px", background: C.bg, border: `1px solid ${errors.name ? "#e53e3e" : C.hair}`, borderRadius: 8, fontSize: 14, color: C.ink, width: "100%", outline: "none" }} />
                  {errors.name && <p style={{ fontSize: 12, color: "#e53e3e", marginTop: 4 }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase", display: "block" }}>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="maria@yourdomain.de" style={{ padding: "12px 14px", background: C.bg, border: `1px solid ${errors.email ? "#e53e3e" : C.hair}`, borderRadius: 8, fontSize: 14, color: C.ink, width: "100%", outline: "none" }} />
                  {errors.email && <p style={{ fontSize: 12, color: "#e53e3e", marginTop: 4 }}>{errors.email}</p>}
                </div>
              </div>

              <div style={{ marginBottom: 18 }}>
                <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase" }}>Type of project</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {PROJECT_TYPES.map((opt, i) => (
                    <button type="button" key={opt} onClick={() => setSelectedType(i)} style={{ padding: "8px 14px", background: i === selectedType ? C.ink : C.bg, color: i === selectedType ? C.surface : C.ink, border: `1px solid ${i === selectedType ? C.ink : C.hair}`, borderRadius: 99, fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all 0.2s ease" }}>{opt}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase", display: "block" }}>Tell me about it</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="We're a small clinic in Mitte and our current site is slow and looks dated. We want to attract new patients and offer online booking…" style={{ padding: "14px 16px", background: C.bg, border: `1px solid ${errors.message ? "#e53e3e" : C.hair}`, borderRadius: 8, fontSize: 14, color: C.ink, minHeight: 120, lineHeight: 1.6, width: "100%", outline: "none", resize: "none" }} />
                {errors.message && <p style={{ fontSize: 12, color: "#e53e3e", marginTop: 4 }}>{errors.message}</p>}
              </div>

              {state === "error" && serverError && (
                <div style={{ padding: "10px 14px", background: "rgba(229,62,62,0.08)", border: "1px solid rgba(229,62,62,0.3)", borderRadius: 8, fontSize: 13, color: "#e53e3e", marginBottom: 16 }}>{serverError}</div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: `1px solid ${C.hair}` }}>
                <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>Reply within 24 hours, guaranteed.</span>
                <button type="submit" disabled={state === "submitting"} className="btn-hover" style={{ padding: "12px 24px", background: C.ink, color: C.surface, borderRadius: 99, fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 8, cursor: "pointer", border: "none", opacity: state === "submitting" ? 0.6 : 1 }}>
                  {state === "submitting" ? "Sending…" : <>Send brief <span style={{ color: C.accent }}>→</span></>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Accessibility */}
      <div className="sr-only" aria-live="polite">
        {state === "submitting" && "Sending your message..."}
        {state === "success" && "Message sent successfully!"}
        {state === "error" && serverError}
      </div>
    </section>
  );
}
