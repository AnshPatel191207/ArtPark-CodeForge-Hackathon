import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Search, Database, Target, Cpu, Zap, Activity, ShieldCheck, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Step = ({ icon: Icon, label, sub, active, completed, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`flex items-center gap-6 p-6 rounded-2xl border transition-all duration-500 ${
      active ? 'bg-primary/10 border-primary/50 shadow-neon-indigo scale-105' : 
      completed ? 'bg-accent-success/5 border-accent-success/20 opacity-60' : 
      'bg-white/5 border-white/5 opacity-30 shadow-inner'
    }`}
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${active || completed ? 'text-primary' : 'text-slate-600'}`}>
       <Icon size={24} className={active ? 'animate-pulse' : ''} />
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-sm tracking-widest uppercase">{label}</h4>
      <p className="text-[10px] text-slate-500 font-inter tracking-wider font-medium">{sub}</p>
    </div>
    <div className="flex items-center gap-2">
      {active && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}><Sparkles size={16} className="text-primary" /></motion.div>}
      {completed && <Zap size={16} className="text-accent-success shadow-neon-success" fill="currentColor" />}
    </div>
  </motion.div>
);

export const Processing = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const steps = [
    { icon: Search, label: "Parsing Resume", sub: "Extracting semantic entities and experience vectors..." },
    { icon: Brain, label: "Skill Inference", sub: "Deep learning model identifying latent competencies..." },
    { icon: Target, label: "Mapping Skill Gap", sub: "Calculating vector distance to target job description..." },
    { icon: Cpu, label: "Generating Roadmap", sub: "Orchestrating personalized learning milestones..." }
  ];

  // Neural network particles
  const particles = useMemo(() => [...Array(20)].map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    size: Math.random() * 3 + 1
  })), []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(s => {
        if (s === steps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => navigate('/dashboard'), 2000);
          return s;
        }
        return s + 1;
      });
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress(p => Math.min(p + (100 / (steps.length * 30)), 100));
    }, 100);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-50 bg-[#05070F] flex flex-col items-center justify-center p-8 overflow-hidden font-inter">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.1, y: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              y: [-20, 20, -20],
              x: [-10, 10, -10]
            }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-primary/30 blur-[2px]"
            style={{ 
              top: `${p.top}%`, 
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`
            }}
          />
        ))}
        {/* Floating Code Snippets */}
        <div className="absolute top-20 left-20 opacity-10 font-mono text-[8px] text-primary space-y-1">
            <p>0x7F8BC3: RECOMPILING_NEURAL_WEIGHTS...</p>
            <p>VEC_DIST: 0.842 → CALCULATING_GAP</p>
            <p>STATUS: SYNC_ESTABLISHED</p>
        </div>
      </div>

      <div className="max-w-2xl w-full space-y-12 relative z-10">
        <div className="text-center space-y-4">
           <motion.div
             initial={{ scale: 0, rotate: -180 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", damping: 10 }}
             className="w-24 h-24 bg-gradient-to-br from-primary via-indigo-600 to-secondary rounded-[2.5rem] mx-auto flex items-center justify-center shadow-2xl shadow-primary/40 mb-8 relative"
           >
              <div className="absolute inset-0 rounded-[2.5rem] animate-pulse bg-primary/20 bg-glow-primary"></div>
              <Activity size={40} className="text-white relative z-10" />
           </motion.div>
           <h1 className="text-6xl font-black italic uppercase tracking-tighter leading-none">
             Neural <span className="text-gradient">Synthesis</span>
           </h1>
           <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
             AETHERIS is currently deciphering semantic structures within your history to synthesize a predictive career trajectory.
           </p>
        </div>

        <div className="space-y-4">
           {steps.map((step, i) => (
             <Step 
                key={i} 
                {...step} 
                index={i}
                active={currentStep === i} 
                completed={currentStep > i} 
             />
           ))}
        </div>

        <div className="flex flex-col items-center gap-4">
           <div className="w-full max-w-md h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                 className="h-full bg-gradient-to-r from-primary to-secondary shadow-neon-indigo"
                 animate={{ width: `${progress}%` }}
                 transition={{ ease: "linear" }}
              />
           </div>
           <div className="flex justify-between w-full max-w-md px-2">
              <p className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase">
                {currentStep === steps.length - 1 ? 'Finalizing Profile...' : `Neural Load: ${Math.round(progress)}%`}
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-primary/60 font-mono">
                 <ShieldCheck size={10} />
                 <span>ENCRYPTION_SAFE</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
