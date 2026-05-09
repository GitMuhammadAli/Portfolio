"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Loading() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090b]">
      <motion.div
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="w-12 h-12 rounded-full border-2 border-white/15 border-t-zinc-100"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
