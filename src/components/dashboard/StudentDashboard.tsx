import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, LayoutDashboard, BookOpen, Calendar, 
  Trophy, Settings, Flame, Star, Clock, 
  PlayCircle, FileText, Download, CheckCircle,
  TrendingUp, Award, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface DashboardProps {
  onBack: () => void;
  user: any;
}

export const StudentDashboard = ({ onBack, user }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const enrolledCourses = [
    { title: 'Beginner Sitar', progress: 65, totalLessons: 12, completed: 8, image: 'https://images.unsplash.com/photo-1514320291944-ef43702130ff?q=80&w=2670&auto=format&fit=crop' },
    { title: 'Raag Yaman Deep Dive', progress: 30, totalLessons: 10, completed: 3, image: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?q=80&w=2670&auto=format&fit=crop' }
  ];

  const upcomingLive = [
    { title: 'Advanced Meend Session', date: 'Oct 30', time: '17:00 IST' },
  ];

  const stats = [
    { icon: <Flame className="text-orange-500" />, label: 'Streak', value: '12 Days' },
    { icon: <Trophy className="text-gold" />, label: 'Points', value: '2,450' },
    { icon: <Clock className="text-blue-400" />, label: 'Riyaz Time', value: '45h' },
  ];

  return (
    <div className="container mx-auto px-6 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 pt-8 gap-8">
        <div className="flex items-center gap-8">
          <button 
            className="outline-button p-4 flex items-center justify-center"
            onClick={onBack}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold italic">Shishya Dashboard</h1>
            <p className="text-white/40 font-accent uppercase text-[10px] tracking-[0.3em] mt-2">Namaste, {user?.displayName || 'Student'} • Level 2 Practitioner</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-brown-depth/50 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center gap-4 border border-gold/10 shadow-xl">
              <div className="p-2.5 bg-luxury-black rounded-xl border border-white/5">{stat.icon}</div>
              <div>
                <p className="text-[10px] text-gold/60 uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                <p className="text-xl font-serif font-bold text-white tracking-widest">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1 space-y-2">
          <Button 
            variant="ghost" 
            className={`w-full justify-start h-14 rounded-xl text-lg font-display ${activeTab === 'overview' ? 'bg-gold text-luxury-black' : 'text-white/60 hover:text-gold hover:bg-white/5'}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard className="mr-3 w-5 h-5" /> Overview
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start h-14 rounded-xl text-lg font-display ${activeTab === 'courses' ? 'bg-gold text-luxury-black' : 'text-white/60 hover:text-gold hover:bg-white/5'}`}
            onClick={() => setActiveTab('courses')}
          >
            <BookOpen className="mr-3 w-5 h-5" /> My Courses
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start h-14 rounded-xl text-lg font-display ${activeTab === 'classes' ? 'bg-gold text-luxury-black' : 'text-white/60 hover:text-gold hover:bg-white/5'}`}
            onClick={() => setActiveTab('classes')}
          >
            <Calendar className="mr-3 w-5 h-5" /> Live Sessions
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start h-14 rounded-xl text-lg font-display ${activeTab === 'badges' ? 'bg-gold text-luxury-black' : 'text-white/60 hover:text-gold hover:bg-white/5'}`}
            onClick={() => setActiveTab('badges')}
          >
            <Award className="mr-3 w-5 h-5" /> Achievements
          </Button>
          <Separator className="my-4 bg-white/5" />
          <Button variant="ghost" className="w-full justify-start h-14 rounded-xl text-lg font-display text-white/40 hover:text-white">
            <Settings className="mr-3 w-5 h-5" /> Settings
          </Button>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Continue Learning */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 text-gold flex items-center gap-2">
                  <PlayCircle className="w-6 h-6" /> Continue Learning
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {enrolledCourses.map((course, i) => (
                    <Card key={i} className="glass-gold border-gold/10 border group overflow-hidden">
                      <div className="h-32 overflow-hidden relative">
                        <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                        <div className="absolute inset-0 bg-luxury-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" className="bg-gold text-luxury-black rounded-full font-bold">Resume Lesson</Button>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-display font-bold mb-2">{course.title}</h4>
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-xs text-white/40 uppercase tracking-widest">{course.completed}/{course.totalLessons} Lessons</p>
                          <p className="text-xs text-gold font-bold">{course.progress}%</p>
                        </div>
                        <Progress value={course.progress} className="h-1 bg-white/5" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Live Classes */}
                <div>
                  <h3 className="text-2xl font-display font-bold mb-6 text-gold flex items-center gap-2">
                    <Calendar className="w-6 h-6" /> Upcoming Live
                  </h3>
                  <div className="space-y-4">
                    {upcomingLive.map((item, i) => (
                      <div key={i} className="p-6 glass rounded-2xl border border-gold/10 flex items-center justify-between">
                        <div>
                          <h5 className="font-display font-bold text-white">{item.title}</h5>
                          <div className="flex items-center gap-3 mt-1 text-sm text-white/40">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.time}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-gold/30 text-gold hover:bg-gold hover:text-luxury-black">Enter Waitroom</Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Chart Placeholder */}
                <div>
                  <h3 className="text-2xl font-display font-bold mb-6 text-gold flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" /> Weekly Growth
                  </h3>
                  <div className="h-48 glass rounded-2xl border border-gold/10 flex items-end justify-between p-8 gap-2">
                    {[30, 60, 45, 90, 65, 80, 50].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        className="w-full bg-gold/20 rounded-t-sm relative group"
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gold font-bold opacity-0 group-hover:opacity-100 transition-opacity">{h}%</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 px-8 text-[10px] text-white/20 uppercase font-accent">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'badges' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: <Zap className="text-yellow-400" />, label: 'Fast Finger', desc: 'Reached 120BPM' },
                { icon: <Flame className="text-orange-500" />, label: 'Riyaz King', desc: '10 day streak' },
                { icon: <Music2 className="text-purple-400" />, label: 'Raag Guru', desc: 'Mastered Yaman' },
                { icon: <Star className="text-gold" />, label: 'Early Bird', desc: 'First lesson done' },
              ].map((badge, i) => (
                <div key={i} className="glass-gold p-8 rounded-3xl text-center border-gold/20 flex flex-col items-center gap-4 transition-transform hover:scale-105">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-3xl">
                    {badge.icon}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-white mb-1">{badge.label}</h5>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const Music2 = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
);
