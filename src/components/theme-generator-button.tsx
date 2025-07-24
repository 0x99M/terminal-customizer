'use client';

import { useTerminal } from '@/contexts/terminal-context';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ThemeGeneratorButton() {
  const { generateCoolTheme } = useTerminal();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    generateCoolTheme();
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <motion.button
      onClick={handleClick}
      className="h-9 w-9 relative overflow-hidden rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Sparkles icon with rotation animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={isClicked ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Sparkles className="w-4 h-4 relative z-10" />
      </motion.div>
      
      {/* Pulse effect on click */}
      <motion.div
        className="absolute inset-0 bg-white rounded-md"
        initial={{ scale: 0, opacity: 0.3 }}
        animate={isClicked ? { scale: 1.2, opacity: 0 } : { scale: 0, opacity: 0.3 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Sparkle particles effect */}
      {isClicked && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: 18, 
                y: 18, 
                scale: 0,
                opacity: 1 
              }}
              animate={{ 
                x: 18 + (Math.cos(i * 60 * Math.PI / 180) * 20),
                y: 18 + (Math.sin(i * 60 * Math.PI / 180) * 20),
                scale: 1,
                opacity: 0 
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
      
      <span className="sr-only">Generate Cool Theme</span>
    </motion.button>
  );
}