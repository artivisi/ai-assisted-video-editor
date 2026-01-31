const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const LOGOS_DIR = path.join(__dirname, '../src/tutorials/programming-fundamentals/assets/ep01/logos');

async function captureMoreLogos() {
  if (!fs.existsSync(LOGOS_DIR)) {
    fs.mkdirSync(LOGOS_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 400, height: 400 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  // Logo URLs from Wikipedia/official sources
  const logos = [
    { name: 'php-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png' },
    { name: 'go-logo', url: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png' },
    { name: 'rust-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png' },
    { name: 'typescript-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' },
    { name: 'csharp-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png' },
    { name: 'cpp-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' },
    { name: 'swift-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1200px-Swift_logo.svg.png' },
    { name: 'kotlin-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png' },
    { name: 'c-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png' },
  ];

  for (const logo of logos) {
    console.log(`Capturing: ${logo.name}`);
    try {
      await page.goto(logo.url, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(500);

      const filePath = path.join(LOGOS_DIR, `${logo.name}.png`);
      await page.screenshot({ path: filePath });
      console.log(`  Saved: ${filePath}`);
    } catch (error) {
      console.error(`  Error: ${error.message}`);
    }
  }

  await browser.close();
  console.log('\nDone!');
}

captureMoreLogos().catch(console.error);
