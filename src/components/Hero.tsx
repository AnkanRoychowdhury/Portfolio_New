// import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Server, Database } from 'lucide-react';
import { developer } from '../data/content';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle animated background circles */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="relative mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-lg"
              >
                <img 
                  src={developer.image} 
                  alt={developer.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg text-lg"
              >
                {developer.role}
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-5xl font-extrabold text-white mb-6">
              {developer.name}
              <span className="text-blue-500">.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 mb-8 leading-relaxed">
              {developer.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {developer.skills.map((skill) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm flex items-center space-x-2"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="flex space-x-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                View Projects
              </motion.a>
              <motion.a
                href={developer.socialLinks.email}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-blue-600 text-blue-500 rounded-lg hover:bg-blue-600/10 transition-colors text-lg font-medium"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 rounded-full border-4 border-blue-500/20" />
              </motion.div>
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { Icon: Terminal, label: "Clean Code" },
                  { Icon: Server, label: "Scalable Systems" },
                  { Icon: Database, label: "Database Design" }
                ].map(({ Icon, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 bg-gray-800/50 p-6 rounded-lg backdrop-blur-md border border-gray-700/50 shadow-md"
                  >
                    <Icon className="text-blue-500" size={28} />
                    <span className="text-gray-300 text-lg font-medium">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
