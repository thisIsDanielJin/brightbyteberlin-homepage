"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en, de } from "@/dictionaries";

type Locale = "en" | "de";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: typeof en;
}>({ locale: "en", setLocale: () => {}, t: en });

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("lang");
  if (fromUrl === "de" || fromUrl === "en") return fromUrl;
  const saved = localStorage.getItem("locale") as Locale | null;
  if (saved === "de" || saved === "en") return saved;
  return "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(getInitialLocale());
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    const url = new URL(window.location.href);
    if (l === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", l);
    }
    window.history.replaceState({}, "", url.toString());
  };

  const t = locale === "de" ? de : en;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
