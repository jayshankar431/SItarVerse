import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Play, Timer, Music2, Share2, BarChart3, Bot, Loader2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GoogleGenAI } from '@google/genai';
import { springTransition, softSpring, bouncySpring } from '@/src/lib/animations';

export const AIRiyaz = () => {
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getAISuggestion = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "You are a Sitar Maestro. Provide a 3-step daily practice routine for a total beginner student. Focus on posture and basic finger speed. Keep it cinematic and inspiring.",
      });
      setSuggestion(response.text);
    } catch (error) {
      console.error(error);
      setSuggestion("Focus on Raag Yaman Alankars today. Work on your Meend (glissando) for 20 minutes with a steady Teentaal 16-beat cycle.");
    }
    setLoading(false);
  };

  return (
    <section id="ai-riyaz" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={springTransition}
            whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold font-accent text-xs uppercase tracking-widest mb-6 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 animate-pulse" /> Powered by Gemini
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={springTransition}
            className="text-fluid-h2 font-serif font-bold text-foreground mb-4"
          >
            AI Riyaz Assistant
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-foreground/50 max-w-xl mx-auto font-light italic"
          >
            "Your futuristic music companion that analyzes your progress and suggests hyper-personalized practice sessions."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* AI Riyaz Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={springTransition}
            whileHover={{ y: -5 }}
            className="bg-card/40 backdrop-blur-md border border-border rounded-[2.5rem] p-8 flex flex-col group hover:border-gold/30 transition-all duration-500 shadow-2xl"
          >
            <div className="flex justify-between items-start mb-10">
              <h3 className="font-serif text-2xl text-gold italic">AI Studio Analyzer</h3>
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-gold/20 text-gold text-[10px] font-bold rounded uppercase tracking-widest shadow-[0_0_10px_rgba(197,160,89,0.2)]"
              >
                Pro Mode
              </motion.span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-8 py-10">
              <div className="flex items-end gap-2 h-16">
                {[4, 8, 12, 6, 10, 5, 9, 3, 7, 11].map((h, i) => (
                  <motion.div
                    key={i}
                    className={`w-1.5 rounded-full ${i % 3 === 0 ? 'bg-foreground' : 'bg-gold'}`}
                    animate={{ height: [`${h * 4}px`, `${(h + 4) * 4}px`, `${h * 4}px`] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                  />
                ))}
              </div>
              
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-center"
              >
                <p className="text-[10px] text-foreground/50 uppercase tracking-widest mb-2 font-accent">Analysis Complete: Current Raag</p>
                <p className="text-3xl font-serif text-gold-light italic">Bhairavi (Early Morning)</p>
              </motion.div>

              <div className="grid grid-cols-3 w-full gap-4 mt-4">
                {[
                  { label: 'Tempo', value: '112 BPM' },
                  { label: 'Taal', value: 'Teental' },
                  { label: 'Key', value: 'C#' }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.label} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 + 0.5, ...bouncySpring }}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--gold-5)" }}
                    className="bg-foreground/5 p-4 rounded-2xl text-center border border-border group-hover:border-gold/20 transition-colors"
                  >
                    <span className="block text-[9px] text-foreground/40 uppercase tracking-tighter mb-1 font-bold">{item.label}</span>
                    <span className="text-xs font-mono text-foreground font-bold">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={bouncySpring}>
              <Button 
                size="lg"
                className="w-full mt-6 bg-gold text-luxury-black hover:bg-gold-light transition-all rounded-2xl uppercase tracking-widest text-xs font-bold h-14 shadow-lg shadow-gold/20"
                onClick={getAISuggestion}
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin" /> : 'OPTIMIZE MY RIYAZ'}
              </Button>
            </motion.div>
          </motion.div>

          {/* Tips / Analytics Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={springTransition}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card/40 backdrop-blur-md border border-border rounded-[2.5rem] p-8 md:p-12 flex flex-col h-full shadow-2xl">
              <h3 className="font-serif text-3xl mb-8 text-gold italic">Mastery Insight</h3>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={suggestion || 'default'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={softSpring}
                  className="text-foreground/70 italic font-light text-xl leading-relaxed mb-10"
                >
                  {suggestion || "Your recent practice shows improvement in the Teentaal transitions. Focus on the Meend (glissando) between 'Ma' and 'Pa' to reach the next tier of mastery."}
                </motion.p>
              </AnimatePresence>
              
              <div className="mt-auto space-y-4">
                <motion.div 
                  whileHover={{ x: 10, backgroundColor: "var(--gold-10)" }}
                  className="bg-gradient-to-tr from-gold/10 to-transparent p-6 rounded-2xl border border-gold/10 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Award className="text-gold w-6 h-6 font-bold" />
                    <h4 className="font-serif text-xl text-foreground italic">Heritage Excellence</h4>
                  </div>
                  <p className="text-sm text-foreground/50 leading-relaxed font-light italic">
                    Curriculum authenticated by Dr. Ashok Kumar Chambyal, State Cultural Award Winner 2023.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Cinematic Visualizer Placeholder */}
        <div className="mt-16 h-24 flex items-center justify-center gap-2">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gold rounded-full opacity-20"
              animate={{
                height: [20, 60, 20, 40, 20],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.05,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

