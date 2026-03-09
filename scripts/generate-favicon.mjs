import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const color = "#FBBF24";

// Generate favicon as 32x32 PNG (placed in app/ for Next.js auto-detection)
const size = 32;
const scale = size / 32; // 1:1 with the original viewBox

const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#0a0a0a"/>
  <rect x="4" y="4" width="6" height="6" rx="1" fill="${color}" opacity="0.35"/>
  <rect x="12" y="4" width="6" height="6" rx="1" fill="${color}" opacity="0.55"/>
  <rect x="4" y="12" width="6" height="6" rx="1" fill="${color}" opacity="0.65"/>
  <rect x="12" y="12" width="6" height="6" rx="1" fill="${color}" opacity="1"/>
  <rect x="20" y="12" width="6" height="6" rx="1" fill="${color}" opacity="0.75"/>
  <rect x="12" y="20" width="6" height="6" rx="1" fill="${color}" opacity="0.45"/>
  <rect x="20" y="20" width="6" height="6" rx="1" fill="${color}" opacity="0.85"/>
</svg>
`;

const outPath = path.join(__dirname, "..", "app", "icon.png");
await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`✓ icon.png (32x32) generated at ${outPath}`);
