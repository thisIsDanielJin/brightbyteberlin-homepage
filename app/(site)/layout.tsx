// (site) layout — keeps the bone+plum global chrome for blog, /services/*, /projects/*, /imprint, /privacy
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-ink)" }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
