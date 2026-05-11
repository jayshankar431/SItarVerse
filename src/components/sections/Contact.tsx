import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { springTransition, softSpring, bouncySpring } from '@/src/lib/animations';

export const Contact = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/dr_chambyal/", color: "hover:text-[#E4405F]", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/drashokchambyalofficial/", color: "hover:text-[#1877F2]", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@sangeetkumar20april", color: "hover:text-[#FF0000]", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/919872312430?text=Hello%20Sir", color: "hover:text-[#25D366]", label: "WhatsApp" }
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="flex flex-col"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gold font-serif italic text-xl mb-4 block"
            >
              Connect with Maestro
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, ...springTransition }}
              className="text-fluid-h2 font-serif font-bold text-foreground mb-8 leading-tight italic"
            >
              Begin Your Musical<br />Awakening Today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-foreground/50 text-lg mb-12 font-light max-w-lg italic"
            >
              "Every great journey starts with a single note. Our doors are open for dedicated shishyas and connoisseurs alike."
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-12">
              <motion.a 
                href="mailto:sangeetkumar20april@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, ...springTransition }}
                whileHover={{ x: 12, backgroundColor: "var(--gold-5)" }}
                className="flex items-center gap-6 p-6 bg-card border border-border rounded-3xl hover:border-gold/30 transition-all group shadow-xl"
              >
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-gold group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all border border-border shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] mb-1">Email Inquiry</p>
                  <p className="text-base md:text-lg text-foreground font-serif italic break-words">sangeetkumar20april@gmail.com</p>
                </div>
              </motion.a>

              <motion.a 
                href="tel:+919872312430"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, ...springTransition }}
                whileHover={{ x: 12, backgroundColor: "var(--gold-5)" }}
                className="flex items-center gap-6 p-6 bg-card border border-border rounded-3xl hover:border-gold/30 transition-all group shadow-xl"
              >
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-gold group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all border border-border">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] mb-1">Direct Call</p>
                  <p className="text-lg text-foreground font-serif italic tracking-widest">+91 98723 12430</p>
                </div>
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1, ...bouncySpring }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.15,
                    rotate: [-5, 5, -5, 0]
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center text-foreground/50 ${social.color} hover:border-gold/40 hover:bg-background transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(197,160,89,0.2)] group`}
                >
                  <social.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={springTransition}
            whileHover={{ boxShadow: "0 50px 100px rgba(0, 0, 0, 0.2)" }}
            className="bg-card/30 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 border border-border shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="space-y-2">
                  <Label htmlFor="firstName" className="text-gold/60 uppercase text-[9px] tracking-[0.3em] font-bold ml-1">First Name</Label>
                  <Input id="firstName" placeholder="Arjun" className="bg-foreground/5 border-border text-foreground h-14 rounded-2xl px-6 focus:border-gold/50 transition-all font-light placeholder:text-foreground/20" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="space-y-2">
                  <Label htmlFor="lastName" className="text-gold/60 uppercase text-[9px] tracking-[0.3em] font-bold ml-1">Last Name</Label>
                  <Input id="lastName" placeholder="Sharma" className="bg-foreground/5 border-border text-foreground h-14 rounded-2xl px-6 focus:border-gold/50 transition-all font-light placeholder:text-foreground/20" />
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="space-y-2">
                <Label htmlFor="c-email" className="text-gold/60 uppercase text-[9px] tracking-[0.3em] font-bold ml-1">Email Address</Label>
                <Input id="c-email" type="email" placeholder="arjun@email.com" className="bg-foreground/5 border-border text-foreground h-14 rounded-2xl px-6 focus:border-gold/50 transition-all font-light placeholder:text-foreground/20" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="space-y-2">
                <Label htmlFor="contact-message" className="text-gold/60 uppercase text-[9px] tracking-[0.3em] font-bold ml-1">Your Message</Label>
                <Textarea id="contact-message" placeholder="I would like to enquire about..." className="bg-foreground/5 border-border text-foreground min-h-[160px] rounded-2xl p-6 focus:border-gold/50 transition-all font-light resize-none placeholder:text-foreground/20" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                transition={{ ...bouncySpring, delay: 0.8 }}
                className="space-y-2"
              >
                <Button className="w-full bg-gold text-luxury-black hover:bg-gold-light transition-all h-16 rounded-2xl font-bold uppercase tracking-[0.3em] text-[11px] shadow-xl shadow-gold/10 flex items-center justify-center gap-3">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

