import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    author: 'Elena Petrova',
    role: 'Classical Music Enthusiast, Russia',
    text: 'Dr. Ashok is a true maestro. His teaching style is patient and deep. I started with zero knowledge and now I can play Raag Yaman confidently.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 2,
    author: 'Rahul Sharma',
    role: 'Advanced Student, USA',
    text: 'The SitarVerse platform is unique. The AI assistant helps me correct my mistakes when I practice alone at night. Truly revolutionary for classical music.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 3,
    author: 'Meera Iyer',
    role: 'Professional Musician, India',
    text: 'I sought Dr. Ashok for refinement in performance techniques. His insights into stage presence and audience connection are invaluable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2574&auto=format&fit=crop'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-5">
        <Quote className="w-96 h-96 text-gold" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-accent uppercase text-sm tracking-widest mb-4 block font-bold"
          >
            Hearts & Strings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-fluid-h2 font-serif font-bold mb-4 text-foreground italic"
          >
            Student Testimonials
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/40 backdrop-blur-md border border-border h-full hover:border-gold/30 transition-all duration-500 rounded-[2rem] shadow-2xl">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="text-foreground/70 italic font-light text-lg leading-relaxed mb-8">
                      "{t.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border border-gold/30 shadow-[0_0_15px_rgba(197,160,89,0.3)] ring-2 ring-gold/10">
                      <AvatarImage src={t.avatar} className="object-cover" />
                      <AvatarFallback className="bg-background text-gold font-bold">
                        {t.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h5 className="text-lg font-serif font-bold text-foreground leading-tight italic">{t.author}</h5>
                      <p className="text-gold font-accent uppercase tracking-widest text-[10px] font-bold">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
