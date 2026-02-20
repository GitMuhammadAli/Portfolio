export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: "NgXoft Solutions",
    role: "Full-Stack Developer",
    period: "Jan 2025 – Present",
    description:
      "Building and shipping production-grade web applications using modern JavaScript/TypeScript stack.",
    achievements: [
      "Developed and shipped 10+ responsive UI modules using React, Next.js, and Tailwind CSS, reducing frontend bug reports by 30%",
      "Architected NestJS backend services with modular controllers, providers, and DTO-driven validation across 15+ API endpoints",
      "Containerized application workflows using Docker and deployed to Render and Vercel, cutting environment setup time from 2 hours to under 10 minutes",
      "Designed and integrated REST APIs for authentication, role-based dashboards, reporting, and admin interfaces serving 500+ daily requests",
      "Deployed and maintained production applications on VPS and Vercel with SSL configuration, achieving 99.5% uptime",
    ],
    technologies: [
      "React",
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
];

export const education = {
  degree: "Bachelors in Computer Science",
  institution: "Bahria University",
  period: "2021 – 2025",
  certifications: [
    { name: "Web Developer Bootcamp", year: "2024" },
    { name: "Getting Started with Node.js", year: "2024" },
  ],
};
