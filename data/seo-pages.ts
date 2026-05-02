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

BrightByte bietet Ihnen genau das: Enterprise-Qualität zum fairen Festpreis. Jedes Projekt bekommt einen klaren Zeitplan, transparente Kommunikation und eine Website, die auf allen Geräten überzeugt. Keine Überraschungen bei der Rechnung, keine endlosen Feedbackschleifen. Sie wissen vor Projektstart exakt, was Sie investieren und wann das Ergebnis steht. Von der ersten Nachricht bis zum Go-Live sprechen Sie mit einer Person, die Design und Technik aus einer Hand liefert. Das spart Zeit, verhindert Missverständnisse und sorgt dafür, dass Ihr Projekt schneller fertig wird als bei jeder Agentur.

Als Solo-Entwickler mit sechs Jahren Erfahrung bei Agenturen und SAP arbeite ich mit React, Next.js und modernen Performance-Standards. Das Ergebnis: Lighthouse-Scores über 95, schnelle Ladezeiten und eine Seite, die bei Google von Anfang an sichtbar ist. Jede Website wird mit technischem SEO ausgeliefert, mobiloptimiert und auf Barrierefreiheit geprüft. Nach dem Launch erhalten Sie 30 Tage Support, eine Einweisung in das CMS und die Sicherheit, dass ich auch danach für Fragen erreichbar bin. Keine Agentur, bei der Sie nach Projektabschluss eine Nummer im System sind.`,
    heroSubtextEn: `Looking for a web developer in Berlin who turns your idea into a fast, professional website. Without hidden costs or months of waiting?

BrightByte offers exactly that: enterprise-quality at a fair fixed price. Every project gets a clear timeline, transparent communication, and a website that works beautifully on all devices. No invoice surprises, no endless feedback loops. You know exactly what you're investing and when the result will be ready before the project starts. From the first message to go-live, you speak with one person who delivers both design and technology. That saves time, prevents miscommunication, and ensures your project is finished faster than at any agency.

As a solo developer with six years of experience at agencies and SAP, I work with React, Next.js, and modern performance standards. The result: Lighthouse scores above 95, fast load times, and a site that ranks on Google from day one. Every website ships with technical SEO, mobile optimization, and accessibility checks. After launch, you receive 30 days of support, a CMS walkthrough, and the assurance that I'm still reachable for questions afterward. No agency where you become just a number in the system after project completion.`,
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

BrightByte baut Praxis-Websites, die Vertrauen schaffen: klares Design, schnelle Ladezeiten, Online-Terminbuchung und volle DSGVO-Konformität. Alles, was eine moderne Arztpraxis braucht, um online gefunden zu werden und Patienten zu gewinnen. Die Terminbuchung integriere ich direkt in Ihre Seite, sodass Patienten rund um die Uhr buchen können, ohne Ihr Praxisteam zu belasten. Ihre Behandlungsschwerpunkte, Teamvorstellung und Praxisfotos werden so präsentiert, dass Patienten sofort ein Gefühl für Ihre Praxis bekommen. Lokale SEO sorgt dafür, dass Patienten in Ihrer Nähe Sie bei Google zuerst finden.

Sie konzentrieren sich auf Ihre Patienten. Ich kümmere mich um Ihren digitalen Auftritt. Von der Erstberatung bis zum Go-Live in wenigen Wochen, ohne technischen Aufwand auf Ihrer Seite. Nach dem Launch pflegen Sie Inhalte wie Öffnungszeiten, Neuigkeiten oder Teamänderungen selbst über ein einfaches Verwaltungssystem. Ich zeige Ihnen oder Ihrem Praxisteam in einer kurzen Einweisung, wie alles funktioniert. Und sollte sich etwas ändern, ob neue Leistungen oder ein neuer Standort, ist die Website in wenigen Tagen angepasst.`,
    heroSubtextEn: `Today's patients search for doctors online and decide within seconds whether a practice looks trustworthy. A professional website is your digital business card and often the first point of contact.

BrightByte builds practice websites that create trust: clean design, fast load times, online appointment booking, and full GDPR compliance. Everything a modern medical practice needs to be found online and attract patients. I integrate appointment booking directly into your site so patients can book around the clock without burdening your practice team. Your treatment specialties, team introduction, and practice photos are presented in a way that gives patients an immediate feel for your practice. Local SEO ensures that patients near you find you first on Google.

You focus on your patients. I take care of your digital presence. From initial consultation to go-live in just a few weeks, without any technical effort on your side. After launch, you manage content like opening hours, news, or team changes yourself through a simple administration system. I show you or your practice team how everything works in a brief walkthrough. And if something changes, whether new services or a new location, the website is updated within a few days.`,
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

BrightByte optimiert Ihre Website von Grund auf: Ladezeiten unter 2 Sekunden, saubere Seitenstruktur, korrekte Meta-Tags, strukturierte Daten und Mobile-First-Design. Keine Black-Hat-Tricks, sondern nachhaltige Verbesserungen, die Google belohnt. Ich analysiere jeden Aspekt Ihrer Website systematisch: von der Serverantwortzeit über die Bildoptimierung bis zur internen Verlinkung. Jede Maßnahme wird priorisiert nach Aufwand und Wirkung, sodass Sie schnell erste Ergebnisse sehen. Technische Schulden, die sich über Jahre angesammelt haben, werden schrittweise abgebaut, ohne dabei die Stabilität Ihrer bestehenden Rankings zu gefährden.

Jede Optimierung wird mit vorher/nachher-Daten dokumentiert. Sie sehen genau, welche Maßnahmen welche Ergebnisse bringen: Core Web Vitals, Keyword-Rankings und organischer Traffic, schwarz auf weiß. Nach der initialen Optimierung erhalten Sie einen monatlichen Bericht, der die Entwicklung Ihrer wichtigsten Metriken zeigt. Keine vagen Versprechen, sondern konkrete Zahlen, die belegen, dass sich Ihre Investition auszahlt. Und falls bestimmte Maßnahmen nicht den gewünschten Effekt zeigen, passen wir die Strategie datenbasiert an.`,
    heroSubtextEn: `Your website exists, but nobody finds it? When potential customers google your services and end up at the competition, you lose revenue every day. Technical SEO optimization changes that.

BrightByte optimizes your website from the ground up: load times under 2 seconds, clean page structure, correct meta tags, structured data, and mobile-first design. No black-hat tricks, just sustainable improvements that Google rewards. I analyze every aspect of your website systematically: from server response time to image optimization to internal linking. Every measure is prioritized by effort and impact so you see initial results quickly. Technical debt that has accumulated over years is reduced step by step without endangering the stability of your existing rankings.

Every optimization is documented with before/after data. You see exactly which measures produce which results: Core Web Vitals, keyword rankings, and organic traffic, in black and white. After the initial optimization, you receive a monthly report showing the development of your most important metrics. No vague promises, but concrete numbers that prove your investment is paying off. And if certain measures don't show the desired effect, we adjust the strategy based on data.`,
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

Ob Café in der Torstraße, Praxis am Hackeschen Markt oder Startup am Rosenthaler Platz: Sie bekommen eine Website, die Ihre Nachbarschaft anspricht und bei lokalen Google-Suchen ganz oben steht. Persönliche Treffen, schnelle Abstimmung, kurze Wege. Ich kenne die Anforderungen lokaler Unternehmen in Mitte: von der zweisprachigen Speisekarte für internationale Gäste bis zum Buchungssystem für eine Praxis. Das Design wird individuell auf Ihre Branche und Zielgruppe abgestimmt, damit Besucher sofort spüren, dass sie am richtigen Ort sind.

Kein anonymes Agentur-Erlebnis, kein Offshore-Team. Ein Entwickler, ein Ansprechpartner, ein klarer Plan. Und ein Ergebnis, auf das Sie stolz sind. Ob Sie eine komplett neue Website brauchen oder Ihre bestehende Seite modernisieren möchten: wir besprechen alles persönlich vor Ort und Sie wissen nach dem Erstgespräch genau, was Sie bekommen und was es kostet. Die Nähe bedeutet auch: wenn nach dem Launch etwas geändert werden muss, bin ich schnell verfügbar. Keine Tickets, keine Warteschlangen, sondern direkte Kommunikation auf kurzem Weg.`,
    heroSubtextEn: `A web designer around the corner who understands your industry. That makes the difference. BrightByte is based in Berlin Mitte and prefers working with local businesses that deserve a professional online presence.

Whether a café on Torstraße, a practice near Hackescher Markt, or a startup at Rosenthaler Platz: you get a website that speaks to your neighborhood and ranks at the top of local Google searches. Personal meetings, quick alignment, short distances. I know the requirements of local businesses in Mitte: from the bilingual menu for international guests to the booking system for a practice. The design is individually tailored to your industry and target audience so visitors immediately feel they're in the right place.

No anonymous agency experience, no offshore team. One developer, one contact person, one clear plan. And a result you're proud of. Whether you need a completely new website or want to modernize your existing one: we discuss everything in person on-site and after the initial meeting, you know exactly what you'll get and what it costs. The proximity also means: if something needs to be changed after launch, I'm quickly available. No tickets, no queues, just direct communication through short channels.`,
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

BrightByte baut Restaurant-Websites, die Appetit machen: schnelle Ladezeiten, perfekte Darstellung auf dem Smartphone, Google Maps Integration und direkte Reservierungs-Anbindung. Alles was Ihr Restaurant braucht, um online neue Gäste zu gewinnen. Die Speisekarte wird als interaktives Element eingebunden, mit Allergenkennzeichnung, Tagesgerichten und saisonalen Highlights, die Sie selbst aktualisieren können. Professionelle Food-Fotografie wird großflächig inszeniert und lässt Besucher sofort wissen, welches Erlebnis sie erwartet. Dazu kommt ein optimiertes Google Business Profil, das Ihre Bewertungen prominent zeigt und hungrigen Gästen den direkten Weg zu Ihnen weist.

Sie kochen. Ich kümmere mich um Ihren digitalen Auftritt. Keine Vorlagen von der Stange, sondern ein individuelles Design, das die Atmosphäre Ihres Restaurants einfängt. Von der Farbwelt bis zur Typografie wird alles auf Ihr Konzept abgestimmt, ob gemütliche Weinbar, lebhafte Pizzeria oder gehobene Küche. Nach dem Launch pflegen Sie Tagesgerichte, Events und Öffnungszeiten über ein simples System, das auch ohne technisches Wissen funktioniert. Und wenn Sie Unterstützung brauchen, bin ich nur eine Nachricht entfernt.`,
    heroSubtextEn: `Your guests decide within seconds whether to book at your place or the competitor next door. A professional website with an up-to-date menu, online reservations, and appealing photos makes the difference.

BrightByte builds restaurant websites that make mouths water: fast load times, perfect mobile display, Google Maps integration, and direct reservation connections. Everything your restaurant needs to attract new guests online. The menu is integrated as an interactive element with allergen labeling, daily specials, and seasonal highlights that you can update yourself. Professional food photography is displayed prominently and lets visitors immediately know what experience awaits them. Plus an optimized Google Business profile that prominently shows your reviews and points hungry guests directly to your door.

You cook. I take care of your digital presence. No cookie-cutter templates, but a custom design that captures your restaurant's atmosphere. From the color palette to the typography, everything is tailored to your concept, whether it's a cozy wine bar, a lively pizzeria, or fine dining. After launch, you manage daily specials, events, and opening hours through a simple system that works without technical knowledge. And when you need support, I'm just a message away.`,
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

BrightByte baut Startup-Websites mit dem gleichen Tech-Stack, den auch Vercel, Notion und Linear nutzen: React, Next.js, TypeScript. Das Ergebnis: blitzschnelle Performance, sauberer Code und eine Architektur, die skaliert wenn Sie es tun. Die Codebase ist von Tag 1 so aufgebaut, dass Ihr nächster Entwickler sofort weiterarbeiten kann. Dokumentation, TypeScript-Typen und eine klare Komponentenstruktur sorgen dafür, dass nichts zur Blackbox wird. Und falls Sie Investoren pitchen: eine professionelle, schnelle Website sagt mehr über Ihre technische Kompetenz als jedes Slide-Deck.

Kein Agentur-Overhead, kein wochenlanges Warten auf Feedback-Runden. Ein Entwickler, der Startup-Sprache spricht und in Tagen liefert, nicht Monaten. Ich verstehe, dass sich Anforderungen schnell ändern, dass das Budget begrenzt ist und dass gestern besser als morgen ist. Deshalb arbeite ich iterativ: erst eine solide Basis, dann schrittweise Erweiterungen basierend auf echtem Nutzerfeedback. So investieren Sie nur in Features, die tatsächlich gebraucht werden, statt ein perfektes Produkt zu planen, das nie fertig wird.`,
    heroSubtextEn: `As a startup, every day counts. You need a website that should have been live yesterday — not in three months. A site that convinces investors, converts early adopters, and keeps up with your growth.

