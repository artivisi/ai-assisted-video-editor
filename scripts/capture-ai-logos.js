const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const LOGOS_DIR = path.join(__dirname, '../src/tutorials/programming-fundamentals/assets/ep03/logos');

async function captureLogos() {
  if (!fs.existsSync(LOGOS_DIR)) {
    fs.mkdirSync(LOGOS_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 400, height: 400 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  const logos = [
    { name: 'openai-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1200px-OpenAI_Logo.svg.png' },
    { name: 'anthropic-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png' },
    { name: 'google-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' },
    { name: 'github-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png' },
    { name: 'vscode-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png' },
    { name: 'git-logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png' },
  ];

  for (const logo of logos) {
    console.log(`Capturing: ${logo.name}`);
    try {
      await page.goto(logo.url, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(500);
      const filePath = path.join(LOGOS_DIR, `${logo.name}.png`);
      await page.screenshot({ path: filePath });
      console.log(`  ✓ Saved`);
    } catch (error) {
      console.log(`  ✗ Error: ${error.message}`);
    }
  }

  // Copy some logos to ep02 as well
  const ep02LogosDir = path.join(__dirname, '../src/tutorials/programming-fundamentals/assets/ep02/logos');
  if (!fs.existsSync(ep02LogosDir)) {
    fs.mkdirSync(ep02LogosDir, { recursive: true });
  }

  ['github-logo', 'vscode-logo', 'git-logo'].forEach(logo => {
    const src = path.join(LOGOS_DIR, `${logo}.png`);
    const dest = path.join(ep02LogosDir, `${logo}.png`);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${logo} to ep02`);
    }
  });

  await browser.close();
  console.log('\n✓ Done!');
}

captureLogos().catch(console.error);
