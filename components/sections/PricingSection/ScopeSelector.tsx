import { SCOPE_OPTIONS } from "@/data/pricing";

const C = {
  bg: "#F5F1E8",
  surface: "#FBF8F1",
  ink: "#14130F",
  hair: "rgba(20,19,15,0.08)",
};

export function ScopeSelector({ active, onChange }: { active: number; onChange: (i: number) => void }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24, justifyContent: "flex-start", flexWrap: "wrap" }}>
      {SCOPE_OPTIONS.map((opt, i) => (
        <button
          key={opt.id}
          onClick={() => onChange(i)}
          style={{
            padding: "10px 20px",
            borderRadius: 99,
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            background: i === active ? C.ink : C.bg,
            color: i === active ? C.surface : C.ink,
            border: `1px solid ${i === active ? C.ink : C.hair}`,
            transition: "all 0.25s ease",
          }}
        >
          {opt.title}
        </button>
      ))}
    </div>
  );
}
