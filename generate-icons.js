#!/usr/bin/env node

// Script to generate PWA icons using sharp
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, 'public', 'icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const color = '#DC2626'; // Flare Tracker red

async function generateIcon(size) {
  const fontSize = Math.floor(size * 0.35);
  const cornerRadius = Math.floor(size * 0.15);

  // Create SVG with rounded rectangle and text
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#EF4444;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#DC2626;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${cornerRadius}" fill="url(#grad)"/>
      <text
        x="50%"
        y="50%"
        font-family="Arial, sans-serif"
        font-size="${fontSize}"
        font-weight="bold"
        fill="#FFFFFF"
        text-anchor="middle"
        dy="0.35em">🔥</text>
    </svg>
  `;

  const filename = `icon-${size}x${size}.png`;
  const filepath = path.join(iconsDir, filename);

  await sharp(Buffer.from(svg))
    .png()
    .toFile(filepath);

  console.log(`✓ Created ${filename}`);
}

async function generateAllIcons() {
  console.log('Generating PWA icons...\n');

  for (const size of sizes) {
    await generateIcon(size);
  }

  console.log('\n✅ All icons created successfully!');
  console.log(`📁 Icons saved to: ${iconsDir}`);
}

generateAllIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
