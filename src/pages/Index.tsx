
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import Solution from '@/components/Solution';
import Architecture from '@/components/Architecture';
import Benefits from '@/components/Benefits';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for navbar height
          behavior: 'smooth'
        });
      });
    });
    
    // Initialize parallax effect for elements with data-speed attribute
    window.addEventListener('scroll', () => {
      const parallaxElements = document.querySelectorAll('[data-speed]');
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0');
        const yPos = window.scrollY * speed;
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
      
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-white to-offwhite"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Solution />
      <Architecture />
      <Benefits />
      <Team />
      <Contact />
      <Footer />
      
      {/* Floating elements */}
      <div className="fixed -z-10 top-1/4 right-[10%] w-64 h-64 bg-teal/5 rounded-full blur-3xl animate-float" data-speed="0.03"></div>
      <div className="fixed -z-10 bottom-1/4 left-[5%] w-96 h-96 bg-amber/5 rounded-full blur-3xl animate-pulse-soft" data-speed="-0.02"></div>
      <div className="fixed -z-10 top-3/4 right-[15%] w-72 h-72 bg-navy/5 rounded-full blur-3xl animate-pulse-soft" data-speed="0.01"></div>
    </motion.div>
  );
};

export default Index;