BrightByte builds startup websites with the same tech stack used by Vercel, Notion, and Linear: React, Next.js, TypeScript. The result: lightning-fast performance, clean code, and an architecture that scales when you do. The codebase is structured from day 1 so that your next developer can continue working immediately. Documentation, TypeScript types, and a clear component structure ensure nothing becomes a black box. And if you're pitching investors: a professional, fast website says more about your technical competence than any slide deck.

No agency overhead, no weeks of waiting for feedback rounds. One developer who speaks startup and delivers in days, not months. I understand that requirements change quickly, that budgets are limited, and that yesterday is better than tomorrow. That's why I work iteratively: first a solid foundation, then gradual extensions based on real user feedback. This way you only invest in features that are actually needed instead of planning a perfect product that never gets finished.`,
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

BrightByte baut Kanzlei-Websites, die Vertrauen schaffen: klares, professionelles Design, schnelle Ladezeiten, DSGVO-konforme Kontaktformulare und optionale Online-Terminbuchung. Spezialisiert auf die Bedürfnisse von Anwälten und Kanzleien. Die Website stellt Ihre Rechtsgebiete strukturiert dar und macht es Mandanten leicht, den richtigen Ansprechpartner zu finden. Jedes Element vermittelt Kompetenz und Seriosität: von der Typografie über die Farbwelt bis zur Bildsprache. Dazu kommen korrekte berufsrechtliche Pflichtangaben im Impressum und eine Datenschutzerklärung, die den aktuellen Anforderungen entspricht.

Sie konzentrieren sich auf Ihre Mandanten. Ich sorge dafür, dass neue Mandanten Sie online finden und sofort Vertrauen fassen. Lokale SEO bringt Sie bei Google nach vorn, wenn potenzielle Mandanten nach Rechtsberatung in Ihrer Region suchen. Über ein einfaches CMS aktualisieren Sie Teamprofile, Rechtsgebiete oder aktuelle Beiträge selbst. Und wenn Sie einen monatlichen Retainer für Updates und Monitoring wünschen, ist das unkompliziert möglich. So bleibt Ihre Kanzlei-Website immer aktuell und professionell, ohne dass Sie sich selbst mit Technik beschäftigen müssen.`,
    heroSubtextEn: `Today's clients search for lawyers online. Your website is often the first impression — and must convey competence and professionalism within seconds. An outdated or slow law firm website costs you potential clients.

BrightByte builds law firm websites that create trust: clear, professional design, fast load times, GDPR-compliant contact forms, and optional online appointment booking. Specialized for the needs of lawyers and law firms. The website presents your practice areas in a structured way and makes it easy for clients to find the right contact person. Every element conveys competence and professionalism: from typography to color palette to imagery. Plus correct mandatory professional information in the legal notice and a privacy policy that meets current requirements.

You focus on your clients. I make sure new clients find you online and immediately trust you. Local SEO puts you ahead on Google when potential clients search for legal counsel in your area. Through a simple CMS, you update team profiles, practice areas, or current articles yourself. And if you'd like a monthly retainer for updates and monitoring, that's easily arranged. This way your law firm website stays current and professional without you having to deal with technology yourself.`,
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

BrightByte baut Immobilien-Websites, die verkaufen: elegante Objekt-Galerien, Exposé-Downloads, integrierte Kontaktformulare und eine Darstellung, die Ihre Objekte ins beste Licht rückt. Optimiert für mobile Nutzung und lokale Suchen. Jedes Objekt bekommt eine eigene Seite mit Bildergalerie, Grundriss, Lagebeschreibung und Download-Option für das Exposé als PDF. Interessenten können direkt über ein Formular eine Besichtigung anfragen, ohne Umwege über Portale. Die Architektur ist so aufgebaut, dass neue Objekte in wenigen Minuten angelegt werden, mit allen relevanten Daten und Bildern.

Ob Maklerbüro, Hausverwaltung oder Projektentwickler — Sie bekommen eine Website, die Vertrauen schafft und Interessenten in Kunden verwandelt. Ihre Objekte werden so präsentiert, wie es ihrem Wert entspricht: hochwertig, übersichtlich und mit allen Informationen, die ein Kaufinteressent oder Mieter braucht. Nach dem Launch verwalten Sie Ihr Portfolio selbst über ein CMS: neue Objekte online stellen, verkaufte markieren, Bilder tauschen. Und die Website wächst mit Ihrem Geschäft, ob zehn oder hundert Objekte im Portfolio.`,
    heroSubtextEn: `In the real estate market, first impressions decide. Prospects expect high-quality property presentations, quick contact options, and a website that radiates professionalism. Your online presence is your digital business card.

BrightByte builds real estate websites that sell: elegant property galleries, exposé downloads, integrated contact forms, and a presentation that showcases your properties in the best light. Optimized for mobile use and local searches. Each property gets its own page with an image gallery, floor plan, location description, and download option for the exposé as PDF. Prospects can request a viewing directly through a form without detours through portals. The architecture is built so that new properties can be created in just a few minutes with all relevant data and images.

Whether you're a brokerage, property manager, or developer — you get a website that builds trust and converts prospects into clients. Your properties are presented at the level they deserve: high-quality, clear, and with all the information a buyer or tenant needs. After launch, you manage your portfolio yourself through a CMS: put new properties online, mark sold ones, swap images. And the website grows with your business, whether you have ten or a hundred properties in your portfolio.`,
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

BrightByte arbeitet mit Unternehmen in Kreuzberg und kennt die Szene: ob Restaurant am Kottbusser Damm, Startup in der Ritterstraße oder Yoga-Studio am Landwehrkanal. Sie bekommen eine Website, die Ihre Nachbarschaft anspricht und bei lokalen Google-Suchen ganz oben steht. Kreuzberg ist international und mehrsprachig, deshalb biete ich DE/EN und auf Wunsch weitere Sprachen von Anfang an mit an. Das Design greift die kreative Energie des Kiezes auf: mutig, modern und authentisch, ohne dabei die Professionalität zu vernachlässigen, die Ihre Kunden erwarten.

Kurze Wege, persönliche Treffen am Kanal, schnelle Umsetzung. Ein Webdesigner, der versteht was Kreuzberg ausmacht. Wir besprechen Ihr Projekt bei einem Kaffee in der Nachbarschaft und ich liefere eine Website, die Ihr Geschäft so zeigt, wie es wirklich ist. Keine generischen Stockfotos, sondern authentische Bilder und Texte, die Ihre Stammkunden wiedererkennen und Neukunden neugierig machen. Von der Idee bis zur fertigen Website vergehen in der Regel nur 2 bis 3 Wochen, und danach sind Sie bei Google für lokale Suchanfragen aus Kreuzberg sichtbar.`,
    heroSubtextEn: `Kreuzberg is creative, diverse, and moves fast. Your website should reflect that: modern, fast, individual. No off-the-shelf template, but a design that fits your neighborhood.

BrightByte works with businesses in Kreuzberg and knows the scene: whether a restaurant on Kottbusser Damm, a startup on Ritterstraße, or a yoga studio by Landwehrkanal. You get a website that speaks to your neighborhood and ranks at the top of local Google searches. Kreuzberg is international and multilingual, which is why I offer DE/EN and additional languages from the start if needed. The design picks up the creative energy of the neighborhood: bold, modern, and authentic, without neglecting the professionalism your customers expect.

Short distances, personal meetings by the canal, fast delivery. A web designer who understands what makes Kreuzberg tick. We discuss your project over coffee in the neighborhood and I deliver a website that shows your business as it really is. No generic stock photos, but authentic images and texts that your regulars recognize and new customers find intriguing. From idea to finished website, it typically takes just 2 to 3 weeks, and afterward you're visible on Google for local searches from Kreuzberg.`,
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

BrightByte baut Websites für Charlottenburger Unternehmen die Wert auf Qualität legen: Arztpraxen am Kurfürstendamm, Kanzleien in der Kantstraße, traditionsreiche Geschäfte in der Wilmersdorfer. Design mit Klasse, technisch auf dem neuesten Stand. Die Website spiegelt die Seriosität und den Qualitätsanspruch Ihrer Kundschaft wider: durchdachte Typografie, elegante Farbgebung und eine Struktur, die Professionalität auf den ersten Blick vermittelt. Dazu kommen schnelle Ladezeiten und eine mobiloptimierte Darstellung, die auch auf dem Tablet im Wartezimmer oder am Smartphone unterwegs überzeugt.

Persönliche Betreuung, Treffen vor Ort, ein Ansprechpartner der Ihre Ansprüche versteht. Keine anonyme Agentur, sondern ein Partner auf Augenhöhe. Ich nehme mir Zeit für Ihr Projekt und verstehe, dass etablierte Unternehmen andere Anforderungen haben als Startups. Ihre Website muss Bestandskunden bestätigen, dass sie am richtigen Ort sind, und gleichzeitig neue Kunden überzeugen. Nach dem Launch kümmere ich mich auf Wunsch um laufende Updates, technische Wartung und inhaltliche Änderungen, damit Sie sich ganz auf Ihr Kerngeschäft konzentrieren können.`,
    heroSubtextEn: `Charlottenburg stands for quality and permanence. Your website should be at the same level: serious, elegant, professional. An online presence that matches your established business.

BrightByte builds websites for Charlottenburg businesses that value quality: medical practices on Kurfürstendamm, law firms on Kantstraße, traditional shops on Wilmersdorfer. Design with class, technically state-of-the-art. The website reflects the seriousness and quality expectations of your clientele: thoughtful typography, elegant color schemes, and a structure that conveys professionalism at first glance. Plus fast load times and a mobile-optimized display that looks convincing on a tablet in the waiting room or on a smartphone on the go.

Personal support, on-site meetings, one contact who understands your standards. No anonymous agency, but a partner at eye level. I take time for your project and understand that established businesses have different requirements than startups. Your website needs to confirm to existing customers that they're in the right place while simultaneously convincing new ones. After launch, I handle ongoing updates, technical maintenance, and content changes on request so you can focus entirely on your core business.`,
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

BrightByte baut Websites für Unternehmen in Prenzlauer Berg, die ihre Nachbarschaft ansprechen wollen: authentisch, modern, schnell. Mit lokaler SEO, Google Maps Integration und einem Design, das Vertrauen schafft. Ob Sie Familien ansprechen, die nach einer Kinderarztpraxis suchen, oder Yogis, die ein neues Studio entdecken wollen: die Website wird auf Ihre spezifische Zielgruppe im Kiez zugeschnitten. Ich optimiere für lokale Suchbegriffe, richte Ihr Google Business Profil ein und sorge dafür, dass Bewertungen und Standortinfos direkt auf Ihrer Website sichtbar sind.

Ein Webdesigner, der Ihren Kiez kennt und Ihre Kunden versteht. Persönliche Beratung, faire Preise, schnelle Ergebnisse. Wir treffen uns auf einen Kaffee am Helmholtzplatz oder in Ihren Räumlichkeiten und besprechen, was Ihre Website leisten soll. In 2 bis 3 Wochen ist das Ergebnis online. Danach pflegen Sie Inhalte selbst über ein einfaches CMS, und ich stehe für Fragen und Erweiterungen jederzeit bereit. Keine langen Vertragsbindungen, keine Abhängigkeiten, sondern eine Zusammenarbeit, die sich an Ihren Bedürfnissen orientiert.`,
    heroSubtextEn: `Prenzlauer Berg lives from its local businesses: the corner café, the pediatric practice, the yoga studio, the small boutique. Your website should reflect this local connection while being visible on Google.

BrightByte builds websites for businesses in Prenzlauer Berg that want to reach their neighborhood: authentic, modern, fast. With local SEO, Google Maps integration, and a design that builds trust. Whether you're targeting families looking for a pediatric practice or yogis discovering a new studio: the website is tailored to your specific target audience in the neighborhood. I optimize for local search terms, set up your Google Business profile, and ensure reviews and location info are visible directly on your website.

A web designer who knows your neighborhood and understands your customers. Personal consultation, fair prices, fast results. We meet for coffee at Helmholtzplatz or at your location and discuss what your website should accomplish. In 2 to 3 weeks, the result is online. Afterward, you manage content yourself through a simple CMS, and I'm always available for questions and extensions. No long contract commitments, no dependencies, but a collaboration that adapts to your needs.`,
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

