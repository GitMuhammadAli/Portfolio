  "use client"

  import { motion } from "framer-motion";

  type ProjectProps = {
    title: string
    description: string
    tags: string[]
    imageUrl: string
    github: string
    demo: string
    theme:string
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
