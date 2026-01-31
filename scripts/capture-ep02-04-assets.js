const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ASSETS_BASE = path.join(__dirname, '../src/tutorials/programming-fundamentals/assets');

async function captureAssets() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Episode 2: GitHub & Codespaces
  const ep02Screenshots = [
    { name: 'github-homepage', url: 'https://github.com' },
    { name: 'github-signup', url: 'https://github.com/signup' },
    { name: 'github-new-repo', url: 'https://github.com/new' },
    { name: 'github-codespaces', url: 'https://github.com/features/codespaces' },
    { name: 'github-education', url: 'https://education.github.com' },
    { name: 'vscode-homepage', url: 'https://code.visualstudio.com' },
  ];

  // Episode 3: AI Tools
  const ep03Screenshots = [
    { name: 'chatgpt-homepage', url: 'https://chat.openai.com' },
    { name: 'claude-homepage', url: 'https://claude.ai' },
    { name: 'gemini-homepage', url: 'https://gemini.google.com' },
    { name: 'github-copilot', url: 'https://github.com/features/copilot' },
    { name: 'openai-homepage', url: 'https://openai.com' },
    { name: 'anthropic-homepage', url: 'https://anthropic.com' },
  ];

  // Episode 4: Hello World (mostly code-based, few screenshots needed)
  const ep04Screenshots = [
    { name: 'python-repl', url: 'https://www.python.org/shell/' },
    { name: 'nodejs-homepage', url: 'https://nodejs.org' },
  ];

  const allCaptures = [
    { dir: 'ep02', screenshots: ep02Screenshots },
    { dir: 'ep03', screenshots: ep03Screenshots },
    { dir: 'ep04', screenshots: ep04Screenshots },
  ];

  for (const episode of allCaptures) {
    const screenshotDir = path.join(ASSETS_BASE, episode.dir, 'screenshots');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    console.log(`\n=== ${episode.dir.toUpperCase()} ===`);

    for (const item of episode.screenshots) {
      console.log(`Capturing: ${item.name}`);
      try {
        await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForTimeout(2000);

        const filePath = path.join(screenshotDir, `${item.name}.png`);
        await page.screenshot({ path: filePath });
        console.log(`  ✓ Saved: ${item.name}.png`);
      } catch (error) {
        console.log(`  ✗ Error: ${error.message}`);
      }
    }
  }

  await browser.close();
  console.log('\n✓ All captures complete!');
}

captureAssets().catch(console.error);
