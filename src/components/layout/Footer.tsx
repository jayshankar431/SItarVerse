import React from 'react';
import { motion } from 'motion/react';
import { Music, Instagram, Twitter, Facebook, Youtube, Heart, MessageCircle } from 'lucide-react';
import { springTransition, softSpring, bouncySpring } from '@/src/lib/animations';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 overflow-hidden relative transition-colors duration-500">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={springTransition}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-8 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                <Music className="text-luxury-black w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent tracking-widest uppercase italic">SitarVerse</span>
            </motion.div>
            <p className="text-foreground/40 text-lg leading-relaxed mb-10 max-w-sm italic">
              "Master the strings of the divine. SitarVerse Academy is dedicated to preserving Indian Classical heritage through technology-first pedagogy."
            </p>
            <div className="flex gap-5">
              {[
                { icon: Instagram, href: "https://www.instagram.com/dr_chambyal/" },
                { icon: Facebook, href: "https://www.facebook.com/drashokchambyalofficial/" },
                { icon: Youtube, href: "https://www.youtube.com/@sangeetkumar20april" },
                { icon: MessageCircle, href: "https://wa.me/919872312430?text=Hello%20Sir" }
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, ...bouncySpring }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.1,
                    backgroundColor: "var(--gold-10)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground/30 hover:text-gold hover:border-gold/30 transition-all duration-500 hover:shadow-[0_10px_20px_rgba(197,160,89,0.1)] group"
                >
                  <social.icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...springTransition }}
              viewport={{ once: true }}
            >
              <h4 className="text-gold font-serif font-bold mb-8 uppercase text-xs tracking-[0.3em] italic">Explore</h4>
              <ul className="space-y-4">
                {['Academy', 'Curriculum', 'Riyaz AI', 'Live', 'Concerts'].map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm uppercase tracking-widest text-[11px] font-bold">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ...springTransition }}
              viewport={{ once: true }}
            >
              <h4 className="text-gold font-serif font-bold mb-8 uppercase text-xs tracking-[0.3em] italic">Mastery</h4>
              <ul className="space-y-4">
                {['Login', 'Privacy', 'Terms', 'Consultation', 'Certificates'].map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm uppercase tracking-widest text-[11px] font-bold">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ...springTransition }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-1"
            >
              <h4 className="text-gold font-serif font-bold mb-8 uppercase text-xs tracking-[0.3em] italic">Get in Touch</h4>
              <div className="space-y-4">
                <p className="text-foreground/50 text-sm italic font-light">Mandi-Kullu Highway,<br />Himachal Pradesh, India</p>
                <div className="space-y-1">
                  <p className="text-foreground font-bold text-xl font-serif">info@sitarverse.com</p>
                  <p className="text-foreground/60 font-serif tracking-[0.1em]">+91 98723 12430</p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gold/10 border border-gold/20 p-4 rounded-2xl"
                >
                  <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold mb-1">State Cultural Award 2023</p>
                  <p className="text-xs text-foreground/60 font-medium">Preserved by Dr. Ashok Kumar Chambyal</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-16 flex flex-col md:flex-row items-center justify-between border-t border-border pt-8 text-[10px] text-foreground/30 tracking-[0.25em] uppercase font-bold"
        >
          <div>© {currentYear} SitarVerse Academy • Preserving Divinity</div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
             <span>Servers Optimized: Mumbai/Delhi</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

