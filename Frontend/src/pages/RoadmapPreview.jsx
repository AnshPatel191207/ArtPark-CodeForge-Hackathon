import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui';
import { BookOpen, CheckCircle2, Circle, ChevronRight, Star, Clock, Lock, Download } from 'lucide-react';

export const RoadmapPreview = () => {
  const modules = [
    { title: 'Foundational Neural Core', duration: '12h', difficulty: 'Beginner', status: 'completed' },
    { title: 'Advanced Mesh Architectures', duration: '24h', difficulty: 'Expert', status: 'active' },
    { title: 'Quantum Neural Sync', duration: '8h', difficulty: 'Master', status: 'locked' }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-4"
      >
        <div className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">
          Draft Trajectory Generated
        </div>
        <h1 className="text-5xl font-black tracking-tighter uppercase italic">
          Roadmap <span className="text-gradient">Preview</span>
        </h1>
        <p className="text-slate-400 max-w-lg mx-auto font-inter text-sm">
          A blueprint for your transition from Senior Neural Architect to Distributed Systems Lead based on inferred skill gaps.
        </p>
        <button
          onClick={() => window.print()}
          className="btn-neon-primary px-8 py-3 text-xs uppercase tracking-widest inline-flex items-center gap-2 mt-4"
        >
          <Download size={14} /> Export PDF
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {modules.map((m, i) => (
          <GlassCard key={i} className={`relative overflow-hidden group border-2 ${m.status === 'active' ? 'border-primary/50' : 'border-white/5'}`}>
            <div className={`absolute top-0 right-0 w-24 h-24  opacity-5 bg-gradient-to-bl from-current to-transparent transition-transform group-hover:scale-150 ${m.status === 'completed' ? 'text-accent-success' : 'text-primary'}`} />
            
            <div className="flex justify-between items-start mb-6">
               <div className={`p-3 rounded-xl ${m.status === 'completed' ? 'bg-accent-success/10 text-accent-success' : 'bg-primary/10 text-primary'}`}>
                  {m.status === 'completed' ? <CheckCircle2 size={24} /> : m.status === 'active' ? <Clock size={24} /> : <Lock size={24} />}
               </div>
               <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500">
                  <Star size={12} fill="currentColor" className="text-yellow-500" /> {m.difficulty}
               </div>
            </div>

            <h3 className="text-lg font-black mb-2 text-white group-hover:text-primary transition-colors">{m.title}</h3>
            <p className="text-xs text-slate-500 font-inter mb-6">Mastering the core principles of node synchronization and latent space navigation.</p>
            
            <div className="pt-6 border-t border-white/5 flex gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
               <span>Duration: {m.duration}</span>
               <span className="ml-auto flex items-center gap-1 group-hover:text-primary transition-colors cursor-pointer">Explore <ChevronRight size={14} /></span>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="p-10 border-white/5 bg-gradient-to-r from-background to-secondary/10 overflow-hidden relative">
         <div className="absolute top-0 right-0 opacity-10 pointer-events-none skew-x-12 translate-x-10 translate-y-10">
            <BookOpen size={200} className="text-primary" />
         </div>
         <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-black mb-4 tracking-tighter italic">Ready to Commit?</h2>
            <p className="text-slate-400 font-inter text-sm mb-8">This roadmap has been mathematically optimized for your specific history. Finalizing your path will unlock interactive modules and mentor support.</p>
            <button className="btn-neon-primary px-10 py-4 text-sm uppercase tracking-widest">Enroll in Neural Core</button>
         </div>
      </GlassCard>
    </div>
  );
};
