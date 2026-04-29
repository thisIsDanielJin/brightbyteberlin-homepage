import { footerLinks } from "@/data/navigation";
import Link from "next/link";

function BrightByteLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="22" width="8" height="8" rx="1.5" fill="#C4ADCF" />
      <rect x="12" y="22" width="8" height="8" rx="1.5" fill="#C4ADCF" />
      <rect x="2" y="12" width="8" height="8" rx="1.5" fill="#C4ADCF" />
      <rect x="12" y="12" width="8" height="8" rx="3" fill="#C4ADCF" opacity="0.85" />
      <rect x="22" y="12" width="8" height="8" rx="4" fill="#C4ADCF" opacity="0.7" />
      <circle cx="26" cy="6" r="4.5" fill="#C4ADCF" opacity="0.45" />
    </svg>
  );
}

const seoLinks = [
  {
    title: "By Service",
    links: ["Webentwickler Berlin", "Landing Page Agentur", "Website Relaunch", "WordPress Alternative", "React Entwicklung", "Webdesign für KMU"],
  },
  {
    title: "By Industry",
    links: ["Website für Ärzte", "Website für Restaurant", "Website für Handwerker", "Website für Anwälte", "Website für Coaches", "Website für Startups"],
  },
  {
    title: "By Need",
    links: ["SEO Optimierung Berlin", "Website Geschwindigkeit", "Lead Generation", "Online Booking Integration", "Mehrsprachige Website", "DSGVO-konforme Website"],
  },
  {
    title: "By Location",
    links: ["Webdesign Mitte", "Webdesign Kreuzberg", "Webdesign Prenzlauer Berg", "Webdesign Charlottenburg", "Webdesign Friedrichshain", "Webdesign Neukölln"],
  },
];

export function Footer() {
  return (
    <footer style={{ padding: "72px 56px 36px", background: "var(--color-ink)", color: "var(--color-surface)" }}>
      {/* Main 4-column grid */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <BrightByteLogo size={24} />
            <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em" }}>
              brightbyte<span style={{ color: "rgba(251,248,241,0.5)" }}>.berlin</span>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "rgba(251,248,241,0.6)", lineHeight: 1.6, maxWidth: 320 }}>
            Enterprise-grade websites for small businesses. Built in Berlin, shipped fast, supported personally.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 0, marginTop: 24, padding: "8px 14px 8px 12px", background: "rgba(251,248,241,0.06)", borderLeft: "3px solid var(--color-accent-soft)", borderRadius: 2 }}>
            <span className="mono" style={{ fontSize: 11, color: "var(--color-accent-soft)", marginRight: 8, fontWeight: 500 }}>▸</span>
            <span className="mono" style={{ fontSize: 11, letterSpacing: "0.04em" }}>Available · April 2026</span>
          </div>
        </div>

        {/* Product column */}
        <div>
          <div className="mono" style={{ fontSize: 10, color: "rgba(251,248,241,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Product</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {footerLinks.product.map((item) => (
              <Link key={item.label} href={item.href} style={{ fontSize: 14, color: "var(--color-surface)", textDecoration: "none" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Company column */}
        <div>
          <div className="mono" style={{ fontSize: 10, color: "rgba(251,248,241,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Company</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {footerLinks.company.map((item) => (
              <Link key={item.label} href={item.href} style={{ fontSize: 14, color: "var(--color-surface)", textDecoration: "none" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Connect column */}
        <div>
          <div className="mono" style={{ fontSize: 10, color: "rgba(251,248,241,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Connect</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {footerLinks.connect.map((item) => (
              <Link key={item.label} href={item.href} style={{ fontSize: 14, color: "var(--color-surface)", textDecoration: "none" }} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Explore section */}
      <div style={{ paddingTop: 32, borderTop: "1px solid rgba(251,248,241,0.08)", marginBottom: 48 }}>
        <div className="mono" style={{ fontSize: 10, color: "rgba(251,248,241,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Explore</div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32 }}>
          {seoLinks.map((section) => (
            <div key={section.title}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "rgba(251,248,241,0.6)", marginBottom: 12 }}>{section.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {section.links.map((link) => (
                  <span key={link} style={{ fontSize: 12, color: "rgba(251,248,241,0.4)", cursor: "pointer" }}>{link}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ paddingTop: 24, borderTop: "1px solid rgba(251,248,241,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="mono" style={{ fontSize: 11, color: "rgba(251,248,241,0.5)", letterSpacing: "0.04em" }}>© 2026 Brightbyte · Berlin</span>
        <div style={{ display: "flex", gap: 24 }}>
          {footerLinks.legal.map((item) => (
            <Link key={item.label} href={item.href} className="mono" style={{ fontSize: 11, color: "rgba(251,248,241,0.5)", letterSpacing: "0.04em", textDecoration: "none" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
