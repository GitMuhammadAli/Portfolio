"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1f2e]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-16 h-16 border-4 border-cyan-500 border-t-blue-500 rounded-full"
        style={{ borderTopColor: '#3b82f6' }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
