  "use client"

  import Image from "next/image"
  import { Github, ExternalLink } from "lucide-react"
  import { motion } from "framer-motion";
  import {  Button } from '@mui/material';

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

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} theme={theme} />
              ))}
            </div> */}
            
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-6xl mb-4"
              >
                🚧
              </motion.div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Oops! Under Construction
              </h3>
              <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Currently cooking up some  projects! 🍳
              </p>
              <p className={`text-md italic ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                (They're so cool, they're still in my head! 🤪)
              </p>
            </div>
            
          </motion.div>
        </div>
      </section>
    )
  }
