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
  benefits: { text: string; textEn: string }[];
  trustMetrics?: { value: string; label: string; labelEn: string }[];
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
    benefits: [
      { text: "Festpreis ab €990 — keine versteckten Kosten", textEn: "Fixed price from €990 — no hidden costs" },
      { text: "Lighthouse-Score über 95 garantiert", textEn: "Lighthouse score above 95 guaranteed" },
      { text: "Persönlicher Ansprechpartner von Tag 1", textEn: "Personal contact person from day 1" },
      { text: "Fertig in 2–4 Wochen, nicht Monaten", textEn: "Done in 2–4 weeks, not months" },
    ],
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
    benefits: [
      { text: "Online-Terminbuchung (Doctolib, Jameda) integriert", textEn: "Online appointment booking (Doctolib, Jameda) integrated" },
      { text: "DSGVO-konform mit Hosting in Deutschland", textEn: "GDPR-compliant with hosting in Germany" },
      { text: "Lokale SEO für Patienten in Ihrer Nähe", textEn: "Local SEO for patients near you" },
      { text: "Praxisfotos & Teamvorstellung professionell umgesetzt", textEn: "Practice photos & team presentation professionally implemented" },
    ],
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
    benefits: [
      { text: "30–50% mehr organischer Traffic in 3–6 Monaten", textEn: "30–50% more organic traffic in 3–6 months" },
      { text: "Core Web Vitals im grünen Bereich", textEn: "Core Web Vitals in the green zone" },
      { text: "Vorher/Nachher-Dokumentation aller Maßnahmen", textEn: "Before/after documentation of all measures" },
      { text: "Keine Black-Hat-Tricks — nachhaltige Ergebnisse", textEn: "No black-hat tricks — sustainable results" },
    ],
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
    benefits: [
      { text: "Persönliches Treffen in Berlin Mitte möglich", textEn: "In-person meeting in Berlin Mitte possible" },
      { text: "Lokale Google-Rankings für Ihre Nachbarschaft", textEn: "Local Google rankings for your neighborhood" },
      { text: "Ein Ansprechpartner — kein Agentur-Pingpong", textEn: "One contact person — no agency ping-pong" },
      { text: "Kennenlernen kostenlos und unverbindlich", textEn: "Free, no-commitment consultation" },
    ],
  },
  // ─── INDUSTRY PAGES ─────────────────────────────────────────────────
  {
    slug: "website-fuer-restaurants",
    category: "industry",
    title: "Website für Restaurants | BrightByte Berlin",
    titleEn: "Websites for Restaurants | BrightByte Berlin",
    metaDescription:
      "Professionelle Restaurant-Websites mit Online-Reservierung, Speisekarte und Google Maps. Festpreis, mobil-optimiert, in 2–3 Wochen fertig.",
    metaDescriptionEn:
      "Professional restaurant websites with online reservations, menu display, and Google Maps. Fixed pricing, mobile-optimized, ready in 2–3 weeks.",
    heroHeadline: "Website für Restaurants ·\nGäste gewinnen, online überzeugen",
    heroHeadlineEn: "Websites for Restaurants ·\nwin guests, impress online",
    heroSubtext: `Ihre Gäste entscheiden in Sekunden, ob sie bei Ihnen reservieren oder beim Nachbarn. Eine professionelle Website mit aktueller Speisekarte, Online-Reservierung und ansprechenden Fotos macht den Unterschied.

BrightByte baut Restaurant-Websites, die Appetit machen: schnelle Ladezeiten, perfekte Darstellung auf dem Smartphone, Google Maps Integration und direkte Reservierungs-Anbindung. Alles was Ihr Restaurant braucht, um online neue Gäste zu gewinnen.

Sie kochen. Ich kümmere mich um Ihren digitalen Auftritt. Keine Vorlagen von der Stange, sondern ein individuelles Design, das die Atmosphäre Ihres Restaurants einfängt.`,
    heroSubtextEn: `Your guests decide within seconds whether to book at your place or the competitor next door. A professional website with an up-to-date menu, online reservations, and appealing photos makes the difference.

BrightByte builds restaurant websites that make mouths water: fast load times, perfect mobile display, Google Maps integration, and direct reservation connections. Everything your restaurant needs to attract new guests online.

You cook. I take care of your digital presence. No cookie-cutter templates, but a custom design that captures your restaurant's atmosphere.`,
    faqs: [
      {
        q: "Kann ich meine Speisekarte selbst aktualisieren?",
        a: "Ja, ich setze ein einfaches CMS auf, mit dem Sie Gerichte, Preise und Tagesangebote selbst ändern können. Ohne Programmierkenntnisse, direkt vom Handy.",
        qEn: "Can I update my menu myself?",
        aEn: "Yes, I set up a simple CMS that lets you change dishes, prices, and daily specials yourself. No coding skills needed, directly from your phone.",
      },
      {
        q: "Welche Reservierungssysteme lassen sich integrieren?",
        a: "Ich integriere OpenTable, Resy, TheFork oder ein eigenes Reservierungsformular. Die Buchung läuft direkt über Ihre Website — ohne Provision an Dritte.",
        qEn: "Which reservation systems can be integrated?",
        aEn: "I integrate OpenTable, Resy, TheFork, or a custom reservation form. Bookings run directly through your website — no commission to third parties.",
      },
      {
        q: "Was kostet eine Restaurant-Website?",
        a: "Restaurant-Websites starten ab €1.990 zum Festpreis. Das beinhaltet Design, Speisekarten-CMS, Reservierung, Google Maps, SEO-Setup und 30 Tage Support nach Launch.",
        qEn: "How much does a restaurant website cost?",
        aEn: "Restaurant websites start at €1,990 at a fixed price. This includes design, menu CMS, reservations, Google Maps, SEO setup, and 30 days post-launch support.",
      },
      {
        q: "Wie werde ich bei Google als Restaurant besser gefunden?",
        a: "Lokale SEO ist der Schlüssel: Google Business Profil, strukturierte Daten für Restaurants (Öffnungszeiten, Speisekarte, Bewertungen), schnelle Ladezeiten und relevante Inhalte. So finden hungrige Gäste in Ihrer Nähe Sie zuerst.",
        qEn: "How can I rank better on Google as a restaurant?",
        aEn: "Local SEO is key: Google Business profile, structured data for restaurants (hours, menu, reviews), fast load times, and relevant content. That's how hungry guests near you find you first.",
      },
    ],
    ctaText: "Restaurant-Website anfragen",
    ctaTextEn: "Request a restaurant website",
    benefits: [
      { text: "Online-Reservierung direkt auf Ihrer Website", textEn: "Online reservations directly on your website" },
      { text: "Speisekarte als CMS — selbst editierbar", textEn: "Menu as CMS — self-editable" },
      { text: "Google Maps & lokale SEO für mehr Laufkundschaft", textEn: "Google Maps & local SEO for more walk-in traffic" },
      { text: "Mobiloptimiert — 70% Ihrer Gäste suchen am Handy", textEn: "Mobile-optimized — 70% of guests search on their phone" },
    ],
  },
  {
    slug: "website-fuer-startups",
    category: "industry",
    title: "Website für Startups | BrightByte Berlin",
    titleEn: "Websites for Startups | BrightByte Berlin",
    metaDescription:
      "MVP-Websites und Landing Pages für Berliner Startups. Schnell, performant, skalierbar. React & Next.js. In 2–4 Wochen live, Festpreis ab €990.",
    metaDescriptionEn:
      "MVP websites and landing pages for Berlin startups. Fast, performant, scalable. React & Next.js. Live in 2–4 weeks, fixed price from €990.",
    heroHeadline: "Website für Startups ·\nschnell live, bereit zu skalieren",
    heroHeadlineEn: "Websites for Startups ·\nfast to market, ready to scale",
    heroSubtext: `Als Startup zählt jeder Tag. Sie brauchen eine Website, die gestern live hätte gehen sollen — nicht in drei Monaten. Eine Seite, die Investoren überzeugt, Early Adopters konvertiert und mit Ihrem Wachstum mithält.

BrightByte baut Startup-Websites mit dem gleichen Tech-Stack, den auch Vercel, Notion und Linear nutzen: React, Next.js, TypeScript. Das Ergebnis: blitzschnelle Performance, sauberer Code und eine Architektur, die skaliert wenn Sie es tun.

Kein Agentur-Overhead, kein wochenlanges Warten auf Feedback-Runden. Ein Entwickler, der Startup-Sprache spricht und in Tagen liefert, nicht Monaten.`,
    heroSubtextEn: `As a startup, every day counts. You need a website that should have been live yesterday — not in three months. A site that convinces investors, converts early adopters, and keeps up with your growth.

BrightByte builds startup websites with the same tech stack used by Vercel, Notion, and Linear: React, Next.js, TypeScript. The result: lightning-fast performance, clean code, and an architecture that scales when you do.

No agency overhead, no weeks of waiting for feedback rounds. One developer who speaks startup and delivers in days, not months.`,
    faqs: [
      {
        q: "Wie schnell kann meine Startup-Website live gehen?",
        a: "Eine Landing Page ist in 1–2 Wochen fertig. Ein MVP mit mehreren Seiten in 2–4 Wochen. Wenn es wirklich brennt, kann ich auch in 5 Tagen eine solide Landing Page liefern.",
        qEn: "How fast can my startup website go live?",
        aEn: "A landing page is ready in 1–2 weeks. An MVP with multiple pages in 2–4 weeks. If it's truly urgent, I can deliver a solid landing page in 5 days.",
      },
      {
        q: "Kann die Website später erweitert werden?",
        a: "Unbedingt. Ich baue mit Next.js und einer sauberen Komponentenarchitektur. Neue Features, Seiten oder eine komplette App lassen sich nahtlos ergänzen — ohne Neuaufbau.",
        qEn: "Can the website be expanded later?",
        aEn: "Absolutely. I build with Next.js and clean component architecture. New features, pages, or a complete app can be added seamlessly — no rebuild needed.",
      },
      {
        q: "Was kostet eine Startup-Website?",
        a: "Landing Pages starten ab €990, mehrseitige MVPs ab €2.500. Enterprise-Qualität zum Startup-Budget. Keine monatlichen Kosten, keine versteckten Gebühren.",
        qEn: "What does a startup website cost?",
        aEn: "Landing pages start at €990, multi-page MVPs from €2,500. Enterprise quality at a startup budget. No monthly costs, no hidden fees.",
      },
      {
        q: "Bietest du auch Design an oder brauche ich einen Designer?",
        a: "Ich liefere das komplette Paket: UI-Design in Figma plus Umsetzung. Kein extra Designer nötig. Wenn Sie bereits Designs haben, setze ich diese pixel-perfect um.",
        qEn: "Do you also offer design or do I need a separate designer?",
        aEn: "I deliver the complete package: UI design in Figma plus implementation. No separate designer needed. If you already have designs, I implement them pixel-perfect.",
      },
    ],
    ctaText: "Startup-Website anfragen",
    ctaTextEn: "Request a startup website",
    benefits: [
      { text: "In 1–2 Wochen live — nicht Monaten", textEn: "Live in 1–2 weeks — not months" },
      { text: "React & Next.js — skalierbar ab Tag 1", textEn: "React & Next.js — scalable from day 1" },
      { text: "Investor-ready Design ohne Agentur-Kosten", textEn: "Investor-ready design without agency costs" },
      { text: "Conversion-optimiert für Early Adopters", textEn: "Conversion-optimized for early adopters" },
    ],
  },
  {
    slug: "website-fuer-anwaelte",
    category: "industry",
    title: "Website für Anwälte | BrightByte Berlin",
    titleEn: "Websites for Law Firms | BrightByte Berlin",
    metaDescription:
      "Professionelle Kanzlei-Websites für Anwälte in Berlin. Seriös, DSGVO-konform, mit Online-Terminbuchung. Festpreis, persönliche Betreuung.",
    metaDescriptionEn:
      "Professional law firm websites for lawyers in Berlin. Professional, GDPR-compliant, with online appointment booking. Fixed pricing, personal support.",
    heroHeadline: "Website für Anwälte ·\nVertrauen aufbauen, Mandanten gewinnen",
    heroHeadlineEn: "Websites for Law Firms ·\nbuild trust, win clients",
    heroSubtext: `Mandanten suchen heute online nach einem Anwalt. Ihre Website ist oft der erste Eindruck — und muss in Sekunden Kompetenz und Seriosität vermitteln. Eine veraltete oder langsame Kanzlei-Website kostet Sie potenzielle Mandanten.

BrightByte baut Kanzlei-Websites, die Vertrauen schaffen: klares, professionelles Design, schnelle Ladezeiten, DSGVO-konforme Kontaktformulare und optionale Online-Terminbuchung. Spezialisiert auf die Bedürfnisse von Anwälten und Kanzleien.

Sie konzentrieren sich auf Ihre Mandanten. Ich sorge dafür, dass neue Mandanten Sie online finden und sofort Vertrauen fassen.`,
    heroSubtextEn: `Today's clients search for lawyers online. Your website is often the first impression — and must convey competence and professionalism within seconds. An outdated or slow law firm website costs you potential clients.

BrightByte builds law firm websites that create trust: clear, professional design, fast load times, GDPR-compliant contact forms, and optional online appointment booking. Specialized for the needs of lawyers and law firms.

You focus on your clients. I make sure new clients find you online and immediately trust you.`,
    faqs: [
      {
        q: "Ist die Website berufsrechtlich konform?",
        a: "Ja, ich achte auf die berufsrechtlichen Anforderungen: korrekte Pflichtangaben im Impressum, Datenschutzerklärung nach DSGVO, keine unzulässige Werbung. Im Zweifel stimmen wir das gemeinsam ab.",
        qEn: "Is the website compliant with professional regulations?",
        aEn: "Yes, I ensure compliance with professional requirements: correct mandatory information in the imprint, GDPR-compliant privacy policy, no impermissible advertising. When in doubt, we coordinate together.",
      },
      {
        q: "Kann ich Rechtsgebiete und Team-Mitglieder selbst pflegen?",
        a: "Ja, über ein einfaches CMS können Sie Rechtsgebiete, Teamprofile und Aktuelles selbst aktualisieren. Keine Programmierkenntnisse nötig.",
        qEn: "Can I manage practice areas and team members myself?",
        aEn: "Yes, through a simple CMS you can update practice areas, team profiles, and news yourself. No coding skills needed.",
      },
      {
        q: "Was kostet eine Kanzlei-Website?",
        a: "Kanzlei-Websites starten ab €2.500 zum Festpreis. Inklusive Design, Entwicklung, CMS, SEO-Grundsetup, DSGVO-konforme Formulare und 30 Tage Support.",
        qEn: "How much does a law firm website cost?",
        aEn: "Law firm websites start at €2,500 at a fixed price. Including design, development, CMS, basic SEO setup, GDPR-compliant forms, and 30 days support.",
      },
      {
        q: "Wie werde ich als Anwalt bei Google besser gefunden?",
        a: "Lokale SEO für Kanzleien: Google Business Profil optimieren, strukturierte Daten (Schema.org für Rechtsanwälte), fachspezifische Inhalte und technische Performance. So finden Mandanten in Ihrer Region Sie zuerst.",
        qEn: "How can I rank better on Google as a lawyer?",
        aEn: "Local SEO for law firms: optimize Google Business profile, structured data (Schema.org for lawyers), specialized content, and technical performance. That's how clients in your area find you first.",
      },
    ],
    ctaText: "Kanzlei-Website anfragen",
    ctaTextEn: "Request a law firm website",
    benefits: [
      { text: "Seriöses Design das Kompetenz vermittelt", textEn: "Professional design that conveys competence" },
      { text: "DSGVO-konform mit verschlüsselten Formularen", textEn: "GDPR-compliant with encrypted forms" },
      { text: "Online-Terminbuchung für Erstgespräche", textEn: "Online booking for initial consultations" },
      { text: "Berufsrechtlich korrekte Pflichtangaben", textEn: "Legally correct mandatory information" },
    ],
  },
  {
    slug: "website-fuer-immobilien",
    category: "industry",
    title: "Website für Immobilien | BrightByte Berlin",
    titleEn: "Real Estate Websites | BrightByte Berlin",
    metaDescription:
      "Immobilien-Websites für Makler und Hausverwaltungen in Berlin. Objektpräsentation, Exposé-Download, Kontaktformulare. Festpreis, schnell fertig.",
    metaDescriptionEn:
      "Real estate websites for agents and property managers in Berlin. Property presentation, exposé downloads, contact forms. Fixed pricing, fast delivery.",
    heroHeadline: "Website für Immobilien ·\nObjekte präsentieren, Interessenten gewinnen",
    heroHeadlineEn: "Real Estate Websites ·\nshowcase properties, attract buyers",
    heroSubtext: `Im Immobilienmarkt entscheidet der erste Eindruck. Interessenten erwarten hochwertige Objekt-Präsentationen, schnelle Kontaktmöglichkeiten und eine Website, die Professionalität ausstrahlt. Ihre Online-Präsenz ist Ihre digitale Visitenkarte.

BrightByte baut Immobilien-Websites, die verkaufen: elegante Objekt-Galerien, Exposé-Downloads, integrierte Kontaktformulare und eine Darstellung, die Ihre Objekte ins beste Licht rückt. Optimiert für mobile Nutzung und lokale Suchen.

Ob Maklerbüro, Hausverwaltung oder Projektentwickler — Sie bekommen eine Website, die Vertrauen schafft und Interessenten in Kunden verwandelt.`,
    heroSubtextEn: `In the real estate market, first impressions decide. Prospects expect high-quality property presentations, quick contact options, and a website that radiates professionalism. Your online presence is your digital business card.

BrightByte builds real estate websites that sell: elegant property galleries, exposé downloads, integrated contact forms, and a presentation that showcases your properties in the best light. Optimized for mobile use and local searches.

Whether you're a brokerage, property manager, or developer — you get a website that builds trust and converts prospects into clients.`,
    faqs: [
      {
        q: "Kann ich Objekte selbst einstellen und verwalten?",
        a: "Ja, über ein CMS können Sie Objekte mit Fotos, Grundrissen, Preisen und Beschreibungen selbst pflegen. Neue Objekte online, verkaufte offline — alles in wenigen Klicks.",
        qEn: "Can I add and manage properties myself?",
        aEn: "Yes, through a CMS you can manage properties with photos, floor plans, prices, and descriptions yourself. New listings online, sold ones offline — all in a few clicks.",
      },
      {
        q: "Lässt sich eine Immobilien-Software anbinden?",
        a: "Ja, ich integriere gängige Schnittstellen wie OpenImmo, FlowFact oder IS24. So können Objekte automatisch zwischen Ihrer Software und Website synchronisiert werden.",
        qEn: "Can real estate software be connected?",
        aEn: "Yes, I integrate common interfaces like OpenImmo, FlowFact, or IS24. Properties can be automatically synchronized between your software and website.",
      },
      {
        q: "Was kostet eine Immobilien-Website?",
        a: "Immobilien-Websites starten ab €2.990 zum Festpreis. Inklusive Objekt-CMS, Galerie, Exposé-Download, Kontaktformulare, SEO und 30 Tage Support.",
        qEn: "How much does a real estate website cost?",
        aEn: "Real estate websites start at €2,990 at a fixed price. Including property CMS, gallery, exposé download, contact forms, SEO, and 30 days support.",
      },
      {
        q: "Wie finden mehr Interessenten meine Objekte online?",
        a: "Durch lokale SEO, strukturierte Daten für Immobilien, schnelle Ladezeiten und eine mobiloptimierte Darstellung. Plus: individuelle Objekt-URLs die bei Google ranken können.",
        qEn: "How can more prospects find my properties online?",
        aEn: "Through local SEO, structured data for real estate, fast load times, and mobile-optimized display. Plus: individual property URLs that can rank on Google.",
      },
    ],
    ctaText: "Immobilien-Website anfragen",
    ctaTextEn: "Request a real estate website",
    benefits: [
      { text: "Elegante Objekt-Galerien mit Exposé-Download", textEn: "Elegant property galleries with exposé download" },
      { text: "CMS zur Selbstverwaltung aller Objekte", textEn: "CMS for self-managing all properties" },
      { text: "Lokale SEO für Ihre Region optimiert", textEn: "Local SEO optimized for your region" },
      { text: "Mobiloptimiert — Interessenten suchen unterwegs", textEn: "Mobile-optimized — prospects search on the go" },
    ],
  },
  // ─── LOCATION PAGES ─────────────────────────────────────────────────
  {
    slug: "webdesign-kreuzberg",
    category: "location",
    title: "Webdesign Kreuzberg | BrightByte Berlin",
    titleEn: "Web Design Kreuzberg | BrightByte Berlin",
    metaDescription:
      "Webdesign aus Berlin Kreuzberg. Moderne Websites für Gastro, Startups und kreative Unternehmen. Persönliche Betreuung, Festpreis, Treffen vor Ort.",
    metaDescriptionEn:
      "Web design from Berlin Kreuzberg. Modern websites for gastro, startups, and creative businesses. Personal support, fixed pricing, in-person meetings.",
    heroHeadline: "Webdesign Kreuzberg ·\nfür Kreative, Gastro & Startups",
    heroHeadlineEn: "Web Design Kreuzberg ·\nfor creatives, gastro & startups",
    heroSubtext: `Kreuzberg ist kreativ, divers und bewegt sich schnell. Ihre Website sollte das widerspiegeln: modern, schnell, individuell. Kein Template von der Stange, sondern ein Design, das zu Ihrem Kiez passt.

BrightByte arbeitet mit Unternehmen in Kreuzberg und kennt die Szene: ob Restaurant am Kottbusser Damm, Startup in der Ritterstraße oder Yoga-Studio am Landwehrkanal. Sie bekommen eine Website, die Ihre Nachbarschaft anspricht und bei lokalen Google-Suchen ganz oben steht.

Kurze Wege, persönliche Treffen am Kanal, schnelle Umsetzung. Ein Webdesigner, der versteht was Kreuzberg ausmacht.`,
    heroSubtextEn: `Kreuzberg is creative, diverse, and moves fast. Your website should reflect that: modern, fast, individual. No off-the-shelf template, but a design that fits your neighborhood.

BrightByte works with businesses in Kreuzberg and knows the scene: whether a restaurant on Kottbusser Damm, a startup on Ritterstraße, or a yoga studio by Landwehrkanal. You get a website that speaks to your neighborhood and ranks at the top of local Google searches.

Short distances, personal meetings by the canal, fast delivery. A web designer who understands what makes Kreuzberg tick.`,
    faqs: [
      {
        q: "Kannst du mich in Kreuzberg persönlich treffen?",
        a: "Ja, ich bin regelmäßig in Kreuzberg unterwegs. Gerne treffen wir uns auf einen Kaffee am Kanal oder in Ihren Räumlichkeiten für ein unverbindliches Erstgespräch.",
        qEn: "Can you meet me in Kreuzberg in person?",
        aEn: "Yes, I'm regularly in Kreuzberg. We can meet for coffee by the canal or at your location for a no-commitment initial chat.",
      },
      {
        q: "Was kostet eine Website für mein Kreuzberger Unternehmen?",
        a: "Landing Pages ab €990, mehrseitige Websites ab €2.500. Alles zum Festpreis und transparent. Kein Stundensatz, keine Überraschungen bei der Rechnung.",
        qEn: "How much does a website cost for my Kreuzberg business?",
        aEn: "Landing pages from €990, multi-page websites from €2,500. All at a fixed price and transparent. No hourly rate, no invoice surprises.",
      },
      {
        q: "Wie schnell ist meine Website fertig?",
        a: "Landing Pages in 1–2 Wochen, mehrseitige Sites in 3–4 Wochen. Schneller als jede Agentur, weil bei mir alles aus einer Hand kommt.",
        qEn: "How fast will my website be ready?",
        aEn: "Landing pages in 1–2 weeks, multi-page sites in 3–4 weeks. Faster than any agency because everything comes from one source.",
      },
      {
        q: "Arbeitest du auch mit mehrsprachigen Websites?",
        a: "Ja, viele Kreuzberger Unternehmen brauchen DE/EN oder DE/TR. Ich setze mehrsprachige Websites mit automatischer Spracherkennung um.",
        qEn: "Do you work with multilingual websites?",
        aEn: "Yes, many Kreuzberg businesses need DE/EN or DE/TR. I build multilingual websites with automatic language detection.",
      },
    ],
    ctaText: "Erstgespräch in Kreuzberg",
    ctaTextEn: "Meet in Kreuzberg",
    benefits: [
      { text: "Persönliches Treffen in Kreuzberg möglich", textEn: "In-person meeting in Kreuzberg possible" },
      { text: "Design das zum Kiez passt — nicht von der Stange", textEn: "Design that fits the neighborhood — not off-the-shelf" },
      { text: "Mehrsprachig: DE/EN und mehr", textEn: "Multilingual: DE/EN and more" },
      { text: "Schnelle Umsetzung durch kurze Wege", textEn: "Fast delivery through short distances" },
    ],
  },
  {
    slug: "webdesign-charlottenburg",
    category: "location",
    title: "Webdesign Charlottenburg | BrightByte Berlin",
    titleEn: "Web Design Charlottenburg | BrightByte Berlin",
    metaDescription:
      "Webdesign für Unternehmen in Berlin Charlottenburg. Elegante Websites für Praxen, Kanzleien und etablierte Geschäfte. Festpreis, persönliche Betreuung.",
    metaDescriptionEn:
      "Web design for businesses in Berlin Charlottenburg. Elegant websites for practices, law firms, and established businesses. Fixed pricing, personal support.",
    heroHeadline: "Webdesign Charlottenburg ·\nelegant, professionell, lokal",
    heroHeadlineEn: "Web Design Charlottenburg ·\nelegant, professional, local",
    heroSubtext: `Charlottenburg steht für Qualität und Beständigkeit. Ihre Website sollte das gleiche Niveau haben: seriös, elegant, professionell. Eine Online-Präsenz, die zu Ihrem etablierten Unternehmen passt.

BrightByte baut Websites für Charlottenburger Unternehmen die Wert auf Qualität legen: Arztpraxen am Kurfürstendamm, Kanzleien in der Kantstraße, traditionsreiche Geschäfte in der Wilmersdorfer. Design mit Klasse, technisch auf dem neuesten Stand.

Persönliche Betreuung, Treffen vor Ort, ein Ansprechpartner der Ihre Ansprüche versteht. Keine anonyme Agentur, sondern ein Partner auf Augenhöhe.`,
    heroSubtextEn: `Charlottenburg stands for quality and permanence. Your website should be at the same level: serious, elegant, professional. An online presence that matches your established business.

BrightByte builds websites for Charlottenburg businesses that value quality: medical practices on Kurfürstendamm, law firms on Kantstraße, traditional shops on Wilmersdorfer. Design with class, technically state-of-the-art.

Personal support, on-site meetings, one contact who understands your standards. No anonymous agency, but a partner at eye level.`,
    faqs: [
      {
        q: "Bietest du Treffen in Charlottenburg an?",
        a: "Ja, gerne. Ob in Ihren Räumlichkeiten oder bei einem Kaffee am Savignyplatz — ich komme zu Ihnen für das Erstgespräch und alle weiteren Abstimmungen.",
        qEn: "Do you offer meetings in Charlottenburg?",
        aEn: "Yes, gladly. Whether at your location or over coffee at Savignyplatz — I come to you for the initial meeting and all further coordination.",
      },
      {
        q: "Passt dein Stil zu etablierten Unternehmen?",
        a: "Absolut. Ich passe das Design an Ihre Zielgruppe an: seriös und elegant für Kanzleien und Praxen, modern und einladend für Einzelhandel und Gastronomie. Kein Einheitsbrei.",
        qEn: "Does your style fit established businesses?",
        aEn: "Absolutely. I adapt the design to your target audience: serious and elegant for law firms and practices, modern and inviting for retail and gastronomy. No one-size-fits-all.",
      },
      {
        q: "Übernimmst du auch die Pflege der Website?",
        a: "Ja, ich biete einen monatlichen Betreuungsvertrag ab €200/Monat an: Updates, kleine Änderungen, Monitoring und Backup. Sie müssen sich um nichts kümmern.",
        qEn: "Do you also handle website maintenance?",
        aEn: "Yes, I offer a monthly maintenance contract from €200/month: updates, small changes, monitoring, and backup. You don't have to worry about anything.",
      },
      {
        q: "Kann ich meine bestehende Website modernisieren lassen?",
        a: "Ja, ein Relaunch ist oft sinnvoller als Flickwerk. Ich analysiere Ihre bestehende Seite, identifiziere Schwachstellen und baue eine moderne Version, die Ihre bestehende Kundschaft wiedererkennt.",
        qEn: "Can I have my existing website modernized?",
        aEn: "Yes, a relaunch is often better than patchwork. I analyze your existing site, identify weak points, and build a modern version that your existing clientele recognizes.",
      },
    ],
    ctaText: "Projekt in Charlottenburg besprechen",
    ctaTextEn: "Discuss a project in Charlottenburg",
    benefits: [
      { text: "Elegantes Design für anspruchsvolle Zielgruppen", textEn: "Elegant design for discerning audiences" },
      { text: "Persönliche Treffen am Savignyplatz oder bei Ihnen", textEn: "Personal meetings at Savignyplatz or your place" },
      { text: "Monatliche Betreuung ab €200 verfügbar", textEn: "Monthly maintenance from €200 available" },
      { text: "Relaunch bestehender Websites möglich", textEn: "Relaunch of existing websites possible" },
    ],
  },
  {
    slug: "webdesign-prenzlauer-berg",
    category: "location",
    title: "Webdesign Prenzlauer Berg | BrightByte Berlin",
    titleEn: "Web Design Prenzlauer Berg | BrightByte Berlin",
    metaDescription:
      "Webdesign für Unternehmen in Prenzlauer Berg. Websites für Familienbetriebe, Cafés und lokale Dienstleister. Modern, schnell, persönlich. Festpreis.",
    metaDescriptionEn:
      "Web design for businesses in Prenzlauer Berg. Websites for family businesses, cafés, and local service providers. Modern, fast, personal. Fixed pricing.",
    heroHeadline: "Webdesign Prenzlauer Berg ·\nlokal verwurzelt, digital stark",
    heroHeadlineEn: "Web Design Prenzlauer Berg ·\nlocally rooted, digitally strong",
    heroSubtext: `Prenzlauer Berg lebt von seinen lokalen Geschäften: dem Café an der Ecke, der Kinderarztpraxis, dem Yoga-Studio, der kleinen Boutique. Ihre Website sollte diese lokale Verbundenheit widerspiegeln und gleichzeitig bei Google sichtbar sein.

BrightByte baut Websites für Unternehmen in Prenzlauer Berg, die ihre Nachbarschaft ansprechen wollen: authentisch, modern, schnell. Mit lokaler SEO, Google Maps Integration und einem Design, das Vertrauen schafft.

Ein Webdesigner, der Ihren Kiez kennt und Ihre Kunden versteht. Persönliche Beratung, faire Preise, schnelle Ergebnisse.`,
    heroSubtextEn: `Prenzlauer Berg lives from its local businesses: the corner café, the pediatric practice, the yoga studio, the small boutique. Your website should reflect this local connection while being visible on Google.

BrightByte builds websites for businesses in Prenzlauer Berg that want to reach their neighborhood: authentic, modern, fast. With local SEO, Google Maps integration, and a design that builds trust.

A web designer who knows your neighborhood and understands your customers. Personal consultation, fair prices, fast results.`,
    faqs: [
      {
        q: "Verstehst du die Zielgruppe in Prenzlauer Berg?",
        a: "Ja, ich kenne den Kiez. Junge Familien, bewusste Konsumenten, qualitätsorientierte Kunden. Das Design und die Ansprache passe ich gezielt darauf an.",
        qEn: "Do you understand the target audience in Prenzlauer Berg?",
        aEn: "Yes, I know the neighborhood. Young families, conscious consumers, quality-oriented customers. I specifically adapt the design and messaging to that.",
      },
      {
        q: "Kann meine Website auch auf Deutsch und Englisch sein?",
        a: "Natürlich. Prenzlauer Berg ist international — eine zweisprachige Website (DE/EN) ist oft sinnvoll und von Anfang an mit eingeplant.",
        qEn: "Can my website be in German and English?",
        aEn: "Of course. Prenzlauer Berg is international — a bilingual website (DE/EN) often makes sense and is planned from the start.",
      },
      {
        q: "Was kostet eine Website für mein lokales Geschäft?",
        a: "Kleine Geschäfts-Websites starten ab €1.500. Inklusive Design, Entwicklung, Google Maps, lokale SEO und 30 Tage Support. Festpreis, keine Überraschungen.",
        qEn: "How much does a website for my local business cost?",
        aEn: "Small business websites start at €1,500. Including design, development, Google Maps, local SEO, and 30 days support. Fixed price, no surprises.",
      },
      {
        q: "Hilfst du auch bei Google Business?",
        a: "Ja, die Optimierung Ihres Google Business Profils gehört zu meinem lokalen SEO-Paket dazu. Das ist oft der schnellste Weg zu mehr lokaler Sichtbarkeit.",
        qEn: "Do you also help with Google Business?",
        aEn: "Yes, optimizing your Google Business profile is part of my local SEO package. It's often the fastest way to more local visibility.",
      },
    ],
    ctaText: "Erstgespräch vereinbaren",
    ctaTextEn: "Schedule a consultation",
    benefits: [
      { text: "Lokale SEO für Ihren Kiez optimiert", textEn: "Local SEO optimized for your neighborhood" },
      { text: "Google Business Profil-Optimierung inklusive", textEn: "Google Business profile optimization included" },
      { text: "Zweisprachig (DE/EN) von Anfang an", textEn: "Bilingual (DE/EN) from the start" },
      { text: "Design das zur Nachbarschaft passt", textEn: "Design that fits the neighborhood" },
    ],
  },
  // ─── NEED PAGES ─────────────────────────────────────────────────────
  {
    slug: "website-relaunch-berlin",
    category: "need",
    title: "Website Relaunch Berlin | BrightByte",
    titleEn: "Website Relaunch Berlin | BrightByte",
    metaDescription:
      "Website Relaunch in Berlin. Veraltete Website modernisieren, Performance verbessern, SEO-Rankings behalten. Festpreis, klarer Zeitplan, kein Risiko.",
    metaDescriptionEn:
      "Website relaunch in Berlin. Modernize outdated websites, improve performance, keep SEO rankings. Fixed pricing, clear timeline, no risk.",
    heroHeadline: "Website Relaunch ·\nmodernisieren ohne Rankings zu verlieren",
    heroHeadlineEn: "Website Relaunch ·\nmodernize without losing rankings",
    heroSubtext: `Ihre aktuelle Website ist veraltet, langsam oder nicht mehr mobil-optimiert — aber Sie haben sich über Jahre Google-Rankings aufgebaut, die Sie nicht verlieren wollen. Ein Website Relaunch ist die Lösung, wenn er richtig gemacht wird.

BrightByte führt Relaunches durch, bei denen Ihre bestehenden Rankings geschützt werden: saubere URL-Weiterleitungen, technisches SEO von Anfang an, schrittweise Migration statt Big-Bang. So wird Ihre neue Website besser, ohne dass Sie bei Google abstürzen.

Dazu kommen moderne Performance, zeitgemäßes Design und eine Architektur, die für die nächsten Jahre bereit ist. Kein Risiko-Relaunch, sondern ein kontrollierter Übergang.`,
    heroSubtextEn: `Your current website is outdated, slow, or not mobile-optimized — but you've built up Google rankings over the years that you don't want to lose. A website relaunch is the solution, when done right.

BrightByte handles relaunches that protect your existing rankings: clean URL redirects, technical SEO from the start, gradual migration instead of big-bang. Your new website gets better without crashing on Google.

Plus modern performance, contemporary design, and an architecture ready for years to come. No risky relaunch, but a controlled transition.`,
    faqs: [
      {
        q: "Verliere ich meine Google-Rankings beim Relaunch?",
        a: "Nicht wenn es richtig gemacht wird. Ich erstelle eine vollständige Redirect-Map, behalte URL-Strukturen wo möglich bei, und sorge für saubere technische SEO. In den meisten Fällen verbessern sich die Rankings sogar.",
        qEn: "Will I lose my Google rankings with a relaunch?",
        aEn: "Not when done right. I create a complete redirect map, keep URL structures where possible, and ensure clean technical SEO. In most cases, rankings actually improve.",
      },
      {
        q: "Wie lange dauert ein Website Relaunch?",
        a: "Je nach Umfang 3–6 Wochen. Ich arbeite mit einer Staging-Umgebung, sodass Ihre alte Website bis zum finalen Switch online bleibt. Kein Ausfall, kein Risiko.",
        qEn: "How long does a website relaunch take?",
        aEn: "Depending on scope, 3–6 weeks. I work with a staging environment so your old website stays online until the final switch. No downtime, no risk.",
      },
      {
        q: "Was passiert mit meinen bestehenden Inhalten?",
        a: "Alle Inhalte werden migriert und dabei optimiert. Texte bleiben erhalten, Bilder werden für Performance optimiert, und die Seitenstruktur wird verbessert. Nichts geht verloren.",
        qEn: "What happens to my existing content?",
        aEn: "All content is migrated and optimized in the process. Texts are preserved, images are optimized for performance, and page structure is improved. Nothing gets lost.",
      },
      {
        q: "Was kostet ein Website Relaunch?",
        a: "Relaunches starten ab €2.500 zum Festpreis. Der genaue Preis hängt von Umfang, Seitenanzahl und gewünschten neuen Features ab. Kostenlose Erstberatung inklusive.",
        qEn: "What does a website relaunch cost?",
        aEn: "Relaunches start at €2,500 at a fixed price. The exact price depends on scope, number of pages, and desired new features. Free initial consultation included.",
      },
    ],
    ctaText: "Relaunch besprechen",
    ctaTextEn: "Discuss your relaunch",
    benefits: [
      { text: "Rankings bleiben erhalten durch saubere Redirects", textEn: "Rankings preserved through clean redirects" },
      { text: "Staging-Umgebung — kein Ausfall Ihrer alten Seite", textEn: "Staging environment — no downtime for your old site" },
      { text: "Performance-Boost: Lighthouse 95+ garantiert", textEn: "Performance boost: Lighthouse 95+ guaranteed" },
      { text: "Inhalte werden migriert und optimiert", textEn: "Content migrated and optimized" },
    ],
  },
  {
    slug: "landing-page-erstellen",
    category: "need",
    title: "Landing Page erstellen lassen | BrightByte Berlin",
    titleEn: "Landing Page Creation | BrightByte Berlin",
    metaDescription:
      "Landing Page erstellen lassen in Berlin. Conversion-optimiert, mobil-perfekt, in 1–2 Wochen fertig. Ab €990 Festpreis. React & Next.js.",
    metaDescriptionEn:
      "Get a landing page built in Berlin. Conversion-optimized, mobile-perfect, ready in 1–2 weeks. From €990 fixed price. React & Next.js.",
    heroHeadline: "Landing Page erstellen ·\neine Seite, ein Ziel, maximale Wirkung",
    heroHeadlineEn: "Landing Page Creation ·\none page, one goal, maximum impact",
    heroSubtext: `Eine Landing Page hat nur eine Aufgabe: Besucher in Kunden verwandeln. Kein Menü-Labyrinth, keine Ablenkung — nur eine klare Botschaft und ein überzeugender Call-to-Action. Ob Produkt-Launch, Kampagne oder Lead-Generierung.

BrightByte baut Landing Pages, die konvertieren: psychologisch durchdachtes Layout, schnelle Ladezeiten, A/B-Test-ready und perfekt auf allen Geräten. Mit React und Next.js — technisch auf dem neuesten Stand.

In 1–2 Wochen haben Sie eine Seite, die arbeitet. Keine Template-Lösung, sondern individuell auf Ihr Angebot und Ihre Zielgruppe zugeschnitten.`,
    heroSubtextEn: `A landing page has only one job: convert visitors into customers. No menu maze, no distractions — just a clear message and a compelling call-to-action. Whether it's a product launch, campaign, or lead generation.

BrightByte builds landing pages that convert: psychologically designed layout, fast load times, A/B-test-ready, and perfect on all devices. With React and Next.js — technically state-of-the-art.

In 1–2 weeks you have a page that works. No template solution, but individually tailored to your offering and target audience.`,
    faqs: [
      {
        q: "Was ist in einer Landing Page enthalten?",
        a: "Hero-Section mit klarer Headline, Nutzenargumente, Social Proof (Testimonials/Logos), Features/Vorteile, FAQ und ein prominenter CTA. Dazu: SEO-Grundsetup, Analytics und Mobiloptimierung.",
        qEn: "What's included in a landing page?",
        aEn: "Hero section with clear headline, value propositions, social proof (testimonials/logos), features/benefits, FAQ, and a prominent CTA. Plus: basic SEO setup, analytics, and mobile optimization.",
      },
      {
        q: "Kann ich die Landing Page für Ads nutzen?",
        a: "Absolut. Die Seite wird auf Conversion optimiert: schnelle Ladezeit (wichtig für Quality Score), klares Above-the-fold, und passende UTM-Parameter für Tracking. Perfekt für Google Ads und Meta Ads.",
        qEn: "Can I use the landing page for ads?",
        aEn: "Absolutely. The page is optimized for conversion: fast load time (important for Quality Score), clear above-the-fold, and matching UTM parameters for tracking. Perfect for Google Ads and Meta Ads.",
      },
      {
        q: "Wie schnell ist eine Landing Page fertig?",
        a: "Standard: 1–2 Wochen von Kickoff bis Live. Bei dringenden Kampagnen kann ich auch in 5 Werktagen liefern. Sie bekommen einen festen Termin, an den ich mich halte.",
        qEn: "How fast is a landing page ready?",
        aEn: "Standard: 1–2 weeks from kickoff to live. For urgent campaigns, I can also deliver in 5 business days. You get a fixed date that I stick to.",
      },
      {
        q: "Was kostet eine Landing Page?",
        a: "Landing Pages starten ab €990 zum Festpreis. Das beinhaltet Design, Entwicklung, Mobiloptimierung, SEO-Setup und 2 Feedback-Runden. Keine versteckten Kosten.",
        qEn: "How much does a landing page cost?",
        aEn: "Landing pages start at €990 at a fixed price. This includes design, development, mobile optimization, SEO setup, and 2 feedback rounds. No hidden costs.",
      },
    ],
    ctaText: "Landing Page anfragen",
    ctaTextEn: "Request a landing page",
    benefits: [
      { text: "Conversion-optimiertes Layout mit klarem CTA", textEn: "Conversion-optimized layout with clear CTA" },
      { text: "In 1–2 Wochen live — perfekt für Kampagnen", textEn: "Live in 1–2 weeks — perfect for campaigns" },
      { text: "A/B-Test-ready für kontinuierliche Optimierung", textEn: "A/B-test-ready for continuous optimization" },
      { text: "Ab €990 Festpreis — alles inklusive", textEn: "From €990 fixed price — all inclusive" },
    ],
  },
  {
    slug: "schnelle-website",
    category: "need",
    title: "Schnelle Website Berlin | BrightByte",
    titleEn: "Fast Website Berlin | BrightByte",
    metaDescription:
      "Schnelle Websites die bei Google ranken. Lighthouse 95+, Core Web Vitals grün, unter 2 Sekunden Ladezeit. Performance-First Entwicklung mit Next.js.",
    metaDescriptionEn:
      "Fast websites that rank on Google. Lighthouse 95+, green Core Web Vitals, under 2 second load time. Performance-first development with Next.js.",
    heroHeadline: "Schnelle Website ·\nPerformance die Google belohnt",
    heroHeadlineEn: "Fast Website ·\nperformance that Google rewards",
    heroSubtext: `Jede Sekunde Ladezeit kostet Sie Kunden: 53% der mobilen Nutzer verlassen eine Seite, die länger als 3 Sekunden lädt. Google bestraft langsame Websites mit schlechteren Rankings. Performance ist kein Nice-to-have, sondern Pflicht.

BrightByte baut Websites mit Performance-First-Ansatz: optimierte Bilder, minimaler JavaScript-Footprint, Edge-Caching und Server-Side Rendering. Das Ergebnis: Lighthouse-Scores über 95, grüne Core Web Vitals und Ladezeiten unter 2 Sekunden.

Nicht durch Tricks, sondern durch solide Architektur mit Next.js und React. Websites die schnell sind und schnell bleiben — auch wenn Inhalte wachsen.`,
    heroSubtextEn: `Every second of load time costs you customers: 53% of mobile users leave a page that takes longer than 3 seconds to load. Google penalizes slow websites with worse rankings. Performance isn't nice-to-have, it's a must.

BrightByte builds websites with a performance-first approach: optimized images, minimal JavaScript footprint, edge caching, and server-side rendering. The result: Lighthouse scores above 95, green Core Web Vitals, and load times under 2 seconds.

Not through tricks, but through solid architecture with Next.js and React. Websites that are fast and stay fast — even as content grows.`,
    faqs: [
      {
        q: "Was bedeutet Lighthouse-Score 95+?",
        a: "Lighthouse ist Googles offizielles Tool zur Website-Bewertung. Ein Score über 95 (von 100) bedeutet: Ihre Website ist technisch exzellent. Das betrifft Ladezeit, Barrierefreiheit, SEO und Best Practices. Fast keine Website erreicht das ohne gezieltes Tuning.",
        qEn: "What does Lighthouse score 95+ mean?",
        aEn: "Lighthouse is Google's official website assessment tool. A score above 95 (out of 100) means: your website is technically excellent. This covers load time, accessibility, SEO, and best practices. Almost no website achieves this without targeted tuning.",
      },
      {
        q: "Ist meine bestehende Website langsam?",
        a: "Testen Sie es: Geben Sie Ihre URL auf pagespeed.web.dev ein. Wenn Ihr Score unter 80 liegt oder Core Web Vitals rot sind, verlieren Sie aktiv Rankings und Kunden. Ich biete einen kostenlosen Quick-Check an.",
        qEn: "Is my existing website slow?",
        aEn: "Test it: enter your URL at pagespeed.web.dev. If your score is below 80 or Core Web Vitals are red, you're actively losing rankings and customers. I offer a free quick check.",
      },
      {
        q: "Kann meine bestehende Website schneller gemacht werden?",
        a: "Oft ja. Bildoptimierung, Code-Cleanup, Caching und Lazy Loading bringen oft 30–50% Verbesserung. Bei grundlegenden Architekturproblemen ist ein Relaunch aber der bessere Weg.",
        qEn: "Can my existing website be made faster?",
        aEn: "Often yes. Image optimization, code cleanup, caching, and lazy loading often bring 30–50% improvement. For fundamental architecture issues, a relaunch is the better path.",
      },
      {
        q: "Was kostet eine schnelle Website?",
        a: "Neue schnelle Websites ab €990 (Landing Page) bzw. €2.500 (mehrseitig). Performance-Optimierung bestehender Seiten ab €990. Alles zum Festpreis mit messbaren Ergebnissen.",
        qEn: "What does a fast website cost?",
        aEn: "New fast websites from €990 (landing page) or €2,500 (multi-page). Performance optimization of existing sites from €990. All at a fixed price with measurable results.",
      },
    ],
    ctaText: "Performance-Check anfragen",
    ctaTextEn: "Request a performance check",
    benefits: [
      { text: "Lighthouse 95+ garantiert — messbar, nicht versprochen", textEn: "Lighthouse 95+ guaranteed — measurable, not just promised" },
      { text: "Core Web Vitals im grünen Bereich", textEn: "Core Web Vitals in the green zone" },
      { text: "Unter 2 Sekunden Ladezeit auf Mobilgeräten", textEn: "Under 2 second load time on mobile devices" },
      { text: "Nachhaltig schnell — keine Quick-Fixes die verfallen", textEn: "Sustainably fast — no quick fixes that expire" },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPage | undefined {
  return seoPages.find((p) => p.slug === slug);
}
