"use client";

import { Section } from "@/components/layout/Section/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal/ScrollReveal";
import { fadeInLeft, fadeInRight } from "@/lib/motion";
import { HiCheckCircle } from "react-icons/hi2";
import Image from "next/image";

const highlights = [
  "B.Sc. Computer Science, TU Berlin & Seoul National University",
  "SAP Developer with enterprise experience",
  "Based in Berlin, working with clients worldwide",
  "Fluent in English and German",
];

export function AboutSection() {
  return (
    <Section id="about" background="secondary" className="relative overflow-hidden">
      <div className="relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <ScrollReveal variants={fadeInLeft}>
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-bg-card border-[1.5px] border-white/8 overflow-hidden relative">
              <Image
                src="/images/daniel-profile.jpg"
                alt="Daniel Jin Wodke"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent" />
            </div>

          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal variants={fadeInRight}>
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-text-primary">
              Hi, I&apos;m <span className="text-bright">Daniel</span>
            </h2>

            <div className="space-y-5 text-text-secondary mb-10 text-lg leading-relaxed">
              <p>
                I&apos;m a software developer in Berlin who helps small businesses
                get found online. By day, I work as an SAP developer, and in my
                spare time I build websites that actually deliver results.
              </p>
              <p>
                I believe your website should work as hard as you do. It&apos;s not
                just about looking good. It&apos;s about being <span className="text-bright">found</span>, building trust,
                and turning visitors into customers.
              </p>
            </div>

            <ul className="space-y-4">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-bright/10 flex items-center justify-center flex-shrink-0">
                    <HiCheckCircle className="w-4 h-4 text-bright" />
                  </div>
                  <span className="text-text-primary font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </Section>
  );
}
