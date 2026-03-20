import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, NeonButton } from '../components/ui';
import { Zap, ArrowRight, Shield, Activity, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-transparent text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-neon-indigo"></span>
          Nexus-9 Intelligence Protocol Active
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none"
        >
          Your Onboarding. <br />
          <span className="text-gradient">Reinvented by AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-inter"
        >
          Transform from resume to role-ready — instantly. Aetheris orchestrates your neural transition into the workspace with high-fidelity skill mapping.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link to="/upload">
            <NeonButton className="flex items-center gap-2 px-10">
              Generate My Path <ArrowRight size={20} />
            </NeonButton>
          </Link>
          <NeonButton variant="outline" className="px-10">
            Watch Demo
          </NeonButton>
        </motion.div>

        {/* Hero Visual Mockup */}
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="mt-20 relative px-4"
        >
          <GlassCard className="max-w-5xl mx-auto p-4 md:p-8 bg-slate-900/60 border-primary/20 shadow-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3" 
              alt="Dashboard Preview" 
              className="rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
          </GlassCard>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Intelligent Parsing", desc: "Extract hidden skill vectors from resumes with 99.9% semantic accuracy." },
            { icon: Activity, title: "Gap Analysis", desc: "Instantly map your profile against complex job descriptions using AI reasoning." },
            { icon: Globe, title: "Adaptive Roadmap", desc: "Get a personalized learning journey that evolves with your progress." }
          ].map((feature, i) => (
            <GlassCard key={i} className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary shadow-neon-indigo">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-inter">{feature.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
};
