import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online store with seamless payment integration and modern UI.",
    year: "2025",
    image: "https://i.postimg.cc/RhMrV2t4/73711e30bd3306ed5a32a727ca2043ca-(1).jpg"
  },
  {
    title: "Fintech Dashboard",
    description: "Real-time data visualization and secure user portal for financial tracking.",
    year: "2026",
    image: "https://i.postimg.cc/gJbF1xkW/a99aed376e491ececc20e3eabd039d03.jpg"
  },
  {
    title: "SaaS Application",
    description: "A multi-tenant software solution built for enterprise productivity.",
    year: "2025",
    image: "https://i.postimg.cc/wTqH6R5L/f6f0b2444ac6ec3ee1400a62131d0b73.jpg"
  }
];

const Projects = () => {
  return (
    <section className="bg-[#f8f9fa] text-[#111] py-16 min-[480px]:py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden font-sans rounded-t-[3rem]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        
        {/* Header Section: Left Title, Right Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-black/10 pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#3b82f6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
              Portfolio
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight">
              Featured<br />Projects
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:max-w-md"
          >
            <p className="text-[#111] text-lg md:text-xl font-medium leading-relaxed tracking-tight">
              Architecting high-performance digital products 
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#3b82f6] text-white mx-1.5 align-middle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z"/></svg>
              </span>
              and scalable enterprise solutions. Discover a curated showcase of advanced 
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#c0ff00] text-black mx-1.5 align-middle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </span>
              <span className="text-[#888]">technical implementations.</span>
            </p>
          </motion.div>
        </div>

        {/* Feature Grid (Cards on the next row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-[#f8f9fa] rounded-[2rem] aspect-square relative overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform duration-500 border border-black/5 shadow-sm">
              {/* Category Badge (Top Left) */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-4 py-2 rounded-full shadow-sm z-20 pointer-events-none">
                E-Commerce
              </div>

              {/* Project Image */}
              <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2340&auto=format&fit=crop" alt="E-Commerce" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>

              {/* Hover Overlay: View Project */}
              <div className="absolute inset-0 bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 pointer-events-none">
                <div className="hidden md:flex pointer-events-auto bg-[#ff4422] text-white px-6 py-3 rounded-full font-bold items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(255,68,34,0.6)] cursor-pointer">
                  <span>View Project</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 z-40 pointer-events-none">
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow-sm">React</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow-sm">Node.js</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow-sm">Tailwind</span>
                </div>
                <div className="md:hidden pointer-events-auto bg-[#ff4422] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-lg w-max hover:bg-[#e03a1a]">
                  <span>View Project</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#3b82f6] transition-colors">E-Commerce Platform</h3>
              <p className="text-[#555] text-sm leading-relaxed mb-4">A full-stack online store with seamless payment integration and modern UI.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Small top card */}
            <div className="bg-[#c0ff00] rounded-3xl p-6 flex justify-between items-center hover:scale-[1.02] transition-transform duration-500 cursor-pointer shadow-sm">
              <span className="text-black font-bold text-sm tracking-wide">View More Project</span>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            {/* Main graphic card */}
            <div className="bg-[#f8f9fa] rounded-[2rem] aspect-square relative overflow-hidden flex flex-col items-center justify-center group hover:scale-[1.02] transition-transform duration-500 border border-black/5 shadow-sm">
              {/* Category Badge (Top Left) */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-4 py-2 rounded-full shadow-sm z-20 pointer-events-none">
                Dashboard
              </div>

              {/* Project Image */}
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" alt="Fintech Dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>

              {/* Hover Overlay: View Project */}
              <div className="absolute inset-0 bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 pointer-events-none">
                <div className="hidden md:flex pointer-events-auto bg-[#ff4422] text-white px-6 py-3 rounded-full font-bold items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(255,68,34,0.6)] cursor-pointer">
                  <span>View Project</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 z-40 pointer-events-none">
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow-sm">Next.js</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow-sm">Tailwind</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow-sm">Firebase</span>
                </div>
                <div className="md:hidden pointer-events-auto bg-[#ff4422] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-lg w-max hover:bg-[#e03a1a]">
                  <span>View Project</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#3b82f6] transition-colors">Fintech Dashboard</h3>
              <p className="text-[#555] text-sm leading-relaxed mb-4">Real-time data visualization and secure user portal for financial tracking.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-[#f8f9fa] rounded-[2rem] aspect-square relative overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform duration-500 border border-black/5 shadow-sm">
               {/* Category Badge (Top Left) */}
               <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-4 py-2 rounded-full shadow-sm z-20 pointer-events-none">
                 SaaS
               </div>

               {/* Project Image */}
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop" alt="SaaS Application" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>

               {/* Hover Overlay: View Project */}
               <div className="absolute inset-0 bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 pointer-events-none">
                 <div className="hidden md:flex pointer-events-auto bg-[#ff4422] text-white px-6 py-3 rounded-full font-bold items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(255,68,34,0.6)] cursor-pointer">
                   <span>View Project</span>
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M5 12h14M12 5l7 7-7 7" />
                   </svg>
                 </div>
               </div>
               <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 z-40 pointer-events-none">
                 <div className="flex flex-wrap gap-2 justify-center">
                   <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow-sm">Vue.js</span>
                   <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow-sm">Django</span>
                   <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow-sm">AWS</span>
                 </div>
                 <div className="md:hidden pointer-events-auto bg-[#ff4422] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-lg w-max hover:bg-[#e03a1a]">
                   <span>View Project</span>
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M5 12h14M12 5l7 7-7 7" />
                   </svg>
                 </div>
               </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#3b82f6] transition-colors">SaaS Application</h3>
              <p className="text-[#555] text-sm leading-relaxed mb-4">A multi-tenant software solution built for enterprise productivity.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
