import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const subtitles = [
  "We Craft Digital Experiences",
  "We Build, Optimize, and Scale"
];

// Helper to stagger characters
const StaggeredText = ({ text }) => {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
        exit: { opacity: 0, transition: { staggerChildren: 0.01, staggerDirection: -1 } }
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex text-lg md:text-2xl font-medium tracking-tight text-gray-800 font-mono"
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 }
          }}
          className="whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const StaggeredPreloader = ({ onComplete }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const cycleTime = 2500; // Give more time for each subtitle to be read
    const totalTime = cycleTime * subtitles.length + 1000; // Wait a full second after the last one before closing

    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, cycleTime);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, totalTime);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-white overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Background Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full mix-blend-multiply blur-[60px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(89,187,213,0.6) 0%, rgba(89,187,213,0) 70%)",
        }}
        initial={{ x: "-150%", y: "-50%", opacity: 0, scale: 2 }}
        animate={{ x: "-70%", y: "-50%", opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, type: "spring", bounce: 0.2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full mix-blend-multiply blur-[60px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(206,255,113,0.6) 0%, rgba(206,255,113,0) 70%)",
        }}
        initial={{ x: "50%", y: "-50%", opacity: 0, scale: 2 }}
        animate={{ x: "-30%", y: "-50%", opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, type: "spring", bounce: 0.2 }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Main Title with Hover Mask Effect */}
        <div 
          className="relative group cursor-default"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Base Layer */}
          <motion.h1
            className="text-4xl min-[480px]:text-5xl md:text-7xl font-['Cinzel'] tracking-tight text-[#171717] mb-4 uppercase leading-none flex"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {"AK Studios".split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 80, rotateX: -90, scale: 0.8, filter: "blur(12px)" },
                  visible: { 
                    opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)",
                    transition: { type: "spring", damping: 15, stiffness: 120 }
                  }
                }}
                className="whitespace-pre inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Masked Hover Layer */}
          <motion.h1
            className="absolute top-0 left-0 text-4xl min-[480px]:text-5xl md:text-7xl font-['Cinzel'] tracking-tight mb-4 uppercase leading-none flex text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 pointer-events-none"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            animate="visible"
            style={{
              WebkitMaskImage: `radial-gradient(circle 60px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
              maskImage: `radial-gradient(circle 60px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.4s ease"
            }}
          >
            {"AK Studios".split('').map((char, i) => (
              <motion.span
                key={`mask-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 80, rotateX: -90, scale: 0.8, filter: "blur(12px)" },
                  visible: { 
                    opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)",
                    transition: { type: "spring", damping: 15, stiffness: 120 }
                  }
                }}
                className="whitespace-pre inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle Cycle */}
        <div className="h-8 relative w-full flex justify-center mt-2">
          <AnimatePresence mode="wait">
            <StaggeredText key={subtitleIndex} text={subtitles[subtitleIndex]} />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default StaggeredPreloader;
