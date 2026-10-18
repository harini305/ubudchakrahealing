// Generates responsive derivatives from the untouched originals in
// docs/source-audit/assets/original/ into public/images/ (+ brand + app icons).
// WebP at every width; one JPEG per photo as the fallback (and Open Graph image).
// Widths stop at 1600 px (the hero keeps its full 1920 px): no slot on the site
// needs more, even at 2x density. Run: npm run images
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'docs/source-audit/assets/original');
const OUT = path.join(ROOT, 'public/images');
const WIDTHS = [480, 800, 1200, 1600];
const FULL_WIDTH = new Set(['healer-at-work']);

// name -> original path (relative to SRC)
const PHOTOS = {
  'healer-at-work': '2019/10/ubud-chakra-healing-healer-compressor.jpg',
  'healer-portrait': '2016/10/MI_06993UVR-.jpg',
  'hands-crown': '2022/10/RES-13.jpg',
  'hands-temple': '2022/10/RES-20.jpg',
  'hands-head': '2022/10/RES-21.jpg',
  'hands-holding': '2016/10/MI_07033UVR-.jpg',
  'massage-arm': '2016/10/MI_07032UVR-.jpg',
  'hands-forehead-wide': '2016/10/MI_07006UVR-.jpg',
  'hands-forehead-tall': '2016/10/MI_06985UVR-.jpg',
  'healing-process': '2017/08/ubud-chakra-healing-process-compressor.jpg',
  'healer-treating': '2017/08/ubud-chakra-healing-healer-1-compressor.jpg',
  // Rights unverified (08 §5 A1) — provisional until the client confirms.
  'palm-reading': '2022/10/Palm-Reader.jpg',
  'melukat': '2019/02/Tirta-Sudamala-7-1024x682.jpg',
};

async function buildPhoto(name, rel) {
  const input = path.join(SRC, rel);
  const { width, height } = await sharp(input).metadata();
  const max = FULL_WIDTH.has(name) ? width : Math.min(width, WIDTHS.at(-1));
  const widths = WIDTHS.filter((w) => w < max).concat(max);
  const jpgWidth = widths.find((w) => w >= 1200) ?? widths.at(-1);
  for (const w of widths) {
    const base = sharp(input).rotate().resize({ width: w, withoutEnlargement: true });
    await base.clone().webp({ quality: 72, effort: 6 }).toFile(path.join(OUT, `${name}-${w}.webp`));
    if (w === jpgWidth) {
      await base.clone().jpeg({ quality: 76, mozjpeg: true, progressive: true }).toFile(path.join(OUT, `${name}-${w}.jpg`));
    }
  }
  return { width, height, widths, jpg: `/images/${name}-${jpgWidth}.jpg` };
}

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  const manifest = {};
  for (const [name, rel] of Object.entries(PHOTOS)) {
    manifest[name] = await buildPhoto(name, rel);
    console.log(name, manifest[name].widths.join(','));
  }
  await writeFile(path.join(ROOT, 'lib/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

  // Brand: long logos at 2x of the 300px header slot, plus OG image.
  const brand = path.join(ROOT, 'public/brand');
  await mkdir(brand, { recursive: true });
  await sharp(path.join(SRC, '2017/08/UCH-Logo-long-white-compressor.png')).resize({ width: 600 }).png({ palette: true, quality: 90, compressionLevel: 9 }).toFile(path.join(brand, 'logo-long-white.png'));
  await sharp(path.join(SRC, '2017/08/UCH-Logo-long-compressor.png')).resize({ width: 600 }).png({ palette: true, quality: 90, compressionLevel: 9 }).toFile(path.join(brand, 'logo-long.png'));

  // App icons (Next.js file conventions) from the lotus mark.
  const mark = path.join(SRC, '2017/08/cropped-favicon-UCH.png');
  await sharp(mark).resize(512, 512).png({ palette: true, quality: 90, compressionLevel: 9 }).toFile(path.join(ROOT, 'app/icon.png'));
  await sharp(mark).resize(180, 180).flatten({ background: '#ffffff' }).png({ palette: true, quality: 90, compressionLevel: 9 }).toFile(path.join(ROOT, 'app/apple-icon.png'));

  // Default Open Graph image: healer at work, 1200x630.
  await sharp(path.join(SRC, PHOTOS['healer-at-work'])).resize(1200, 630, { fit: 'cover', position: 'left' }).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(ROOT, 'app/opengraph-image.jpg'));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
