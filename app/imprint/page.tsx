import { Container } from "@/components/ui/Container/Container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Impressum | BrightByte Berlin",
    description:
        "Impressum / Imprint · Legal disclosure for BrightByte Berlin.",
    alternates: {
        canonical: "/imprint",
    },
};

export default function ImprintPage() {
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
                    Impressum
                </h1>

                {/* German version */}
                <div className="space-y-8 mb-20">
                    <section>
                        <h2 className="text-lg font-semibold text-text-primary mb-3">
                            Angaben gemäß § 5 TMG
                        </h2>
                        <div className="text-text-secondary leading-relaxed space-y-1">
                            <p>Daniel Jin Wodke</p>
                            <p>BrightByte Berlin</p>
                            <p>Karl-Marx-Allee 118</p>
                            <p>10243 Berlin</p>
                            <p>Deutschland</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-text-primary mb-3">
                            Kontakt
                        </h2>
                        <div className="text-text-secondary leading-relaxed space-y-1">
                            <p>
                                E-Mail:{" "}
                                <a
                                    href="mailto:hello@brightbyte-berlin.com"
                                    className="text-bright hover:underline"
                                >
                                    hello@brightbyte-berlin.com
                                </a>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-text-primary mb-3">
                            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                        </h2>
                        <div className="text-text-secondary leading-relaxed space-y-1">
                            <p>Daniel Jin Wodke</p>
                            <p>Karl-Marx-Allee 118</p>
                            <p>10243 Berlin</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-text-primary mb-3">
                            Haftungsausschluss
                        </h2>

                        <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
                            Haftung für Inhalte
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                            Die Inhalte dieser Seiten wurden mit größter
                            Sorgfalt erstellt. Für die Richtigkeit,
                            Vollständigkeit und Aktualität der Inhalte kann ich
                            jedoch keine Gewähr übernehmen. Als Diensteanbieter
                            bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
                            diesen Seiten nach den allgemeinen Gesetzen
                            verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
                            Diensteanbieter jedoch nicht verpflichtet,
                            übermittelte oder gespeicherte fremde Informationen
                            zu überwachen oder nach Umständen zu forschen, die
                            auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>

                        <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
                            Haftung für Links
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                            Diese Website enthält Links zu externen Webseiten
                            Dritter, auf deren Inhalte ich keinen Einfluss habe.
                            Deshalb kann ich für diese fremden Inhalte auch
                            keine Gewähr übernehmen. Für die Inhalte der
                            verlinkten Seiten ist stets der jeweilige Anbieter
                            oder Betreiber der Seiten verantwortlich.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-text-primary mb-3">
                            Urheberrecht
                        </h2>
                        <p className="text-text-secondary leading-relaxed">
                            Die durch den Seitenbetreiber erstellten Inhalte und
                            Werke auf diesen Seiten unterliegen dem deutschen
                            Urheberrecht. Die Vervielfältigung, Bearbeitung,
                            Verbreitung und jede Art der Verwertung außerhalb
                            der Grenzen des Urheberrechtes bedürfen der
                            schriftlichen Zustimmung des jeweiligen Autors bzw.
                            Erstellers.
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
                                Information pursuant to § 5 TMG
                            </h2>
                            <div className="text-text-secondary leading-relaxed space-y-1">
                                <p>Daniel Jin Wodke</p>
                                <p>BrightByte Berlin</p>
                                <p>Karl-Marx-Allee 118</p>
                                <p>10243 Berlin</p>
                                <p>Germany</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-text-primary mb-3">
                                Contact
                            </h2>
                            <div className="text-text-secondary leading-relaxed space-y-1">
                                <p>
                                    Email:{" "}
                                    <a
                                        href="mailto:hello@brightbyte-berlin.com"
                                        className="text-bright hover:underline"
                                    >
                                        hello@brightbyte-berlin.com
                                    </a>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-text-primary mb-3">
                                Responsible for content pursuant to § 55 Abs. 2
                                RStV
                            </h2>
                            <div className="text-text-secondary leading-relaxed space-y-1">
                                <p>Daniel Jin Wodke</p>
                                <p>Karl-Marx-Allee 118</p>
                                <p>10243 Berlin</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-text-primary mb-3">
                                Disclaimer
                            </h2>

                            <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
                                Liability for Content
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                The contents of these pages were created with
                                the utmost care. However, I cannot guarantee the
                                accuracy, completeness, or timeliness of the
                                content. As a service provider, I am responsible
                                for my own content on these pages in accordance
                                with general laws pursuant to § 7 (1) TMG.
                                However, according to §§ 8 to 10 TMG, I am not
                                obligated to monitor transmitted or stored
                                third-party information or to investigate
                                circumstances that indicate illegal activity.
                            </p>

                            <h3 className="text-sm font-semibold text-text-primary mt-4 mb-2">
                                Liability for Links
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                This website contains links to external
                                third-party websites, the content of which I
                                have no influence over. Therefore, I cannot
                                assume any liability for this third-party
                                content. The respective provider or operator of
                                the linked pages is always responsible for the
                                content of the linked pages.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-text-primary mb-3">
                                Copyright
                            </h2>
                            <p className="text-text-secondary leading-relaxed">
                                The content and works created by the site
                                operator on these pages are subject to German
                                copyright law. Duplication, processing,
                                distribution, and any kind of exploitation
                                outside the limits of copyright law require the
                                written consent of the respective author or
                                creator.
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
}
