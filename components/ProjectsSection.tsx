"use client";

import ProjectCard from "./projectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Rent-Wise",
    description:
      "RentWise is a next-generation decentralized SaaS rental platform designed to bring trust, transparency, and automation into the property rental process.",
    tags: ["JavaScript", "Full Stack", "Web App"],
    imageUrl: "/projects/rentwise.png",
    github: "https://github.com/GitMuhammadAli/Rent-Wise",
  },
  {
    title: "Stock-Pilot",
    description:
      "Stock market tracking and analysis tool built with TypeScript. Monitor stocks and analyze trends.Your Inventory & Supply Chain Tracker SaaS is designed to help businesses manage inventory, track supply chains, and optimize stock levels efficiently.",
    tags: ["TypeScript", "React", "Finance"],
    imageUrl: "/projects/stockpilot.png",
    github: "https://github.com/GitMuhammadAli/Stock-Pilot",
  },
  {
    title: "AuthKit",
    description:
      "Authentication toolkit with secure login, registration and JWT session management.",
    tags: ["JavaScript", "Authentication", "Security"],
    imageUrl: "/projects/authkit.png",
    github: "https://github.com/GitMuhammadAli/AuthKit",
  },
  {
    title: "Fitness-Planner",
    description:
      "Track workouts, plan sessions, and maintain consistency with your fitness routine.",
    tags: ["JavaScript", "Health", "Web App"],
    imageUrl: "/projects/fitness.png",
    github: "https://github.com/GitMuhammadAli/Fitness-Planner",
  },
  {
    title: "APOD React",
    description:
      "NASA APOD viewer built with React to explore daily images from space.",
    tags: ["React", "NASA API"],
    imageUrl: "/projects/apod.png",
    github: "https://github.com/GitMuhammadAli/APOD-react",
  },
  {
    title: "Nova Plus",
    description:
      "Multi-tenant SaaS platform built with NestJS + Next.js 15. Role system, JWT auth, isolation.",
    tags: ["NestJS", "Next.js", "SaaS"],
    imageUrl: "/projects/nova-plus.png",
    github: "https://github.com/GitMuhammadAli/nova-plus",
  },
];


export default function ProjectsSection({ theme }: { theme: string }) {
  return (
    <section id="projects" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            My Projects
          </h2>
        </motion.div>

        {/* Vertical stacked projects */}
        <div>
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              {...p}
              theme={theme}
              reverse={i % 2 === 1} // alternate layout
            />
          ))}
        </div>
      </div>
      
     {/* Future Projects Coming Soon */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-28 flex justify-center"
>
  <div
    className={`
      relative max-w-2xl text-center p-10 rounded-2xl border backdrop-blur-xl
      shadow-xl transition-all duration-500
      ${
        theme === "dark"
          ? "bg-gray-900/40 border-gray-700 hover:bg-gray-900/60"
          : "bg-white/50 border-gray-300 hover:bg-white/70"
      }
    `}
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl rounded-2xl" />

    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
    >
      More Projects on the Way 🚀
    </motion.h3>


    {/* Animated Coming Soon Badge */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.9, type: "spring", stiffness: 150 }}
      className="mt-6 inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg"
    >
      Coming Soon…
    </motion.div>
  </div>
</motion.div>



    </section>
    
  );
}
