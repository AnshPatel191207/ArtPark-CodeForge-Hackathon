import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard, NeonButton } from '../components/ui';
import { FileText, Download, Share2, Eye, Layout, Printer, CheckCircle2, Check, FileDown, Activity } from 'lucide-react';

export const ReportExport = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + '/roadmap-preview');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const actions = [
    { 
      label: 'Print Roadmap', 
      icon: Printer, 
      color: 'text-primary', 
      bg: 'bg-primary/10',
      action: handlePrint
    },
    { 
      label: 'Export PDF', 
      icon: FileDown, 
      color: 'text-secondary', 
      bg: 'bg-secondary/10',
      action: handlePrint // Browser print can also save as PDF
    },
    { 
      label: isCopied ? 'Link Copied' : 'Share Link', 
      icon: isCopied ? Check : Share2, 
      color: 'text-accent-success', 
      bg: 'bg-accent-success/10',
      action: handleShare
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto pb-20 font-inter"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 print:hidden">
        <div>
          <h1 className="text-5xl font-black mb-2 tracking-tighter uppercase font-manrope">Report <span className="text-primary not-italic">Synthesis</span></h1>
          <p className="text-slate-500 font-inter max-w-lg">Export your neural learning trajectory as a high-fidelity PDF report for institutional verification.</p>
        </div>
        <div className="flex gap-4">
           <NeonButton variant="outline" onClick={handleShare} className="flex items-center gap-2">
              <Share2 size={18} /> {isCopied ? 'Copied!' : 'Share Digital Link'}
           </NeonButton>
           <NeonButton onClick={handlePrint} className="flex items-center gap-2 px-8">
              <Download size={18} /> Download PDF
           </NeonButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Preview Area */}
         <div className="lg:col-span-3">
            <GlassCard className="p-0 overflow-hidden bg-white border-0 shadow-2xl min-h-[800px] print:shadow-none print:border">
               {/* PDF Mockup Header */}
               <div className="bg-slate-950 p-12 text-white">
                  <div className="flex justify-between items-start mb-20">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded"></div>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase">SkillPath AI</span>
                     </div>
                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Confidential Report</span>
                  </div>

                  <h2 className="text-5xl font-black mb-4 tracking-tighter">Neural Onboarding trajectory</h2>
                  <p className="text-slate-400 text-sm max-w-md">Prepared for Dr. Elias Vance by Aetheris Synthesis Engine.</p>
               </div>

               {/* PDF Mockup Content */}
               <div className="p-12 text-slate-900 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 print:hidden">
                    {actions.map((act, i) => (
                      <button 
                        key={i} 
                        onClick={act.action}
                        className="flex flex-col items-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/50 transition-all group"
                      >
                        <div className={`w-14 h-14 rounded-2xl ${act.bg} ${act.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                           <act.icon size={28} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest">{act.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-8 mb-16 px-4 py-8 border-y border-slate-100 bg-slate-50 rounded-lg">
                     <div>
                        <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">Target Role</p>
                        <p className="font-bold">Senior Architect</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">Synthesized On</p>
                        <p className="font-bold">Mar 20, 2026</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">Report Version</p>
                        <p className="font-bold">v3.42-Elite</p>
                     </div>
                  </div>

                  <div className="space-y-12">
                     <div>
                        <h4 className="text-xs font-black uppercase text-primary tracking-[0.3em] mb-6">I. Skill Vector Analysis</h4>
                        <div className="h-48 w-full bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-8">
                            <div className="w-full flex justify-around items-end h-full px-10">
                               {[60, 85, 45, 90, 70].map((h, i) => (
                                 <div key={i} className="w-12 bg-indigo-500 rounded-t-lg" style={{ height: `${h}%` }}></div>
                               ))}
                            </div>
                        </div>
                     </div>

                     <div>
                        <h4 className="text-xs font-black uppercase text-primary tracking-[0.3em] mb-6">II. Roadmap Summary</h4>
                        <div className="space-y-4">
                           {[
                             { t: "Foundational Neural Core", s: "Completed", d: "12 Hours" },
                             { t: "Advanced Mesh Architectures", s: "86% Progress", d: "24 Hours" },
                             { t: "Quantum Neural Sync", s: "Locked", d: "8 Hours" }
                           ].map((item, i) => (
                             <div key={i} className="flex justify-between items-center p-4 border border-slate-100 rounded-lg">
                                <p className="font-bold text-slate-800">{item.t}</p>
                                <div className="text-right">
                                   <p className="text-[10px] font-bold text-slate-400 uppercase">{item.d}</p>
                                   <p className="text-xs font-bold text-indigo-600">{item.s}</p>
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </GlassCard>
         </div>

         {/* Options Sidebar */}
         <div className="space-y-6 print:hidden">
            <GlassCard>
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 font-inter">Export Configuration</h4>
               <div className="space-y-4">
                  {[
                    { label: "Include Reasoning Trace", active: true },
                    { label: "Skill Match Analytics", active: true },
                    { label: "Adaptive Learning Plan", active: true },
                    { label: "Raw Metadata (JSON)", active: false }
                  ].map((opt, i) => (
                    <div key={i} className="flex justify-between items-center">
                       <span className="text-xs text-slate-400 font-inter">{opt.label}</span>
                       <div className={`w-8 h-4 rounded-full p-0.5 border transition-colors ${opt.active ? 'bg-primary border-primary' : 'border-slate-700'}`}>
                          <div className={`w-2.5 h-2.5 bg-white rounded-full transition-transform ${opt.active ? 'translate-x-4' : ''}`}></div>
                       </div>
                    </div>
                  ))}
               </div>
            </GlassCard>

            <GlassCard>
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 font-inter">Report Quality</h4>
               <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-black tracking-widest uppercase mb-2">
                     <span className="text-primary font-inter">High Fidelity</span>
                     <span className="text-slate-500 font-inter">99.9%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="w-[99.9%] h-full bg-primary shadow-neon-indigo"></div>
                  </div>
               </div>
            </GlassCard>

            <NeonButton variant="outline" onClick={handlePrint} className="w-full py-4 text-xs tracking-widest flex items-center justify-center gap-2">
               <Printer size={16} /> Print Direct
            </NeonButton>
         </div>
      </div>
    </motion.div>
  );
};
