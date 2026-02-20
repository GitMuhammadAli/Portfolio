"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Layers } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white">
      {/* Back Navigation */}
      <div className="sticky top-0 z-40 border-b border-gray-700/50 bg-[#1a1f2e]/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center px-4 py-3">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-cyan-400"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-blue-500/[0.08] blur-3xl" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{project.icon}</span>
              {project.featured && (
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  ★ Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {project.title}
            </h1>
            <p className="mt-2 text-lg text-cyan-400/80">{project.subtitle}</p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-600 hover:to-blue-600 transition-all"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full border border-gray-600 text-gray-300 hover:border-cyan-500/40 hover:text-white transition-all"
              >
                <Github size={14} />
                View Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Screenshot Placeholder */}
      <div className="container mx-auto px-4 -mt-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-gray-700/50 bg-gray-800/30 overflow-hidden"
        >
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 border-b border-gray-700/50 bg-gray-800/50 px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="ml-3 flex-1 rounded-md bg-gray-900/50 px-3 py-1">
              <span className="font-mono text-[11px] text-gray-500">
                {project.demo || project.github}
              </span>
            </div>
          </div>
          {/* Content area */}
          <div className="relative h-56 sm:h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover object-top"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40">
              <div className="text-center">
                <span className="text-4xl">{project.icon}</span>
                <p className="mt-2 font-bold text-white/60">{project.title}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left - Overview & Features */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="leading-relaxed text-gray-300">{project.description}</p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-400" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Architecture */}
            {project.architecture && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Layers size={20} className="text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">Architecture</h2>
                </div>
                <p className="leading-relaxed text-gray-300">{project.architecture}</p>
              </motion.div>
            )}
          </div>

          {/* Right - Tech Stack Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="space-y-3">
              {project.techDetails.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-white">{tech.name}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{tech.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
