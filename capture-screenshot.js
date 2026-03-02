const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://job-auto-applier-three.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'C:\\Ali\\Pro\\Portfolio\\public\\projects\\jobpilot.png', fullPage: false });
  await browser.close();
  console.log('Screenshot saved to public/projects/jobpilot.png');
})();
