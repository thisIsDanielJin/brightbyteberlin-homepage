import Image from "next/image";

const images: Record<string, { src: string; alt: string }> = {
  blumenspiess: {
    src: "/images/work/blumenspiess.jpg",
    alt: "Architecture studio workspace with building models",
  },
  learnstep: {
    src: "/images/work/learnstep.jpg",
    alt: "Group workshop facilitation with participants and sticky notes",
  },
  lumo: {
    src: "/images/work/lumo.jpg",
    alt: "Professional tree care and maintenance work",
  },
};

export function WorkImage({ tag }: { tag: string }) {
  const img = images[tag];
  if (!img) return <div style={{ width: "100%", height: "100%", background: "#E8E4DC" }} />;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}
