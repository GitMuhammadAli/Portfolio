"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@mui/material";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  github: string;
  demo?: string;
  theme: string;
  reverse?: boolean;
};

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  github,
  demo,
  theme,
  reverse = false,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Scroll Animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group mb-12 sm:mb-24"
    >
      <section
        className={`
          relative max-w-[44rem] mx-auto border rounded-xl overflow-hidden 
          transition-all sm:h-[22rem]
          ${theme === "dark" 
            ? "bg-gray-900/40 border-gray-700 hover:bg-gray-900/60" 
            : "bg-gray-100 border-gray-300 hover:bg-gray-200"
          }
          flex flex-col sm:flex-row
          ${reverse ? "sm:flex-row-reverse" : ""}
        `}
      >
        {/* Text Content */}
        <div className="
          pt-6 pb-8 px-6
          sm:pl-10 sm:pr-4 sm:pt-10 
          sm:max-w-[55%] 
          flex flex-col h-full
        ">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            {title}
          </h3>

          <p className={`mt-3 leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
            {description}
          </p>

          {/* Tags */}
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, i) => (
              <li
                key={i}
                className={`
                  px-3 py-1 rounded-full text-[0.7rem] uppercase tracking-wider
                  ${theme === "dark"
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    : "bg-cyan-500/10 text-cyan-700 border border-cyan-500/20"
                  }
                `}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-3 mt-5">
            <Button
              variant="outlined"
              size="small"
              className={`bg-gradient-to-r from-cyan-500/10 to-blue-500/10 ${
                theme === "dark"
                  ? "border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300"
                  : "border-cyan-500/20 text-cyan-700 hover:bg-cyan-500/20 hover:text-cyan-900"
              }`}
              onClick={() => window.open(github, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>

            {demo && (
              <Button
                variant="outlined"
                size="small"
                className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 ${
                  theme === "dark"
                    ? "border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300"
                    : "border-blue-500/20 text-blue-700 hover:bg-blue-500/20 hover:text-blue-900"
                }`}
                onClick={() => window.open(demo, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
          </div>
        </div>

        {/* Image */}
        <Image
          src={imageUrl}
          alt={title}
          width={700}
          height={500}
          className={`
            absolute hidden sm:block top-10 w-[30rem] rounded-lg shadow-2xl 
            transition duration-300
            group-hover:scale-[1.04] group-hover:translate-y-3 group-hover:-rotate-2

            ${reverse 
              ? "right-[initial] -left-40 group-hover:translate-x-3 group-hover:rotate-2"
              : "-right-40 group-hover:-translate-x-3"
            }
          `}
        />
      </section>
    </motion.div>
  );
}

