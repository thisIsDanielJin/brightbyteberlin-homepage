export type SeoPage = {
  slug: string;
  category: "service" | "industry" | "need" | "location";
  title: string;
  titleEn: string;
  metaDescription: string;
  metaDescriptionEn: string;
  heroHeadline: string;
  heroHeadlineEn: string;
  heroSubtext: string;
  heroSubtextEn: string;
  faqs: { q: string; a: string; qEn: string; aEn: string }[];
  ctaText: string;
  ctaTextEn: string;
};

export const seoPages: SeoPage[] = [
  {
    slug: "webentwickler-berlin",
    category: "service",
    title: "Webentwickler Berlin | BrightByte",
    titleEn: "Web Developer Berlin | BrightByte",
    metaDescription:
      "Freelance Webentwickler in Berlin. Moderne Websites mit Festpreis, klarem Zeitplan und persönlichem Support. React, Next.js, Performance-First.",
    metaDescriptionEn:
      "Freelance web developer in Berlin. Modern websites with fixed pricing, clear timelines, and personal support. React, Next.js, performance-first.",
    heroHeadline: "Webentwickler in Berlin ·\nmoderne Websites, fair & transparent",
    heroHeadlineEn: "Web Developer in Berlin ·\nmodern websites, fair & transparent",
    heroSubtext: `Sie suchen einen Webentwickler in Berlin, der Ihre Idee in eine schnelle, professionelle Website verwandelt. Ohne versteckte Kosten und ohne monatelange Wartezeiten?

BrightByte bietet Ihnen genau das: Enterprise-Qualität zum fairen Festpreis. Jedes Projekt bekommt einen klaren Zeitplan, transparente Kommunikation und eine Website, die auf allen Geräten überzeugt. Keine Überraschungen bei der Rechnung, keine endlosen Feedbackschleifen.

Als Solo-Entwickler mit sechs Jahren Erfahrung bei Agenturen und SAP arbeite ich mit React, Next.js und modernen Performance-Standards. Das Ergebnis: Lighthouse-Scores über 95, schnelle Ladezeiten und eine Seite, die bei Google von Anfang an sichtbar ist.`,
    heroSubtextEn: `Looking for a web developer in Berlin who turns your idea into a fast, professional website. Without hidden costs or months of waiting?

BrightByte offers exactly that: enterprise-quality at a fair fixed price. Every project gets a clear timeline, transparent communication, and a website that works beautifully on all devices. No invoice surprises, no endless feedback loops.

As a solo developer with six years of experience at agencies and SAP, I work with React, Next.js, and modern performance standards. The result: Lighthouse scores above 95, fast load times, and a site that ranks on Google from day one.`,
    faqs: [
      {
        q: "Was kostet eine Website vom Webentwickler in Berlin?",
        a: "Bei BrightByte starten einfache Landing Pages ab €990, mehrseitige Websites ab €2.500. Alles zum Festpreis. Sie wissen vor Projektstart exakt, was es kostet. Keine Stundensätze, keine Nachberechnungen.",
        qEn: "How much does a website from a web developer in Berlin cost?",
        aEn: "At BrightByte, simple landing pages start at €990, multi-page websites from €2,500. Everything at a fixed price. You know exactly what it costs before the project starts. No hourly rates, no surprise invoices.",
      },
      {
        q: "Wie lange dauert ein Website-Projekt?",
        a: "Eine Landing Page ist in 2–3 Wochen fertig, größere Projekte in 4–8 Wochen. Nach dem Kickoff bekommen Sie einen klaren Zeitplan mit Meilensteinen. Keine Black Box.",
        qEn: "How long does a website project take?",
        aEn: "A landing page is done in 2–3 weeks, larger projects in 4–8 weeks. After the kickoff you receive a clear timeline with milestones. No black box.",
      },
      {
        q: "Welche Technologien nutzt du als Webentwickler?",
        a: "Ich arbeite primär mit React und Next.js. Das sind die gleichen Technologien, die auch bei Netflix, Notion oder Vercel im Einsatz sind. Dazu kommen Tailwind CSS, TypeScript und ein Headless CMS wie Sanity, wenn Sie Inhalte selbst pflegen möchten.",
        qEn: "What technologies do you use as a web developer?",
        aEn: "I primarily work with React and Next.js. The same technologies used by Netflix, Notion, and Vercel. Plus Tailwind CSS, TypeScript, and a headless CMS like Sanity if you want to manage content yourself.",
      },
      {
        q: "Bietest du auch SEO und laufenden Support an?",
        a: "Jede Website wird mit technischem SEO ausgeliefert: schnelle Ladezeiten, korrekte Meta-Tags, strukturierte Daten, Mobile-First-Design. Für laufende Betreuung (Content-Strategie, Updates, Monitoring) biete ich einen monatlichen Retainer ab €200/Monat an.",
        qEn: "Do you also offer SEO and ongoing support?",
        aEn: "Every website ships with technical SEO: fast load times, correct meta tags, structured data, mobile-first design. For ongoing maintenance (content strategy, updates, monitoring), I offer a monthly retainer starting at €200/month.",
      },
    ],
    ctaText: "Projekt besprechen",
    ctaTextEn: "Discuss your project",
  },
  {
    slug: "website-fuer-aerzte",
    category: "industry",
    title: "Website für Ärzte | BrightByte Berlin",
    titleEn: "Websites for Doctors | BrightByte Berlin",
    metaDescription:
      "Professionelle Praxis-Websites für Ärzte in Berlin. Online-Terminbuchung, DSGVO-konform, schnell & modern. Festpreis, persönlicher Ansprechpartner.",
    metaDescriptionEn:
      "Professional practice websites for doctors in Berlin. Online appointment booking, GDPR-compliant, fast & modern. Fixed pricing, personal contact.",
    heroHeadline: "Website für Ärzte ·\nIhre Praxis, online überzeugend",
    heroHeadlineEn: "Websites for Doctors ·\nyour practice, compelling online",
    heroSubtext: `Patienten suchen heute online nach einem Arzt und entscheiden in Sekunden, ob eine Praxis vertrauenswürdig wirkt. Eine professionelle Website ist Ihre digitale Visitenkarte und oft der erste Kontaktpunkt.

BrightByte baut Praxis-Websites, die Vertrauen schaffen: klares Design, schnelle Ladezeiten, Online-Terminbuchung und volle DSGVO-Konformität. Alles, was eine moderne Arztpraxis braucht, um online gefunden zu werden und Patienten zu gewinnen.

Sie konzentrieren sich auf Ihre Patienten. Ich kümmere mich um Ihren digitalen Auftritt. Von der Erstberatung bis zum Go-Live in wenigen Wochen, ohne technischen Aufwand auf Ihrer Seite.`,
    heroSubtextEn: `Today's patients search for doctors online and decide within seconds whether a practice looks trustworthy. A professional website is your digital business card and often the first point of contact.

BrightByte builds practice websites that create trust: clean design, fast load times, online appointment booking, and full GDPR compliance. Everything a modern medical practice needs to be found online and attract patients.

You focus on your patients. I take care of your digital presence. From initial consultation to go-live in just a few weeks, without any technical effort on your side.`,
    faqs: [
      {
        q: "Kann ich Online-Terminbuchung integrieren lassen?",
        a: "Ja, ich integriere gängige Systeme wie Doctolib, Jameda oder eine eigene Buchungslösung direkt in Ihre Website. Patienten können rund um die Uhr Termine buchen. Das entlastet Ihr Praxisteam.",
        qEn: "Can I have online appointment booking integrated?",
        aEn: "Yes, I integrate common systems like Doctolib, Jameda, or a custom booking solution directly into your website. Patients can book appointments 24/7, relieving your practice team.",
      },
      {
        q: "Ist die Website DSGVO-konform?",
        a: "Selbstverständlich. Jede Website wird mit DSGVO-konformem Cookie-Banner, Datenschutzerklärung, SSL-Verschlüsselung und datenschutzfreundlichem Hosting in Deutschland ausgeliefert. Patientendaten sind geschützt.",
        qEn: "Is the website GDPR-compliant?",
        aEn: "Absolutely. Every website ships with a GDPR-compliant cookie banner, privacy policy, SSL encryption, and privacy-friendly hosting in Germany. Patient data is protected.",
      },
      {
        q: "Was kostet eine Praxis-Website?",
        a: "Praxis-Websites starten ab €2.500 zum Festpreis. Das beinhaltet Design, Entwicklung, Terminbuchung-Integration, SEO-Grundsetup und 30 Tage Support nach Launch. Keine laufenden Agenturkosten.",
        qEn: "How much does a practice website cost?",
        aEn: "Practice websites start at €2,500 at a fixed price. This includes design, development, appointment booking integration, basic SEO setup, and 30 days of post-launch support. No ongoing agency costs.",
      },
      {
        q: "Wie werde ich bei Google als Arzt besser gefunden?",
        a: "Ich optimiere Ihre Website für lokale Suchen: Google Business Profil, strukturierte Daten (Schema.org für Ärzte), schnelle Ladezeiten und relevante Inhalte. Das sorgt dafür, dass Patienten in Ihrer Nähe Sie zuerst finden.",
        qEn: "How can I rank better on Google as a doctor?",
        aEn: "I optimize your website for local searches: Google Business profile, structured data (Schema.org for doctors), fast load times, and relevant content. This ensures patients near you find you first.",
      },
    ],
    ctaText: "Praxis-Website anfragen",
    ctaTextEn: "Request a practice website",
  },
  {
    slug: "seo-optimierung-berlin",
    category: "need",
    title: "SEO Optimierung Berlin | BrightByte",
    titleEn: "SEO Optimization Berlin | BrightByte",
    metaDescription:
      "Technische SEO-Optimierung für Berliner Unternehmen. Schnelle Ladezeiten, strukturierte Daten, Mobile-First. Messbare Ergebnisse statt leere Versprechen.",
    metaDescriptionEn:
      "Technical SEO optimization for Berlin businesses. Fast load times, structured data, mobile-first. Measurable results instead of empty promises.",
    heroHeadline: "SEO Optimierung Berlin ·\nbei Google sichtbar werden",
    heroHeadlineEn: "SEO Optimization Berlin ·\nbecome visible on Google",
    heroSubtext: `Ihre Website existiert, aber niemand findet sie? Wenn potenzielle Kunden nach Ihren Dienstleistungen googlen und bei der Konkurrenz landen, verlieren Sie jeden Tag Umsatz. Technische SEO-Optimierung ändert das.

BrightByte optimiert Ihre Website von Grund auf: Ladezeiten unter 2 Sekunden, saubere Seitenstruktur, korrekte Meta-Tags, strukturierte Daten und Mobile-First-Design. Keine Black-Hat-Tricks, sondern nachhaltige Verbesserungen, die Google belohnt.

Jede Optimierung wird mit vorher/nachher-Daten dokumentiert. Sie sehen genau, welche Maßnahmen welche Ergebnisse bringen: Core Web Vitals, Keyword-Rankings und organischer Traffic, schwarz auf weiß.`,
    heroSubtextEn: `Your website exists, but nobody finds it? When potential customers google your services and end up at the competition, you lose revenue every day. Technical SEO optimization changes that.

BrightByte optimizes your website from the ground up: load times under 2 seconds, clean page structure, correct meta tags, structured data, and mobile-first design. No black-hat tricks, just sustainable improvements that Google rewards.

Every optimization is documented with before/after data. You see exactly which measures produce which results: Core Web Vitals, keyword rankings, and organic traffic, in black and white.`,
    faqs: [
      {
        q: "Was bringt technische SEO-Optimierung konkret?",
        a: "Technische SEO sorgt dafür, dass Google Ihre Seite schnell crawlen, verstehen und ranken kann. Typische Ergebnisse: 30–50% mehr organischer Traffic in 3–6 Monaten, deutlich bessere Core Web Vitals und höhere Positionen für relevante Keywords.",
        qEn: "What does technical SEO optimization actually deliver?",
        aEn: "Technical SEO ensures Google can quickly crawl, understand, and rank your site. Typical results: 30–50% more organic traffic in 3–6 months, significantly better Core Web Vitals, and higher positions for relevant keywords.",
      },
      {
        q: "Wie schnell sehe ich Ergebnisse?",
        a: "Technische Verbesserungen (Ladezeit, Mobile-Performance) wirken oft innerhalb von Tagen. Ranking-Verbesserungen brauchen typischerweise 4–12 Wochen, da Google Zeit benötigt, Änderungen zu indexieren und zu bewerten.",
        qEn: "How quickly will I see results?",
        aEn: "Technical improvements (load time, mobile performance) often take effect within days. Ranking improvements typically need 4–12 weeks, as Google needs time to index and evaluate changes.",
      },
      {
        q: "Muss ich meine Website dafür komplett neu bauen lassen?",
        a: "Nicht unbedingt. Oft reichen gezielte Optimierungen an der bestehenden Seite: Bilder komprimieren, Code aufräumen, Caching einrichten, Meta-Daten korrigieren. Bei gravierenden Problemen kann ein Relaunch aber der bessere Weg sein. Das besprechen wir ehrlich im Erstgespräch.",
        qEn: "Do I need to rebuild my entire website for this?",
        aEn: "Not necessarily. Often targeted optimizations on the existing site are enough: compress images, clean up code, set up caching, fix meta data. For severe issues, a relaunch might be the better path. We discuss this honestly in the initial consultation.",
      },
      {
        q: "Was kostet SEO-Optimierung bei BrightByte?",
        a: "Ein SEO-Audit mit konkretem Maßnahmenplan kostet €490. Die Umsetzung der technischen Optimierungen beginnt ab €990, je nach Umfang. Alles transparent und zum Festpreis. Keine monatlichen Knebelverträge.",
        qEn: "What does SEO optimization cost at BrightByte?",
        aEn: "An SEO audit with a concrete action plan costs €490. Implementation of technical optimizations starts at €990, depending on scope. Everything transparent and at a fixed price. No monthly lock-in contracts.",
      },
    ],
    ctaText: "SEO-Audit anfragen",
    ctaTextEn: "Request an SEO audit",
  },
  {
    slug: "webdesign-mitte",
    category: "location",
    title: "Webdesign Berlin Mitte | BrightByte",
    titleEn: "Web Design Berlin Mitte | BrightByte",
    metaDescription:
      "Webdesign aus Berlin Mitte. Moderne Websites für lokale Unternehmen, Praxen und Startups. Persönliche Betreuung, Festpreis, Treffen vor Ort möglich.",
    metaDescriptionEn:
      "Web design from Berlin Mitte. Modern websites for local businesses, practices, and startups. Personal support, fixed pricing, in-person meetings available.",
    heroHeadline: "Webdesign Berlin Mitte ·\nIhr lokaler Ansprechpartner",
    heroHeadlineEn: "Web Design Berlin Mitte ·\nyour local partner",
    heroSubtext: `Ein Webdesigner, der um die Ecke sitzt und Ihre Branche versteht. Das macht den Unterschied. BrightByte ist in Berlin Mitte ansässig und arbeitet bevorzugt mit lokalen Unternehmen, die eine professionelle Online-Präsenz verdienen.

Ob Café in der Torstraße, Praxis am Hackeschen Markt oder Startup am Rosenthaler Platz: Sie bekommen eine Website, die Ihre Nachbarschaft anspricht und bei lokalen Google-Suchen ganz oben steht. Persönliche Treffen, schnelle Abstimmung, kurze Wege.

Kein anonymes Agentur-Erlebnis, kein Offshore-Team. Ein Entwickler, ein Ansprechpartner, ein klarer Plan. Und ein Ergebnis, auf das Sie stolz sind.`,
    heroSubtextEn: `A web designer around the corner who understands your industry. That makes the difference. BrightByte is based in Berlin Mitte and prefers working with local businesses that deserve a professional online presence.

Whether a café on Torstraße, a practice near Hackescher Markt, or a startup at Rosenthaler Platz: you get a website that speaks to your neighborhood and ranks at the top of local Google searches. Personal meetings, quick alignment, short distances.

No anonymous agency experience, no offshore team. One developer, one contact person, one clear plan. And a result you're proud of.`,
    faqs: [
      {
        q: "Kann ich dich persönlich in Berlin Mitte treffen?",
        a: "Ja, gerne! Ich biete ein kostenloses Erstgespräch an, ob bei einem Kaffee in Mitte, in Ihren Räumlichkeiten oder per Video-Call. So lernen wir uns kennen und besprechen Ihr Projekt unverbindlich.",
        qEn: "Can I meet you in person in Berlin Mitte?",
        aEn: "Yes, absolutely! I offer a free initial consultation, whether over coffee in Mitte, at your location, or via video call. We get to know each other and discuss your project with no commitment.",
      },
      {
        q: "Arbeitest du nur mit Unternehmen aus Mitte?",
        a: "Nein, ich arbeite mit Kunden aus ganz Berlin und auch remote. Aber für lokale Unternehmen in Mitte und Umgebung bin ich besonders schnell erreichbar und kann Treffen vor Ort anbieten.",
        qEn: "Do you only work with businesses from Mitte?",
        aEn: "No, I work with clients from all over Berlin and remotely too. But for local businesses in Mitte and surroundings, I'm especially quick to reach and can offer in-person meetings.",
      },
      {
        q: "Was unterscheidet dich von einer großen Agentur?",
        a: "Kein Projektmanager-Pingpong, keine Wartezeiten, kein aufgeblähtes Team. Sie sprechen direkt mit dem Entwickler, der Ihre Website baut. Das bedeutet: schnellere Entscheidungen, persönlichere Betreuung und deutlich günstigere Preise bei gleicher Qualität.",
        qEn: "What sets you apart from a large agency?",
        aEn: "No project manager ping-pong, no wait times, no bloated team. You talk directly with the developer who builds your website. That means: faster decisions, more personal support, and significantly lower prices at the same quality.",
      },
      {
        q: "Wie läuft ein typisches Projekt ab?",
        a: "1) Kostenloses Erstgespräch, 2) Angebot zum Festpreis innerhalb 48h, 3) Design-Entwurf nach einer Woche, 4) Umsetzung in 2–4 Wochen, 5) Launch + 30 Tage Support. Einfach und vorhersehbar.",
        qEn: "What does a typical project look like?",
        aEn: "1) Free initial meeting, 2) Fixed-price quote within 48h, 3) Design draft after one week, 4) Development in 2–4 weeks, 5) Launch + 30 days support. Simple and predictable.",
      },
    ],
    ctaText: "Erstgespräch vereinbaren",
    ctaTextEn: "Schedule a free consultation",
  },
];

export function getSeoPageBySlug(slug: string): SeoPage | undefined {
  return seoPages.find((p) => p.slug === slug);
}
