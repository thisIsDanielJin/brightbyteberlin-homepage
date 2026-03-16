import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container/Container";
import { AnimatedSection } from "./AnimatedSection";
import { type IconType } from "react-icons";

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
  primary: "#FAFAF7",
  secondary: "#F0EDE6",
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
  const sectionClassName = cn(
    "section-padding relative overflow-hidden",
    bgStyles[background],
    className
  );

  const inner = (
    <>
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
    </>
  );

  if (animate) {
    return (
      <AnimatedSection id={id} className={sectionClassName}>
        {inner}
      </AnimatedSection>
    );
  }

  return (
    <section id={id} className={sectionClassName}>
      {inner}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
  badge?: {
    label: string;
    icon?: IconType;
  };
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
  badge,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-6", centered && "flex justify-center")}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] border border-black/[0.06] text-bright text-sm font-medium">
            {badge.icon && <badge.icon className="w-4 h-4" />}
            {badge.label}
          </span>
        </div>
      )}
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
