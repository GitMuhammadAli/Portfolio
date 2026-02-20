"use client";

import ProjectCard from "./projectCard";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsSection({ theme }: { theme: string }) {
  return (
    <section id="projects" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            My Projects
          </h2>
        </motion.div>

        {/* Featured Projects */}
        {projects.filter(p => p.featured).length > 0 && (
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`text-center mb-8 text-sm uppercase tracking-wider ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`}
            >
              ★ Featured Projects
            </motion.p>
            <div className="space-y-12">
              {projects.filter(p => p.featured).map((p, i) => (
                <ProjectCard
                  key={p.slug}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  imageUrl={p.imageUrl}
                  github={p.github}
                  demo={p.demo}
                  theme={theme}
                  reverse={i % 2 === 1}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div>
          {projects.filter(p => !p.featured).map((p, i) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              description={p.description}
              tags={p.tags}
              imageUrl={p.imageUrl}
              github={p.github}
              demo={p.demo}
              theme={theme}
              reverse={i % 2 === 1}
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