BrightByte führt Relaunches durch, bei denen Ihre bestehenden Rankings geschützt werden: saubere URL-Weiterleitungen, technisches SEO von Anfang an, schrittweise Migration statt Big-Bang. So wird Ihre neue Website besser, ohne dass Sie bei Google abstürzen. Jede bestehende URL wird erfasst, bewertet und entweder beibehalten oder mit einer permanenten Weiterleitung versehen. Strukturierte Daten, Meta-Tags und interne Verlinkungen werden während des Relaunches optimiert, nicht nur übernommen. Das Ergebnis: in den meisten Fällen verbessern sich Ihre Rankings nach dem Relaunch sogar, weil die neue Seite technisch sauberer und schneller ist als die alte.

Dazu kommen moderne Performance, zeitgemäßes Design und eine Architektur, die für die nächsten Jahre bereit ist. Kein Risiko-Relaunch, sondern ein kontrollierter Übergang. Ich arbeite mit einer Staging-Umgebung, auf der Sie die neue Website in Ruhe prüfen können, bevor sie live geht. Ihre alte Seite bleibt bis zum letzten Moment online. Am Tag des Launches ist der Übergang nahtlos: DNS-Wechsel, Redirect-Aktivierung und ein letzter Check, ob alles korrekt funktioniert. In den Wochen danach überwache ich Rankings und Traffic, um sofort reagieren zu können, falls etwas Aufmerksamkeit braucht.`,
    heroSubtextEn: `Your current website is outdated, slow, or not mobile-optimized — but you've built up Google rankings over the years that you don't want to lose. A website relaunch is the solution, when done right.

BrightByte handles relaunches that protect your existing rankings: clean URL redirects, technical SEO from the start, gradual migration instead of big-bang. Your new website gets better without crashing on Google. Every existing URL is captured, evaluated, and either kept or given a permanent redirect. Structured data, meta tags, and internal links are optimized during the relaunch, not just carried over. The result: in most cases, your rankings actually improve after the relaunch because the new site is technically cleaner and faster than the old one.

Plus modern performance, contemporary design, and an architecture ready for years to come. No risky relaunch, but a controlled transition. I work with a staging environment where you can review the new website at your own pace before it goes live. Your old site stays online until the very last moment. On launch day, the transition is seamless: DNS switch, redirect activation, and a final check that everything works correctly. In the weeks that follow, I monitor rankings and traffic to react immediately if anything needs attention.`,
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

BrightByte baut Landing Pages, die konvertieren: psychologisch durchdachtes Layout, schnelle Ladezeiten, A/B-Test-ready und perfekt auf allen Geräten. Mit React und Next.js — technisch auf dem neuesten Stand. Jede Sektion ist strategisch aufgebaut: eine klare Headline über dem Fold, überzeugende Nutzenargumente, Social Proof durch Testimonials oder Logos, und ein Call-to-Action, der ins Auge springt. Die Ladezeit liegt unter 2 Sekunden, was nicht nur die User Experience verbessert, sondern auch Ihren Google Ads Quality Score steigert und damit Ihre Klickkosten senkt.

In 1–2 Wochen haben Sie eine Seite, die arbeitet. Keine Template-Lösung, sondern individuell auf Ihr Angebot und Ihre Zielgruppe zugeschnitten. Nach dem Launch messen wir gemeinsam die Ergebnisse und optimieren iterativ: welche Headline konvertiert besser, welcher CTA-Text bringt mehr Klicks, an welcher Stelle springen Besucher ab. So wird Ihre Landing Page mit der Zeit immer effektiver. Und wenn eine Kampagne endet und die nächste startet, passen wir die Seite schnell an neue Botschaften und Zielgruppen an.`,
    heroSubtextEn: `A landing page has only one job: convert visitors into customers. No menu maze, no distractions — just a clear message and a compelling call-to-action. Whether it's a product launch, campaign, or lead generation.

BrightByte builds landing pages that convert: psychologically designed layout, fast load times, A/B-test-ready, and perfect on all devices. With React and Next.js — technically state-of-the-art. Every section is strategically built: a clear headline above the fold, compelling value propositions, social proof through testimonials or logos, and a call-to-action that catches the eye. Load time is under 2 seconds, which not only improves user experience but also boosts your Google Ads Quality Score, thereby reducing your cost per click.

In 1–2 weeks you have a page that works. No template solution, but individually tailored to your offering and target audience. After launch, we measure results together and optimize iteratively: which headline converts better, which CTA text gets more clicks, at which point visitors drop off. This way your landing page becomes more effective over time. And when one campaign ends and the next begins, we quickly adapt the page to new messaging and target audiences.`,
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

BrightByte baut Websites mit Performance-First-Ansatz: optimierte Bilder, minimaler JavaScript-Footprint, Edge-Caching und Server-Side Rendering. Das Ergebnis: Lighthouse-Scores über 95, grüne Core Web Vitals und Ladezeiten unter 2 Sekunden. Jede Entscheidung in der Entwicklung wird unter dem Gesichtspunkt der Performance getroffen: Welche Bibliotheken werden wirklich gebraucht? Wo kann Code gesplittet werden? Welche Ressourcen können vorab geladen werden? Das Ergebnis ist eine Website, die sich sofort anfühlt, egal ob Ihre Besucher über schnelles WLAN oder mobiles Netz zugreifen.

Nicht durch Tricks, sondern durch solide Architektur mit Next.js und React. Websites die schnell sind und schnell bleiben — auch wenn Inhalte wachsen. Die Architektur ist so aufgebaut, dass hunderte von Seiten genauso schnell laden wie zehn. Bilder werden automatisch in modernen Formaten ausgeliefert und für jede Bildschirmgröße optimiert. Und im Gegensatz zu Quick-Fixes, die nach einigen Monaten verfallen, hält die Performance langfristig, weil die Grundlagen stimmen. Nach dem Launch erhalten Sie einen detaillierten Performance-Bericht und die Gewissheit, dass Ihre Website in der schnellsten Liga spielt.`,
    heroSubtextEn: `Every second of load time costs you customers: 53% of mobile users leave a page that takes longer than 3 seconds to load. Google penalizes slow websites with worse rankings. Performance isn't nice-to-have, it's a must.

BrightByte builds websites with a performance-first approach: optimized images, minimal JavaScript footprint, edge caching, and server-side rendering. The result: Lighthouse scores above 95, green Core Web Vitals, and load times under 2 seconds. Every development decision is made with performance in mind: Which libraries are actually needed? Where can code be split? Which resources can be preloaded? The result is a website that feels instant, regardless of whether visitors access it via fast WiFi or mobile network.

Not through tricks, but through solid architecture with Next.js and React. Websites that are fast and stay fast — even as content grows. The architecture is built so that hundreds of pages load just as fast as ten. Images are automatically delivered in modern formats and optimized for every screen size. And unlike quick fixes that expire after a few months, the performance holds long-term because the foundations are right. After launch, you receive a detailed performance report and the certainty that your website plays in the fastest league.`,
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
  {
    slug: "wordpress-alternative",
    category: "service",
    title: "WordPress Alternative Berlin | BrightByte",
    titleEn: "WordPress Alternative Berlin | BrightByte",
    metaDescription:
      "Moderne WordPress Alternative aus Berlin. Schneller, sicherer und wartungsfrei. Individuelle Websites mit React und Next.js zum Festpreis.",
    metaDescriptionEn:
      "Modern WordPress alternative from Berlin. Faster, more secure, and maintenance-free. Custom websites with React and Next.js at a fixed price.",
    heroHeadline: "WordPress Alternative ·\nschneller, sicherer, wartungsfrei",
    heroHeadlineEn: "WordPress Alternative ·\nfaster, more secure, maintenance-free",
    heroSubtext: `WordPress war jahrelang der Standard. Aber langsame Ladezeiten, ständige Updates, Plugin-Konflikte und Sicherheitslücken kosten Sie Zeit und Nerven. Und Ihre Besucher springen ab, bevor die Seite geladen hat.

BrightByte baut Ihre Website mit React und Next.js. Das Ergebnis: Ladezeiten unter 2 Sekunden, keine Plugin-Updates, keine gehackten Seiten. Die gleiche Flexibilität wie WordPress, aber mit moderner Technologie, die Google liebt und Ihre Besucher begeistert. Während WordPress-Seiten regelmäßig gewartet werden müssen, damit nichts bricht, läuft eine Next.js Website stabil und sicher ohne Ihr Zutun. Kein nächtliches Aufwachen wegen einer gehackten Seite, kein Stress wegen inkompatiblen Plugin-Versionen. Und das Beste: Ihre Website wird mit der Zeit nicht langsamer, weil keine aufgeblähte Datenbank im Hintergrund arbeitet.

Sie bekommen eine Website, die einfach funktioniert. Inhalte pflegen Sie über ein intuitives CMS, ohne sich um Technik kümmern zu müssen. Kein WordPress-Wissen nötig, keine monatlichen Wartungskosten für Plugins. Das CMS ist so aufgebaut, dass Sie Texte, Bilder und neue Seiten genauso einfach bearbeiten wie in WordPress, nur ohne den technischen Overhead. Auch Ihr Team kann Inhalte aktualisieren, ganz ohne Schulung oder Entwickler im Hintergrund. Und sollte sich Ihre Website in Zukunft weiterentwickeln, ist die Architektur so gebaut, dass neue Funktionen jederzeit ergänzt werden können.`,
    heroSubtextEn: `WordPress was the standard for years. But slow load times, constant updates, plugin conflicts, and security vulnerabilities cost you time and nerves. And your visitors leave before the page even loads.

BrightByte builds your website with React and Next.js. The result: load times under 2 seconds, no plugin updates, no hacked sites. The same flexibility as WordPress, but with modern technology that Google loves and your visitors enjoy. While WordPress sites need regular maintenance to keep things from breaking, a Next.js website runs stable and secure without any effort on your part. No waking up at night because your site got hacked, no stress over incompatible plugin versions. And the best part: your website doesn't get slower over time because there's no bloated database working in the background.

You get a website that simply works. You manage content through an intuitive CMS without worrying about technology. No WordPress knowledge needed, no monthly maintenance costs for plugins. The CMS is designed so you can edit texts, images, and new pages just as easily as in WordPress, only without the technical overhead. Your team can update content too, without training or a developer in the background. And should your website evolve in the future, the architecture is built so that new features can be added at any time.`,
    faqs: [
      {
        q: "Kann ich Inhalte selbst bearbeiten ohne WordPress?",
        a: "Ja. Ich setze ein Headless CMS wie Sanity auf, das genauso einfach zu bedienen ist wie WordPress. Texte, Bilder und Seiten ändern Sie direkt im Browser. Der Unterschied: kein Plugin-Chaos, keine Updates, keine Sicherheitsrisiken.",
        qEn: "Can I edit content myself without WordPress?",
        aEn: "Yes. I set up a headless CMS like Sanity that's just as easy to use as WordPress. You edit texts, images, and pages directly in the browser. The difference: no plugin chaos, no updates, no security risks.",
      },
      {
        q: "Was macht Next.js besser als WordPress?",
        a: "Geschwindigkeit: Next.js Seiten laden in unter 2 Sekunden (WordPress oft 4+). Sicherheit: keine Datenbank-Angriffe, keine veralteten Plugins. SEO: Google bevorzugt schnelle Seiten. Und das Beste: null Wartungsaufwand für Sie.",
        qEn: "What makes Next.js better than WordPress?",
        aEn: "Speed: Next.js pages load in under 2 seconds (WordPress often 4+). Security: no database attacks, no outdated plugins. SEO: Google prefers fast pages. And the best part: zero maintenance effort for you.",
      },
      {
        q: "Kann ich meine bestehende WordPress-Seite migrieren?",
        a: "Absolut. Ich übernehme alle Inhalte, behalte Ihre URL-Struktur bei (wichtig für SEO) und richte Weiterleitungen ein. Ihre Google-Rankings bleiben erhalten, Ihre Seite wird nur schneller und sicherer.",
        qEn: "Can I migrate my existing WordPress site?",
        aEn: "Absolutely. I transfer all content, keep your URL structure (important for SEO), and set up redirects. Your Google rankings stay intact, your site just gets faster and more secure.",
      },
      {
        q: "Was kostet eine Website ohne WordPress?",
        a: "Landing Pages starten ab €990, mehrseitige Websites ab €2.500. Das ist vergleichbar mit WordPress-Agenturen, nur dass Sie danach keine laufenden Wartungskosten haben. Alles zum Festpreis, fertig in 2 bis 4 Wochen.",
        qEn: "What does a website without WordPress cost?",
        aEn: "Landing pages start at €990, multi-page websites from €2,500. That's comparable to WordPress agencies, except you have no ongoing maintenance costs afterward. All at a fixed price, ready in 2 to 4 weeks.",
      },
    ],
    ctaText: "Beratung anfragen",
    ctaTextEn: "Request a consultation",
    benefits: [
      { text: "Ladezeit unter 2 Sekunden statt WordPress-typischer 4+", textEn: "Load time under 2 seconds instead of WordPress-typical 4+" },
      { text: "Keine Updates, keine Plugins, keine Sicherheitslücken", textEn: "No updates, no plugins, no security vulnerabilities" },
      { text: "Inhalte selbst pflegen über ein modernes CMS", textEn: "Manage content yourself via a modern CMS" },
      { text: "Bessere Google-Rankings durch schnellere Performance", textEn: "Better Google rankings through faster performance" },
    ],
  },
  {
    slug: "react-entwicklung-berlin",
    category: "service",
    title: "React Entwicklung Berlin | BrightByte",
    titleEn: "React Development Berlin | BrightByte",
    metaDescription:
      "React Entwicklung in Berlin. Performante Web-Apps und Websites mit React, Next.js und TypeScript. Sechs Jahre Erfahrung, Festpreis, persönlicher Kontakt.",
    metaDescriptionEn:
      "React development in Berlin. Performant web apps and websites with React, Next.js, and TypeScript. Six years of experience, fixed pricing, personal contact.",
    heroHeadline: "React Entwicklung Berlin ·\nmoderne Web-Apps, solide gebaut",
    heroHeadlineEn: "React Development Berlin ·\nmodern web apps, solidly built",
    heroSubtext: `React ist die Technologie hinter Facebook, Airbnb und Spotify. Aber Sie brauchen keine Tech-Giganten, um davon zu profitieren. Ob interaktive Web-App, performante Unternehmensseite oder individuelles Dashboard: React liefert die Basis für schnelle, wartbare und skalierbare Lösungen.

