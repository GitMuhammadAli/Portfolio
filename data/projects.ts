export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  featured: boolean;
  description: string;
  features: string[];
  tags: string[];
  techDetails: { name: string; role: string }[];
  architecture?: string;
  github: string;
  demo?: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    slug: "devradar",
    title: "DevRadar",
    subtitle: "AI-Powered Job Market Intelligence",
    icon: "📡",
    featured: true,
    description:
      "Full-stack SaaS platform that scrapes live job postings from Pakistan and global remote markets, extracts skills with AI, and delivers data-driven career insights. Features real-time skill trends, salary intelligence, resume gap analysis, and AI-powered interview prep.",
    features: [
      "Real-time skill trend tracking from 3 job boards (Rozee.pk, Arbeitnow, RemoteOK)",
      "AI-powered skill extraction using Groq (Llama 3.1)",
      "Resume gap analysis with semantic search (pgvector embeddings)",
      "Salary intelligence with percentile bands in PKR and USD",
      "AI interview prep with question generation and scoring",
      "Personalized learning paths with skill ROI calculations",
      "Public REST API with rate limiting and authentication",
      "Email-based skill alerts with configurable thresholds",
    ],
    tags: ["Next.js", "tRPC", "PostgreSQL", "pgvector", "Groq AI", "Prisma", "Turborepo", "TypeScript"],
    techDetails: [
      { name: "Next.js 14", role: "Frontend framework with App Router" },
      { name: "tRPC v11", role: "End-to-end type-safe API layer" },
      { name: "PostgreSQL + pgvector", role: "Database with vector embeddings" },
      { name: "Prisma 6", role: "Type-safe ORM with 17 models" },
      { name: "Groq AI (Llama 3.1)", role: "Skill extraction & interview generation" },
      { name: "Google Gemini", role: "768-dim embedding generation" },
      { name: "Upstash QStash", role: "Serverless background job queue" },
      { name: "NextAuth.js", role: "Google & GitHub OAuth" },
      { name: "Turborepo", role: "Monorepo build orchestration" },
    ],
    architecture:
      "Turborepo monorepo with apps/web (Next.js), apps/worker (QStash webhooks), and shared packages for AI, database, and validation. Data pipeline scrapes 3 job boards every 6 hours, extracts skills with Groq AI, generates Gemini embeddings, and computes weekly snapshots. tRPC provides end-to-end type safety from database to UI.",
    github: "https://github.com/GitMuhammadAli/DevRadar",
    demo: "https://dev-radar-web-j2jq.vercel.app/",
    imageUrl: "/projects/devradar.png",
  },
  {
    slug: "carecircle",
    title: "CareCircle",
    subtitle: "AI-Powered Family Caregiving Platform",
    icon: "💚",
    featured: true,
    description:
      "Full-stack caregiving coordination app with RAG-based Q&A, AI care summaries, and natural language parsing. Built for the 53 million Americans caring for loved ones — consolidating scattered communication into one organized platform with real-time chat, medication tracking, and emergency alerts.",
    features: [
      "RAG-based Q&A using Gemini API + pgvector",
      "AI-powered care summaries",
      "Real-time chat via WebSockets",
      "Medication tracking with scheduling",
      "Emergency alert system",
      "Background job processing with BullMQ",
      "60+ REST API endpoints",
      "PostgreSQL with vector embeddings",
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "pgvector", "Gemini API", "BullMQ", "WebSockets", "TypeScript"],
    techDetails: [
      { name: "Next.js 15", role: "Frontend framework & SSR" },
      { name: "NestJS", role: "Backend framework with modular architecture" },
      { name: "PostgreSQL", role: "Primary database" },
      { name: "pgvector", role: "Semantic search & vector embeddings" },
      { name: "Gemini API", role: "AI-powered Q&A and care summaries" },
      { name: "WebSockets", role: "Real-time chat communication" },
      { name: "BullMQ", role: "Background job processing & scheduling" },
      { name: "JWT", role: "Authentication & authorization" },
      { name: "Tailwind CSS", role: "UI styling & responsive design" },
    ],
    architecture:
      "Monorepo with Next.js frontend and NestJS backend. PostgreSQL with pgvector extension enables semantic search across caregiving data. BullMQ handles async task processing for medication reminders, care summaries, and notifications. WebSocket gateway provides real-time chat between family circle members.",
    github: "https://github.com/GitMuhammadAli/CareCircle",
    demo: "https://care-giving-web.vercel.app/",
    imageUrl: "/projects/carecircle.png",
  },
  {
    slug: "jobpilot",
    title: "JobPilot",
    subtitle: "AI Job Auto-Applier",
    icon: "🚀",
    featured: true,
    description:
      "AI-powered job application automation tool that streamlines the job search process. Features a Kanban board for tracking applications, automated job scraping from 8+ sources, smart email notifications, and an analytics dashboard.",
    features: [
      "Kanban board for visual application tracking",
      "Automated job scraping from 8+ sources",
      "Smart email notifications with resume recommendations",
      "Analytics dashboard for application metrics",
      "Resume & cover letter management",
      "Filter & sort by company, role, status",
    ],
    tags: ["Next.js", "TypeScript", "AI Automation", "Job Search"],
    techDetails: [
      { name: "Next.js", role: "Frontend framework with SSR" },
      { name: "TypeScript", role: "Type-safe development" },
      { name: "Tailwind CSS", role: "Responsive styling" },
      { name: "MongoDB", role: "Document database" },
    ],
    architecture:
      "Full-stack Next.js application with server-side rendering for the dashboard. Background workers handle automated scraping and email notification delivery.",
    github: "https://github.com/GitMuhammadAli/job-auto-applier",
    demo: "https://job-auto-applier-three.vercel.app/",
    imageUrl: "/projects/jobpilot.png",
  },
  {
    slug: "rentwise",
    title: "Rent-Wise",
    subtitle: "MERN Rental Management Platform",
    icon: "🏠",
    featured: false,
    description:
      "RentWise is a next-generation decentralized SaaS rental platform designed to bring trust, transparency, and automation into the property rental process.",
    features: [
      "Role-based access control (tenants, landlords, admins)",
      "Property listing management with search & filters",
      "Booking workflows with status tracking",
      "Dashboard analytics",
    ],
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Full Stack"],
    techDetails: [
      { name: "React", role: "Frontend UI library" },
      { name: "Node.js", role: "Backend runtime" },
      { name: "Express", role: "HTTP server framework" },
      { name: "MongoDB", role: "Document database" },
      { name: "JWT", role: "Authentication & role management" },
      { name: "Tailwind CSS", role: "Responsive styling" },
    ],
    github: "https://github.com/GitMuhammadAli/Rent-Wise",
    imageUrl: "/projects/rentwise.png",
  },
  {
    slug: "stockpilot",
    title: "Stock-Pilot",
    subtitle: "Next.js Inventory Management System",
    icon: "📊",
    featured: false,
    description:
      "Stock market tracking and analysis tool built with TypeScript. Your Inventory & Supply Chain Tracker SaaS is designed to help businesses manage inventory, track supply chains, and optimize stock levels efficiently.",
    features: [
      "Product & supplier management dashboards",
      "Real-time stock level tracking",
      "Reusable component library",
      "REST API integration for live updates",
    ],
    tags: ["TypeScript", "Next.js", "React", "Finance"],
    techDetails: [
      { name: "Next.js", role: "Frontend framework & routing" },
      { name: "TypeScript", role: "Type-safe development" },
      { name: "REST APIs", role: "Data fetching & updates" },
      { name: "Tailwind CSS", role: "UI styling" },
    ],
    github: "https://github.com/GitMuhammadAli/Stock-Pilot",
    imageUrl: "/projects/stockpilot.png",
  },
  {
    slug: "authkit",
    title: "AuthKit Pro",
    subtitle: "Full-Stack Authentication System",
    icon: "🔐",
    featured: false,
    description:
      "Secure authentication toolkit with JWT-based login, signup, password reset, email verification, and token refresh logic.",
    features: [
      "JWT-based login/signup flow",
      "Password reset with email verification",
      "Token refresh logic",
      "Secure form validation",
    ],
    tags: ["JavaScript", "Authentication", "Security", "JWT"],
    techDetails: [
      { name: "JavaScript", role: "Core language" },
      { name: "Node.js", role: "Backend runtime" },
      { name: "Express", role: "HTTP server" },
      { name: "JWT", role: "Token management" },
      { name: "MongoDB", role: "User data storage" },
    ],
    github: "https://github.com/GitMuhammadAli/AuthKit",
    imageUrl: "/projects/authkit.png",
  },
  {
    slug: "fitness-planner",
    title: "Fitness-Planner",
    subtitle: "Health & Workout App",
    icon: "💪",
    featured: false,
    description:
      "Track workouts, plan sessions, and maintain consistency with your fitness routine.",
    features: [
      "Workout session tracking",
      "Exercise planning & scheduling",
      "Progress visualization",
      "Responsive mobile-friendly design",
    ],
    tags: ["JavaScript", "Health", "Web App"],
    techDetails: [
      { name: "JavaScript", role: "Core language" },
      { name: "HTML/CSS", role: "Structure & styling" },
    ],
    github: "https://github.com/GitMuhammadAli/Fitness-Planner",
    imageUrl: "/projects/fitness.png",
  },
  {
    slug: "apod-react",
    title: "APOD React",
    subtitle: "NASA API Integration",
    icon: "🌌",
    featured: false,
    description:
      "NASA APOD viewer built with React to explore daily images from space.",
    features: [
      "Daily astronomy picture display",
      "NASA API integration",
      "Image details & descriptions",
      "Responsive gallery layout",
    ],
    tags: ["React", "NASA API", "JavaScript"],
    techDetails: [
      { name: "React", role: "UI framework" },
      { name: "NASA API", role: "Data source" },
    ],
    github: "https://github.com/GitMuhammadAli/APOD-react",
    imageUrl: "/projects/apod.png",
  },
  {
    slug: "nova-plus",
    title: "Nova Plus",
    subtitle: "NestJS + Next.js SaaS",
    icon: "⚡",
    featured: false,
    description:
      "Multi-tenant SaaS platform built with NestJS + Next.js 15. Role system, JWT auth, isolation.",
    features: [
      "Multi-tenant architecture with data isolation",
      "Role system (Super Admin, Org Admin, User)",
      "JWT authentication & session management",
      "Tenant-specific configurations",
    ],
    tags: ["NestJS", "Next.js", "SaaS", "TypeScript"],
    techDetails: [
      { name: "NestJS", role: "Backend framework" },
      { name: "Next.js", role: "Frontend with SSR" },
      { name: "PostgreSQL", role: "Relational database" },
      { name: "JWT", role: "Token-based authentication" },
      { name: "TypeORM", role: "Database ORM" },
    ],
    github: "https://github.com/GitMuhammadAli/nova-plus",
    imageUrl: "/projects/nova-plus.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
