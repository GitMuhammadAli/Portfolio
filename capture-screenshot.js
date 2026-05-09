// Multi-project screenshot capture.
// Iterates a list of {slug, url, viewport} entries, saves each as
// public/projects/<slug>.png at the given viewport size. Cross-platform
// path (relative, not Windows-only).
//
// Usage:
//   npx playwright install chromium      # one-time
//   node capture-screenshot.js           # captures all entries
//   node capture-screenshot.js relo      # captures one slug only
//
// Each project gets the same viewport (1440x900) by default. Per-project
// viewport, scroll, or wait override goes in the `targets` table below.

const { chromium } = require("playwright");
const path = require("path");

// Sahara: live deploy at sahara-pk.vercel.app (alias sahara-wa.vercel.app).
// If the public deploy is mid-rebuild and 404ing, fall back to local dev:
//   pnpm --filter @whatsapp-saas/web dev   # in /Users/alishahid/Mine/project/whatsapp-saas
//   PORT=3010 (then point `url` here at http://localhost:3010 for the run)
const targets = [
  {
    slug: "whatsapp-saas",
    url: "https://sahara-pk.vercel.app/",
    waitMs: 3500,
  },
  {
    slug: "relo",
    url: "https://relo-iota.vercel.app/",
    waitMs: 3000,
  },
  {
    slug: "devradar",
    url: "https://dev-radar-web.vercel.app/",
    waitMs: 3500,
  },
  {
    slug: "carecircle",
    url: "https://care-giving-web.vercel.app/",
    waitUntil: "domcontentloaded",
    waitMs: 5000,
    timeoutMs: 45000,
  },
  {
    slug: "jobpilot",
    url: "https://job-auto-applier-three.vercel.app/",
    waitMs: 4000,
  },
];

const DEFAULT_VIEWPORT = { width: 1440, height: 900 };
const OUT_DIR = path.join(__dirname, "public", "projects");

(async () => {
  const requestedSlug = process.argv[2];
  const queue = requestedSlug
    ? targets.filter((t) => t.slug === requestedSlug)
    : targets;

  if (queue.length === 0) {
    console.error(`No target matched "${requestedSlug}". Known slugs: ${targets.map((t) => t.slug).join(", ")}`);
    process.exit(1);
  }

  const browser = await chromium.launch();
  let ok = 0;
  let fail = 0;

  for (const t of queue) {
    const viewport = t.viewport ?? DEFAULT_VIEWPORT;
    const out = path.join(OUT_DIR, `${t.slug}.png`);
    const ctx = await browser.newContext({ viewport, deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    try {
      console.log(`▸ ${t.slug} → ${t.url}`);
      await page.goto(t.url, {
        waitUntil: t.waitUntil ?? "networkidle",
        timeout: t.timeoutMs ?? 30000,
      });
      await page.waitForTimeout(t.waitMs ?? 3000);
      await page.screenshot({ path: out, fullPage: false });
      console.log(`  ✓ saved ${path.relative(__dirname, out)}`);
      ok++;
    } catch (err) {
      console.error(`  ✗ ${t.slug}: ${err.message}`);
      fail++;
    } finally {
      await ctx.close();
    }
  }

  await browser.close();
  console.log(`\nDone. ${ok} captured, ${fail} failed.`);
  process.exit(fail > 0 ? 1 : 0);
})();
