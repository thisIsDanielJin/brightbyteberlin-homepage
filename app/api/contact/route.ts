import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactForm } from "@/lib/validation";
import type { ContactFormData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "danielwodke25@gmail.com";

// In-memory rate limiter: IP → timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  rateLimitMap.set(ip, recent);

  if (recent.length >= RATE_LIMIT_MAX) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check — if the hidden "website" field is filled, silently reject
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const formData: ContactFormData = {
      name: body.name,
      email: body.email,
      message: body.message,
    };

    // Validate
    const errors = validateContactForm(formData);
    if (errors) {
      return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
    }

    // Rate limit by IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "BrightByte Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: formData.email.trim(),
      subject: `New inquiry from ${formData.name.trim()}`,
      text: [
        `Name: ${formData.name.trim()}`,
        `Email: ${formData.email.trim()}`,
        "",
        "Message:",
        formData.message.trim(),
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