BrightByte bringt sechs Jahre React-Erfahrung aus Agentur und Enterprise (SAP) in Ihr Projekt. TypeScript für fehlerfreien Code, Next.js für blitzschnelle Performance, und ein klarer Entwicklungsprozess mit wöchentlichen Updates. Keine Blackbox, sondern transparente Zusammenarbeit. Jede Komponente wird testbar und wiederverwendbar gebaut, sodass Ihr Projekt auch in zwei Jahren noch wartbar ist. Der Code folgt denselben Standards, die auch große Tech-Unternehmen intern einsetzen: strict typing, automatisierte Tests und klare Architekturentscheidungen, die dokumentiert werden.

Sie bekommen nicht nur sauberen Code, sondern eine Lösung, die Ihr Unternehmen voranbringt. Und einen Entwickler, der auch nach dem Launch erreichbar ist. Wöchentliche Demo-Sessions zeigen Ihnen den Fortschritt, und Entscheidungen treffen wir gemeinsam statt hinter verschlossenen Türen. Nach dem Launch unterstütze ich Sie bei Weiterentwicklungen, Performance-Monitoring und technischen Fragen. Ob kleines Feature oder größere Erweiterung: der Einstieg ist nahtlos, weil derselbe Entwickler am Code arbeitet, der ihn auch geschrieben hat.`,
    heroSubtextEn: `React is the technology behind Facebook, Airbnb, and Spotify. But you don't need tech giants to benefit from it. Whether it's an interactive web app, a performant company website, or a custom dashboard: React provides the foundation for fast, maintainable, and scalable solutions.

BrightByte brings six years of React experience from agencies and enterprise (SAP) to your project. TypeScript for error-free code, Next.js for lightning-fast performance, and a clear development process with weekly updates. No black box, but transparent collaboration. Every component is built to be testable and reusable, so your project remains maintainable even two years from now. The code follows the same standards that large tech companies use internally: strict typing, automated tests, and clear architectural decisions that are documented.

