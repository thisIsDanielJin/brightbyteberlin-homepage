"use client";

import { useState, useRef } from "react";
import { validateContactForm, type ValidationErrors } from "@/lib/validation";
import { useLocale } from "@/contexts/LocaleContext";
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

const initialFormData: ContactFormData = { name: "", email: "", message: "" };

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [state, setState] = useState<ContactFormState>("idle");
  const [serverError, setServerError] = useState("");
  const [selectedType, setSelectedType] = useState(1);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const { t, locale } = useLocale();

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
        body: JSON.stringify({ ...formData, projectType: t.contact.types[selectedType], website: honeypotRef.current?.value || "" }),
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
    <section id="contact" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28" style={{ background: `linear-gradient(180deg, ${C.bg} 0%, #F0ECE2 100%)`, borderBottom: `1px solid ${C.hair}` }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
        {/* Left — context + timeline */}
        <div>
          <div className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>{t.contact.label}</div>
          <h2 className="text-3xl sm:text-4xl lg:text-[64px] font-medium tracking-tight leading-none mb-6 lg:mb-8" style={{ color: C.ink }}>
            {t.contact.heading}<br />
            <span className="serif" style={{ fontStyle: "italic", fontWeight: 400, color: C.accent }}>{t.contact.headingItalic}</span>
          </h2>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", border: "2px solid #6B3977" }} />
            <span style={{ fontSize: 15, color: C.sub }}>{locale === "de" ? `Verfügbar · ${new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}` : `Available · ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}`}</span>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 20 }}>{t.contact.whatsNext}</div>
            <div style={{ position: "relative", paddingLeft: 24 }}>
              <div style={{ position: "absolute", left: 5, top: 6, bottom: 6, width: 1.5, background: C.accentSoft, borderRadius: 1 }} />
              {t.contact.timeline.map((item, i, arr) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < arr.length - 1 ? 16 : 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: -24, top: 5, width: 12, height: 12, borderRadius: "50%", background: C.surface, border: `2px solid ${C.accent}`, zIndex: 1 }} />
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                    <span className="mono" style={{ fontSize: 11, fontWeight: 600, color: C.accent, letterSpacing: "0.04em", flexShrink: 0, minWidth: 42 }}>{item.step}</span>
                    <span style={{ fontSize: 14, color: C.inkSoft, lineHeight: 1.5 }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-[18px]" style={{ background: C.surface, border: `1px solid ${C.hair}`, boxShadow: "0 30px 60px -40px rgba(20,19,15,0.18)" }}>
          {state === "success" ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ width: 48, height: 48, margin: "0 auto 16px", borderRadius: "50%", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontSize: 22 }}>✓</span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: C.ink, marginBottom: 8 }}>{t.contact.successTitle}</h3>
              <p style={{ fontSize: 14, color: C.sub }}>{t.contact.successSub}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <div style={{ position: "absolute", left: -9999 }} aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
              </div>

              <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>{t.contact.formLabel}</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase", display: "block" }}>{t.contact.nameLabel}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.contact.namePlaceholder} style={{ padding: "12px 14px", background: C.bg, border: `1px solid ${errors.name ? "#e53e3e" : C.hair}`, borderRadius: 8, fontSize: 14, color: C.ink, width: "100%", outline: "none" }} />
                  {errors.name && <p style={{ fontSize: 12, color: "#e53e3e", marginTop: 4 }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase", display: "block" }}>{t.contact.emailLabel}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.contact.emailPlaceholder} style={{ padding: "12px 14px", background: C.bg, border: `1px solid ${errors.email ? "#e53e3e" : C.hair}`, borderRadius: 8, fontSize: 14, color: C.ink, width: "100%", outline: "none" }} />
                  {errors.email && <p style={{ fontSize: 12, color: "#e53e3e", marginTop: 4 }}>{errors.email}</p>}
                </div>
              </div>

              <div style={{ marginBottom: 18 }}>
                <div className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase" }}>{t.contact.typeLabel}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {t.contact.types.map((opt, i) => (
                    <button type="button" key={opt} onClick={() => setSelectedType(i)} style={{ padding: "8px 14px", background: i === selectedType ? C.ink : C.bg, color: i === selectedType ? C.surface : C.ink, border: `1px solid ${i === selectedType ? C.ink : C.hair}`, borderRadius: 99, fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all 0.2s ease" }}>{opt}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label className="mono" style={{ fontSize: 10, color: C.sub, letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase", display: "block" }}>{t.contact.messageLabel}</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.contact.messagePlaceholder} style={{ padding: "14px 16px", background: C.bg, border: `1px solid ${errors.message ? "#e53e3e" : C.hair}`, borderRadius: 8, fontSize: 14, color: C.ink, minHeight: 120, lineHeight: 1.6, width: "100%", outline: "none", resize: "none" }} />
                {errors.message && <p style={{ fontSize: 12, color: "#e53e3e", marginTop: 4 }}>{errors.message}</p>}
              </div>

              {state === "error" && serverError && (
                <div style={{ padding: "10px 14px", background: "rgba(229,62,62,0.08)", border: "1px solid rgba(229,62,62,0.3)", borderRadius: 8, fontSize: 13, color: "#e53e3e", marginBottom: 16 }}>{serverError}</div>
              )}

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4 pt-6" style={{ borderTop: `1px solid ${C.hair}` }}>
                <span className="mono" style={{ fontSize: 11, color: C.sub, letterSpacing: "0.04em" }}>{t.contact.formFooter}</span>
                <button type="submit" disabled={state === "submitting"} className="btn-hover w-full sm:w-auto" style={{ padding: "12px 24px", background: C.ink, color: C.surface, borderRadius: 99, fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer", border: "none", opacity: state === "submitting" ? 0.6 : 1 }}>
                  {state === "submitting" ? t.contact.submitting : <>{t.contact.submit} <span style={{ color: C.accent }}>→</span></>}
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
