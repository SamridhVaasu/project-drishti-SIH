
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  className?: string;
  title?: string;
  description?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  delay = 0,
  className = '',
  title,
  description
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(countRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      
      let start = 0;
      const incrementAmount = end / 100;
      const totalDuration = duration;
      const timePerIncrement = totalDuration / 100;
      
      // Add delay before starting
      const delayTimeout = setTimeout(() => {
        const timer = setInterval(() => {
          start += incrementAmount;
          setCount(Math.floor(start));
          
          if (start >= end) {
            clearInterval(timer);
            setCount(end);
          }
        }, timePerIncrement);
        
        return () => clearInterval(timer);
      }, delay);
      
      return () => clearTimeout(delayTimeout);
    }
  }, [end, duration, isInView, delay, controls]);
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: delay / 1000,
        duration: 0.5
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: (delay / 1000) + 0.2
      }
    }
  };
  
  return (
    <motion.div
      ref={countRef}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-elevated hover-scale ${className}`}
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-teal/20 via-amber/10 to-transparent blur-xl"></div>
      <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-tr from-navy/20 via-teal/10 to-transparent blur-xl"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div 
          variants={numberVariants}
          className="mb-2 relative"
        >
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal via-teal-light to-amber bg-clip-text text-transparent inline-block">
            {prefix}{Math.round(count).toLocaleString()}{suffix}
          </span>
          <div className="absolute -inset-1 bg-white/5 blur-sm rounded-full -z-10"></div>
        </motion.div>
        
        {title && (
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (delay / 1000) + 0.4, duration: 0.3 }}
            className="text-lg md:text-xl font-semibold text-white mb-1"
          >
            {title}
          </motion.h3>
        )}
        
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (delay / 1000) + 0.5, duration: 0.3 }}
            className="text-sm text-white/70"
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
