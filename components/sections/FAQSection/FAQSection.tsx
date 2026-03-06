"use client";

import { Section, SectionHeader } from "@/components/layout/Section";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <Section id="faq" background="secondary" blendFrom="primary" className="relative overflow-hidden">
      <div className="relative z-10">
      <SectionHeader
        title="Common Questions"
        subtitle="Got questions? I've got answers."
      />

      <ScrollReveal>
        <div className="max-w-3xl mx-auto">
          <Accordion>
            {faqItems.map((item) => (
              <AccordionItem key={item.id} title={item.question}>
                {item.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
      </div>
    </Section>
  );
}
