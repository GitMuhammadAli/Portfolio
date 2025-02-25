// "use client";

// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Github, ExternalLink } from 'lucide-react';
// import { Container, Typography, Grid, Chip, Button } from '@mui/material';
// import { useEffect, useRef } from 'react';

// type ProjectProps = {
//   title: string;
//   description: string;
//   tags: string[];
//   imageUrl: string;
//   github: string;
//   demo: string;
// };

// function ProjectCard({
//   title,
//   description,
//   tags,
//   imageUrl,
//   github,
//   demo,
// }: ProjectProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });
//   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         scale: scaleProgess,
//         opacity: opacityProgess,
//       }}
//       className="mb-3 sm:mb-8 last:mb-0"
//     >
//       <section className="group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
//         <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
//           <Typography variant="h3" className="text-2xl font-semibold">{title}</Typography>
//           <Typography variant="body1" className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
//             {description}
//           </Typography>
//           <div className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
//             {tags.map((tag, index) => (
//               <Chip
//                 key={index}
//                 label={tag}
//                 size="small"
//                 className="bg-black/[0.7] text-white dark:text-white/70"
//               />
//             ))}
//           </div>
//           <div className="flex space-x-4 mt-4">
//             <Button
//               variant="contained"
//               color="primary"
//               href={github}
//               target="_blank"
//               rel="noopener noreferrer"
//               startIcon={<Github className="w-5 h-5" />}
//             >
//               Code
//             </Button>
//             <Button
//               variant="outlined"
//               color="primary"
//               href={demo}
//               target="_blank"
//               rel="noopener noreferrer"
//               startIcon={<ExternalLink className="w-5 h-5" />}
//             >
//               Demo
//             </Button>
//           </div>
//         </div>

//         <Image
//           src={imageUrl}
//           alt="Project I worked on"
//           quality={95}
//           width={452}
//           height={320}
//           className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
//           transition
//           group-hover:scale-[1.04]
//           group-hover:-translate-x-3
//           group-hover:translate-y-3
//           group-hover:-rotate-2
//           group-even:group-hover:translate-x-3
//           group-even:group-hover:translate-y-3
//           group-even:group-hover:rotate-2
//           group-even:right-[initial] group-even:-left-40"
//         />
//       </section>
//     </motion.div>
//   );
// }

// const projects = [
//   {
//     title: 'AI-Powered Task Manager',
//     description: 'A smart task management app that uses AI to prioritize and categorize tasks.',
//     image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
//     github: 'https://github.com/yourusername/ai-task-manager',
//     demo: 'https://ai-task-manager-demo.com',
//     tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
//   },
//   {
//     title: 'Real-time Collaboration Platform',
//     description: 'A platform for teams to collaborate on projects in real-time with video chat and shared workspaces.',
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
//     github: 'https://github.com/yourusername/collab-platform',
//     demo: 'https://collab-platform-demo.com',
//     tags: ['React', 'WebRTC', 'Socket.io', 'Redux'],
//   },
//   {
//     title: 'Blockchain-based Voting System',
//     description: 'A secure and transparent voting system built on blockchain technology.',
//     image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
//     github: 'https://github.com/yourusername/blockchain-voting',
//     demo: 'https://blockchain-voting-demo.com',
//     tags: ['Solidity', 'Ethereum', 'React', 'Web3.js'],
//   },
// ]


// export default function ProjectsSection() {
//   return (
//     <section id="projects" className="scroll-mt-28 mb-28">
//       <Container maxWidth="lg">
//         <Typography
//           variant="h2"
//           align="center"
//           gutterBottom
//           className="mb-12 text-gray-900 dark:text-white"
//         >
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
//             My Projects
//           </span>
//         </Typography>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 delayChildren: 0.3,
//                 staggerChildren: 0.2
//               }
//             }
//           }}
//         >
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           className="mb-12 text-black dark:text-white"
//         >
//           <span className="">
//             Comming Soon
//           </span>
//         </Typography>
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} imageUrl={project.image} />
//           ))}
//         </motion.div>
//       </Container>
//     </section>
//   );
// }

  "use client"

  import Image from "next/image"
  import { Github, ExternalLink } from "lucide-react"
  import { motion } from "framer-motion";
  import { Container, Typography, Grid, Chip, Button } from '@mui/material';
  import { useEffect, useRef } from 'react';

  type ProjectProps = {
    title: string
    description: string
    tags: string[]
    imageUrl: string
    github: string
    demo: string
    theme:string
  }

  const projects: ProjectProps[] = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management app that uses AI to prioritize and categorize tasks.",
      imageUrl:
        "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      github: "https://github.com/yourusername/ai-task-manager",
      demo: "https://ai-task-manager-demo.com",
      tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
      theme: "dark"
    },
    {
      title: "Real-time Collaboration Platform",
      description: "A platform for teams to collaborate on projects in real-time with video chat and shared workspaces.",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      github: "https://github.com/yourusername/collab-platform",
      demo: "https://collab-platform-demo.com",
      tags: ["React", "WebRTC", "Socket.io", "Redux"],
      theme: "dark"
    },
    {
      title: "Blockchain-based Voting System",
      description: "A secure and transparent voting system built on blockchain technology.",
      imageUrl:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      github: "https://github.com/yourusername/blockchain-voting",
      demo: "https://blockchain-voting-demo.com",
      tags: ["Solidity", "Ethereum", "React", "Web3.js"],
      theme: "dark"
    },
  ]
  function ProjectCard({ title, description, tags, imageUrl, github, demo , theme }: ProjectProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`group relative overflow-hidden rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700/50' : 'bg-gradient-to-b from-white/50 to-gray-100/50 border-gray-200/50'} border`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative p-6">
          <div className="aspect-video mb-6 overflow-hidden rounded-lg">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            {title}
          </h3>

          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 ${theme === 'dark' ? 'text-cyan-400 border-cyan-500/20' : 'text-cyan-600 border-cyan-500/20'} border`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <Button
              variant="outlined"
              size="small"
              className={`bg-gradient-to-r from-cyan-500/10 to-blue-500/10 ${theme === 'dark' ? 'border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300' : 'border-cyan-500/20 text-cyan-600 hover:bg-cyan-500/20 hover:text-cyan-700'}`}
              onClick={() => window.open(github, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={`bg-gradient-to-r from-cyan-500/10 to-blue-500/10 ${theme === 'dark' ? 'border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300' : 'border-blue-500/20 text-blue-600 hover:bg-blue-500/20 hover:text-blue-700'}`}
              onClick={() => window.open(demo, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  export default function ProjectsSection({ theme }: { theme: string }) {
    return (
      <section id="projects" className="relative min-h-screen">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[#1a1f2e]' : 'bg-gray-50'}`}>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                My Projects
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} theme={theme} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }
