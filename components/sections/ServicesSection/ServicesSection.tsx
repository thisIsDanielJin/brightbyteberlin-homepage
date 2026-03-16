"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section/Section";
import { services } from "@/data/services";
import { IconType } from "react-icons";
import {
  HiCodeBracket,
  HiCircleStack,
  HiSparkles,
  HiLightBulb,
  HiRocketLaunch,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { fadeInUp, viewportConfig } from "@/lib/motion";

const iconMap: Record<string, IconType> = {
  HiCode: HiCodeBracket,
  HiDatabase: HiCircleStack,
  HiSparkles,
  HiLightBulb,
  HiRocketLaunch,
};

// Bento grid layout — 6-col grid: top 3 span 2 each, bottom 2 offset to center
const bentoLayout = [
  { colSpan: "md:col-span-1 lg:col-span-2", size: "standard" },
  { colSpan: "md:col-span-1 lg:col-span-2", size: "standard" },
  { colSpan: "md:col-span-1 lg:col-span-2", size: "standard" },
  { colSpan: "md:col-span-1 lg:col-span-2 lg:col-start-2", size: "standard" },
  { colSpan: "md:col-span-1 lg:col-span-2 lg:col-start-4", size: "standard" },
];

interface BentoCardProps {
  service: typeof services[0];
  layout: typeof bentoLayout[0];
  index: number;
}

function BentoCard({ service, layout, index }: BentoCardProps) {
  const Icon = iconMap[service.icon] || HiCodeBracket;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group relative", layout.colSpan)}
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-bright/0 via-bright/50 to-bright/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-bright/0 via-bright/30 to-bright/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card content */}
      <div className="relative h-full bg-bg-card rounded-2xl border-[1.5px] border-black/[0.06] shadow-sm overflow-hidden p-6 transition-colors duration-500 hover:border-transparent">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-bright/5 via-transparent to-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Spotlight effect */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-bright/10 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon + number */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-bright/20 to-bright/5 flex items-center justify-center border border-bright/20 group-hover:border-bright/40 transition-colors group-hover:shadow-lg group-hover:shadow-bright/20"
            >
              <Icon className="w-5 h-5 text-bright" />
            </div>
            <span className="text-sm font-mono text-black/[0.15]">0{index + 1}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-text-primary group-hover:text-bright transition-colors duration-300 mb-2">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed text-sm flex-1">
            {service.description}
          </p>

          {/* Features */}
          {service.features && (
            <div className="mt-4 pt-4 border-t border-black/[0.06]">
              <ul className="flex flex-wrap gap-1.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs px-2.5 py-1 rounded-full font-medium bg-black/[0.03] text-text-muted border border-black/[0.06] group-hover:bg-bright/10 group-hover:text-bright group-hover:border-bright/30 transition-all duration-300"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <Section id="services" background="primary" className="relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-bright/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        {/* Section label + header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] border border-black/[0.06] text-bright text-sm font-medium">
              <HiWrenchScrewdriver className="w-4 h-4" />
              Services
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-text-primary">
            How I Help You Shine
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-text-secondary">
            Everything you need to stand out online and convert visitors into customers
          </p>
        </motion.div>

        {/* Magic Bento Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <BentoCard
              key={service.id}
              service={service}
              layout={bentoLayout[index] || bentoLayout[0]}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
