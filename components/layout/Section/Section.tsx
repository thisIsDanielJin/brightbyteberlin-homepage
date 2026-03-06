"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/motion";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  id?: string;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  background?: "primary" | "secondary" | "bright";
  blendFrom?: "primary" | "secondary";
  blendTo?: "primary" | "secondary";
  children: React.ReactNode;
  animate?: boolean;
}

const bgStyles = {
  primary: "bg-bg-primary",
  secondary: "bg-bg-secondary",
  bright: "bg-bg-bright section-bright",
};

const bgColors = {
  primary: "#09090B",
  secondary: "#18181B",
};

export function Section({
  id,
  className,
  containerSize = "xl",
  background = "primary",
  blendFrom,
  blendTo,
  children,
  animate = true,
}: SectionProps) {
  const Wrapper = animate ? motion.section : "section";
  const wrapperProps = animate
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: viewportConfig,
        variants: fadeInUp,
      }
    : {};

  return (
    <Wrapper
      id={id}
      className={cn(
        "section-padding relative",
        bgStyles[background],
        className
      )}
      {...wrapperProps}
    >
      {blendFrom && (
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-[1]"
          style={{
            background: `linear-gradient(to bottom, ${bgColors[blendFrom]} 0%, transparent 100%)`,
          }}
        />
      )}
      {blendTo && (
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[1]"
          style={{
            background: `linear-gradient(to top, ${bgColors[blendTo]} 0%, transparent 100%)`,
          }}
        />
      )}
      <Container size={containerSize} className={(blendFrom || blendTo) ? "relative z-[2]" : undefined}>{children}</Container>
    </Wrapper>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
        light ? "text-text-dark" : "text-text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg max-w-2xl",
          centered && "mx-auto",
          light ? "text-text-dark/70" : "text-text-secondary"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
