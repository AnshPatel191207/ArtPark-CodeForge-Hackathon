import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, NeonButton } from '../components/ui';
import { Mail, Lock, User, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background font-inter">
      {/* Left: Illustration Area */}
      <div className="hidden lg:flex flex-col justify-center items-center p-20 relative overflow-hidden bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative z-10 text-center"
        >
          <div className="w-64 h-64 mx-auto mb-12 relative">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
             ></motion.div>
             <div className="absolute inset-4 border border-secondary/30 rounded-full blur-sm"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-3xl rotate-12 flex items-center justify-center shadow-neon-indigo">
                   <User className="text-white -rotate-12" size={48} />
                </div>
             </div>
          </div>
          <h2 className="text-4xl font-black mb-4 tracking-tighter">Ascend to Elite Status</h2>
          <p className="text-slate-500 max-w-sm mx-auto">Join 50,000+ architects using Aetheris to dominate their career trajectory.</p>
        </motion.div>

        {/* Interactive Neural Particles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(20)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-1 h-1 bg-primary rounded-full"
               initial={{ x: Math.random() * 800, y: Math.random() * 800 }}
               animate={{ 
                 x: Math.random() * 800, 
                 y: Math.random() * 800,
                 opacity: [0.2, 0.8, 0.2]
               }}
               transition={{ duration: Math.random() * 10 + 10, repeat: Infinity }}
             />
          ))}
        </div>
      </div>

      {/* Right: Signup Form */}
      <div className="flex flex-col justify-center p-8 md:p-20 relative bg-[#05070F]">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
             <Link to="/" className="flex items-center gap-2 mb-8 group">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                   <span className="text-white font-black text-xs">S</span>
                </div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-500 group-hover:text-white transition-colors">SkillPath AI</span>
             </Link>
             <h1 className="text-4xl font-black tracking-tighter mb-2">Initialize Account</h1>
             <p className="text-slate-500 text-sm">Synchronize your professional record with our core neural engine.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
              <div className="relative">
                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                 <input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-colors text-sm" placeholder="John Architect" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
              <div className="relative">
                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                 <input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-colors text-sm" placeholder="architect@nexus.ai" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Access Protocol</label>
              <div className="relative">
                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                 <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-colors text-sm" placeholder="••••••••" />
              </div>
            </div>

            <NeonButton className="w-full py-4 text-lg mt-4 shadow-neon-indigo">
              Initiate Sync Sequence
            </NeonButton>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-[0.3em]"><span className="bg-[#05070F] px-4 text-slate-600">Secure Authentication</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-xs font-bold font-inter">
                <Chrome size={16} /> Google
             </button>
             <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-xs font-bold font-inter">
                <Github size={16} /> GitHub
             </button>
          </div>

          <p className="mt-8 text-center text-xs text-slate-500">
            Already authenticated? <Link to="#" className="text-primary font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
