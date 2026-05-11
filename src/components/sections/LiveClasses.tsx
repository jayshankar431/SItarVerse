import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Video, Calendar, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { springTransition, softSpring, bouncySpring } from '@/src/lib/animations';

export const LiveClasses = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const upcomingClasses = [
    { id: 1, title: 'Raag Yaman Deep Dive', date: 'Oct 24, 2023', time: '18:00 IST', type: 'Google Meet', duration: '90 min' },
    { id: 2, title: 'Rhythmic Patterns (Taals)', date: 'Oct 26, 2023', time: '10:00 IST', type: 'Zoom', duration: '60 min' },
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setIsBooked(true);
    }, 1500);
  };

  return (
    <section id="live" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold opacity-5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={springTransition}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gold font-serif italic text-xl mb-4 block"
              >
                Immersive Live Sessions
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, ...springTransition }}
                className="text-fluid-h2 font-serif font-bold text-gold cursor-default leading-tight tracking-tight px-1 md:px-0"
              >
                Mastery Through<br /> Real-time Guidance
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-foreground/50 text-lg font-light leading-relaxed max-w-lg italic px-1 md:px-0"
              >
                "Preserving the Guru-Shishya parampara in the digital age. Refine your Meend, Taals, and spiritual depth through instant maestro feedback."
              </motion.p>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={softSpring}
              className="bg-card/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-border relative overflow-hidden group hover:border-gold/40 transition-all duration-500 shadow-2xl cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 blur-3xl rounded-full translate-x-12 -translate-y-12"></div>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-6 relative z-10 text-left">
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <Calendar className="text-gold w-5 h-5" />
                    <p className="text-gold text-[10px] font-bold uppercase tracking-[0.3em]">Today at 6:00 PM IST</p>
                  </motion.div>
                  <div>
                    <h4 className="text-2xl md:text-4xl font-serif text-foreground mb-2 italic tracking-tight leading-snug">Advanced Meend Technique</h4>
                    <p className="text-sm text-foreground/40 max-w-sm leading-relaxed">Master the divine slides of the HP Sitar heritage with Dr. Ashok Kumar Chambyal</p>
                  </div>
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.15)] flex-shrink-0"
                >
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.6)]" 
                  />
                </motion.div>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Dialog>
                <DialogTrigger render={
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={bouncySpring}
                    className="w-full sm:w-auto bg-gold text-luxury-black px-12 py-5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase shadow-2xl shadow-gold/20"
                  />
                }>
                  BOOK DEMO CLASS
                </DialogTrigger>
                <DialogContent className="bg-background/95 backdrop-blur-2xl border-gold/20 text-foreground max-w-md p-8 md:p-10 rounded-[2.5rem]">
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-3xl font-serif text-gold italic">Request Mastery Session</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleBook} className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="live-name" className="text-gold/60 uppercase text-[9px] tracking-[0.3em] font-bold ml-1">Full Name</Label>
                      <Input id="live-name" required placeholder="Arjun Sharma" className="bg-foreground/5 border-border text-foreground h-14 rounded-2xl px-6 focus:border-gold/50 transition-all font-light placeholder:text-foreground/20" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="live-email" className="text-gold/60 uppercase text-[9px] tracking-[0.3em] font-bold ml-1">Email Address</Label>
                      <Input id="live-email" type="email" required placeholder="arjun@example.com" className="bg-foreground/5 border-border text-foreground h-14 rounded-2xl px-6 focus:border-gold/50 transition-all font-light placeholder:text-foreground/20" />
                    </div>
                    <motion.button 
                      type="submit" 
                      disabled={isBooking} 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gold text-luxury-black font-bold h-14 rounded-2xl uppercase tracking-[0.3em] text-[10px] transition-all disabled:opacity-50 mt-4 shadow-xl shadow-gold/10"
                    >
                      {isBooking ? <Loader2 className="animate-spin mx-auto w-5 h-5" /> : 'Confirm Consultation'}
                    </motion.button>
                  </form>
                </DialogContent>
              </Dialog>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "var(--foreground-5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 rounded-full border border-gold/30 text-foreground/70 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-foreground/5 transition-all"
              >
                 View Live Schedule
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={springTransition}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gold/20 blur-[120px] rounded-full animate-pulse-soft"></div>
            <motion.div 
               whileHover={{ scale: 1.05, rotate: 2 }}
               transition={bouncySpring}
               className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-gold/30 shadow-[0_0_50px_rgba(197,160,89,0.2)] group hover:border-gold/60 transition-all duration-700"
            >
              <img 
                src="https://res.cloudinary.com/dsfcu9y1h/image/upload/f_auto,q_auto,w_1200/IMG_20260207_210741_d2cg6e" 
                alt="Dr. Ashok Kumar Chambyal" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-40 group-hover:opacity-0 transition-opacity duration-700" />
              <div className="absolute bottom-12 left-0 right-0 text-center px-6">
                 <p className="text-gold font-serif italic text-2xl mb-1 drop-shadow-lg">Maestro at Riyaz</p>
                 <p className="text-foreground/60 text-[9px] uppercase tracking-[0.4em] font-bold">Divine Connection</p>
              </div>
            </motion.div>
            {/* Live Indicator Overlay */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 flex items-center gap-2 bg-red-600/90 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div> LIVE NOW
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

