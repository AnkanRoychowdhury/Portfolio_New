// import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white"
          >
            Ankan.dev
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Blog'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {[
              { Icon: Github, href: "https://github.com/yourusername" },
              { Icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
              { Icon: Mail, href: "mailto:your@email.com" }
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}