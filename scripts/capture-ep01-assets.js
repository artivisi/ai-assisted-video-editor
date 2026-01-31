const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ASSETS_DIR = path.join(__dirname, '../src/tutorials/programming-fundamentals/assets/ep01/screenshots');

async function captureScreenshots() {
  // Ensure directory exists
  if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2, // Retina quality
  });

  const page = await context.newPage();

  const screenshots = [
    {
      name: 'tiobe-index',
      url: 'https://www.tiobe.com/tiobe-index/',
      selector: '.table-top20', // The ranking table
      waitFor: 2000,
    },
    {
      name: 'stackoverflow-survey-languages',
      url: 'https://survey.stackoverflow.co/2024/technology#most-popular-technologies-language',
      fullPage: false,
      waitFor: 3000,
    },
    {
      name: 'github-octoverse',
      url: 'https://github.blog/news-insights/octoverse/octoverse-2024/',
      fullPage: false,
      waitFor: 3000,
    },
    {
      name: 'python-homepage',
      url: 'https://www.python.org/',
      fullPage: false,
      waitFor: 2000,
    },
    {
      name: 'javascript-mdn',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      fullPage: false,
      waitFor: 2000,
    },
    {
      name: 'java-dev',
      url: 'https://dev.java/',
      fullPage: false,
      waitFor: 2000,
    },
  ];

  for (const item of screenshots) {
    console.log(`Capturing: ${item.name} from ${item.url}`);
    try {
      await page.goto(item.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(item.waitFor || 2000);

      const filePath = path.join(ASSETS_DIR, `${item.name}.png`);

      if (item.selector) {
        const element = await page.$(item.selector);
        if (element) {
          await element.screenshot({ path: filePath });
        } else {
          console.log(`  Selector not found, taking full screenshot`);
          await page.screenshot({ path: filePath, fullPage: item.fullPage });
        }
      } else {
        await page.screenshot({ path: filePath, fullPage: item.fullPage });
      }

      console.log(`  Saved: ${filePath}`);
    } catch (error) {
      console.error(`  Error capturing ${item.name}: ${error.message}`);
    }
  }

  await browser.close();
  console.log('\nDone! Screenshots saved to:', ASSETS_DIR);
}

captureScreenshots().catch(console.error);
