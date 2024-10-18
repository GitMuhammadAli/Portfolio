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



import { Typography, Container } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';

export default function AboutSection({ theme }: any) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      // bgImage="/icons/about.svg"
      bgImage=" "
      strength={-200}
    >
      <Container id="about" maxWidth="md" className="py-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            After graduating with a degree in <strong>Accounting</strong>, I pursued my passion for programming.
            I completed a coding bootcamp in <strong>full-stack web development</strong>, and my core stack is <strong>React, Next.js, Node.js, and MongoDB</strong>.
            I love solving problems, and I’m currently seeking a <strong>full-time position</strong> as a software developer.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            When I'm not coding, I enjoy video games, movies, and playing with my dog. I love <strong>learning new things</strong>, including <strong>history, philosophy</strong>, and guitar.
          </Typography>
        </motion.div>
      </Container>
    </Parallax>
  );
}
