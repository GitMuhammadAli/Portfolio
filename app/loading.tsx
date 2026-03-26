"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Loading() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      <motion.div
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="w-12 h-12 rounded-full border-2 border-indigo-500/30 border-t-indigo-400"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
