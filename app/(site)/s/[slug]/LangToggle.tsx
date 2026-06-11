"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function LangToggle() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const lang = searchParams.get("lang") === "en" ? "en" : "de";

    function toggle(newLang: "de" | "en") {
        const params = new URLSearchParams(searchParams.toString());
        if (newLang === "en") {
            params.set("lang", "en");
        } else {
            params.delete("lang");
        }
        const qs = params.toString();
        router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
    }

    return (
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <button
                onClick={() => toggle("de")}
                style={{
                    padding: "4px 8px",
                    fontSize: 11,
                    fontWeight: lang === "de" ? 600 : 400,
                    color: lang === "de" ? "#14130F" : "#9A958A",
                    background:
                        lang === "de" ? "rgba(20,19,15,0.06)" : "transparent",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontFamily: "var(--font-geist-mono), monospace",
                    letterSpacing: "0.04em",
                }}
            >
                DE
            </button>
            <span style={{ fontSize: 11, color: "#9A958A" }}>|</span>
            <button
                onClick={() => toggle("en")}
                style={{
                    padding: "4px 8px",
                    fontSize: 11,
                    fontWeight: lang === "en" ? 600 : 400,
                    color: lang === "en" ? "#14130F" : "#9A958A",
                    background:
                        lang === "en" ? "rgba(20,19,15,0.06)" : "transparent",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontFamily: "var(--font-geist-mono), monospace",
                    letterSpacing: "0.04em",
                }}
            >
                EN
            </button>
        </div>
    );
}
