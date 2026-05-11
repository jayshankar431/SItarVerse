import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Menu, X, User, LogOut, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { auth } from '@/src/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { springTransition, softSpring, bouncySpring } from '@/src/lib/animations';

interface NavbarProps {
  onDashboardClick: () => void;
  user: any;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar = ({ onDashboardClick, user, isDarkMode, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => signOut(auth);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Live Classes', href: '#live' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? 'bg-background/90 backdrop-blur-2xl py-3 border-b border-border' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springTransition}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 cursor-pointer group relative z-[110]"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <motion.div 
            transition={bouncySpring}
            className="w-10 h-10 md:w-12 md:h-12 bg-gold flex items-center justify-center rounded-xl shadow-[0_5px_15px_rgba(197,160,89,0.3)] transition-transform group-hover:scale-110 active:scale-95 duration-500"
          >
            <Music className="text-luxury-black dark:text-luxury-black w-6 h-6" />
          </motion.div>
          <span className="text-xl md:text-2xl font-serif tracking-tight font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            SitarVerse
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: i * 0.05 + 0.2 }}
              whileHover={{ y: -2 }}
              className="text-[10px] font-bold text-foreground/50 hover:text-gold transition-all tracking-[0.25em] uppercase relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Action Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={bouncySpring}
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-secondary text-foreground hover:bg-gold/10 hover:text-gold transition-all duration-300 border border-border"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          {user ? (
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "var(--gold-light)" }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
                className="px-6 py-2 rounded-full border border-gold/30 text-[10px] font-bold tracking-[0.2em] hover:bg-gold/5 transition-all text-foreground/80 active:scale-95"
                onClick={onDashboardClick}
              >
                DASHBOARD
              </motion.button>
              <Button
                variant="ghost"
                render={
                  <motion.button
                    whileHover={{ scale: 1.1, color: "#f87171" }}
                    whileTap={{ scale: 0.9 }}
                    className="text-foreground/40 hover:text-red-400 p-2 hover:bg-red-500/10 rounded-full transition-all"
                    onClick={logout}
                  />
                }
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, color: "#C5A059" }}
                whileTap={{ scale: 0.95 }}
                className="text-[10px] font-bold tracking-[0.2em] text-foreground/60 hover:text-gold transition-colors active:scale-95 px-4"
                onClick={login}
              >
                LOGIN
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
                className="bg-gold text-luxury-black font-bold px-8 py-3 rounded-full text-[10px] tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-lg"
                onClick={login}
              >
                BOOK DEMO
              </motion.button>
            </div>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-4 relative z-[110]">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
          {user && (
             <motion.button 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={onDashboardClick} 
               className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold"
             >
               <User className="w-5 h-5" />
             </motion.button>
          )}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-12 h-12 flex items-center justify-center text-gold transition-transform"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={softSpring}
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={springTransition}
              className="fixed inset-0 z-[100] bg-background flex flex-col p-8 pt-32 lg:hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_-20%,#C5A059_0%,transparent_60%)]"></div>
              
              <div className="flex flex-col gap-8 items-center text-center relative z-10">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...springTransition, delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, color: "#C5A059" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-foreground hover:text-gold transition-colors tracking-widest italic"
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="w-full h-[1px] bg-border my-4" 
                />
                
                {!user ? (
                  <div className="flex flex-col gap-4 w-full max-w-xs">
                    <motion.button 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { login(); setIsMobileMenuOpen(false); }}
                      className="w-full py-5 rounded-full border border-gold/30 text-gold font-bold tracking-[0.2em] text-xs bg-background"
                    >
                      LOGIN
                    </motion.button>
                    <motion.button 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { login(); setIsMobileMenuOpen(false); }}
                      className="w-full py-5 rounded-full bg-gold text-luxury-black font-bold tracking-[0.2em] text-xs"
                    >
                      BOOK DEMO
                    </motion.button>
                  </div>
                ) : (
                  <motion.button 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                    className="flex items-center gap-2 text-red-500 font-bold tracking-widest text-xs uppercase pt-4"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
