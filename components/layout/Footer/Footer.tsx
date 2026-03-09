import { cn } from "@/lib/utils";
import { footerLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container/Container";
import Link from "next/link";
import type { ComponentProps } from "react";

// D1 Pixel Cluster Logo
function PixelClusterLogo({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <rect x="4" y="4" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.3} />
      <rect x="12" y="4" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.5} />
      <rect x="4" y="12" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.6} />
      <rect x="12" y="12" width="6" height="6" rx="1" fill="#FBBF24" />
      <rect x="20" y="12" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.7} />
      <rect x="12" y="20" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.4} />
      <rect x="20" y="20" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.8} />
    </svg>
  );
}

function EnvelopeIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
}

function LinkedInIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

function GitHubIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 496 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Email",
    href: "mailto:contact@brightbyte.berlin",
    icon: EnvelopeIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/danieljinwodke",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/danieljinwodke",
    icon: GitHubIcon,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-white/5">
      <Container>
        <div className="py-12 flex flex-col md:flex-row md:justify-between gap-10 md:gap-16">
          {/* Brand + tagline */}
          <div className="md:max-w-xs">
            <a
              href="/"
              className="flex items-center gap-2 text-lg font-bold tracking-tight mb-3"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-bright/10 to-electric/10 border border-bright/20 flex items-center justify-center">
                <PixelClusterLogo />
              </span>
              <span>
                <span className="text-bright">Bright</span>
                <span className="text-text-primary">Byte</span>
                <span className="text-text-muted font-normal ml-1 text-sm">Berlin</span>
              </span>
            </a>
            <p className="text-text-muted text-sm max-w-xs mb-5">
              Websites that put your business in the spotlight.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2.5 rounded-xl",
                    "bg-white/5 hover:bg-bright hover:text-bg-primary",
                    "transition-all duration-300 text-text-muted"
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav + Legal columns */}
          <div className="flex gap-16 sm:gap-20">
            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4">Navigation</h3>
              <ul className="space-y-2.5">
                {footerLinks.main.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-bright transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4">Legal</h3>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-bright transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/5 flex justify-center">
          <p className="text-text-muted text-xs">
            &copy; {currentYear} BrightByte Berlin. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
