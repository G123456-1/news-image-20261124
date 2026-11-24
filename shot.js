// Screenshot page.html at exactly 1024x1024 into entry.png.
// Usage: node shot.js  (run from the entry dir)
const { chromium } = require('/home/hatch/workspace/makefun/token-radar/test/pw/node_modules/playwright');
const path = require('node:path');

(async () => {
  const dir = __dirname;
  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'] });
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
  await page.goto('file://' + path.join(dir, 'page.html'), { waitUntil: 'load' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(dir, 'entry.png') });
  await browser.close();
  console.log('entry.png written');
})().catch((e) => { console.error(e); process.exit(1); });
