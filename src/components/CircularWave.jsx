import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, Folder, Search, Copy, Merge, Monitor, Wand2, ArrowLeft, Command, Code, Terminal, LogIn, Box, RefreshCw } from "lucide-react";

const CircularWave = () => {
  const [time, setTime] = useState(0);
  const scrollX = useMotionValue(0);
  const smoothX = useSpring(scrollX, { stiffness: 60, damping: 20, mass: 0.5 });

  // Floating wave animation loop
  useEffect(() => {
    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      setTime((t) => t + dt * 1); // animationSpeed = 1
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Scroll-linked horizontal offset
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      // scrollDirection = "inverse"
      scrollX.set(scrollX.get() + delta * 1 * -1); 
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollX]);

  // Base 14 icons
  const baseIcons = [
    Sparkles, Folder, Search, Copy, Merge, Monitor, Wand2, ArrowLeft, Command, Code, Terminal, LogIn, Box, RefreshCw
  ];
  
  // Repeat to ensure it spans across very wide screens and handles scrolling offset
  const icons = [...baseIcons, ...baseIcons, ...baseIcons, ...baseIcons, ...baseIcons];

  const waveAmplitude = 40;
  const waveFrequency = 4; // number of full sine waves across the array
  const itemCount = icons.length;

  return (
    <div className="w-full h-[180px] overflow-hidden flex items-center relative bg-transparent z-10 pointer-events-auto">
      {/* Optional fade out edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: waveAmplitude,
          paddingBottom: waveAmplitude,
          x: smoothX,
          willChange: "transform",
        }}
      >
        {icons.map((Icon, index) => {
          const basePhase = (index / (itemCount - 1)) * Math.PI * 2 * waveFrequency;
          const waveY = Math.sin(basePhase + time) * waveAmplitude;

          return (
            <div
              key={index}
              style={{
                transform: `translateY(${waveY}px)`,
                flexShrink: 0,
              }}
            >
              <div className="w-16 h-16 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 shadow-xl cursor-pointer hover:scale-110">
                <Icon size={24} strokeWidth={1.5} />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularWave;
