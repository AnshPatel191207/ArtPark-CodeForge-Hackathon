import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { Activity, TrendingUp, Award, Zap, CheckCircle2 } from 'lucide-react';

const matchData = [
  { name: 'Python', current: 85, required: 90 },
  { name: 'TensorFlow', current: 65, required: 85 },
  { name: 'React', current: 95, required: 80 },
  { name: 'Docker', current: 40, required: 75 },
  { name: 'Kubernetes', current: 55, required: 80 },
];

const progressData = [
  { day: 'Day 1', score: 45 },
  { day: 'Day 5', score: 52 },
  { day: 'Day 10', score: 58 },
  { day: 'Day 15', score: 72 },
  { day: 'Day 20', score: 85 },
];

export const Analytics = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncComplete, setSyncComplete] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncComplete(true);
      setTimeout(() => setSyncComplete(false), 3000);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto space-y-8 pb-12"
    >
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-black mb-2 tracking-tighter uppercase italic">Neural <span className="text-primary not-italic">Analytics</span></h1>
          <p className="text-slate-500 font-inter">High-fidelity performance metrics across your skill vectors.</p>
        </div>
        <div className="flex gap-4">
            <button 
              onClick={handleSync}
              disabled={isSyncing}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                isSyncing ? 'bg-primary/20 text-primary animate-pulse' : 'bg-primary text-white hover:shadow-neon-indigo active:scale-95 shadow-lg'
              }`}
            >
              {isSyncing ? (
                <Activity className="animate-spin" size={16} />
              ) : syncComplete ? (
                <CheckCircle2 size={16} />
              ) : (
                <Zap size={16} />
              )}
              {isSyncing ? 'Syncing Vectors...' : syncComplete ? 'Synced' : 'Real-time Sync'}
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skill Match Comparison */}
        <GlassCard className="h-[400px]">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-indigo-300">Skill Match vs Requirement</h4>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={matchData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={10} width={80} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="current" fill="#4F46E5" radius={[0, 4, 4, 0]} barSize={12} />
                <Bar dataKey="required" fill="#ffffff10" radius={[0, 4, 4, 0]} barSize={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Learning Velocity */}
        <GlassCard className="h-[400px]">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-purple-300">Neural Velocity</h4>
          <div className="w-full h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={progressData}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9333EA" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#9333EA" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" hide />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip 
                     contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  />
                  <Area type="monotone" dataKey="score" stroke="#9333EA" fillOpacity={1} fill="url(#colorScore)" strokeWidth={3} />
                </AreaChart>
             </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard className="flex flex-col items-center text-center p-10">
           <TrendingUp className="text-primary mb-4" size={32} />
           <h3 className="text-4xl font-black mb-1">94%</h3>
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Growth Forecast</p>
        </GlassCard>
        <GlassCard className="flex flex-col items-center text-center p-10 border-secondary/20">
           <Zap className="text-secondary mb-4" size={32} />
           <h3 className="text-4xl font-black mb-1">0.4ms</h3>
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Inference Latency</p>
        </GlassCard>
        <GlassCard className="flex flex-col items-center text-center p-10 border-accent-success/20">
           <Award className="text-accent-success mb-4" size={32} />
           <h3 className="text-4xl font-black mb-1">Elite</h3>
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Tier Rank</p>
        </GlassCard>
      </div>
    </motion.div>
  );
};
