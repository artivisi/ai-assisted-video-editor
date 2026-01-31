const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const LOGOS_DIR = path.join(__dirname, '../src/tutorials/programming-fundamentals/assets/ep01/logos');
const SCREENSHOTS_DIR = path.join(__dirname, '../src/tutorials/programming-fundamentals/assets/ep01/screenshots');

async function captureLogos() {
  // Ensure directories exist
  [LOGOS_DIR, SCREENSHOTS_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  // Capture language logos from Wikipedia/official sources
  const logos = [
    {
      name: 'python-logo',
      url: 'https://www.python.org/static/community_logos/python-logo-generic.svg',
      direct: true,
    },
    {
      name: 'javascript-logo',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      direct: true,
    },
    {
      name: 'java-logo',
      url: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
      direct: true,
    },
  ];

  // Additional screenshots
  const additionalScreenshots = [
    {
      name: 'github-octoverse',
      url: 'https://github.blog/news-insights/octoverse/octoverse-2024/',
      waitFor: 5000,
      timeout: 60000,
    },
    {
      name: 'github-trending',
      url: 'https://github.com/trending',
      waitFor: 3000,
    },
    {
      name: 'pypl-index',
      url: 'https://pypl.github.io/PYPL.html',
      waitFor: 3000,
    },
  ];

  // Capture additional screenshots
  for (const item of additionalScreenshots) {
    console.log(`Capturing: ${item.name} from ${item.url}`);
    try {
      await page.goto(item.url, {
        waitUntil: 'domcontentloaded',
        timeout: item.timeout || 30000
      });
      await page.waitForTimeout(item.waitFor || 2000);

      const filePath = path.join(SCREENSHOTS_DIR, `${item.name}.png`);
      await page.screenshot({ path: filePath });
      console.log(`  Saved: ${filePath}`);
    } catch (error) {
      console.error(`  Error capturing ${item.name}: ${error.message}`);
    }
  }

  // Download logos using fetch
  console.log('\nDownloading logos...');
  const https = require('https');
  const http = require('http');

  for (const logo of logos) {
    console.log(`Downloading: ${logo.name}`);
    try {
      const ext = logo.url.endsWith('.svg') ? 'svg' : 'png';
      const filePath = path.join(LOGOS_DIR, `${logo.name}.${ext}`);

      // Navigate to URL and take screenshot for PNGs, or download directly
      if (logo.url.endsWith('.svg') || logo.url.endsWith('.png')) {
        await page.goto(logo.url, { waitUntil: 'load', timeout: 30000 });
        await page.waitForTimeout(1000);

        // For images, just screenshot the page
        await page.screenshot({ path: filePath.replace('.svg', '.png').replace('.png', '.png') });
        console.log(`  Saved: ${filePath}`);
      }
    } catch (error) {
      console.error(`  Error downloading ${logo.name}: ${error.message}`);
    }
  }

  await browser.close();
  console.log('\nDone!');
}

captureLogos().catch(console.error);
