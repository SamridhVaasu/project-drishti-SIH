
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Eye, Database, BarChart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    if (!particlesContainerRef.current) return;
    
    const container = particlesContainerRef.current;
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('data-particle');
      
      // Random position and delay
      const startX = Math.random() * container.offsetWidth;
      const startY = Math.random() * container.offsetHeight;
      const delay = Math.random() * 10;
      const size = Math.random() * 2 + 1; // Random size between 1-3px
      const opacity = Math.random() * 0.7 + 0.3; // Random opacity
      
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = `${opacity}`;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 3000 + delay * 1000);
    };
    
    // Create initial particles
    for (let i = 0; i < 40; i++) {
      createParticle();
    }
    
    // Create new particles periodically
    const interval = setInterval(() => {
      createParticle();
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity }}
      className="hero-clip min-h-screen flex items-center relative bg-gradient-to-br from-navy via-navy-light to-midnight pt-20 pb-32 overflow-hidden"
    >
      <div 
        ref={particlesContainerRef}
        className="particles-container"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 max-w-2xl mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="bg-white/10 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium text-white/90 border border-white/10">
                Smart India Hackathon 2024
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-teal-light to-amber bg-clip-text text-transparent">
                Illuminating Postal Data
              </span>
              <span>for Strategic Excellence</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/80 leading-relaxed"
            >
              DRISHTI is a comprehensive data analytics and intelligence platform designed for the Department of Posts in India, transforming raw data into actionable insights to drive operational excellence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#solution" 
                className="bg-teal hover:bg-teal-light text-navy-dark font-medium px-6 py-3 rounded-full transition-all-200 shadow-subtle inline-flex items-center justify-center"
              >
                Explore Platform
                <ArrowRight size={18} className="ml-2" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#problem" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full transition-all-200 border border-white/10 inline-flex items-center justify-center"
              >
                Learn More
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8"
            >
              <AnimatedCounter 
                end={578} 
                suffix="M" 
                delay={1000} 
                title="Annual Mail Volume"
                description="Processed across India"
              />
              <AnimatedCounter 
                end={98} 
                suffix="%" 
                delay={1500} 
                title="Data Accuracy"
                description="With DRISHTI integration"
              />
              <AnimatedCounter 
                end={42} 
                suffix="%" 
                delay={2000} 
                title="Efficiency Gain"
                description="In divisional operations"
                className="hidden md:flex"
              />
            </motion.div>
          </div>
          
          <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
            <motion.div 
              style={{ 
                y: mousePosition.y * -20, 
                x: mousePosition.x * -20 
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* 3D Visualization Sphere */}
              <div className="relative w-3/4 h-3/4">
                <div className="absolute inset-0 bg-gradient-to-br from-teal/30 via-teal-light/20 to-transparent rounded-full blur-xl animate-pulse-soft" />
                <div className="absolute inset-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-float shadow-subtle" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Eye size={64} className="text-white/80" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Orbiting elements */}
            <motion.div 
              ref={orbitRef}
              animate={{ rotate: 360 }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="absolute inset-0"
            >
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ y: mousePosition.y * 10, x: mousePosition.x * 10 }}
                className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-subtle border border-white/10"
              >
                <Database size={24} className="text-amber" />
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                style={{ y: mousePosition.y * 15, x: mousePosition.x * 15 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-subtle border border-white/10"
              >
                <BarChart size={24} className="text-teal-light" />
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                style={{ y: mousePosition.y * 5, x: mousePosition.x * 5 }}
                className="absolute left-10 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-subtle border border-white/10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                style={{ y: mousePosition.y * 8, x: mousePosition.x * 8 }}
                className="absolute right-10 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-subtle border border-white/10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="#FFB400" strokeWidth="2"/>
                  <path d="M12 5V3" stroke="#FFB400" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 21V19" stroke="#FFB400" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16.9497 7.05025L18.364 5.63604" stroke="#FFB400" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5.63604 18.364L7.05025 16.9497" stroke="#FFB400" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19 12H21" stroke="#FFB400" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 12H5" stroke="#FFB400" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16.9497 16.9497L18.364 18.364" stroke="#FFB400" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5.63604 5.63604L7.05025 7.05025" stroke="#FFB400" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.div>
            </motion.div>
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <motion.line 
                initial={{ pathLength: 0, opacity: 0 }} 
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 1.6 }}
                x1="50" y1="20" x2="50" y2="50" stroke="#03DAC6" strokeWidth="0.5" strokeDasharray="2"
              />
              <motion.line 
                initial={{ pathLength: 0, opacity: 0 }} 
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                x1="50" y1="50" x2="50" y2="80" stroke="#03DAC6" strokeWidth="0.5" strokeDasharray="2"
              />
              <motion.line 
                initial={{ pathLength: 0, opacity: 0 }} 
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 2 }}
                x1="50" y1="50" x2="20" y2="50" stroke="#03DAC6" strokeWidth="0.5" strokeDasharray="2"
              />
              <motion.line 
                initial={{ pathLength: 0, opacity: 0 }} 
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 2.2 }}
                x1="50" y1="50" x2="80" y2="50" stroke="#03DAC6" strokeWidth="0.5" strokeDasharray="2"
              />
            </svg>
            
            {/* Data nodes that float around the central element */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ 
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    scale: 0,
                    opacity: 0 
                  }}
                  animate={{ 
                    x: [Math.random() * 60 - 30, Math.random() * 60 - 30, Math.random() * 60 - 30],
                    y: [Math.random() * 60 - 30, Math.random() * 60 - 30, Math.random() * 60 - 30],
                    scale: 1,
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{ 
                    duration: Math.random() * 8 + 12,
                    repeat: Infinity,
                    delay: Math.random() * 2 + i * 0.3
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-light/70"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <motion.div 
        style={{ y }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
