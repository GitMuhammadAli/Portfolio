// import { Typography, Container } from '@mui/material';
// import { motion, useInView, useAnimation } from 'framer-motion';
// import { useEffect, useRef } from 'react';
// import { Parallax } from 'react-parallax';

// export default function AboutSection({ theme }:any) {
//     const controls = useAnimation()
//     const ref = useRef(null)
//     const inView = useInView(ref)

//     useEffect(() => {
//       if (inView) {
//         controls.start('visible')
//       }
//     }, [controls, inView])

//     return (
//       <Parallax
//         blur={{ min: -15, max: 15  }}
//         bgImage="/icons/about.svg"
//         strength={-200}
//       >
//         <Container id="about" maxWidth="md" className="py-20">
//           <motion.div
//             ref={ref}
//             initial="hidden"
//             animate={controls}
//             variants={{
//               hidden: { opacity: 0, y: 50 },
//               visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
//             }}
//           >
//             <Typography variant="h2" align="center" gutterBottom>
//               About Me
//             </Typography>
//             <Typography variant="body1" align="center" paragraph>
//               I'm a passionate full-stack developer with a focus on building responsive and user-friendly applications. I love working with modern technologies and constantly seek to improve my skills.
//             </Typography>
//           </motion.div>
//         </Container>
//       </Parallax>
//     )
//   }



// import { Typography, Container } from '@mui/material';
// import { motion, useInView, useAnimation } from 'framer-motion';
// import { useEffect, useRef } from 'react';
// import { Parallax } from 'react-parallax';

// export default function AboutSection({ theme }: any) {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   return (
//     <Parallax
//       blur={{ min: -15, max: 15 }}
//       // bgImage="/icons/about.svg"
//       bgImage=" "
//       strength={-200}
//     >
//       <Container id="about" maxWidth="md" className="py-20">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
//           }}
//         >
//           <Typography variant="h2" align="center" gutterBottom>
//             About Me
//           </Typography>
//           <Typography variant="body1" align="center" paragraph>
//             After graduating with a degree in <strong>Accounting</strong>, I pursued my passion for programming.
//             I completed a coding bootcamp in <strong>full-stack web development</strong>, and my core stack is <strong>React, Next.js, Node.js, and MongoDB</strong>.
//             I love solving problems, and I’m currently seeking a <strong>full-time position</strong> as a software developer.
//           </Typography>
//           <Typography variant="body1" align="center" paragraph>
//             When I'm not coding, I enjoy video games, movies, and playing with my dog. I love <strong>learning new things</strong>, including <strong>history, philosophy</strong>, and guitar.
//           </Typography>
//         </motion.div>
//       </Container>
//     </Parallax>
//   );
// }




"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code2, Briefcase } from "lucide-react"

export default function AboutSection({ theme }: { theme: string }) {
  return (
    <section id="about" className="relative min-h-screen py-20">
      {/* Background with gradients and glow effects */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[#1a1f2e]' : 'bg-gray-100'}`}>
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Main text */}
          <div className="text-center mb-16">
            <p className={`text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              After graduating with a degree in <span className="text-cyan-400 font-medium">Accounting</span>, I pursued
              my passion for programming. I completed a coding bootcamp in{" "}
              <span className="text-blue-400 font-medium">full-stack web development</span>, and my core stack is{" "}
              <span className="text-cyan-400 font-medium">React, Next.js, Node.js, and MongoDB</span>.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: GraduationCap, title: "Degree in Accounting" },
              { icon: Code2, title: "Full-Stack Development" },
              { icon: Briefcase, title: "Seeking Developer Role" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div
                  className={`relative p-6 rounded-2xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50'
                      : 'bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-200'
                  } backdrop-blur-sm
                  hover:bg-gradient-to-b ${
                    theme === 'dark'
                      ? 'hover:from-gray-800/60 hover:to-gray-900/60'
                      : 'hover:from-gray-200 hover:to-gray-300'
                  } transition-all duration-300
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/20 before:to-blue-500/20 before:opacity-0 before:transition-opacity
                  hover:before:opacity-100 before:rounded-2xl overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                        <item.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className={`text-xl text-center font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            <p className="text-lg">
              When I'm not coding, I enjoy video games, movies, and playing with my dog. I'm always eager to learn new
              things, including <span className="text-blue-400">history, philosophy</span>, and guitar.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
