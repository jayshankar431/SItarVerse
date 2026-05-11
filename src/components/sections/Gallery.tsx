import React from 'react';
import { motion } from 'motion/react';
import { Maximize2, PlayCircle } from 'lucide-react';
import { springTransition, softSpring, bouncySpring } from '@/src/lib/animations';

const galleryItems = [
  { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1542332606-b3d2b27d425c?q=80&w=2670&auto=format&fit=crop', title: 'Classical Concert at Shimla' },
  { id: 2, type: 'video', url: 'https://images.unsplash.com/photo-1514320291944-ef43702130ff?q=80&w=2670&auto=format&fit=crop', title: 'Morning Riyaz session' },
  { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?q=80&w=2670&auto=format&fit=crop', title: 'Performance in Mandi' },
  { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1563200022-87a7407000d6?q=80&w=2669&auto=format&fit=crop', title: 'Masterclass with Students' },
  { id: 5, type: 'video', url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop', title: 'The Soul of Sitar' },
  { id: 6, type: 'image', url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2670&auto=format&fit=crop', title: 'Dr. Ashok Live in Himachal' },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background relative transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-accent uppercase text-sm tracking-widest mb-4 block"
          >
            Visual Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-fluid-h2 font-serif font-bold mb-4 text-foreground cursor-default italic"
          >
            Maestro's Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-foreground/50 max-w-2xl mx-auto italic font-light"
          >
            Witness the passion and artistry of Dr. Ashok Kumar Chambyal through cinematic moments of performances and student interaction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.1, ...springTransition }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotate: idx % 2 === 0 ? -1 : 1,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)"
              }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-card border border-border group cursor-pointer shadow-xl shadow-background/5"
            >
              <motion.img
                src={item.url}
                alt={item.title}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  transition={bouncySpring}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gold rounded-full flex items-center justify-center transform opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-100"
                >
                  {item.type === 'video' ? <PlayCircle className="text-luxury-black w-7 h-7" /> : <Maximize2 className="text-luxury-black w-7 h-7" />}
                </motion.div>
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-xl font-serif font-bold text-foreground italic drop-shadow-sm mb-1">{item.title}</h4>
                  <p className="text-gold font-accent uppercase text-[10px] tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    {item.type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

