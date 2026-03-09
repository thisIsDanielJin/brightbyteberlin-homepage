"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const BrowserMockup = dynamic(() => import("./BrowserMockup"));

export default function DesktopBrowserMockup() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  if (!isDesktop) return null;
  return <BrowserMockup />;
}
