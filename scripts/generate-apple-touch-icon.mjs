import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "apple-touch-icon.png");

// Recreate the PixelClusterLogo at 180x180 with padding
const size = 180;
const color = "#FBBF24";

// Scale: viewBox is 0 0 32 32, we want it centered in 180x180 with padding
// Logo occupies roughly 22x22 in the viewBox (from x=4 to x=26, y=4 to y=26)
// Target ~120px for the logo, centered in 180
const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark background with subtle radial gradient -->
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </radialGradient>
    <!-- Subtle glow behind logo -->
    <radialGradient id="glow" cx="50%" cy="50%" r="40%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${size}" height="${size}" rx="36" fill="url(#bg)"/>

  <!-- Subtle golden glow -->
  <rect width="${size}" height="${size}" rx="36" fill="url(#glow)"/>

  <!-- Pixel Cluster Logo - scaled and centered -->
  <!-- Logo area: 4,4 to 26,26 (22 units). Scale = 120/22 ≈ 5.4545 -->
  <!-- Center offset: (180 - 120) / 2 - 4 * 5.4545 ≈ 8.18 -->
  <g transform="translate(8.18, 8.18) scale(5.4545)">
    <rect x="4" y="4" width="6" height="6" rx="1" fill="${color}" opacity="0.35"/>
    <rect x="12" y="4" width="6" height="6" rx="1" fill="${color}" opacity="0.55"/>
    <rect x="4" y="12" width="6" height="6" rx="1" fill="${color}" opacity="0.65"/>
    <rect x="12" y="12" width="6" height="6" rx="1" fill="${color}" opacity="1"/>
    <rect x="20" y="12" width="6" height="6" rx="1" fill="${color}" opacity="0.75"/>
    <rect x="12" y="20" width="6" height="6" rx="1" fill="${color}" opacity="0.45"/>
    <rect x="20" y="20" width="6" height="6" rx="1" fill="${color}" opacity="0.85"/>
  </g>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`✓ apple-touch-icon.png generated at ${outPath}`);
