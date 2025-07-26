"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection({ theme }: { theme: string }) {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "alishahids189@gmail.com",
      href: "mailto:alishahids189@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "alishahid-fswebdev",
      href: "https://www.linkedin.com/in/alishahid-fswebdev/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitMuhammadAli",
      href: "https://github.com/GitMuhammadAli",
    },
  ]

  return (
    <section id="contact" className="relative min-h-screen">
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[#1a1f2e]' : 'bg-gray-50'}`}>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Get in Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-xl text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-12`}
          >
            Feel free to reach out for collaborations or just a friendly chat!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <a href={method.href} target="_blank" rel="noopener noreferrer" className="block group">
                  <div
                    className={`relative p-6 rounded-2xl ${
                      theme === 'dark'
                        ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700/50'
                        : 'bg-gradient-to-b from-white/50 to-gray-100/50 border-gray-200/50'
                    } border backdrop-blur-sm
                    hover:bg-gradient-to-b ${
                      theme === 'dark'
                        ? 'hover:from-gray-800/60 hover:to-gray-900/60'
                        : 'hover:from-gray-50 hover:to-gray-100'
                    } transition-all duration-300
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/10 before:to-blue-500/10 before:opacity-0 before:transition-opacity
                    hover:before:opacity-100 before:rounded-2xl overflow-hidden`}
                  >
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                        <method.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className={`text-xl font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                        {method.label}
                      </h3>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
           <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              onClick={() => (window.location.href = "mailto:alishahids189@gmail.com")}
            >
              Send a Message
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
