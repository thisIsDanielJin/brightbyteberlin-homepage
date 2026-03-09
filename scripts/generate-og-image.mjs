import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;
const color = "#FBBF24";

const textSvg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c0c0c"/>
      <stop offset="50%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#111111"/>
    </linearGradient>
    <!-- Ambient glow from logo area -->
    <radialGradient id="logoGlow" cx="78%" cy="50%" r="35%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.12"/>
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
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#logoGlow)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#accent)"/>

  <!-- Subtle border -->
  <rect x="1" y="1" width="${WIDTH - 2}" height="${HEIGHT - 2}" rx="0" fill="none" stroke="${color}" stroke-opacity="0.1" stroke-width="1"/>

  <!-- Pixel Cluster Logo (small, next to brand name) -->
  <g transform="translate(80, 160) scale(2.5)">
    <rect x="4" y="4" width="6" height="6" rx="1" fill="${color}" opacity="0.35"/>
    <rect x="12" y="4" width="6" height="6" rx="1" fill="${color}" opacity="0.55"/>
    <rect x="4" y="12" width="6" height="6" rx="1" fill="${color}" opacity="0.65"/>
    <rect x="12" y="12" width="6" height="6" rx="1" fill="${color}" opacity="1"/>
    <rect x="20" y="12" width="6" height="6" rx="1" fill="${color}" opacity="0.75"/>
    <rect x="12" y="20" width="6" height="6" rx="1" fill="${color}" opacity="0.45"/>
    <rect x="20" y="20" width="6" height="6" rx="1" fill="${color}" opacity="0.85"/>
  </g>

  <!-- Pixel Cluster Logo (large, right side) -->
  <g transform="translate(790, 115) scale(12)">
    <rect x="4" y="4" width="6" height="6" rx="1" fill="${color}" opacity="0.3"/>
    <rect x="12" y="4" width="6" height="6" rx="1" fill="${color}" opacity="0.5"/>
    <rect x="4" y="12" width="6" height="6" rx="1" fill="${color}" opacity="0.6"/>
    <rect x="12" y="12" width="6" height="6" rx="1" fill="${color}" opacity="1"/>
    <rect x="20" y="12" width="6" height="6" rx="1" fill="${color}" opacity="0.7"/>
    <rect x="12" y="20" width="6" height="6" rx="1" fill="${color}" opacity="0.4"/>
    <rect x="20" y="20" width="6" height="6" rx="1" fill="${color}" opacity="0.8"/>
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
    brightbyte-berlin.com
  </text>
</svg>
`;

await sharp(Buffer.from(textSvg))
  .png()
  .toFile(outPath);

console.log(`✓ og-image.png generated at ${outPath}`);
