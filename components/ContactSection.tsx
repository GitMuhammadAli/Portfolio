"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Copy, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactSection({ theme }: { theme: string }) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const email = "alishahid.dev@gmail.com"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "from-cyan-500/10 to-cyan-600/10",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "alishahid-fswebdev",
      href: "https://www.linkedin.com/in/alishahid-fswebdev/",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitMuhammadAli",
      href: "https://github.com/GitMuhammadAli",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/10",
    },
  ]

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-20">
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[#1a1f2e]' : 'bg-gray-50'}`}>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
                Get in Touch
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-lg md:text-xl text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-8 max-w-2xl mx-auto`}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something amazing together!
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <a 
                  href={method.href} 
                  target={method.href.startsWith('http') ? "_blank" : undefined}
                  rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  <div
                    className={`relative p-8 rounded-3xl h-full ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50'
                        : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200/50'
                    } backdrop-blur-xl
                    shadow-lg hover:shadow-2xl
                    transition-all duration-500
                    overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-r ${method.bgColor} before:opacity-0 
                    group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:rounded-3xl`}
                  >
                    {/* Animated border gradient */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                    
                    <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                      <motion.div 
                        className={`p-4 rounded-2xl bg-gradient-to-br ${method.bgColor}`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <method.icon className={`w-10 h-10 ${
                          method.label === 'Email' ? 'text-cyan-400' :
                          method.label === 'LinkedIn' ? 'text-blue-400' :
                          'text-purple-400'
                        }`} />
                      </motion.div>
                      <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {method.label}
                      </h3>
                      <p className={`text-sm md:text-base break-all ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} group-hover:text-cyan-400 transition-colors`}>
                        {method.value}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Click to {method.label === 'Email' ? 'send email' : 'visit'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Email Copy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <div className={`p-6 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50' 
                : 'bg-gradient-to-r from-white/80 to-gray-50/80 border border-gray-200/50'
            } backdrop-blur-xl`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Mail className={`w-5 h-5 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} flex-shrink-0`} />
                  <div className="min-w-0 flex-1">
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Email Address</p>
                    <p className={`text-base md:text-lg font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'} break-all`}>
                      {email}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleCopyEmail}
                  className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 ${
                    copiedEmail ? 'from-green-500 to-green-600' : ''
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              onClick={() => window.location.href = `mailto:${email}`}
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send me an Email
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
