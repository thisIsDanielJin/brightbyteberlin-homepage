import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "og-image.png");
const cubeImagePath = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "Screenshot 2026-03-05 at 21.59.24.png"
);

const WIDTH = 1200;
const HEIGHT = 630;
const color = "#FBBF24";

// Resize cube image to fit the right portion
const cubeSize = 380;
const cubeImage = await sharp(cubeImagePath)
  .resize(cubeSize, cubeSize, { fit: "cover" })
  .toBuffer();

// Create text SVG overlay
const textSvg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c0c0c"/>
      <stop offset="50%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#111111"/>
    </linearGradient>
    <!-- Ambient glow from cube area -->
    <radialGradient id="cubeGlow" cx="78%" cy="50%" r="35%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </radialGradient>
    <!-- Subtle top-left accent -->
    <radialGradient id="accent" cx="20%" cy="30%" r="40%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#cubeGlow)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#accent)"/>

  <!-- Subtle border -->
  <rect x="1" y="1" width="${WIDTH - 2}" height="${HEIGHT - 2}" rx="0" fill="none" stroke="${color}" stroke-opacity="0.1" stroke-width="1"/>

  <!-- Pixel Cluster Logo (small) -->
  <g transform="translate(80, 160) scale(2.5)">
    <rect x="4" y="4" width="6" height="6" rx="1" fill="${color}" opacity="0.35"/>
    <rect x="12" y="4" width="6" height="6" rx="1" fill="${color}" opacity="0.55"/>
    <rect x="4" y="12" width="6" height="6" rx="1" fill="${color}" opacity="0.65"/>
    <rect x="12" y="12" width="6" height="6" rx="1" fill="${color}" opacity="1"/>
    <rect x="20" y="12" width="6" height="6" rx="1" fill="${color}" opacity="0.75"/>
    <rect x="12" y="20" width="6" height="6" rx="1" fill="${color}" opacity="0.45"/>
    <rect x="20" y="20" width="6" height="6" rx="1" fill="${color}" opacity="0.85"/>
  </g>

  <!-- Brand name -->
  <text x="80" y="300" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="52" font-weight="700" fill="white">
    <tspan fill="${color}">Bright</tspan><tspan fill="white">Byte</tspan><tspan fill="#888888" font-weight="400"> Berlin</tspan>
  </text>

  <!-- Tagline -->
  <text x="80" y="355" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="28" font-weight="400" fill="#999999">
    Websites That Get You Found.
  </text>

  <!-- Subtitle -->
  <text x="80" y="420" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="18" font-weight="400" fill="#666666">
    High-performance websites for small businesses in Berlin
  </text>

  <!-- URL at bottom -->
  <text x="80" y="${HEIGHT - 50}" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="16" font-weight="500" fill="${color}" opacity="0.6">
    brightbyte.berlin
  </text>
</svg>
`;

// Composite: base SVG + cube image on the right
await sharp(Buffer.from(textSvg))
  .composite([
    {
      input: cubeImage,
      left: WIDTH - cubeSize - 100,
      top: Math.round((HEIGHT - cubeSize) / 2),
    },
  ])
  .png()
  .toFile(outPath);

console.log(`✓ og-image.png generated at ${outPath}`);
