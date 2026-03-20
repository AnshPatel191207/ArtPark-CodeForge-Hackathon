import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui';
import { User, Mail, Shield, Clock, FileText, ChevronRight, Map, Trophy, Star, Flame, Zap, Target } from 'lucide-react';

export const Profile = () => {
  const history = [
    { date: '2024-03-20', label: 'Senior Dev Role', score: '92%' },
    { date: '2024-03-15', label: 'Tech Lead Position', score: '88%' },
    { date: '2024-03-02', label: 'AI Architect Spec', score: '95%' }
  ];

  const badges = [
    { icon: Flame, label: 'Fast Starter', desc: 'Completed first module in under 24h', color: 'text-orange-400', bg: 'bg-orange-400/10', earned: true },
    { icon: Star, label: 'Perfect Score', desc: 'Scored 95%+ on a skill assessment', color: 'text-yellow-400', bg: 'bg-yellow-400/10', earned: true },
    { icon: Zap, label: 'Speed Learner', desc: 'Finished roadmap 2x faster than avg', color: 'text-primary', bg: 'bg-primary/10', earned: true },
    { icon: Target, label: 'Gap Closer', desc: 'Closed 5 skill gaps in one session', color: 'text-accent-success', bg: 'bg-accent-success/10', earned: true },
    { icon: Trophy, label: 'Onboarding Elite', desc: 'Complete all roadmap modules', color: 'text-secondary', bg: 'bg-secondary/10', earned: false },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-8 items-start"
      >
        <GlassCard className="w-full md:w-80 flex flex-col items-center py-10">
          <div className="w-24 h-24 rounded-full border-2 border-primary p-1 shadow-neon-indigo mb-6">
            <img src="https://i.pravatar.cc/150?u=drvance" alt="User" className="w-full h-full rounded-full object-cover" />
          </div>
          <h2 className="text-2xl font-black mb-1">Dr. Elias Vance</h2>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-6 px-4 py-1 bg-white/5 rounded-full">Senior Neural Architect</p>
          
          <div className="w-full px-6 space-y-4 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3 text-xs">
              <Mail size={16} className="text-primary" />
              <span className="text-slate-400">e.vance@blackmesa.io</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <Shield size={16} className="text-primary" />
              <span className="text-slate-400">Security Clearance: Omega</span>
            </div>
          </div>
        </GlassCard>

        <div className="flex-1 space-y-6">
           {/* Gamification Badges */}
           <GlassCard>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <Trophy size={16} className="text-yellow-400" /> Achievements & Badges
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {badges.map((badge, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className={`relative p-4 rounded-xl border transition-all text-center ${
                      badge.earned
                        ? theme === 'dark' ? 'border-white/10 bg-white/5 hover:border-primary/30' : 'border-slate-200 bg-slate-50 hover:border-primary/30'
                        : theme === 'dark' ? 'border-white/5 bg-white/[0.02] opacity-40 grayscale' : 'border-slate-100 bg-slate-50/50 opacity-40 grayscale'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full ${badge.bg} flex items-center justify-center mx-auto mb-3`}>
                      <badge.icon size={22} className={badge.color} />
                    </div>
                    <p className={`text-xs font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{badge.label}</p>
                    <p className="text-[9px] text-slate-500 leading-tight">{badge.desc}</p>
                    {!badge.earned && (
                      <div className="absolute top-2 right-2 text-[8px] font-bold text-slate-600 uppercase">Locked</div>
                    )}
                  </motion.div>
                ))}
              </div>
           </GlassCard>

           <GlassCard>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <Clock size={16} className="text-primary" /> Analysis History
              </h3>
              <div className="space-y-4">
                 {history.map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all cursor-pointer group">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <FileText size={20} />
                         </div>
                         <div>
                            <p className="font-bold text-sm text-white">{item.label}</p>
                            <p className="text-[10px] text-slate-500 font-inter">{item.date}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="text-right">
                            <p className="text-[10px] text-slate-500 font-bold uppercase">Match Rate</p>
                            <p className="text-lg font-black text-primary">{item.score}</p>
                         </div>
                         <ChevronRight size={18} className="text-slate-600 group-hover:text-primary transition-colors" />
                      </div>
                   </div>
                 ))}
              </div>
           </GlassCard>

           <GlassCard>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <Map size={16} className="text-secondary" /> Generated Roadmaps
              </h3>
              <div className="flex items-center justify-center py-10 text-center border-2 border-dashed border-white/10 rounded-2xl">
                 <div>
                    <p className="text-xs text-slate-500 font-inter mb-4">You have 3 active learning trajectories.</p>
                    <button className="btn-neon-secondary px-6 py-2 text-xs">View Active Paths</button>
                 </div>
              </div>
           </GlassCard>
        </div>
      </motion.div>
    </div>
  );
};
