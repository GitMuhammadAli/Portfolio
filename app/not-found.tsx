"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] text-white px-4">
      <motion.div
        variants={prefersReducedMotion ? undefined : fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-zinc-200">
          Page Not Found
        </h2>
        <p className="mb-8 text-zinc-400 text-center max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 transition-colors"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
