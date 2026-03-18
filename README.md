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
