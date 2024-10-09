import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';  

const Icons = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: <FaLinkedin className="w-5 h-5" /> },
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: <FaGithub className="w-5 h-5" /> },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: <FaTwitter className="w-5 h-5" /> },
];

function SocialIcons() {
    return (
      <div className="flex space-x-6 mb-6">
        {Icons.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    );
  }
  

export default function Footer({ theme }: any) {
  return (
    <footer className={`py-12`}>
      <Container maxWidth="lg">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h6" className="mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500 font-bold">
                Let's Connect
              </span>
            </Typography>
          </motion.div>

          {/* <SocialIcons /> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Typography variant="body2" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} ALI SHAHID | Crafted with passion
            </Typography>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
