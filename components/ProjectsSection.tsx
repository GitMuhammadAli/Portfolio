"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink } from 'lucide-react';
import { Container, Typography, Grid, Chip, Button } from '@mui/material';
import { useEffect, useRef } from 'react';

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  github: string;
  demo: string;
};

function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  github,
  demo,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 sm:mb-8 last:mb-0"
    >
      <section className="group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <Typography variant="h3" className="text-2xl font-semibold">{title}</Typography>
          <Typography variant="body1" className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </Typography>
          <div className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                className="bg-black/[0.7] text-white dark:text-white/70"
              />
            ))}
          </div>
          <div className="flex space-x-4 mt-4">
            <Button
              variant="contained"
              color="primary"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<Github className="w-5 h-5" />}
            >
              Code
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<ExternalLink className="w-5 h-5" />}
            >
              Demo
            </Button>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={452}
          height={320}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

const projects = [
  {
    title: 'AI-Powered Task Manager',
    description: 'A smart task management app that uses AI to prioritize and categorize tasks.',
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    github: 'https://github.com/yourusername/ai-task-manager',
    demo: 'https://ai-task-manager-demo.com',
    tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
  },
  {
    title: 'Real-time Collaboration Platform',
    description: 'A platform for teams to collaborate on projects in real-time with video chat and shared workspaces.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    github: 'https://github.com/yourusername/collab-platform',
    demo: 'https://collab-platform-demo.com',
    tags: ['React', 'WebRTC', 'Socket.io', 'Redux'],
  },
  {
    title: 'Blockchain-based Voting System',
    description: 'A secure and transparent voting system built on blockchain technology.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    github: 'https://github.com/yourusername/blockchain-voting',
    demo: 'https://blockchain-voting-demo.com',
    tags: ['Solidity', 'Ethereum', 'React', 'Web3.js'],
  },
]


export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          className="mb-12 text-gray-900 dark:text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
            My Projects
          </span>
        </Typography>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="mb-12 text-black dark:text-white"
        >
          <span className="">
            Comming Soon
          </span>
        </Typography>
          {/* {projects.map((project, index) => (
            <ProjectCard key={index} {...project} imageUrl={project.image} />
          ))} */}
        </motion.div>
      </Container>
    </section>
  );
}