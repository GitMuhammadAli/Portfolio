"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] text-white px-4">
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
          className="px-6 py-2.5 rounded-full bg-white text-zinc-900 font-semibold shadow-lg shadow-white/10 hover:bg-zinc-100 transition-colors"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
