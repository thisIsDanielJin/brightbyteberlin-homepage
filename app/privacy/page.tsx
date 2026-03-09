import { Container } from "@/components/ui/Container/Container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | BrightByte Berlin",
  description:
    "Datenschutzerklärung / Privacy Policy — Data protection information for BrightByte Berlin.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-20">
      <Container size="sm">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-bright transition-colors mb-8"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-text-primary mb-12">
          Datenschutzerklärung
        </h1>

        {/* German version */}
        <div className="space-y-8 mb-20">
          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
              Allgemeine Hinweise
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              2. Verantwortlicher
            </h2>
            <div className="text-text-secondary leading-relaxed space-y-1">
              <p>Daniel Jin Wodke</p>
              <p>Karl-Marx-Allee 118</p>
              <p>10243 Berlin</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:contact@brightbyte.berlin"
                  className="text-bright hover:underline"
                >
                  contact@brightbyte.berlin
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
              Server-Log-Dateien
            </h3>
            <p className="text-text-secondary leading-relaxed mb-3">
              Der Provider dieser Seiten erhebt und speichert automatisch Informationen
              in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt.
              Dies sind:
            </p>
            <ul className="text-text-secondary leading-relaxed list-disc list-inside space-y-1 mb-3">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
              vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
              an der technisch fehlerfreien Darstellung und der Optimierung seiner
              Website.
            </p>

            <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
              Kontaktaufnahme per E-Mail
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Wenn Sie mich per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller
              daraus hervorgehenden personenbezogenen Daten (Name, E-Mail-Adresse,
              Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei mir gespeichert
              und verarbeitet. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              4. Hosting
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA
              91789, USA) gehostet. Wenn Sie diese Website besuchen, werden
              personenbezogene Daten (z.&nbsp;B. IP-Adresse) an die Server von Vercel
              übermittelt. Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bright hover:underline"
              >
                https://vercel.com/legal/privacy-policy
              </a>
              .
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Ich habe ein berechtigtes Interesse an einer zuverlässigen
              Darstellung meiner Website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              5. Analyse-Tools
            </h2>
            <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
              Vercel Web Analytics
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Diese Website nutzt Vercel Web Analytics, einen datenschutzfreundlichen
              Analysedienst von Vercel Inc. Vercel Web Analytics erfasst keine
              personenbezogenen Daten und verwendet keine Cookies. Es werden
              ausschließlich aggregierte, anonymisierte Daten über Seitenaufrufe und
              Web Vitals erhoben, um die Performance der Website zu verbessern. Weitere
              Informationen finden Sie unter:{" "}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bright hover:underline"
              >
                https://vercel.com/docs/analytics/privacy-policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              6. Ihre Rechte
            </h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und
              den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder
              Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
              Datenschutz können Sie sich jederzeit an mich wenden:
            </p>
            <p className="text-text-secondary leading-relaxed">
              <a
                href="mailto:contact@brightbyte.berlin"
                className="text-bright hover:underline"
              >
                contact@brightbyte.berlin
              </a>
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde ist die Berliner
              Beauftragte für Datenschutz und Informationsfreiheit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              7. SSL-/TLS-Verschlüsselung
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
              Browsers von &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an dem
              Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>
        </div>

        {/* English version */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-sm text-text-muted uppercase tracking-widest mb-8">
            English Version
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                1. Privacy at a Glance
              </h2>
              <p className="text-text-secondary leading-relaxed">
                The following provides a simple overview of what happens to your personal
                data when you visit this website. Personal data is any data that can be
                used to personally identify you.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                2. Controller
              </h2>
              <div className="text-text-secondary leading-relaxed space-y-1">
                <p>Daniel Jin Wodke</p>
                <p>Karl-Marx-Allee 118</p>
                <p>10243 Berlin, Germany</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:contact@brightbyte.berlin"
                    className="text-bright hover:underline"
                  >
                    contact@brightbyte.berlin
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                3. Data Collection on This Website
              </h2>

              <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
                Server Log Files
              </h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                The hosting provider of these pages automatically collects and stores
                information in server log files that your browser automatically
                transmits. These are:
              </p>
              <ul className="text-text-secondary leading-relaxed list-disc list-inside space-y-1 mb-3">
                <li>Browser type and version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Host name of the accessing computer</li>
                <li>Time of the server request</li>
                <li>IP address</li>
              </ul>
              <p className="text-text-secondary leading-relaxed">
                This data is not merged with other data sources. The collection of this
                data is based on Art. 6 (1) lit. f GDPR. The website operator has a
                legitimate interest in the technically error-free presentation and
                optimization of their website.
              </p>

              <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
                Contact via Email
              </h3>
              <p className="text-text-secondary leading-relaxed">
                If you contact me by email, your inquiry including all personal data
                arising from it (name, email address, inquiry) will be stored and
                processed by me for the purpose of handling your request. I will not
                share this data without your consent. Processing is based on Art. 6 (1)
                lit. b GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                4. Hosting
              </h2>
              <p className="text-text-secondary leading-relaxed">
                This website is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut,
                CA 91789, USA). When you visit this website, personal data (e.g., IP
                address) is transmitted to Vercel&apos;s servers. For details, please
                refer to Vercel&apos;s privacy policy:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bright hover:underline"
                >
                  https://vercel.com/legal/privacy-policy
                </a>
                .
              </p>
              <p className="text-text-secondary leading-relaxed mt-3">
                The use of Vercel is based on Art. 6 (1) lit. f GDPR. I have a
                legitimate interest in a reliable presentation of my website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                5. Analytics
              </h2>
              <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
                Vercel Web Analytics
              </h3>
              <p className="text-text-secondary leading-relaxed">
                This website uses Vercel Web Analytics, a privacy-friendly analytics
                service by Vercel Inc. Vercel Web Analytics does not collect personal
                data and does not use cookies. Only aggregated, anonymized data about
                page views and Web Vitals is collected to improve website performance.
                More information can be found at:{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bright hover:underline"
                >
                  https://vercel.com/docs/analytics/privacy-policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                6. Your Rights
              </h2>
              <p className="text-text-secondary leading-relaxed mb-3">
                You have the right at any time to obtain free information about your
                stored personal data, its origin and recipients, and the purpose of data
                processing, as well as a right to correction or deletion of this data.
                For this and other questions on the topic of data protection, you can
                contact me at any time:
              </p>
              <p className="text-text-secondary leading-relaxed">
                <a
                  href="mailto:contact@brightbyte.berlin"
                  className="text-bright hover:underline"
                >
                  contact@brightbyte.berlin
                </a>
              </p>
              <p className="text-text-secondary leading-relaxed mt-3">
                You also have the right to lodge a complaint with the competent
                supervisory authority. The competent authority is the Berlin
                Commissioner for Data Protection and Freedom of Information (Berliner
                Beauftragte für Datenschutz und Informationsfreiheit).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                7. SSL/TLS Encryption
              </h2>
              <p className="text-text-secondary leading-relaxed">
                This site uses SSL or TLS encryption for security reasons and to protect
                the transmission of confidential content. You can recognize an encrypted
                connection by the fact that the address bar of your browser changes from
                &ldquo;http://&rdquo; to &ldquo;https://&rdquo; and by the lock icon in your browser bar.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
