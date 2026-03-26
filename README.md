# Ali Shahid — Developer Portfolio

Personal portfolio website for Ali Shahid, a Full Stack Developer specializing in Next.js, NestJS, React, and TypeScript. Showcases professional experience, skills, and projects with smooth animations and a dark-themed UI.

Live site: [alishahid-dev.vercel.app](https://alishahid-dev.vercel.app)

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, custom CSS animations |
| Animations | Framer Motion, GSAP |
| Icons | Lucide React |
| Font | Inter (Google Fonts) |
| Image optimization | Sharp |
| Linting | ESLint, TypeScript ESLint |
| Testing | Playwright |

---

## Sections

- **About** — Introduction and personal summary
- **Experience** — Professional work history (NgXoft Solutions, Full-Stack Developer)
- **Skills** — Categorized skill grid: Frontend, Backend, Databases, DevOps & Tools
- **Projects** — Featured and full project showcase (9 projects including DevRadar, CareCircle, JobPilot, and more)
- **Education** — Degree and certifications (Bahria University, BS Computer Science)
- **Contact** — Contact form / links
- **Footer** — Social links and credits

Each project card links to a dedicated detail page at `/projects/[slug]` with architecture notes, tech stack breakdown, GitHub link, and live demo.

---

## Running Locally

**Prerequisites:** Node.js 18+ and npm

```bash
# Clone the repository
git clone https://github.com/GitMuhammadAli/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## Project Structure

```
app/              # Next.js App Router pages and layout
  page.tsx        # Main single-page portfolio entry
  projects/       # Dynamic project detail pages
components/       # Section components (Navbar, About, Experience, Skills, Projects, etc.)
data/             # Static data files (projects.ts, experience.ts, skills.ts)
public/           # Static assets (images, favicon, OG image)
tailwind.config.ts
```

---

## Featured Projects

| Project | Description | Stack |
|---|---|---|
| [DevRadar](https://dev-radar-web-j2jq.vercel.app/) | AI-powered job market intelligence SaaS | Next.js, tRPC, PostgreSQL, pgvector, Groq AI |
| [CareCircle](https://care-giving-web.vercel.app/) | AI-powered family caregiving platform | Next.js, NestJS, PostgreSQL, Gemini API |
| [JobPilot](https://job-auto-applier-three.vercel.app/) | AI job application automation with Kanban board | Next.js, TypeScript, MongoDB |

---

## Page Structure

| Route | Description |
|-------|-------------|
| `/` | Main single-page portfolio (all sections) |
| `/projects/[slug]` | Individual project detail pages |

### Sections (in scroll order)

1. **Navbar** -- Fixed top navigation with smooth scroll links
2. **Hero** -- Name, title, animated intro
3. **About** -- Personal summary and background
4. **Experience** -- Work history with timeline layout
5. **Skills** -- Categorized grid (Frontend, Backend, Databases, DevOps)
6. **Projects** -- Featured project cards with hover effects
7. **Education** -- Degree and certifications
8. **Contact** -- Contact info and links
9. **Footer** -- Social links and credits

---

## Adding New Projects

Project data lives in `data/projects.ts`. To add a new project:

1. Add an entry to the projects array:

```ts
{
  slug: "my-project",           // URL-friendly name
  title: "My Project",
  description: "What it does",
  longDescription: "Detailed explanation for the detail page",
  image: "/projects/my-project.png",
  tags: ["Next.js", "TypeScript", "PostgreSQL"],
  github: "https://github.com/user/repo",
  live: "https://my-project.vercel.app",
  featured: true,               // Show on main page
}
```

2. Add the project image to `public/projects/`
3. The detail page at `/projects/my-project` is auto-generated

Other data files:
- `data/experience.ts` -- work history entries
- `data/skills.ts` -- skill categories and items

---

## Animations

| Library | Usage |
|---------|-------|
| **Framer Motion** | Page transitions, scroll-triggered reveals, hover effects on cards |
| **GSAP** | Complex timeline animations, text reveals |
| **CSS** | Custom keyframe animations in `globals.css` and `tailwind.config.ts` |

Shared motion variants are defined in `lib/motion.ts` for consistent animation across components.

---

## Deployment

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. No environment variables needed
4. Vercel auto-detects Next.js and builds

**Custom domain:** Add in Vercel dashboard > Settings > Domains

---

## Customization

| What to change | Where |
|----------------|-------|
| Personal info (name, bio, links) | `data/` directory + `components/hero.tsx` |
| Colors / theme | `tailwind.config.ts` (extend colors) |
| Social links | `components/footer.tsx` |
| Projects | `data/projects.ts` + images in `public/projects/` |
| Experience | `data/experience.ts` |
| Skills | `data/skills.ts` |
