"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/alishahid-fswebdev", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/GitMuhammadAli", icon: Github },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: Twitter },
]

export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-1/2 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -top-1/2 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Let's Connect
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 mb-12"
          >
            {socialLinks.map((social) => (
              <motion.div key={social.name} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  onClick={() => window.open(social.url, "_blank")}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-4">
              Thank you for visiting my portfolio. I'm always open to new opportunities and collaborations.
            </p>
            <p className="text-gray-500 text-sm flex items-center justify-center">
              © {new Date().getFullYear()} ALI SHAHID | Crafted with
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              and passion
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
    </footer>
  )
}

