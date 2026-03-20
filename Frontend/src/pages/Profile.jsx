import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui';
import { User, Mail, Shield, Clock, FileText, ChevronRight, Map } from 'lucide-react';

export const Profile = () => {
  const history = [
    { date: '2024-03-20', label: 'Senior Dev Role', score: '92%' },
    { date: '2024-03-15', label: 'Tech Lead Position', score: '88%' },
    { date: '2024-03-02', label: 'AI Architect Spec', score: '95%' }
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