You don't just get clean code, but a solution that moves your business forward. And a developer who's still reachable after launch. Weekly demo sessions show you the progress, and decisions are made together rather than behind closed doors. After launch, I support you with further development, performance monitoring, and technical questions. Whether it's a small feature or a larger extension: the onboarding is seamless because the same developer works on the code who originally wrote it.`,
    faqs: [
      {
        q: "Warum React statt einer einfacheren Lösung?",
        a: "React lohnt sich, wenn Ihre Website mehr als statische Seiten braucht: interaktive Formulare, Dashboards, Echtzeit-Updates oder komplexe Nutzerflows. Für eine einfache 5-Seiten-Website empfehle ich ehrlich eine schlankere Lösung. In einem Erstgespräch klären wir, was für Sie passt.",
        qEn: "Why React instead of a simpler solution?",
        aEn: "React makes sense when your website needs more than static pages: interactive forms, dashboards, real-time updates, or complex user flows. For a simple 5-page website, I honestly recommend a leaner solution. In an initial call, we clarify what fits you.",
      },
      {
        q: "Arbeitest du auch mit bestehenden React-Projekten?",
        a: "Ja. Ob neues Feature, Performance-Optimierung oder Code-Refactoring: ich steige auch in bestehende Codebases ein. Voraussetzung: saubere Git-Historie und ein kurzes Onboarding. Das können wir im Erstgespräch klären.",
        qEn: "Do you also work with existing React projects?",
        aEn: "Yes. Whether it's a new feature, performance optimization, or code refactoring: I also jump into existing codebases. Requirements: clean Git history and a brief onboarding. We can clarify this in an initial call.",
      },
      {
        q: "Was kostet React-Entwicklung?",
        a: "Kleine Features und Komponenten ab €990, komplette Web-Apps ab €4.500. Alles zum Festpreis nach einer klaren Anforderungsanalyse. Sie wissen vor Projektstart exakt, was Sie investieren.",
        qEn: "What does React development cost?",
        aEn: "Small features and components from €990, complete web apps from €4,500. All at a fixed price after a clear requirements analysis. You know exactly what you're investing before the project starts.",
      },
      {
        q: "Welche React-Frameworks verwendest du?",
        a: "Next.js für Websites und Web-Apps mit SEO-Anforderungen. Für reine SPAs oder interne Tools auch Vite mit React Router. Dazu TypeScript in jedem Projekt, und Tailwind CSS oder Styled Components für das Styling.",
        qEn: "Which React frameworks do you use?",
        aEn: "Next.js for websites and web apps with SEO requirements. For pure SPAs or internal tools, also Vite with React Router. Plus TypeScript in every project, and Tailwind CSS or Styled Components for styling.",
      },
    ],
    ctaText: "Projekt besprechen",
    ctaTextEn: "Discuss your project",
    benefits: [
      { text: "Sechs Jahre React-Erfahrung aus Agentur und Enterprise", textEn: "Six years of React experience from agency and enterprise" },
      { text: "TypeScript und Next.js als Standard in jedem Projekt", textEn: "TypeScript and Next.js as standard in every project" },
      { text: "Wöchentliche Updates und transparenter Fortschritt", textEn: "Weekly updates and transparent progress" },
      { text: "Festpreis nach klarer Anforderungsanalyse", textEn: "Fixed price after clear requirements analysis" },
    ],
  },
  {
    slug: "webdesign-fuer-kmu",
    category: "service",
    title: "Webdesign für KMU Berlin | BrightByte",
    titleEn: "Web Design for SMBs Berlin | BrightByte",
    metaDescription:
      "Professionelles Webdesign für KMU in Berlin. Moderne Websites zum Festpreis, fertig in 2 bis 4 Wochen. Persönlicher Ansprechpartner, keine Agentur-Overhead.",
    metaDescriptionEn:
      "Professional web design for SMBs in Berlin. Modern websites at a fixed price, ready in 2 to 4 weeks. Personal contact, no agency overhead.",
    heroHeadline: "Webdesign für KMU ·\nprofessionell ohne Agentur-Preise",
    heroHeadlineEn: "Web Design for SMBs ·\nprofessional without agency prices",
    heroSubtext: `Als kleines oder mittelständisches Unternehmen brauchen Sie eine Website, die Kunden überzeugt. Aber Sie brauchen keine Agentur mit zehn Mitarbeitern und fünfstelligem Budget. Was Sie brauchen: einen Ansprechpartner, der zuhört, schnell liefert und einen fairen Preis macht.

BrightByte ist genau das. Ein erfahrener Entwickler, der Websites baut, die aussehen wie von einer Top-Agentur, aber zum Bruchteil des Preises. Festpreis ab €990, persönliche Betreuung, und eine Website die in 2 bis 4 Wochen online ist. Jedes Projekt wird von einer Person betreut, die Design und Technik gleichermaßen beherrscht. Das spart Ihnen den Abstimmungs-Overhead, der bei Agenturen Wochen frisst. Und Sie bekommen Enterprise-Qualität: performante Architektur, sauberen Code und eine Website, die bei Google von Anfang an gut abschneidet.

Kein Vertriebs-Ping-Pong, keine Übergaben zwischen Designern und Entwicklern. Sie sprechen mit einer Person, die Ihr Projekt von Anfang bis Ende betreut. Und die auch nach dem Launch noch da ist. Bei Fragen schreiben Sie eine E-Mail und bekommen innerhalb von 24 Stunden eine Antwort, nicht von einem Support-Ticket-System, sondern direkt von der Person, die Ihre Website gebaut hat. Updates, kleine Änderungen oder neue Seiten lassen sich jederzeit unkompliziert ergänzen. So wächst Ihre Website mit Ihrem Unternehmen, ohne dass Sie jedes Mal von vorne anfangen müssen.`,
    heroSubtextEn: `As a small or medium-sized business, you need a website that convinces customers. But you don't need an agency with ten employees and a five-figure budget. What you need: a contact person who listens, delivers fast, and offers a fair price.

BrightByte is exactly that. An experienced developer who builds websites that look like they're from a top agency, but at a fraction of the price. Fixed price from €990, personal support, and a website that's online in 2 to 4 weeks. Every project is handled by one person who masters both design and technology. That saves you the coordination overhead that eats up weeks at agencies. And you get enterprise quality: performant architecture, clean code, and a website that performs well on Google from day one.

No sales ping-pong, no handoffs between designers and developers. You speak with one person who manages your project from start to finish. And who's still there after launch. When you have questions, you send an email and get a response within 24 hours, not from a support ticket system, but directly from the person who built your website. Updates, small changes, or new pages can be added at any time without hassle. That way your website grows with your business without having to start from scratch each time.`,
    faqs: [
      {
        q: "Was kostet eine KMU-Website?",
        a: "Landing Pages ab €990, mehrseitige Websites mit CMS ab €2.500. Das ist ein Bruchteil dessen, was Agenturen verlangen. Und trotzdem bekommen Sie Enterprise-Qualität: sauberer Code, schnelle Ladezeiten, perfektes SEO.",
        qEn: "What does an SMB website cost?",
        aEn: "Landing pages from €990, multi-page websites with CMS from €2,500. That's a fraction of what agencies charge. And you still get enterprise quality: clean code, fast load times, perfect SEO.",
      },
      {
        q: "Kann ich Inhalte selbst aktualisieren?",
        a: "Ja. Ich richte ein einfaches CMS ein, über das Sie Texte, Bilder und neue Seiten anlegen können. Ohne Programmierkenntnisse, direkt im Browser. Bei Fragen bin ich jederzeit erreichbar.",
        qEn: "Can I update content myself?",
        aEn: "Yes. I set up a simple CMS where you can edit texts, images, and create new pages. No coding skills needed, directly in the browser. I'm always reachable if you have questions.",
      },
      {
        q: "Wie läuft ein Projekt ab?",
        a: "Erstgespräch, Konzept, Design-Entwurf, Entwicklung, Feedback, Launch. Jeder Schritt ist klar definiert, Sie sehen regelmäßig Fortschritt und können jederzeit Feedback geben. Keine Überraschungen.",
        qEn: "How does a project work?",
        aEn: "Initial call, concept, design draft, development, feedback, launch. Every step is clearly defined, you see regular progress and can give feedback at any time. No surprises.",
      },
      {
        q: "Was unterscheidet dich von Baukästen wie Wix oder Squarespace?",
        a: "Baukästen sind günstiger, aber limitiert: langsame Ladezeiten, eingeschränktes Design, schlechte Google-Rankings. Eine individuell entwickelte Website ist schneller, flexibler und zahlt sich langfristig aus. Und kostet oft weniger als gedacht.",
        qEn: "What sets you apart from builders like Wix or Squarespace?",
        aEn: "Builders are cheaper but limited: slow load times, restricted design, poor Google rankings. A custom-built website is faster, more flexible, and pays off long-term. And often costs less than you'd think.",
      },
    ],
    ctaText: "Angebot anfragen",
    ctaTextEn: "Request a quote",
    benefits: [
      { text: "Festpreis ab €990 ohne versteckte Kosten", textEn: "Fixed price from €990 with no hidden costs" },
      { text: "Ein Ansprechpartner für Design und Entwicklung", textEn: "One contact person for design and development" },
      { text: "Fertig in 2 bis 4 Wochen statt Monaten", textEn: "Ready in 2 to 4 weeks instead of months" },
      { text: "Enterprise-Qualität ohne Agentur-Preise", textEn: "Enterprise quality without agency prices" },
    ],
  },
  {
    slug: "website-fuer-handwerker",
    category: "industry",
    title: "Website für Handwerker | BrightByte Berlin",
    titleEn: "Websites for Tradespeople | BrightByte Berlin",
    metaDescription:
      "Professionelle Websites für Handwerksbetriebe in Berlin. Lokale SEO, Kontaktformular, Referenzen. Festpreis, fertig in 2 bis 3 Wochen.",
    metaDescriptionEn:
      "Professional websites for trade businesses in Berlin. Local SEO, contact forms, references. Fixed pricing, ready in 2 to 3 weeks.",
    heroHeadline: "Website für Handwerker ·\nmehr Aufträge durch digitale Präsenz",
    heroHeadlineEn: "Websites for Tradespeople ·\nmore jobs through digital presence",
    heroSubtext: `Ihre Kunden suchen online nach einem Handwerker in der Nähe. Wer keine professionelle Website hat, wird schlicht nicht gefunden. Und wer eine hat, die langsam lädt oder altmodisch wirkt, verliert den Auftrag an den Konkurrenten mit dem besseren Auftritt.

BrightByte baut Websites für Handwerksbetriebe, die Vertrauen schaffen und Aufträge generieren. Klares Design, echte Referenzfotos, einfaches Kontaktformular und lokale SEO, damit Sie in Ihrer Region bei Google ganz oben stehen. Die Website zeigt Ihre besten Arbeiten in einer professionellen Galerie und macht es Interessenten leicht, sofort Kontakt aufzunehmen. Dazu kommt ein optimiertes Google Business Profil, das Ihre Bewertungen sichtbar macht und den Weg zu Ihnen zeigt. Ob Elektriker, Schreiner, Maler oder Installateur: Sie bekommen eine Seite, die Ihre Kompetenz auf den ersten Blick vermittelt.

Kein technischer Aufwand für Sie. Ich kümmere mich um alles: vom Design über die Entwicklung bis zur Google-Optimierung. In 2 bis 3 Wochen ist Ihre neue Website online. Und Sie können sich auf das konzentrieren, was Sie am besten können. Neue Projekte und Referenzbilder fügen Sie selbst hinzu, über ein einfaches System, das ich Ihnen in einer kurzen Einweisung zeige. Nach dem Launch überwache ich die Google-Sichtbarkeit und gebe Ihnen Tipps, wie Sie mit wenig Aufwand mehr Anfragen generieren. Ihre Investition zahlt sich in der Regel innerhalb weniger Wochen durch neue Aufträge aus, die direkt über die Website kommen.`,
    heroSubtextEn: `Your customers search online for a tradesperson nearby. Without a professional website, you simply won't be found. And if you have one that loads slowly or looks outdated, you lose the job to the competitor with the better presence.

BrightByte builds websites for trade businesses that create trust and generate jobs. Clean design, real reference photos, simple contact forms, and local SEO so you rank at the top of Google in your area. The website showcases your best work in a professional gallery and makes it easy for prospects to get in touch immediately. On top of that, an optimized Google Business profile makes your reviews visible and shows the way to your business. Whether you're an electrician, carpenter, painter, or plumber: you get a site that conveys your expertise at first glance.

No technical effort for you. I handle everything: from design to development to Google optimization. In 2 to 3 weeks, your new website is online. And you can focus on what you do best. You add new projects and reference photos yourself through a simple system that I show you in a brief introduction. After launch, I monitor your Google visibility and give you tips on how to generate more inquiries with minimal effort. Your investment typically pays for itself within a few weeks through new jobs that come directly through the website.`,
    faqs: [
      {
        q: "Was kostet eine Handwerker-Website?",
        a: "Handwerker-Websites starten ab €1.490 zum Festpreis. Das beinhaltet Design, Entwicklung, Kontaktformular, Referenzgalerie, Google Maps Integration und SEO-Grundsetup. Keine laufenden Kosten außer Hosting.",
        qEn: "What does a tradesperson website cost?",
        aEn: "Tradesperson websites start at €1,490 at a fixed price. This includes design, development, contact form, reference gallery, Google Maps integration, and basic SEO setup. No ongoing costs except hosting.",
      },
      {
        q: "Wie werde ich bei Google als Handwerker gefunden?",
        a: "Lokale SEO ist der Schlüssel: Google Business Profil optimieren, lokale Suchbegriffe auf der Website, Bewertungen einbinden und schnelle Ladezeiten. Ich richte das alles bei Projektstart mit ein.",
        qEn: "How do I get found on Google as a tradesperson?",
        aEn: "Local SEO is key: optimizing your Google Business profile, local search terms on the website, integrating reviews, and fast load times. I set all of this up at the start of the project.",
      },
      {
        q: "Kann ich Referenzbilder und Bewertungen selbst hinzufügen?",
        a: "Ja. Über ein einfaches CMS laden Sie neue Projektfotos hoch und verwalten Kundenbewertungen. Kein technisches Wissen nötig. Ich zeige Ihnen in 15 Minuten, wie es funktioniert.",
        qEn: "Can I add reference photos and reviews myself?",
        aEn: "Yes. Through a simple CMS, you upload new project photos and manage customer reviews. No technical knowledge needed. I show you how it works in 15 minutes.",
      },
      {
        q: "Brauche ich wirklich eine eigene Website als Handwerker?",
        a: "Ja. 87% der Kunden recherchieren online, bevor sie einen Handwerker beauftragen. Portale wie MyHammer nehmen Provision. Eine eigene Website bringt Ihnen Anfragen direkt, ohne Vermittler, und stärkt Ihre Marke langfristig.",
        qEn: "Do I really need my own website as a tradesperson?",
        aEn: "Yes. 87% of customers research online before hiring a tradesperson. Platforms like MyHammer take commission. Your own website brings you inquiries directly, without middlemen, and strengthens your brand long-term.",
      },
    ],
    ctaText: "Website anfragen",
    ctaTextEn: "Request a website",
    benefits: [
      { text: "Lokale SEO für Aufträge aus Ihrer Region", textEn: "Local SEO for jobs from your region" },
      { text: "Referenzgalerie mit echten Projektfotos", textEn: "Reference gallery with real project photos" },
      { text: "Einfaches Kontaktformular für schnelle Anfragen", textEn: "Simple contact form for quick inquiries" },
      { text: "Mobiloptimiert für Kunden, die unterwegs suchen", textEn: "Mobile-optimized for customers searching on the go" },
    ],
  },
  {
    slug: "website-fuer-coaches",
    category: "industry",
    title: "Website für Coaches | BrightByte Berlin",
    titleEn: "Websites for Coaches | BrightByte Berlin",
    metaDescription:
      "Professionelle Websites für Coaches und Berater in Berlin. Online-Buchung, Vertrauensaufbau, moderne Gestaltung. Festpreis ab €1.490.",
    metaDescriptionEn:
      "Professional websites for coaches and consultants in Berlin. Online booking, trust building, modern design. Fixed pricing from €1,490.",
    heroHeadline: "Website für Coaches ·\nVertrauen aufbauen, Klienten gewinnen",
    heroHeadlineEn: "Websites for Coaches ·\nbuild trust, win clients",
    heroSubtext: `Als Coach oder Berater ist Ihre Website oft der erste Eindruck. Potenzielle Klienten entscheiden in Sekunden, ob sie Ihnen vertrauen. Eine generische Vorlage vermittelt nicht die Persönlichkeit und Kompetenz, die Sie auszeichnet.

BrightByte baut Coach-Websites, die Ihre Expertise sichtbar machen: persönliches Design, klare Angebotsstruktur, integrierte Terminbuchung und Testimonials, die überzeugen. Alles darauf ausgerichtet, Besucher in Klienten zu verwandeln. Die Seite erzählt Ihre Geschichte, zeigt Ihre Methoden und macht den Weg zum Erstgespräch so einfach wie möglich. Statt einer generischen Vorlage bekommen Sie ein Design, das Ihre Persönlichkeit transportiert und genau die Menschen anspricht, mit denen Sie arbeiten möchten. Jede Sektion ist strategisch aufgebaut: von der ersten Headline bis zum Buchungsbutton führt alles den Besucher zum nächsten Schritt.

Sie konzentrieren sich auf Ihre Klienten. Ich sorge dafür, dass die richtigen Menschen Sie online finden und den ersten Schritt machen. Von der Erstberatung bis zum Go-Live in wenigen Wochen. Dank integrierter Terminbuchung können potenzielle Klienten direkt einen Slot wählen, ohne E-Mails hin und her zu schicken. Ihr Blog oder Content-Bereich hilft Ihnen, bei Google für relevante Coaching-Themen sichtbar zu werden und Ihre Expertise zu demonstrieren. Nach dem Launch unterstütze ich Sie dabei, die Website kontinuierlich zu verbessern: welche Seiten funktionieren, wo Besucher abspringen, und was wir optimieren können, um mehr Anfragen zu generieren.`,
    heroSubtextEn: `As a coach or consultant, your website is often the first impression. Potential clients decide within seconds whether they trust you. A generic template doesn't convey the personality and expertise that sets you apart.

BrightByte builds coach websites that make your expertise visible: personal design, clear offer structure, integrated appointment booking, and testimonials that convince. Everything designed to turn visitors into clients. The site tells your story, shows your methods, and makes the path to an initial consultation as simple as possible. Instead of a generic template, you get a design that conveys your personality and speaks to exactly the people you want to work with. Every section is strategically built: from the first headline to the booking button, everything guides the visitor to the next step.

You focus on your clients. I make sure the right people find you online and take the first step. From initial consultation to go-live in just a few weeks. Thanks to integrated appointment booking, potential clients can directly choose a slot without sending emails back and forth. Your blog or content area helps you become visible on Google for relevant coaching topics and demonstrate your expertise. After launch, I support you in continuously improving the website: which pages work, where visitors drop off, and what we can optimize to generate more inquiries.`,
    faqs: [
      {
        q: "Kann ich Online-Termine direkt über die Website buchen lassen?",
        a: "Ja, ich integriere Buchungssysteme wie Calendly, Cal.com oder eine eigene Lösung direkt in Ihre Website. Klienten wählen einen freien Termin und buchen ohne E-Mail-Ping-Pong.",
        qEn: "Can clients book appointments directly through the website?",
        aEn: "Yes, I integrate booking systems like Calendly, Cal.com, or a custom solution directly into your website. Clients choose an available slot and book without email back-and-forth.",
      },
      {
        q: "Was kostet eine Coach-Website?",
        a: "Coach-Websites starten ab €1.490 zum Festpreis. Das beinhaltet individuelles Design, Angebotsseiten, Terminbuchung, Testimonials-Bereich, Blog-Option und SEO-Grundsetup.",
        qEn: "What does a coach website cost?",
        aEn: "Coach websites start at €1,490 at a fixed price. This includes custom design, offer pages, appointment booking, testimonials section, blog option, and basic SEO setup.",
      },
      {
        q: "Kann ich einen Blog für Content Marketing einbinden?",
        a: "Ja. Ein Blog hilft enorm bei Google-Sichtbarkeit. Ich richte ein CMS ein, über das Sie Artikel einfach selbst veröffentlichen. Ohne technisches Wissen, ohne Abhängigkeit von einem Entwickler.",
        qEn: "Can I include a blog for content marketing?",
        aEn: "Yes. A blog helps enormously with Google visibility. I set up a CMS where you can easily publish articles yourself. No technical knowledge needed, no dependency on a developer.",
      },
      {
        q: "Wie unterscheide ich mich von anderen Coaches online?",
        a: "Durch ein individuelles Design, das Ihre Persönlichkeit transportiert. Durch professionelle Texte und Bilder, die Vertrauen schaffen. Und durch eine klare Seitenstruktur, die Besuchern sofort zeigt, wie Sie ihnen helfen können.",
        qEn: "How do I stand out from other coaches online?",
        aEn: "Through a custom design that conveys your personality. Through professional texts and images that build trust. And through a clear page structure that immediately shows visitors how you can help them.",
      },
    ],
    ctaText: "Website anfragen",
    ctaTextEn: "Request a website",
    benefits: [
      { text: "Terminbuchung direkt auf der Website integriert", textEn: "Appointment booking integrated directly on the website" },
      { text: "Persönliches Design, das Ihre Expertise vermittelt", textEn: "Personal design that conveys your expertise" },
      { text: "SEO-optimiert für Klienten, die nach Coaching suchen", textEn: "SEO-optimized for clients searching for coaching" },
      { text: "Testimonials und Referenzen professionell eingebunden", textEn: "Testimonials and references professionally integrated" },
    ],
  },
  {
    slug: "lead-generation-berlin",
    category: "need",
    title: "Lead Generation Berlin | BrightByte",
    titleEn: "Lead Generation Berlin | BrightByte",
    metaDescription:
      "Mehr Leads über Ihre Website. Conversion-optimiertes Webdesign, schnelle Formulare, A/B-Testing. Messbare Ergebnisse aus Berlin, Festpreis.",
    metaDescriptionEn:
      "More leads through your website. Conversion-optimized web design, fast forms, A/B testing. Measurable results from Berlin, fixed pricing.",
    heroHeadline: "Lead Generation ·\nmehr Anfragen über Ihre Website",
    heroHeadlineEn: "Lead Generation ·\nmore inquiries through your website",
    heroSubtext: `Ihre Website hat Traffic, aber die Besucher füllen kein Formular aus. Das Problem ist selten zu wenig Traffic, sondern eine Seite, die nicht zum Handeln motiviert. Unklare Botschaft, zu viele Ablenkungen, oder ein Formular, das mehr abschreckt als einlädt.

BrightByte baut Websites, die konvertieren. Klare Call-to-Actions, optimierte Formulare, strategische Seitenstruktur und schnelle Ladezeiten. Jedes Element dient einem Ziel: den Besucher zur Anfrage zu führen. Die Seitenarchitektur wird so aufgebaut, dass Besucher logisch durch Ihre Argumentation geführt werden: Problem, Lösung, Beweis, Handlung. Formulare sind kurz, schnell und mobiloptimiert, denn jedes zusätzliche Feld reduziert die Conversion-Rate messbar. Testimonials, Zahlen und Vertrauenssignale werden dort platziert, wo der Besucher sie braucht, um seine Entscheidung zu treffen.

Das ist keine Theorie, sondern messbar. Sie sehen in Ihrem Dashboard, wie viele Besucher zu Leads werden. Und wir optimieren gemeinsam, bis die Zahlen stimmen. Nach den ersten 30 Tagen analysieren wir die Daten: Heatmaps zeigen, wo Besucher klicken und scrollen. Event-Tracking verrät, welche CTAs funktionieren und welche nicht. Auf dieser Basis passen wir Texte, Buttons und Seitenstruktur an, bis Ihre Conversion-Rate dort ist, wo sie sein sollte. Kein Rätselraten, sondern datenbasierte Entscheidungen, die direkt mehr Anfragen bringen.`,
    heroSubtextEn: `Your website has traffic, but visitors don't fill out the form. The problem is rarely too little traffic, but a page that doesn't motivate action. Unclear messaging, too many distractions, or a form that scares people off rather than inviting them.

BrightByte builds websites that convert. Clear call-to-actions, optimized forms, strategic page structure, and fast load times. Every element serves one goal: guiding the visitor to make an inquiry. The page architecture is built so that visitors are logically guided through your argument: problem, solution, proof, action. Forms are short, fast, and mobile-optimized, because every additional field measurably reduces conversion rates. Testimonials, numbers, and trust signals are placed exactly where the visitor needs them to make their decision.

This isn't theory, it's measurable. You see in your dashboard how many visitors become leads. And we optimize together until the numbers are right. After the first 30 days, we analyze the data: heatmaps show where visitors click and scroll. Event tracking reveals which CTAs work and which don't. Based on this, we adjust copy, buttons, and page structure until your conversion rate is where it should be. No guesswork, but data-driven decisions that directly generate more inquiries.`,
    faqs: [
      {
        q: "Wie verbessert eine neue Website meine Lead-Generierung?",
        a: "Durch klare Seitenstruktur, überzeugende Texte, schnelle Ladezeiten und optimierte Formulare. Eine typische Conversion-Rate-Steigerung liegt bei 40 bis 120% nach einem Relaunch mit Fokus auf Lead-Generierung.",
        qEn: "How does a new website improve my lead generation?",
        aEn: "Through clear page structure, compelling copy, fast load times, and optimized forms. A typical conversion rate increase is 40 to 120% after a relaunch focused on lead generation.",
      },
      {
        q: "Welche Tools nutzt du für Tracking und Analytics?",
        a: "Google Analytics 4, datenschutzkonform eingerichtet. Dazu Heatmaps (Hotjar oder Microsoft Clarity) und Event-Tracking für Formulare. So sehen Sie genau, wo Besucher abspringen und was funktioniert.",
        qEn: "What tools do you use for tracking and analytics?",
        aEn: "Google Analytics 4, set up GDPR-compliant. Plus heatmaps (Hotjar or Microsoft Clarity) and event tracking for forms. So you see exactly where visitors drop off and what works.",
      },
      {
        q: "Kann ich A/B-Tests durchführen?",
        a: "Ja. Ich implementiere A/B-Testing für Headlines, CTAs und Formulare. So testen wir datenbasiert, welche Version mehr Leads bringt. Keine Bauchentscheidungen, sondern echte Zahlen.",
        qEn: "Can I run A/B tests?",
        aEn: "Yes. I implement A/B testing for headlines, CTAs, and forms. This way we test data-based which version brings more leads. No gut decisions, but real numbers.",
      },
      {
        q: "Was kostet eine conversion-optimierte Website?",
        a: "Conversion-fokussierte Websites starten ab €2.500. Das beinhaltet strategische Seitenstruktur, optimierte Formulare, Analytics-Setup und eine Runde Optimierung nach den ersten 30 Tagen.",
        qEn: "What does a conversion-optimized website cost?",
        aEn: "Conversion-focused websites start at €2,500. This includes strategic page structure, optimized forms, analytics setup, and one round of optimization after the first 30 days.",
      },
    ],
    ctaText: "Conversion-Check anfragen",
    ctaTextEn: "Request a conversion check",
    benefits: [
      { text: "Conversion-optimierte Formulare und Call-to-Actions", textEn: "Conversion-optimized forms and call-to-actions" },
      { text: "Analytics Dashboard für messbare Ergebnisse", textEn: "Analytics dashboard for measurable results" },
      { text: "A/B-Testing für datenbasierte Optimierung", textEn: "A/B testing for data-based optimization" },
      { text: "Strategische Seitenstruktur die zum Handeln führt", textEn: "Strategic page structure that leads to action" },
    ],
  },
  {
    slug: "online-booking-integration",
    category: "need",
    title: "Online Booking Integration | BrightByte Berlin",
    titleEn: "Online Booking Integration | BrightByte Berlin",
    metaDescription:
      "Online-Terminbuchung in Ihre Website integrieren. Calendly, Cal.com, Doctolib oder individuelle Lösung. Nahtlos, mobiloptimiert, DSGVO-konform.",
    metaDescriptionEn:
      "Integrate online appointment booking into your website. Calendly, Cal.com, Doctolib, or custom solution. Seamless, mobile-optimized, GDPR-compliant.",
    heroHeadline: "Online Booking ·\nTermine buchen ohne Telefonschleifen",
    heroHeadlineEn: "Online Booking ·\nbook appointments without phone tag",
    heroSubtext: `Ihre Kunden wollen online buchen. Nicht anrufen, nicht mailen, nicht auf einen Rückruf warten. 67% der Kunden bevorzugen Online-Buchung gegenüber dem Telefon. Wer das nicht anbietet, verliert Anfragen an den Wettbewerber.

BrightByte integriert Online-Terminbuchung nahtlos in Ihre Website. Ob Calendly, Cal.com, Doctolib oder eine komplett individuelle Lösung: Ihre Kunden sehen freie Termine, buchen selbst und bekommen automatisch eine Bestätigung. 24 Stunden am Tag, 7 Tage die Woche. Die Buchung fügt sich visuell perfekt in Ihr Website-Design ein, sodass Besucher gar nicht merken, dass ein externes Tool im Hintergrund arbeitet. Automatische Erinnerungen per E-Mail reduzieren No-Shows, und Ihre Kalender werden in Echtzeit synchronisiert, sodass Doppelbuchungen ausgeschlossen sind. Für Praxen, Studios oder Beratungen mit mehreren Teammitgliedern richte ich individuelle Kalender pro Person ein.

Das entlastet Ihr Team und eliminiert Terminabsprachen per Telefon. Sie konzentrieren sich auf Ihre Arbeit, das System kümmert sich um die Koordination. Kein Zurückrufen mehr, kein Notizzettel-Chaos, keine verpassten Anfragen nach Feierabend. Neue Kunden, die um 22 Uhr auf Ihre Website kommen, buchen ihren Termin sofort, statt am nächsten Tag während Ihrer Öffnungszeiten anzurufen. Das Ergebnis: mehr gebuchte Termine, weniger Verwaltungsaufwand und zufriedenere Kunden, die den unkomplizierten Service schätzen.`,
    heroSubtextEn: `Your customers want to book online. Not call, not email, not wait for a callback. 67% of customers prefer online booking over the phone. If you don't offer it, you lose inquiries to competitors.

BrightByte integrates online appointment booking seamlessly into your website. Whether Calendly, Cal.com, Doctolib, or a fully custom solution: your customers see available slots, book themselves, and automatically receive a confirmation. 24 hours a day, 7 days a week. The booking blends visually into your website design so visitors don't even notice an external tool is working in the background. Automatic email reminders reduce no-shows, and your calendars sync in real time to prevent double bookings. For practices, studios, or consultancies with multiple team members, I set up individual calendars per person.

This relieves your team and eliminates appointment coordination by phone. You focus on your work, the system handles the coordination. No more callbacks, no sticky-note chaos, no missed inquiries after business hours. New customers who land on your website at 10pm book their appointment immediately instead of calling the next day during opening hours. The result: more booked appointments, less administrative effort, and happier customers who appreciate the hassle-free service.`,
    faqs: [
      {
        q: "Welche Buchungssysteme kannst du integrieren?",
        a: "Alle gängigen Systeme: Calendly, Cal.com, Doctolib, Acuity, SimplyBook, Koalendar oder eine individuelle Eigenentwicklung. Die Wahl hängt von Ihren Anforderungen ab: Anzahl Teammitglieder, Zahlungsintegration, Kalender-Sync.",
        qEn: "Which booking systems can you integrate?",
        aEn: "All common systems: Calendly, Cal.com, Doctolib, Acuity, SimplyBook, Koalendar, or a fully custom solution. The choice depends on your requirements: number of team members, payment integration, calendar sync.",
      },
      {
        q: "Ist die Online-Buchung DSGVO-konform?",
        a: "Ja. Ich achte bei der Auswahl und Konfiguration auf EU-Hosting, Auftragsverarbeitungsverträge und datenschutzkonforme Cookie-Einstellungen. Auf Wunsch baue ich auch eine eigene Lösung ohne Drittanbieter.",
        qEn: "Is the online booking GDPR-compliant?",
        aEn: "Yes. I ensure EU hosting, data processing agreements, and privacy-compliant cookie settings during selection and configuration. On request, I also build a custom solution without third-party providers.",
      },
      {
        q: "Kann die Buchung mit meinem bestehenden Kalender synchronisieren?",
        a: "Ja. Google Calendar, Outlook, Apple Calendar. Gebuchte Termine erscheinen automatisch in Ihrem Kalender und blockieren doppelte Buchungen. Bidirektional: wenn Sie manuell einen Termin eintragen, wird der Slot online gesperrt.",
        qEn: "Can the booking sync with my existing calendar?",
        aEn: "Yes. Google Calendar, Outlook, Apple Calendar. Booked appointments appear automatically in your calendar and prevent double bookings. Bidirectional: if you manually add an appointment, the slot is blocked online.",
      },
      {
        q: "Was kostet eine Buchungs-Integration?",
        a: "Eine Standardintegration (Calendly, Cal.com) ab €490 als Teil eines Website-Projekts. Eine individuelle Buchungslösung mit eigener Logik ab €1.990. Alles zum Festpreis, inklusive Einrichtung und Einweisung.",
        qEn: "What does a booking integration cost?",
        aEn: "A standard integration (Calendly, Cal.com) from €490 as part of a website project. A custom booking solution with its own logic from €1,990. All at a fixed price, including setup and training.",
      },
    ],
    ctaText: "Buchungslösung anfragen",
    ctaTextEn: "Request a booking solution",
    benefits: [
      { text: "Nahtlose Integration in Ihre bestehende Website", textEn: "Seamless integration into your existing website" },
      { text: "Kalender-Sync mit Google, Outlook und Apple", textEn: "Calendar sync with Google, Outlook, and Apple" },
      { text: "DSGVO-konform mit EU-Hosting-Optionen", textEn: "GDPR-compliant with EU hosting options" },
      { text: "Automatische Bestätigungen und Erinnerungen", textEn: "Automatic confirmations and reminders" },
    ],
  },
  {
    slug: "mehrsprachige-website",
    category: "need",
    title: "Mehrsprachige Website Berlin | BrightByte",
    titleEn: "Multilingual Website Berlin | BrightByte",
    metaDescription:
      "Mehrsprachige Websites für internationale Unternehmen in Berlin. Deutsch, Englisch und weitere Sprachen. SEO pro Sprache, einfache Verwaltung.",
    metaDescriptionEn:
      "Multilingual websites for international businesses in Berlin. German, English, and more languages. SEO per language, easy management.",
    heroHeadline: "Mehrsprachige Website ·\ninternationale Kunden erreichen",
    heroHeadlineEn: "Multilingual Website ·\nreach international customers",
    heroSubtext: `Berlin ist international. Ihre Kunden sprechen Deutsch, Englisch, und vielleicht noch weitere Sprachen. Eine einsprachige Website schließt einen großen Teil Ihrer potenziellen Kundschaft aus. Und eine schlecht übersetzte Seite schadet mehr als sie hilft.

BrightByte baut mehrsprachige Websites, die in jeder Sprache professionell wirken. Eigene URLs pro Sprache für optimale Google-Rankings, automatische Spracherkennung, und ein CMS, über das Sie Übersetzungen einfach verwalten. Die technische Architektur stellt sicher, dass jede Sprachversion eigenständig bei Google indexiert wird und für die richtigen regionalen Suchanfragen rankt. Hreflang-Tags, sprachspezifische Sitemaps und lokalisierte Meta-Daten werden automatisch generiert. Das bedeutet: Ihre deutsche Version rankt in Google Deutschland, die englische in Google UK und international, ohne dass Sie sich um technische Details kümmern müssen.

Keine maschinelle Übersetzung auf der fertigen Seite. Jede Sprachversion wird sauber aufgebaut und für die jeweilige Zielgruppe optimiert. So finden Sie bei Google Deutschland und Google UK gleichermaßen. Das CMS zeigt Ihnen alle Sprachversionen nebeneinander, sodass Sie Übersetzungen einfach pflegen und sicherstellen können, dass alle Versionen aktuell sind. Neue Seiten legen Sie einmal an und übersetzen sie im selben Interface. Und wenn Sie in Zukunft eine dritte oder vierte Sprache ergänzen möchten, ist die Architektur bereits darauf vorbereitet.`,
    heroSubtextEn: `Berlin is international. Your customers speak German, English, and perhaps other languages. A monolingual website excludes a large part of your potential customers. And a poorly translated site hurts more than it helps.

BrightByte builds multilingual websites that look professional in every language. Separate URLs per language for optimal Google rankings, automatic language detection, and a CMS where you easily manage translations. The technical architecture ensures that each language version is independently indexed by Google and ranks for the right regional searches. Hreflang tags, language-specific sitemaps, and localized meta data are generated automatically. This means: your German version ranks on Google Germany, the English one on Google UK and internationally, without you having to worry about technical details.

No machine translation on the finished site. Each language version is cleanly built and optimized for the respective audience. So you rank on both Google Germany and Google UK. The CMS shows you all language versions side by side, so you can easily maintain translations and ensure all versions stay up to date. You create new pages once and translate them in the same interface. And if you want to add a third or fourth language in the future, the architecture is already prepared for that.`,
    faqs: [
      {
        q: "Wie werden die Sprachen technisch umgesetzt?",
        a: "Jede Sprache bekommt eigene URLs (z.B. /de/ und /en/), eigene Meta-Tags und hreflang-Attribute. Das ist der Google-konforme Standard für mehrsprachige Websites. So rankt jede Sprachversion in der passenden Google-Region.",
        qEn: "How are the languages technically implemented?",
        aEn: "Each language gets its own URLs (e.g., /de/ and /en/), its own meta tags, and hreflang attributes. This is the Google-compliant standard for multilingual websites. So each language version ranks in the appropriate Google region.",
      },
      {
        q: "Kann ich Übersetzungen selbst verwalten?",
        a: "Ja. Über das CMS sehen Sie alle Inhalte pro Sprache nebeneinander und können Texte einfach aktualisieren. Neue Seiten legen Sie einmal an und übersetzen sie direkt im gleichen Interface.",
        qEn: "Can I manage translations myself?",
        aEn: "Yes. Through the CMS, you see all content per language side by side and can easily update texts. You create new pages once and translate them directly in the same interface.",
      },
      {
        q: "Wie viele Sprachen sind möglich?",
        a: "Technisch unbegrenzt. Die meisten Kunden starten mit Deutsch und Englisch. Weitere Sprachen (Französisch, Spanisch, Türkisch) lassen sich jederzeit ergänzen, ohne die bestehende Seite umzubauen.",
        qEn: "How many languages are possible?",
        aEn: "Technically unlimited. Most clients start with German and English. Additional languages (French, Spanish, Turkish) can be added at any time without rebuilding the existing site.",
      },
      {
        q: "Was kostet eine mehrsprachige Website?",
        a: "Der Aufpreis für eine zweite Sprache liegt bei ca. 30 bis 40% des Basisprojekts. Eine zweisprachige Website (DE/EN) startet ab €3.200. Die Übersetzung selbst ist nicht im Preis enthalten, kann aber vermittelt werden.",
        qEn: "What does a multilingual website cost?",
        aEn: "The premium for a second language is about 30 to 40% of the base project. A bilingual website (DE/EN) starts at €3,200. The translation itself is not included in the price but can be arranged.",
      },
    ],
    ctaText: "Projekt besprechen",
    ctaTextEn: "Discuss your project",
    benefits: [
      { text: "Eigene URLs pro Sprache für optimales Google-Ranking", textEn: "Separate URLs per language for optimal Google ranking" },
      { text: "Einfache Verwaltung aller Sprachen über ein CMS", textEn: "Easy management of all languages via one CMS" },
      { text: "Automatische Spracherkennung für Besucher", textEn: "Automatic language detection for visitors" },
      { text: "Hreflang und SEO korrekt für jede Sprachversion", textEn: "Hreflang and SEO correct for each language version" },
    ],
  },
  {
    slug: "dsgvo-konforme-website",
    category: "need",
    title: "DSGVO-konforme Website | BrightByte Berlin",
    titleEn: "GDPR-Compliant Website | BrightByte Berlin",
    metaDescription:
      "DSGVO-konforme Websites aus Berlin. Cookie-Banner, Datenschutz, EU-Hosting, korrekte Einwilligungen. Rechtssicher ohne Abmahnung.",
    metaDescriptionEn:
      "GDPR-compliant websites from Berlin. Cookie banners, privacy policy, EU hosting, correct consent. Legally secure without warnings.",
    heroHeadline: "DSGVO-konforme Website ·\nrechtssicher ohne Abmahnung",
    heroHeadlineEn: "GDPR-Compliant Website ·\nlegally secure without warnings",
    heroSubtext: `DSGVO-Abmahnungen kosten schnell mehrere tausend Euro. Und die meisten Websites sind nicht korrekt aufgestellt: falsche Cookie-Banner, fehlende Auftragsverarbeitungsverträge, Google Fonts von externen Servern oder Analytics ohne Einwilligung.

BrightByte baut Websites, die von Anfang an DSGVO-konform sind. Korrektes Cookie-Consent-Management, lokales Font-Hosting, datenschutzfreundliche Analytics, EU-Server und eine saubere Datenschutzerklärung. Keine nachträglichen Flicken, sondern ein durchdachtes Konzept. Jeder externe Dienst wird geprüft: Wo werden Daten verarbeitet? Gibt es einen Auftragsverarbeitungsvertrag? Ist eine Einwilligung erforderlich? Diese Fragen kläre ich systematisch, bevor Ihre Website live geht. Google Fonts werden lokal gehostet, sodass keine IP-Adressen an US-Server übertragen werden. Analytics läuft entweder mit korrekter Einwilligung oder über datenschutzfreundliche Alternativen, die ganz ohne Cookies auskommen.

Sie müssen kein Jurist sein, um Ihre Website rechtssicher zu betreiben. Ich kümmere mich um die technische Umsetzung aller Datenschutz-Anforderungen. Sie bekommen eine Website, bei der Sie ruhig schlafen können. Dazu erhalten Sie eine Dokumentation, die zeigt, welche Dienste eingebunden sind und warum sie datenschutzkonform sind. Sollte sich die Rechtslage ändern oder ein neuer Dienst hinzukommen, können Anpassungen jederzeit schnell umgesetzt werden. Und falls Sie bereits eine Website haben, die nicht konform ist: ein DSGVO-Audit zeigt die kritischen Punkte auf und ich setze die Korrekturen innerhalb weniger Tage um.`,
    heroSubtextEn: `GDPR warnings quickly cost several thousand euros. And most websites aren't correctly set up: wrong cookie banners, missing data processing agreements, Google Fonts from external servers, or analytics without consent.

BrightByte builds websites that are GDPR-compliant from the start. Correct cookie consent management, local font hosting, privacy-friendly analytics, EU servers, and a clean privacy policy. No retroactive patches, but a thought-through concept. Every external service is checked: Where is data processed? Is there a data processing agreement? Is consent required? I clarify these questions systematically before your website goes live. Google Fonts are hosted locally so no IP addresses are transmitted to US servers. Analytics runs either with correct consent or through privacy-friendly alternatives that work entirely without cookies.

You don't need to be a lawyer to run your website legally. I handle the technical implementation of all privacy requirements. You get a website that lets you sleep well at night. You also receive documentation showing which services are integrated and why they're privacy-compliant. Should the legal situation change or a new service be added, adjustments can be implemented quickly at any time. And if you already have a website that isn't compliant: a GDPR audit identifies the critical points and I implement the corrections within a few days.`,
    faqs: [
      {
        q: "Was gehört alles zu einer DSGVO-konformen Website?",
        a: "Cookie-Consent-Banner mit korrekter Einwilligung, Datenschutzerklärung, Impressum, SSL-Verschlüsselung, lokales Hosting der Fonts, datenschutzkonforme Analytics (oder gar keine), und Auftragsverarbeitungsverträge mit allen Dienstleistern.",
        qEn: "What's included in a GDPR-compliant website?",
        aEn: "Cookie consent banner with correct consent, privacy policy, legal notice, SSL encryption, local font hosting, privacy-compliant analytics (or none at all), and data processing agreements with all service providers.",
      },
      {
        q: "Ist Google Analytics noch DSGVO-konform nutzbar?",
        a: "Mit der richtigen Konfiguration ja: Server-Side-Tracking, IP-Anonymisierung, Einwilligung vor dem Laden. Alternativ empfehle ich datenschutzfreundliche Tools wie Plausible oder Fathom, die ganz ohne Cookies auskommen.",
        qEn: "Can Google Analytics still be used GDPR-compliantly?",
        aEn: "With the right configuration, yes: server-side tracking, IP anonymization, consent before loading. Alternatively, I recommend privacy-friendly tools like Plausible or Fathom that work entirely without cookies.",
      },
      {
        q: "Meine bestehende Website hat DSGVO-Probleme. Kannst du helfen?",
        a: "Ja. Ich biete einen DSGVO-Audit an: Prüfung aller kritischen Punkte, konkreter Maßnahmenkatalog und technische Umsetzung. Oft lassen sich die größten Risiken in wenigen Tagen beheben.",
        qEn: "My existing website has GDPR issues. Can you help?",
        aEn: "Yes. I offer a GDPR audit: review of all critical points, concrete action plan, and technical implementation. Often the biggest risks can be fixed in just a few days.",
      },
      {
        q: "Was kostet eine DSGVO-konforme Website?",
        a: "Jede neue Website von BrightByte ist standardmäßig DSGVO-konform. Kein Aufpreis. Für bestehende Websites: ein DSGVO-Audit mit Umsetzung startet ab €790.",
        qEn: "What does a GDPR-compliant website cost?",
        aEn: "Every new website from BrightByte is GDPR-compliant by default. No extra charge. For existing websites: a GDPR audit with implementation starts at €790.",
      },
    ],
    ctaText: "DSGVO-Check anfragen",
    ctaTextEn: "Request a GDPR check",
    benefits: [
      { text: "Korrektes Cookie-Consent ohne Abmahnrisiko", textEn: "Correct cookie consent without warning risk" },
      { text: "EU-Hosting und lokales Font-Loading", textEn: "EU hosting and local font loading" },
      { text: "Datenschutzfreundliche Analytics als Alternative", textEn: "Privacy-friendly analytics as an alternative" },
      { text: "Komplett-Setup: Impressum, Datenschutz, AV-Verträge", textEn: "Complete setup: legal notice, privacy policy, DPA contracts" },
    ],
  },
  {
    slug: "webdesign-friedrichshain",
    category: "location",
    title: "Webdesign Friedrichshain | BrightByte Berlin",
    titleEn: "Web Design Friedrichshain | BrightByte Berlin",
    metaDescription:
      "Webdesign in Friedrichshain. Moderne Websites für Unternehmen im Kiez. Festpreis, persönlicher Kontakt, lokale SEO. Treffen am Boxhagener Platz.",
    metaDescriptionEn:
      "Web design in Friedrichshain. Modern websites for local businesses. Fixed pricing, personal contact, local SEO. Meet at Boxhagener Platz.",
    heroHeadline: "Webdesign Friedrichshain ·\nfür Unternehmen im Kiez",
    heroHeadlineEn: "Web Design Friedrichshain ·\nfor businesses in the neighborhood",
    heroSubtext: `Friedrichshain ist kreativ, dynamisch und voller kleiner Unternehmen, die eine starke Online-Präsenz verdienen. Ob Café an der Simon-Dach-Straße, Yoga-Studio am Boxhagener Platz oder Agentur an der Warschauer: Ihre Kunden suchen online, und Sie sollten dort sichtbar sein.

BrightByte ist Ihr Webdesigner vor Ort. Persönliches Treffen im Kiez, kurze Wege, und eine Website, die zu Ihrem Unternehmen passt. Modern, schnell und bei Google für lokale Suchanfragen aus Friedrichshain sichtbar. Ich optimiere Ihre Website gezielt für Suchbegriffe, die Ihre Kunden tatsächlich eingeben: ob 'Restaurant Simon-Dach-Straße', 'Yoga Friedrichshain' oder 'Friseur Boxhagener Platz'. Dazu kommen ein vollständig eingerichtetes Google Business Profil, Bewertungsmanagement und eine mobiloptimierte Website, die auf dem Smartphone genauso gut funktioniert wie am Desktop.

Kein anonymer Dienstleister aus dem Internet. Sondern ein Entwickler, der Ihren Kiez kennt und versteht, was lokale Unternehmen brauchen: eine professionelle Website, die Kunden bringt, ohne das Budget zu sprengen. Wir treffen uns persönlich, besprechen Ihr Geschäft und Ihre Ziele, und ich liefere eine Website, die genau diese Ziele unterstützt. Von der ersten Idee bis zum fertigen Ergebnis vergehen in der Regel nur 2 bis 3 Wochen. Danach sind Sie online präsent, bei Google sichtbar und bekommen Anfragen von Kunden, die in Ihrer Nähe nach genau Ihrem Angebot suchen.`,
    heroSubtextEn: `Friedrichshain is creative, dynamic, and full of small businesses that deserve a strong online presence. Whether it's a café on Simon-Dach-Straße, a yoga studio at Boxhagener Platz, or an agency near Warschauer: your customers search online, and you should be visible there.

BrightByte is your web designer on-site. Personal meeting in the neighborhood, short distances, and a website that fits your business. Modern, fast, and visible on Google for local searches from Friedrichshain. I optimize your website specifically for search terms that your customers actually type: whether it's 'restaurant Simon-Dach-Straße', 'yoga Friedrichshain', or 'hairdresser Boxhagener Platz'. Plus a fully set up Google Business profile, review management, and a mobile-optimized website that works just as well on a smartphone as on desktop.

Not an anonymous service provider from the internet. But a developer who knows your neighborhood and understands what local businesses need: a professional website that brings customers without breaking the budget. We meet in person, discuss your business and your goals, and I deliver a website that supports exactly those goals. From the first idea to the finished result, it typically takes only 2 to 3 weeks. After that, you're present online, visible on Google, and receiving inquiries from customers who are searching for exactly your offering nearby.`,
    faqs: [
      {
        q: "Können wir uns in Friedrichshain treffen?",
        a: "Ja, gerne. Ich bin regelmäßig im Kiez und treffe mich am Boxhagener Platz, in einem Café Ihrer Wahl oder in Ihrem Geschäft. Persönlicher Kontakt ist mir wichtig.",
        qEn: "Can we meet in Friedrichshain?",
        aEn: "Yes, gladly. I'm regularly in the neighborhood and meet at Boxhagener Platz, in a café of your choice, or at your business. Personal contact is important to me.",
      },
      {
        q: "Was kostet eine Website für ein lokales Geschäft?",
        a: "Lokale Geschäftswebsites starten ab €1.490 zum Festpreis. Das beinhaltet Design, Entwicklung, Google Maps, Kontaktformular, lokale SEO und 30 Tage Support nach Launch.",
        qEn: "What does a website for a local business cost?",
        aEn: "Local business websites start at €1,490 at a fixed price. This includes design, development, Google Maps, contact form, local SEO, and 30 days post-launch support.",
      },
      {
        q: "Wie werde ich bei Google in Friedrichshain gefunden?",
        a: "Durch lokale SEO: optimiertes Google Business Profil, standortbezogene Inhalte auf Ihrer Website, Bewertungen und korrekte strukturierte Daten. So erscheinen Sie bei Suchen wie 'Friseur Friedrichshain' oder 'Restaurant Boxhagener Platz'.",
        qEn: "How do I get found on Google in Friedrichshain?",
        aEn: "Through local SEO: optimized Google Business profile, location-based content on your website, reviews, and correct structured data. So you appear for searches like 'hairdresser Friedrichshain' or 'restaurant Boxhagener Platz'.",
      },
      {
        q: "Wie schnell ist meine neue Website fertig?",
        a: "In 2 bis 3 Wochen ist Ihre Website online. Nach dem Erstgespräch bekommen Sie einen klaren Zeitplan. Keine monatelangen Verzögerungen.",
        qEn: "How quickly will my new website be ready?",
        aEn: "Your website is online in 2 to 3 weeks. After the initial meeting, you get a clear timeline. No months-long delays.",
      },
    ],
    ctaText: "Treffen vereinbaren",
    ctaTextEn: "Schedule a meeting",
    benefits: [
      { text: "Persönliches Treffen direkt in Friedrichshain", textEn: "Personal meeting directly in Friedrichshain" },
      { text: "Lokale SEO für Kunden aus dem Kiez", textEn: "Local SEO for customers from the neighborhood" },
      { text: "Google Maps und Bewertungen integriert", textEn: "Google Maps and reviews integrated" },
      { text: "Festpreis ab €1.490, fertig in 2 bis 3 Wochen", textEn: "Fixed price from €1,490, ready in 2 to 3 weeks" },
    ],
  },
  {
    slug: "webdesign-neukoelln",
    category: "location",
    title: "Webdesign Neukölln | BrightByte Berlin",
    titleEn: "Web Design Neukölln | BrightByte Berlin",
    metaDescription:
      "Webdesign in Neukölln. Moderne Websites für lokale Unternehmen, Gastro und Kreative. Festpreis, persönlicher Kontakt, lokale Google-Sichtbarkeit.",
    metaDescriptionEn:
      "Web design in Neukölln. Modern websites for local businesses, gastro, and creatives. Fixed pricing, personal contact, local Google visibility.",
    heroHeadline: "Webdesign Neukölln ·\nfür Geschäfte, Gastro und Kreative",
    heroHeadlineEn: "Web Design Neukölln ·\nfor shops, gastro, and creatives",
    heroSubtext: `Neukölln ist vielfältig: von der Wein-Bar am Richardplatz über das Design-Studio in der Weserstraße bis zur Zahnarztpraxis am Hermannplatz. Alle brauchen eine Website, die ihre Kunden überzeugt. Und fast alle könnten online deutlich sichtbarer sein.

BrightByte baut Websites für Neuköllner Unternehmen, die lokal gefunden werden wollen. Modernes Design, schnelle Ladezeiten, Google Maps Integration und lokale SEO. So finden Kunden aus der Nachbarschaft direkt zu Ihnen. Ob Sie ein Restaurant mit wechselnder Tageskarte betreiben, ein Studio mit Online-Buchung führen oder eine Praxis mit klarer Kontaktmöglichkeit brauchen: die Website wird genau auf Ihre Anforderungen zugeschnitten. Lokale Suchbegriffe wie 'Zahnarzt Hermannplatz' oder 'Café Weserstraße' werden gezielt in die Seitenstruktur eingebaut, damit Google versteht, wo Sie sind und was Sie anbieten.

Ein Webdesigner, der den Kiez kennt und versteht, wie lokales Marketing funktioniert. Persönliches Treffen vor Ort, faire Preise, und eine Website die in wenigen Wochen online geht. Ich fotografiere auf Wunsch auch Ihr Geschäft oder Ihre Räumlichkeiten, damit die Website authentisch wirkt und nicht nach Stock-Fotos aussieht. Nach dem Launch helfe ich Ihnen, Bewertungen auf Google zu sammeln und Ihr Profil so zu optimieren, dass Sie in den lokalen Suchergebnissen und auf Google Maps ganz oben erscheinen. Das Ergebnis: mehr Laufkundschaft, mehr Anfragen und eine professionelle Außenwirkung, die zu Ihrem Geschäft passt.`,
    heroSubtextEn: `Neukölln is diverse: from the wine bar at Richardplatz to the design studio on Weserstraße to the dental practice at Hermannplatz. They all need a website that convinces their customers. And almost all of them could be significantly more visible online.

BrightByte builds websites for Neukölln businesses that want to be found locally. Modern design, fast load times, Google Maps integration, and local SEO. So customers from the neighborhood find their way directly to you. Whether you run a restaurant with a changing daily menu, manage a studio with online booking, or need a practice with clear contact options: the website is tailored exactly to your requirements. Local search terms like 'dentist Hermannplatz' or 'café Weserstraße' are strategically built into the page structure so Google understands where you are and what you offer.

A web designer who knows the neighborhood and understands how local marketing works. Personal meeting on-site, fair prices, and a website that goes online in just a few weeks. On request, I also photograph your business or premises so the website looks authentic rather than stock-photo generic. After launch, I help you collect Google reviews and optimize your profile so you appear at the top of local search results and on Google Maps. The result: more walk-in customers, more inquiries, and a professional appearance that fits your business.`,
    faqs: [
      {
        q: "Können wir uns in Neukölln treffen?",
        a: "Ja, sehr gerne. Ob am Hermannplatz, in der Weserstraße oder in Ihrem Geschäft. Persönliche Treffen machen den Unterschied, gerade wenn man die Atmosphäre eines Ladens oder Restaurants für die Website einfangen möchte.",
        qEn: "Can we meet in Neukölln?",
        aEn: "Yes, absolutely. Whether at Hermannplatz, on Weserstraße, or at your business. Personal meetings make the difference, especially when you want to capture the atmosphere of a shop or restaurant for the website.",
      },
      {
        q: "Was kostet eine Website für mein Geschäft in Neukölln?",
        a: "Ab €1.490 zum Festpreis. Einfache Seiten für Restaurants oder Shops starten günstiger. Im Erstgespräch klären wir Ihren Bedarf und Sie bekommen ein verbindliches Angebot.",
        qEn: "What does a website for my business in Neukölln cost?",
        aEn: "From €1,490 at a fixed price. Simple sites for restaurants or shops start lower. In the initial meeting, we clarify your needs and you get a binding offer.",
      },
      {
        q: "Ich habe eine Website, aber niemand findet mich bei Google. Was tun?",
        a: "Das ist ein klassisches lokales SEO-Problem. Oft fehlt ein optimiertes Google Business Profil, die Website ist zu langsam, oder lokale Suchbegriffe sind nicht abgedeckt. Ich biete einen kostenlosen Quick-Check an, der zeigt, wo die Probleme liegen.",
        qEn: "I have a website but nobody finds me on Google. What to do?",
        aEn: "That's a classic local SEO problem. Often a optimized Google Business profile is missing, the website is too slow, or local search terms aren't covered. I offer a free quick check that shows where the problems are.",
      },
      {
        q: "Wie lange dauert ein Website-Projekt?",
        a: "2 bis 3 Wochen für lokale Geschäftswebsites. Nach dem Erstgespräch bekommen Sie einen klaren Zeitplan. Ich halte Termine ein, versprochen.",
        qEn: "How long does a website project take?",
        aEn: "2 to 3 weeks for local business websites. After the initial meeting, you get a clear timeline. I keep deadlines, promised.",
      },
    ],
    ctaText: "Treffen vereinbaren",
    ctaTextEn: "Schedule a meeting",
    benefits: [
      { text: "Persönliches Treffen in Neukölln möglich", textEn: "Personal meeting in Neukölln possible" },
      { text: "Lokale SEO für Sichtbarkeit im Kiez", textEn: "Local SEO for visibility in the neighborhood" },
      { text: "Modernes Design passend zu Neuköllns Kreativszene", textEn: "Modern design fitting Neukölln's creative scene" },
      { text: "Faire Preise ab €1.490 zum Festpreis", textEn: "Fair prices from €1,490 at a fixed price" },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPage | undefined {
  return seoPages.find((p) => p.slug === slug);
}
