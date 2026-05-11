import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { springTransition, softSpring, bouncySpring } from '@/src/lib/animations';

interface HeroProps {
  onStartLearning: () => void;
}

export const Hero = ({ onStartLearning }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background Assets */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background z-[1]"></div>
        {/* Animated gradients for cinematic depth */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-gold/5 dark:bg-gold/10 blur-[150px] rounded-full z-[2]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-gold/5 blur-[120px] rounded-full z-[2]"
        />
        
        {/* Background Image with Overlay */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 opacity-10 dark:opacity-40 bg-cover bg-center mix-blend-overlay z-[3]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542332606-b3d2b27d425c?q=80&w=2670&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-[4]" />
      </div>

      <div className="container-custom relative z-10 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100, damping: 25 }}
        >
          {/* Maestro Main Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1, 
              y: [0, -15, 0] 
            }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: { 
                duration: 1, 
                delay: 0.2 
              },
              scale: bouncySpring
            }}
            className="relative inline-block mb-10 group"
          >
            <div className="absolute -inset-6 bg-gold/30 rounded-full blur-3xl group-hover:bg-gold/50 transition-all duration-700 animate-pulse-soft opacity-60"></div>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={bouncySpring}
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gold/40 shadow-[0_0_60px_rgba(197,160,89,0.4)] group-hover:border-gold transition-all duration-700"
            >
              <img 
                src="https://res.cloudinary.com/dsfcu9y1h/image/upload/f_auto,q_auto,w_1200/IMG_20260207_210741_d2cg6e" 
                alt="Dr. Ashok Kumar Chambyal" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold text-luxury-black px-4 py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] whitespace-nowrap shadow-xl z-10 border border-white/50"
            >
              MAESTRO
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...softSpring, delay: 0.3 }}
          >
            <span className="text-gold font-serif italic text-base md:text-xl mb-4 tracking-wide block">
              Tradition Meets Technology
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.5 }}
            className="text-fluid-h1 font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-b from-gold via-gold-light to-gold drop-shadow-2xl leading-[1.05] tracking-tight text-center lg:text-left"
          >
            Master the Divine<br />Strings of Sitar
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...softSpring, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(197, 160, 89, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={bouncySpring}
              className="w-full sm:w-auto bg-foreground text-background px-12 py-5 rounded-full font-bold text-[10px] sm:text-xs tracking-[0.3em] shadow-2xl transition-all uppercase"
              onClick={onStartLearning}
            >
              START LEARNING
            </motion.button>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 px-6 py-4 bg-foreground/5 backdrop-blur-xl rounded-full border border-foreground/10 group hover:border-gold/30 transition-colors"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -8, zIndex: 10, scale: 1.1 }}
                    transition={bouncySpring}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-gold/20 shadow-lg cursor-pointer"
                  >
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="student" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <div className="text-left hidden sm:block">
                <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/80">1.2k+ Students</span>
                <span className="block text-[8px] uppercase tracking-widest text-gold animate-pulse-soft font-bold">Riyazing Now</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Soundwave Effect - Hidden on extra small mobile */}
        <div className="hidden sm:flex absolute bottom-24 left-1/2 -translate-x-1/2 items-end gap-1.5 h-12 opacity-30">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 bg-gold rounded-full"
              animate={{ 
                height: [10, 48, 15, 30, 20, 40, 10],
                opacity: [0.3, 1, 0.5, 0.8, 0.4, 0.9, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.08, 
                ease: "easeInOut" 
              }}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ y: 5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/30 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold group-hover:text-gold transition-colors">Explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="w-5 h-5 group-hover:text-gold transition-colors" />
          </motion.div>
        </motion.div>
      </div>

      {/* Royal Gold Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-20" />
    </section>
  );
};

