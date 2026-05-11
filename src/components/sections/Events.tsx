import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { springTransition, softSpring, bouncySpring } from '@/src/lib/animations';

const events = [
  {
    id: 1,
    title: 'Himachal Classical Music Festival',
    description: 'An evening of majestic Raags by the Beas river. Dr. Ashok will perform a Solo Sitar Recital.',
    date: 'Dec 12, 2023',
    time: '19:00 - 21:30',
    location: 'Gaiety Theater, Shimla',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Virtual Sitar Workshop: Advanced Meend',
    description: 'Exclusive 5-day online intensive workshop focusing on the depth of glissando techniques.',
    date: 'Nov 15-20, 2023',
    time: '10:00 - 12:00 IST',
    location: 'Zoom (Interactive)',
    image: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?q=80&w=2670&auto=format&fit=crop'
  }
];

export const Events = () => {
  return (
    <section id="events" className="py-24 bg-background relative transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gold font-accent uppercase text-sm tracking-widest mb-4 block font-bold"
            >
              Upcoming Engagements
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={springTransition}
              className="text-fluid-h2 font-serif font-bold text-foreground italic"
            >
              Concerts & Workshops
            </motion.h2>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={bouncySpring}>
            <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold hover:text-luxury-black rounded-full px-8 py-6 transition-all duration-300 font-bold uppercase tracking-widest text-[10px]">
              View All Events
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, ...springTransition }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 40px 100px rgba(0, 0, 0, 0.15)"
              }}
              className="h-full"
            >
              <Card className="bg-card/40 backdrop-blur-xl border border-border overflow-hidden h-full group hover:border-gold/40 transition-all duration-700 shadow-2xl rounded-[2.5rem]">
                <CardContent className="p-0 flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1 }}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 hidden md:block" />
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-gold font-accent text-xs uppercase tracking-widest mb-4 font-bold">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-gold transition-colors italic">
                        {event.title}
                      </h3>
                      <p className="text-foreground/50 text-sm mb-6 leading-relaxed italic font-light">
                        {event.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-foreground/40 font-medium">
                          <Clock className="w-4 h-4 text-gold/60" /> {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground/40 font-medium">
                          <MapPin className="w-4 h-4 text-gold/60" /> {event.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={bouncySpring}>
                        <Button className="w-full bg-gold text-luxury-black hover:bg-gold-light font-bold flex items-center gap-2 rounded-xl py-6 uppercase tracking-widest text-xs transition-all shadow-lg shadow-gold/10">
                          Register Now <ExternalLink className="w-4 h-4" />
                        </Button>
                      </motion.div>
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

