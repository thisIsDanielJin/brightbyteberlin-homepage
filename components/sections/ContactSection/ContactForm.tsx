"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button/Button";
import { validateContactForm, type ValidationErrors } from "@/lib/validation";
import type { ContactFormData, ContactFormState } from "@/types";

const initialFormData: ContactFormData = { name: "", email: "", message: "" };

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [state, setState] = useState<ContactFormState>("idle");
  const [serverError, setServerError] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");

    const validationErrors = validateContactForm(formData);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website: honeypotRef.current?.value || "",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setState("success");
      setFormData(initialFormData);

      // Auto-reset after 5 seconds
      setTimeout(() => setState("idle"), 5000);
    } catch (err) {
      setState("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const inputBase =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 transition-all duration-200 outline-none";
  const inputFocus =
    "focus:border-bright/50 focus:ring-2 focus:ring-bright/20";
  const inputError = "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bright/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-bright"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Message sent!
            </h3>
            <p className="text-white/60">
              I&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            noValidate
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5"
          >
            {/* Honeypot — hidden from real users */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                ref={honeypotRef}
              />
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-white/70 mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={!!errors.name}
                className={`${inputBase} ${errors.name ? inputError : inputFocus}`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-white/70 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
                className={`${inputBase} ${errors.email ? inputError : inputFocus}`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-white/70 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={!!errors.message}
                className={`${inputBase} resize-none ${errors.message ? inputError : inputFocus}`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Server error banner */}
            {state === "error" && serverError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400">
                {serverError}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              isLoading={state === "submitting"}
              disabled={state === "submitting"}
              className="w-full bg-bright text-text-dark hover:bg-bright-hover shadow-lg shadow-bright/20"
            >
              Send Message
            </Button>

          </motion.form>
        )}
      </AnimatePresence>

      {/* Status announcement for screen readers */}
      <div className="sr-only" aria-live="polite">
        {state === "submitting" && "Sending your message..."}
        {state === "success" && "Message sent successfully!"}
        {state === "error" && serverError}
      </div>
    </div>
  );
}
