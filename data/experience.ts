export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

// Reconciled with the resume: Hubble42 current, NgXoft prior. Descriptions
// mirror the resume bullets verbatim; the achievements expand the resume
// summary with a couple of supporting points so the portfolio section has
// something to read past the headline.
export const experience: Experience[] = [
  {
    company: "Hubble42",
    role: "Software Engineer",
    period: "August 2025 – Present",
    description:
      "Ship full-stack features for client platforms using Next.js, NestJS, and PostgreSQL with Prisma; design REST APIs with JWT/RBAC; integrate payment gateways, SMTP providers, and AI APIs.",
    achievements: [
      "Designed REST APIs with JWT and role-based access control for multi-tenant client dashboards",
      "Integrated payment gateways, SMTP providers, and AI APIs into production client products",
      "Owned end-to-end delivery: schema, server, client, deploy, observability",
    ],
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "JWT", "RBAC", "Stripe", "TypeScript"],
  },
  {
    company: "NgXoft Solutions",
    role: "Software Engineer",
    period: "October 2024 – August 2025",
    description:
      "Built React + Tailwind frontends and NestJS/PostgreSQL backends for production client projects; containerized services with Docker, deployed to Vercel and VPS, contributed to GitHub Actions CI/CD.",
    achievements: [
      "Shipped 10+ responsive UI modules with React, Next.js, and Tailwind — cut frontend bug reports by 30%",
      "Architected NestJS services with modular controllers and DTO-driven validation across 15+ endpoints",
      "Containerised services with Docker; deployed to Vercel and VPS — environment setup down from 2 hours to under 10 minutes",
      "Maintained production apps with SSL on VPS and Vercel — 99.5% uptime",
      "Contributed to GitHub Actions CI/CD pipelines",
    ],
    technologies: ["React", "Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "Vercel", "GitHub Actions", "Tailwind CSS"],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Bahria University",
  period: "2021 – 2025",
  certifications: [
    { name: "The Web Developer Bootcamp 2024", year: "2024" },
    { name: "Getting Started with Node.js", year: "2024" },
  ],
};
