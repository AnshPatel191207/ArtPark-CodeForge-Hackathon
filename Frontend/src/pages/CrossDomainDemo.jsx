import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, NeonButton } from '../components/ui';
import { Code, Briefcase, BarChart, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DemoCard = ({ icon: Icon, title, roadmap, onExplore }) => (
  <GlassCard className="group hover:border-primary/40 transition-all duration-500 cursor-pointer h-full flex flex-col">
    <div className="flex items-center gap-4 mb-6">
       <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:shadow-neon-indigo transition-shadow">
          <Icon size={24} />
       </div>
       <div>
          <h4 className="font-bold text-white">{title}</h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Protocol Sync: Active</p>
       </div>
    </div>
    <div className="space-y-3 flex-1">
       {roadmap && roadmap.map((step, i) => (
         <div key={i} className="flex items-center gap-3">
            <div className="w-1 h-8 bg-white/5 rounded-full overflow-hidden">
               <div className="w-full h-1/2 bg-primary/40"></div>
            </div>
            <span className="text-[11px] text-slate-400 font-inter">{step}</span>
         </div>
       ))}
    </div>
    <div className="mt-6">
      <NeonButton
        onClick={(e) => {
          e.stopPropagation();
          onExplore();
        }}
        className="w-full flex items-center justify-center gap-2 group py-4"
      >
        Explore Full Roadmap <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </NeonButton>
    </div>
  </GlassCard>
);

export const CrossDomainDemo = () => {
  const navigate = useNavigate();
  const demos = [
    { 
      icon: Code, 
      title: "Software Engineer", 
      roadmap: ["System Architecture", "Advanced Go-lang", "Kubernetes Mesh"] 
    },
    { 
      icon: BarChart, 
      title: "Marketing Lead", 
      roadmap: ["Neural Ad Targeting", "Semantic ROI Analysis", "Growth Vectors"] 
    },
    { 
      icon: Briefcase, 
      title: "Operations Dir.", 
      roadmap: ["Supply Chain Neural Sync", "LLM-based Forecasting", "Risk Mitigation"] 
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-16 px-4">
         <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase italic">Neural <span className="text-primary not-italic">Adaptability</span></h2>
         <p className="text-slate-500 font-inter max-w-xl mx-auto italic border-b border-primary/20 pb-2">The Aetheris engine autonomously reconfigures for any professional domain.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {demos.map((demo, i) => (
          <DemoCard 
            key={i} 
            {...demo} 
            onExplore={() => navigate('/roadmap-preview')}
          />
        ))}
      </div>
    </div>
  );
};
