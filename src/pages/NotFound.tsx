
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Asterisk } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-midnight p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 3 + 1
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 20 + 10, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 max-w-md w-full shadow-glass z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center w-16 h-16 bg-teal/20 backdrop-blur-sm rounded-full text-teal mb-6 border border-teal/30">
          <Asterisk className="w-8 h-8" />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4 text-white">404</motion.h1>
        
        <motion.div variants={itemVariants} className="h-1 w-16 bg-gradient-to-r from-teal to-teal-light rounded-full mb-6 mx-auto"></motion.div>
        
        <motion.p variants={itemVariants} className="text-xl text-white/80 mb-8">
          Oops! The page you're looking for has drifted into another dimension.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal to-teal-light text-navy font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-subtle hover:scale-105 hover:shadow-lg"
          >
            <ArrowLeft size={16} />
            Return to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
