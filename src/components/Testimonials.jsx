import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "TechFlow",
    avatar: "https://picsum.photos/seed/t1/100/100",
    rating: 5,
    quote: "Working with this team was an absolute game-changer. The attention to detail and smooth communication made the entire process seamless. The final product exceeded all expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "Innovate AI",
    avatar: "https://picsum.photos/seed/t2/100/100",
    rating: 5,
    quote: "They didn't just build what we asked for, they improved upon our original vision. Their strategic approach to problem-solving is unparalleled in the industry.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder",
    company: "DesignShift",
    avatar: "https://picsum.photos/seed/t3/100/100",
    rating: 5,
    quote: "Incredible design sensibilities combined with flawless technical execution. I wouldn't hesitate to recommend them to anyone looking to elevate their digital presence.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Marketing Director",
    company: "GrowthLabs",
    avatar: "https://picsum.photos/seed/t4/100/100",
    rating: 4,
    quote: "Fast, reliable, and incredibly talented. They delivered our project ahead of schedule and the quality was top-notch. Our conversion rates have doubled since launch.",
  },
  {
    id: 5,
    name: "Rachel Alucard",
    role: "Design Lead",
    company: "Vanguard",
    avatar: "https://picsum.photos/seed/t5/100/100",
    rating: 5,
    quote: "The best agency experience I've had in 10 years. Their team feels like an extension of our own, bringing deep expertise and a proactive attitude to every single meeting.",
  }
];

// Duplicate for infinite scrolling
const row1 = [...testimonials, ...testimonials, ...testimonials];
const row2 = [...testimonials].reverse().concat([...testimonials].reverse()).concat([...testimonials].reverse());

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 text-orange-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative flex-shrink-0 w-[350px] md:w-[450px] p-8 rounded-3xl bg-white border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Hover Glow */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : ''}`}
      />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>

      <div className="relative z-10 flex flex-col gap-6">
        <StarRating rating={data.rating} />
        
        <p className="text-[#555] text-lg leading-relaxed font-medium">
          "{data.quote}"
        </p>
        
        <div className="mt-auto pt-6 border-t border-black/5 flex items-center gap-4">
          <img 
            src={data.avatar} 
            alt={data.name} 
            className="w-12 h-12 rounded-full object-cover border border-black/10"
          />
          <div className="flex flex-col">
            <span className="text-[#111] font-semibold">{data.name}</span>
            <span className="text-[#777] text-sm">{data.role} @ {data.company}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 min-[480px]:py-24 md:py-32 bg-white text-[#111] overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-50 border border-black/5 text-[#555] text-sm font-bold uppercase tracking-widest mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          Client Feedback
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter"
        >
          Don't just take our word for it.
        </motion.h2>
      </div>

      {/* Edge Masked Container */}
      <div className="relative w-full flex flex-col gap-8 pause-on-hover overflow-hidden"
           style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        
        {/* Row 1 - Left */}
        <div className="flex gap-8 w-max animate-marquee">
          {row1.map((item, idx) => (
            <TestimonialCard key={`r1-${idx}`} data={item} />
          ))}
        </div>

        {/* Row 2 - Right */}
        <div className="flex gap-8 w-max animate-marquee-reverse">
          {row2.map((item, idx) => (
            <TestimonialCard key={`r2-${idx}`} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
