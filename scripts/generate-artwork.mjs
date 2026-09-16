// Generator for the site's two pieces of original artwork (hero-home and the
// social card): flat gold-on-black vector shapes, rasterised with sharp (an
// existing dependency). No photography, real or fabricated — the brand is a
// two-ink gold/black lockup (astro-theme-slop/slop.css), so the artwork stays
// in that register: a deprecation-notice stamp motif, built entirely from
// flat shapes and ruled lines. Kept (rather than run-once-and-deleted) so the
// provenance of both images is a script in the repo, not a claim in
// PROCESS.md. Re-run with `node scripts/generate-artwork.mjs` after editing
// the shapes below; nothing else in the build depends on it running again.
import sharp from "sharp";

const BLACK = "#100e0b";
const GOLD = "#b97d1c";
const BRONZE = "#8a5c13";

function ticks(cx, cy, rInner, rOuter, count) {
  let out = "";
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const x1 = cx + rInner * Math.cos(a);
    const y1 = cy + rInner * Math.sin(a);
    const x2 = cx + rOuter * Math.cos(a);
    const y2 = cy + rOuter * Math.sin(a);
    out += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${GOLD}" stroke-width="3" stroke-linecap="round" />\n`;
  }
  return out;
}

function ruledLines(x, y, width, count, gap) {
  let out = "";
  for (let i = 0; i < count; i++) {
    const ly = y + i * gap;
    out += `<line x1="${x}" y1="${ly}" x2="${x + width}" y2="${ly}" stroke="${GOLD}" stroke-width="2" opacity="0.55" />\n`;
  }
  return out;
}

function stamp(cx, cy, r) {
  return `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${GOLD}" stroke-width="5" />
    <circle cx="${cx}" cy="${cy}" r="${r - 18}" fill="none" stroke="${GOLD}" stroke-width="3" />
    ${ticks(cx, cy, r + 8, r + 26, 24)}
    <path d="M ${cx - r * 0.32} ${cy + r * 0.04}
             L ${cx - r * 0.06} ${cy + r * 0.32}
             L ${cx + r * 0.36} ${cy - r * 0.28}"
          fill="none" stroke="${GOLD}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
  `;
}

function noticeCard(x, y, w, h, rotate) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return `
  <g transform="rotate(${rotate} ${cx} ${cy})">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${BLACK}" stroke="${GOLD}" stroke-width="6" />
    ${ruledLines(x + w * 0.08, y + h * 0.22, w * 0.62, 6, h * 0.1)}
    <g transform="rotate(-8 ${cx} ${cy})">
      <rect x="${x - w * 0.06}" y="${cy - h * 0.09}" width="${w * 1.12}" height="${h * 0.18}" fill="${GOLD}" />
      <text x="${cx}" y="${cy + h * 0.065}" text-anchor="middle" font-family="Georgia, serif"
            font-weight="700" font-size="${h * 0.13}" letter-spacing="${h * 0.02}" fill="${BLACK}">DEPRECATED</text>
    </g>
  </g>
  `;
}

const hero = `
<svg xmlns="http://www.w3.org/2000/svg" width="2560" height="1086" viewBox="0 0 2560 1086">
  <rect width="2560" height="1086" fill="${BLACK}" />
  <rect x="120" y="140" width="260" height="150" fill="none" stroke="${BRONZE}" stroke-width="4" transform="rotate(-11 250 215)" opacity="0.7" />
  <rect x="180" y="760" width="200" height="120" fill="none" stroke="${BRONZE}" stroke-width="4" transform="rotate(7 280 820)" opacity="0.6" />
  ${noticeCard(1360, 90, 940, 760, -4)}
  ${stamp(1330, 760, 190)}
</svg>
`.trim();

const card = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BLACK}" />
  ${noticeCard(430, 30, 620, 500, -4)}
  ${stamp(400, 470, 130)}
</svg>
`.trim();

await sharp(Buffer.from(hero)).avif({ quality: 68 }).toFile("src/assets/images/hero-home.avif");
await sharp(Buffer.from(card)).png().toFile("src/assets/images/card.png");

console.log("wrote src/assets/images/hero-home.avif and src/assets/images/card.png");
