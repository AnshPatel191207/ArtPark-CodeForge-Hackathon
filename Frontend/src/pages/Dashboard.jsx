import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard, NeonButton } from '../components/ui';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell
} from 'recharts';
import { 
  CheckCircle2, 
  Circle, 
  Lock, 
  ChevronDown, 
  Terminal, 
  Brain, 
  Target, 
  Clock, 
  Star,
  Play,
  Activity
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const radarData = [
  { subject: 'Algorithmic Design', A: 92, fullMark: 100 },
  { subject: 'System Architecture', A: 68, fullMark: 100 },
  { subject: 'Neural Nets', A: 85, fullMark: 100 },
  { subject: 'Distributed Systems', A: 45, fullMark: 100 },
  { subject: 'Kubernetes', A: 70, fullMark: 100 },
  { subject: 'Ethical AI', A: 80, fullMark: 100 },
];

const TimelineItem = ({ title, duration, difficulty, status, active }) => {
  const statusStyles = {
    completed: { color: 'text-accent-success', icon: CheckCircle2, shadow: 'shadow-neon-success' },
    active: { color: 'text-primary', icon: Play, shadow: 'shadow-neon-indigo' },
    locked: { color: 'text-slate-600', icon: Lock, shadow: '' },
  };

  const { color, icon: Icon, shadow } = statusStyles[status];

  return (
    <div className={`relative flex gap-6 pb-10 group ${status === 'locked' ? 'opacity-50 grayscale' : ''}`}>
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center z-10 transition-all duration-500 ${active ? 'scale-125 border-primary shadow-neon-indigo' : ''}`}>
           <Icon size={18} className={color} />
        </div>
        <div className="absolute top-10 left-5 w-[2px] h-full bg-gradient-to-b from-white/10 to-transparent"></div>
      </div>
      
      <GlassCard className={`flex-1 p-4 ${active ? 'border-primary/50 bg-primary/5' : ''}`}>
        <div className="flex justify-between items-start mb-2">
           <h4 className="font-bold text-white group-hover:text-primary transition-colors">{title}</h4>
           <div className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter ${status === 'completed' ? 'bg-accent-success/20 text-accent-success' : 'bg-white/5 text-slate-400'}`}>
             {status}
           </div>
        </div>
        <div className="flex gap-4 text-xs text-slate-500 font-inter">
          <span className="flex items-center gap-1"><Clock size={12} /> {duration}</span>
          <span className="flex items-center gap-1"><Star size={12} /> {difficulty}</span>
        </div>
        {status === 'active' && (
          <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: '45%' }}
               className="h-full bg-primary shadow-neon-indigo"
             />
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export const Dashboard = () => {
  const [traceOpen, setTraceOpen] = useState(true);
  const { theme } = useTheme();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto space-y-8 pb-12 transition-colors duration-500"
    >
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Skill Match", value: "85%", sub: "+12% vs last cycle", color: "text-primary" },
          { label: "Time Saved", value: "40%", sub: "Optimized by Aetheris", color: "text-secondary" },
          { label: "Readiness Score", value: "A+", sub: "Elite Neural Status", color: "text-accent-success" }
        ].map((stat, i) => (
          <GlassCard key={i} className="flex justify-between items-center h-32 relative overflow-hidden">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
              <h2 className={`text-4xl font-black ${stat.color}`}>{stat.value}</h2>
              <p className="text-[10px] text-slate-400 mt-1 font-inter">{stat.sub}</p>
            </div>
            <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 bg-current transition-transform group-hover:scale-150`}></div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Profile & Skills */}
        <div className="lg:col-span-3 space-y-6">
          <GlassCard className="text-center p-8">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full border-2 border-primary p-1 shadow-neon-indigo">
                 <img src="https://i.pravatar.cc/150?u=drvance" alt="Avatar" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-accent-success rounded-full border-4 border-background shadow-lg"></div>
            </div>
            <h3 className="text-xl font-extrabold mb-1">Dr. Elias Vance</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-6">Senior Neural Architect</p>
            
            <div className="flex justify-around text-center">
               <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">LVL</p>
                  <p className="text-xl font-black text-white">84</p>
               </div>
               <div className="w-px h-8 bg-white/10 mt-2"></div>
               <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">EXP</p>
                  <p className="text-xl font-black text-white">2.4M</p>
               </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
              <Brain size={14} className="text-primary" /> Extracted Skills
            </h4>
            <div className="space-y-6">
               <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-3 tracking-widest">Technical</p>
                  <div className="flex flex-wrap gap-2">
                    {['Neural Nets', 'Kubernetes', 'PyTorch'].map(s => (
                      <span key={s} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary shadow-neon-indigo">{s}</span>
                    ))}
                  </div>
               </div>
               <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-3 tracking-widest">Soft</p>
                  <div className="flex flex-wrap gap-2">
                    {['Ethical AI', 'Leadership'].map(s => (
                      <span key={s} className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-[10px] font-bold text-secondary">{s}</span>
                    ))}
                  </div>
               </div>
            </div>
          </GlassCard>
        </div>

        {/* Center Column: Radar & Trace */}
        <div className="lg:col-span-6 space-y-6">
          <GlassCard className="h-[450px]">
            <div className="flex justify-between items-center mb-6">
               <h4 className="text-sm font-bold uppercase tracking-widest">Skill Gap Radar</h4>
               <div className="px-3 py-1 rounded bg-primary/20 border border-primary/30 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Core Focus</span>
                  <span className="text-sm font-black text-primary">74%</span>
               </div>
            </div>
            <div className="w-full h-[320px]">
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#ffffff10" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }} />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="#4F46E5"
                      fill="#4F46E5"
                      fillOpacity={0.4}
                    />
                  </RadarChart>
               </ResponsiveContainer>
            </div>
          </GlassCard>

          {/* Reasoning Trace */}
          <GlassCard className="p-0 overflow-hidden">
            <button 
               onClick={() => setTraceOpen(!traceOpen)}
               className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors"
            >
               <div className="flex items-center gap-3">
                  <Terminal size={18} className="text-primary" />
                  <span className="text-sm font-bold uppercase tracking-widest">AI Reasoning Trace</span>
               </div>
               <ChevronDown className={`transition-transform duration-300 ${traceOpen ? 'rotate-180' : ''}`} size={18} />
            </button>
            <AnimatePresence>
               {traceOpen && (
                 <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/10"
                 >
                    <div className="p-6 font-mono text-[11px] leading-relaxed space-y-2 bg-black/40">
                       <p className="text-primary font-bold">STATUS: Optimal path calculated</p>
                       <p className="text-slate-400">Module selection based on <span className="text-secondary">latent skill clustering</span> and <span className="text-secondary">projected career drift</span>. Identifying <span className="text-red-400 font-bold italic">critical gap</span> in <span className="underline">distributed systems</span>...</p>
                       <p className="text-slate-400">Adjusting neural weights for <span className="text-accent-success font-bold tracking-widest">MAX_EFFICIENCY</span>. Result: Redirecting focus to Module 0x88 (System Architecture Enhancement).</p>
                    </div>
                 </motion.div>
               )}
            </AnimatePresence>
          </GlassCard>
        </div>

        {/* Right Column: Learning Path */}
        <div className="lg:col-span-3">
           <div className="flex items-center gap-3 mb-8 px-2">
              <Target size={18} className="text-primary" />
              <h4 className="text-xs font-bold uppercase tracking-[0.2em]">Learning Path</h4>
           </div>
           <div className="relative">
              <TimelineItem 
                title="Foundational Neural Core"
                duration="12 Hours"
                difficulty="Beginner"
                status="completed"
              />
              <TimelineItem 
                title="Advanced Mesh Architectures"
                duration="24 Hours"
                difficulty="Expert"
                status="active"
                active={true}
              />
              <TimelineItem 
                title="Quantum Neural Sync"
                duration="8 Hours"
                difficulty="Master"
                status="locked"
              />
           </div>
        </div>
      </div>
    </motion.div>
  );
};
