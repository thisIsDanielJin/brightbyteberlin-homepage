"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type GrainientComponent from "@/components/reactbits/Grainient/Grainient";

const Grainient = dynamic(
  () => import("@/components/reactbits/Grainient/Grainient"),
  { ssr: false }
);

export function LazyGrainient(props: ComponentProps<typeof GrainientComponent>) {
  return <Grainient {...props} />;
}
