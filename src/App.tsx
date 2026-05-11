import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { MessageCircle } from 'lucide-react';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Courses } from './components/sections/Courses';
import { LiveClasses } from './components/sections/LiveClasses';
import { AIRiyaz } from './components/sections/AIRiyaz';
import { Gallery } from './components/sections/Gallery';
import { Events } from './components/sections/Events';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check system preference or saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-gold/30 selection:text-gold transition-colors duration-500`}>
      <Navbar 
        onDashboardClick={() => setShowDashboard(true)} 
        user={user} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {showDashboard ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="pt-20 min-h-screen"
            >
              <StudentDashboard onBack={() => setShowDashboard(false)} user={user} />
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero onStartLearning={() => setShowDashboard(true)} />
              <About />
              <Courses />
              <LiveClasses />
              <AIRiyaz />
              <Gallery />
              <Events />
              <Testimonials />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {!showDashboard && <Footer />}
      
      {/* Bottom Floating WhatsApp Button - Mobile Optimized */}
      <motion.a
        href="https://wa.me/919872312430?text=Hello%20Sir"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
        whileTap={{ scale: 0.9 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[200] bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.5)] flex items-center justify-center whatsapp-pulse"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-current" />
        <motion.span 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 flex h-5 w-5"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-white/20"></span>
        </motion.span>
      </motion.a>

      {/* Floating Particle Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
}
