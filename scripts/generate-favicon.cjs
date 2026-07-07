#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { encode } = require('ico-endec');

const PUBLIC_DIR = path.join(__dirname, '../client/public');
const SVG_PATH = path.join(PUBLIC_DIR, 'favicon.svg');
const SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

const svg = fs.readFileSync(SVG_PATH, 'utf8');

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap" rel="stylesheet" />
    <style>
      html, body { margin: 0; padding: 0; background: transparent; }
      svg { display: block; }
    </style>
  </head>
  <body></body>
</html>`;

async function main() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  for (const { size, name } of SIZES) {
    const scaledSvg = svg.replace(
      '<svg ',
      `<svg width="${size}" height="${size}" `,
    );
    await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
    await page.setContent(html.replace('</body>', `${scaledSvg}</body>`), { waitUntil: 'networkidle0' });
    await page.screenshot({
      path: path.join(PUBLIC_DIR, name),
      omitBackground: false,
      clip: { x: 0, y: 0, width: size, height: size },
    });
    console.log(`Wrote ${name} (${size}x${size})`);
  }

  const ico = encode([
    fs.readFileSync(path.join(PUBLIC_DIR, 'favicon-16x16.png')),
    fs.readFileSync(path.join(PUBLIC_DIR, 'favicon-32x32.png')),
  ]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), Buffer.from(ico));
  console.log('Wrote favicon.ico');

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
