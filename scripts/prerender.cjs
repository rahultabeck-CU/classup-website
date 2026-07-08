#!/usr/bin/env node

const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Routes to pre-render (39 total)
const ROUTES = [
  '/',
  '/coaches',
  '/coaches/luna',
  '/coaches/leo',
  '/naplan',
  '/naplan-year-5',
  '/naplan-year-7',
  '/naplan-year-5-numeracy',
  '/naplan-year-5-reading',
  '/naplan-year-5-language-conventions',
  '/naplan-year-7-numeracy',
  '/naplan-year-7-reading',
  '/naplan-year-7-language-conventions',
  '/naplan/writing',
  '/naplan/proficiency-levels-explained',
  '/about',
  '/methodology',
  '/how-it-works',
  '/blog',
  '/blog/why-we-built-classup',
  '/blog/what-naplan-actually-tests',
  '/blog/the-problem-with-generic-naplan-prep',
  '/blog/how-to-read-naplan-results',
  '/blog/naplan-2027-dates',
  '/blog/free-naplan-practice',
  '/blog/luna-vs-leo',
  '/blog/naplan-anxiety-what-parents-can-do',
  '/blog/year-5-maths-struggles-term-2',
  '/blog/help-child-catch-up-reading',
  '/blog/year-7-high-school-maths-shock',
  '/pricing',
  '/roadmap',
  '/contact',
  '/privacy',
  '/terms',
  '/resources',
  '/404',
];

const DIST_DIR = path.join(__dirname, '../dist');
const PORT = 8888;
const BASE_URL = `http://localhost:${PORT}`;
const HELMET_WAIT_MS = 500;

let server;
let browser;

async function startServer() {
  return new Promise((resolve) => {
    server = http.createServer((req, res) => {
      let filePath = path.join(DIST_DIR, req.url);

      // SPA fallback: serve index.html for any path without an extension
      if (req.url === '/' || !path.extname(filePath)) {
        filePath = path.join(DIST_DIR, 'index.html');
      }

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not Found');
          return;
        }
        const ext = path.extname(filePath);
        const contentType = {
          '.html': 'text/html',
          '.js': 'application/javascript',
          '.css': 'text/css',
          '.json': 'application/json',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.svg': 'image/svg+xml',
          '.ico': 'image/x-icon',
          '.woff2': 'font/woff2',
        }[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      });
    });

    server.listen(PORT, () => {
      console.log(`Server running on ${BASE_URL}`);
      resolve();
    });
  });
}

async function prerender() {
  browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  for (const route of ROUTES) {
    try {
      const url = `${BASE_URL}${route}`;
      console.log(`Pre-rendering ${route}...`);

      await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, HELMET_WAIT_MS));

      const html = await page.content();

      // Determine output path
      let outputPath;
      if (route === '/') {
        outputPath = path.join(DIST_DIR, 'index.html');
      } else {
        outputPath = path.join(DIST_DIR, route, 'index.html');
      }

      // Create directories if they don't exist
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write HTML
      fs.writeFileSync(outputPath, html);
      console.log(`✓ ${route}`);
    } catch (err) {
      console.error(`✗ Failed to pre-render ${route}: ${err.message}`);
      process.exit(1);
    }
  }

  await browser.close();
}

async function main() {
  try {
    await startServer();
    await prerender();
    server.close();
    console.log('\n✓ Pre-rendering complete');
    process.exit(0);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    if (browser) await browser.close();
    if (server) server.close();
    process.exit(1);
  }
}

main();
