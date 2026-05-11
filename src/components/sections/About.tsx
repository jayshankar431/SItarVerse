import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Users, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { springTransition, softSpring, bouncySpring } from '@/src/lib/animations';

export const About = () => {
  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: "30+ Years", desc: "Musical Excellence" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Expert Teacher", desc: "Classical Training" },
    { icon: <Users className="w-6 h-6" />, title: "5000+ Students", desc: "Trained Internationally" },
    { icon: <Star className="w-6 h-6" />, title: "Award Winning", desc: "National Performances" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with 3D Hover Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="relative group flex justify-center"
          >
            <div className="absolute -inset-8 bg-gold/30 rounded-full blur-[100px] group-hover:bg-gold/50 transition-all duration-700 opacity-40 animate-pulse-soft" />
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={bouncySpring}
              className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-gold/40 shadow-[0_0_80px_rgba(197,160,89,0.5)] group-hover:border-gold group-hover:shadow-[0_0_120px_rgba(197,160,89,0.7)] transition-all duration-700"
            >
              <img
                src="https://res.cloudinary.com/dsfcu9y1h/image/upload/f_auto,q_auto,w_1200/IMG_20260207_210741_d2cg6e"
                alt="Dr. Ashok Kumar Chambyal"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
            {/* Signature Badge */}
            <motion.div 
              initial={{ rotate: -10, scale: 0 }}
              whileInView={{ rotate: 12, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, ...springTransition }}
              whileHover={{ scale: 1.1, rotate: 15 }}
              className="absolute -bottom-4 -right-4 bg-gold text-luxury-black px-8 py-4 rounded-3xl shadow-2xl font-serif italic font-bold text-xl hidden md:block border-2 border-white/20 z-10"
            >
              Maestro & Guru
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gold font-serif italic text-xl mb-4 block"
              >
                Meet the Maestro
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, ...springTransition }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground italic leading-[1.1] tracking-tight"
              >
                A Legacy of Divine Strings
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-foreground/70 text-lg leading-relaxed font-light italic"
              >
                "Dr. Ashok Kumar Chambyal is a visionary Sitar artist hailing from the serene landscapes of Himachal Pradesh. 
                With over three decades of dedicated 'Sadhna' in Indian Classical Music, he has redefined the traditional 
                learning experience through SitarVerse."
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.5, ...softSpring }}
                  whileHover={{ y: -8, scale: 1.02, backgroundColor: "var(--gold-5)" }}
                  className="p-6 rounded-3xl bg-secondary border border-border group hover:border-gold/30 hover:bg-gold/5 transition-all shadow-xl"
                >
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    className="text-gold mb-4 group-hover:scale-110 transition-transform origin-left"
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-xl font-serif font-bold text-foreground mb-1 italic">{item.title}</h4>
                  <p className="text-foreground/50 text-xs font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger render={
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={bouncySpring}
                    className="bg-gold text-luxury-black transition-all px-10 py-7 rounded-2xl font-bold uppercase tracking-widest text-[11px] shadow-xl shadow-gold/10"
                  />
                }>
                  Read Full Biography
                </DialogTrigger>
                <DialogContent className="bg-background/95 backdrop-blur-2xl border border-gold/20 text-foreground max-w-2xl p-8 md:p-12 rounded-[3rem] shadow-2xl">
                  <DialogHeader className="mb-8">
                    <DialogTitle className="text-4xl font-serif text-gold italic">The Musical Journey</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 text-foreground/70 leading-relaxed font-light italic max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                    <p className="text-lg">
                      Dr. Ashok Kumar Chambyal is a recipient of the State Cultural Award 2023 and a distinguished Sitar maestro hailing from Himachal Pradesh. His journey began in the traditional Gurukul style, later evolving into a scholarly pursuit of music.
                    </p>
                    <p className="text-lg">
                      With a PhD in Music, he has spent over 30 years perfecting the 'Gayaki Ang' on the Sitar—an intricate technique that mimics the nuances of the human voice. This mastery allows the strings to speak the language of emotions, a hallmark of his signature style.
                    </p>
                    <p className="text-lg">
                      As the founder of SitarVerse Academy, he has pioneered a technology-first approach to Indian Classical Music, ensuring that the ancient heritage is preserved and propagated to new generations through interactive and personalized learning.
                    </p>
                    <p className="text-lg">
                      Dr. Chambyal's performances have graced national and international stages, bringing the soul of the Himalayas to the global music scene. He continues to inspire thousands of shishyas across the world, bridging the gap between tradition and modernity.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              <motion.button 
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "var(--gold-10)" }}
                whileTap={{ scale: 0.95 }}
                transition={softSpring}
                className="border border-gold/30 text-gold px-10 py-7 rounded-2xl font-bold uppercase tracking-widest text-[11px] transition-all shadow-lg shadow-gold/5 flex items-center justify-center"
              >
                <Download className="mr-2 w-4 h-4" /> Download Profile
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


