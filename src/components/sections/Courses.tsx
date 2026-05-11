import React from 'react';
import { motion } from 'motion/react';
import { Play, FileText, Clock, Star, Lock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { springTransition, softSpring, bouncySpring } from '@/src/lib/animations';

const courses = [
  {
    id: 'beginner',
    title: 'Beginner Sitar',
    level: 'Beginner',
    desc: 'Unveil the basics: posture, finger placement, and your first Raag.',
    lessons: 12,
    hours: 8,
    rating: 4.9,
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1514320291944-ef43702130ff?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'intermediate',
    title: 'Intermediate Riyaz',
    level: 'Intermediate',
    desc: 'Master the speed (Drut) and complex rhythmic patterns (Taals).',
    lessons: 24,
    hours: 15,
    rating: 4.8,
    price: '₹4,999',
    image: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'advanced',
    title: 'Advanced Raag Training',
    level: 'Advanced',
    desc: 'In-depth study of complex Raags and improvisational techniques (Alap).',
    lessons: 30,
    hours: 25,
    rating: 5.0,
    price: '₹8,999',
    image: 'https://images.unsplash.com/photo-1563200022-87a7407000d6?q=80&w=2669&auto=format&fit=crop'
  },
  {
    id: 'mastery',
    title: 'Performance Mastery',
    level: 'Performance',
    desc: 'Stage presence, audience connection, and full concert preparation.',
    lessons: 15,
    hours: 20,
    rating: 4.9,
    price: '₹14,999',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop'
  }
];

export const Courses = () => {
  return (
    <section id="courses" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container-custom">
        <div className="text-center mb-20 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={softSpring}
            className="text-gold font-serif italic text-xl mb-4 block"
          >
            Choose Your Path
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.1 }}
            className="text-fluid-h2 font-serif font-bold text-foreground mb-6"
          >
            Premium Sitar Academy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-foreground/50 max-w-xl mx-auto font-light text-sm md:text-base italic"
          >
            From absolute beginners to advanced practitioners, our curriculum is designed to nurture your musical soul.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {courses.slice(0, 3).map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: idx * 0.15, 
                ...springTransition 
              }}
              whileHover={{ 
                y: -12, 
                rotate: idx % 2 === 0 ? -1 : 1,
                boxShadow: "0 40px 80px rgba(0, 0, 0, 0.15)"
              }}
              viewport={{ once: true }}
              className="bg-card/40 backdrop-blur-xl border border-border rounded-[2.5rem] p-8 group cursor-pointer transition-all duration-500 flex flex-col gap-8 shadow-2xl relative"
            >
              <div className="flex gap-6 items-start">
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={bouncySpring}
                  className="w-20 h-20 md:w-24 md:h-24 bg-background rounded-3xl flex-shrink-0 flex items-center justify-center text-4xl border border-border relative overflow-hidden group-hover:border-gold/40 transition-all duration-700 shadow-xl"
                >
                   <img 
                    src={course.image} 
                    alt={course.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-30 group-hover:opacity-50 transition-opacity"
                    referrerPolicy="no-referrer"
                   />
                   <span className="relative z-10 drop-shadow-lg">{idx === 0 ? '🎼' : idx === 1 ? '🎻' : '🎵'}</span>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                    <h5 className="text-xl md:text-2xl font-bold text-foreground font-serif italic leading-tight">{course.title}</h5>
                    <Badge className="bg-gold/10 text-gold text-[7px] md:text-[8px] border-gold/20 uppercase tracking-[0.25em] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="w-full bg-foreground/5 h-1.5 rounded-full mb-4 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: idx === 0 ? '75%' : idx === 1 ? '25%' : '5%' }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      className="bg-gradient-to-r from-gold to-gold-light h-full rounded-full shadow-[0_0_15px_rgba(197,160,89,0.4)]"
                    />
                  </div>
                  <p className="text-[9px] md:text-[10px] text-gold/40 uppercase tracking-[0.25em] font-bold">
                    {idx === 0 ? '12/16 Lessons Completed' : idx === 1 ? '2/8 Lessons Completed' : 'Enrollment Open'}
                  </p>
                </div>
              </div>
              
              <p className="text-foreground/60 text-sm md:text-base italic font-light leading-relaxed line-clamp-3">"{course.desc}"</p>
              
              <div className="mt-auto pt-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-foreground/30 tracking-[0.2em] font-bold mb-1 font-accent">Certification Fee</span>
                  <div className="text-gold font-serif text-2xl md:text-3xl tracking-tighter italic font-bold">{course.price}</div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={bouncySpring}>
                  <Button className="bg-gold text-luxury-black hover:bg-gold-light rounded-2xl transition-all duration-300 font-bold px-8 py-6 uppercase tracking-widest text-[10px] shadow-lg shadow-gold/10">
                    {idx === 2 ? 'LOCKED' : 'RESUME'}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
