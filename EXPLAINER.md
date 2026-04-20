# Portfolio — How to Explain This Project

> 2-minute talking-points version. Pair with [README.md](README.md) for setup. Live at https://alishahid-dev.vercel.app.

---

**One-liner.** A Next.js 14 + Tailwind 3 personal portfolio with motion-heavy hero (Framer Motion + GSAP), case-study pages for the seven side projects, and a static-but-fast deploy on Vercel.

**The problem.** Recruiters spend ~10 seconds on a portfolio. The site has to (1) communicate seniority in the first scroll, (2) make every project click-through trivially explorable, and (3) load fast on mobile in Karachi on patchy 4G. That ruled out anything heavy — no headless CMS, no client-side data fetching, no custom backend.

**Architecture in five bullets.**
- **Next.js 14 App Router**, statically rendered — no API routes, no DB. Project content lives in TypeScript modules under `data/`.
- **Tailwind 3 + custom theme** in `tailwind.config.ts`; design tokens defined once and reused across hero, case-study, and contact sections.
- **Framer Motion** for in-view scroll animations + page transitions; **GSAP** for the timeline-style hero sequence (used where Framer's API gets verbose).
- **Vercel** static deploy on push to `main`. No env vars, no secrets, no runtime cost.
- **Screenshot automation**: `capture-screenshot.js` script generates Open Graph preview images for every project page so social shares render correctly.

**Three hardest calls.**
1. *Why no CMS.* Adding Sanity / Contentful would mean a build-time fetch, a free-tier eviction risk, and a separate dashboard to keep in sync. Project content changes every few months — a TypeScript source file is the right cadence.
2. *Why mix Framer Motion and GSAP.* Framer is ergonomic for component-level animations (scroll-into-view, tap states). GSAP wins for orchestrated timeline sequences in the hero. Picking one would have meant fighting it.
3. *Why static site instead of a Notion/Linktree-style hosted alternative.* Owning the front door means owning the analytics, the SEO, the case-study format, and the speed budget. A hosted alternative would compress everything into someone else's design language.

**Status (April 2026).** Live at alishahid-dev.vercel.app. Stable; updated when projects ship.

**Lead with this in an interview.** "It's a portfolio, not a startup — but the constraint is the interesting part. Ten seconds, mobile-first, no backend, every animation has to justify its bytes. I'll walk you through the GSAP hero timeline because that's the most interesting chunk of code, and through the case-study layout because that's where every project I've shipped lives."
