import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, NeonButton } from '../components/ui';
import { User, Bell, Shield, Moon, Monitor, Globe, Mail, Lock } from 'lucide-react';

const SettingsSection = ({ title, active, children }) => (
  <div className={`p-6 border-b border-white/5 last:border-0 ${active ? 'bg-white/5' : ''}`}>
    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">{title}</h4>
    <div className="space-y-6">
       {children}
    </div>
  </div>
);

const SettingToggle = ({ icon: Icon, label, desc, enabled }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
          <Icon size={20} />
       </div>
       <div>
          <p className="text-sm font-bold text-white">{label}</p>
          <p className="text-[10px] text-slate-500 font-inter">{desc}</p>
       </div>
    </div>
    <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 cursor-pointer ${enabled ? 'bg-primary' : 'bg-slate-800'}`}>
       <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${enabled ? 'translate-x-6' : ''}`}></div>
    </div>
  </div>
);

export const Settings = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto pb-20 font-inter"
    >
      <div className="mb-12">
        <h1 className="text-5xl font-black mb-2 tracking-tighter uppercase">System <span className="text-secondary">Preferences</span></h1>
        <p className="text-slate-500 font-inter">Configure your neural interface and account environment.</p>
      </div>

      <GlassCard className="p-0 overflow-hidden border-white/5 shadow-2xl">
         <SettingsSection title="Profile Information" active={true}>
            <div className="flex items-center gap-8 mb-8">
               <div className="relative">
                  <div className="w-24 h-24 rounded-full border-2 border-primary p-1 shadow-neon-indigo">
                     <img src="https://i.pravatar.cc/150?u=drvance" alt="Avatar" className="w-full h-full rounded-full" />
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-background border border-white/10 rounded-full flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-transform">
                     <User size={14} />
                  </button>
               </div>
               <div className="space-y-4 flex-1 max-w-md">
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                         <label className="text-[10px] font-bold uppercase text-slate-600 ml-1 tracking-widest">Display Name</label>
                         <input className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:border-primary/50 transition-colors text-sm" defaultValue="Dr. Elias Vance" />
                      </div>
                      <div className="space-y-1">
                         <label className="text-[10px] font-bold uppercase text-slate-600 ml-1 tracking-widest">Public ID</label>
                         <input className="w-full bg-slate-900 border border-white/5 rounded-xl py-2 px-4 focus:outline-none text-slate-600 text-sm italic" value="0x8B...F92" disabled />
                      </div>
                   </div>
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-slate-600 ml-1 tracking-widest">Neural Signature (Bio)</label>
                      <textarea className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:border-primary/50 transition-colors text-sm h-20" defaultValue="Senior Neural Architect obsessed with high-fidelity skill mapping." />
                   </div>
               </div>
            </div>
         </SettingsSection>

         <SettingsSection title="Neural Interface">
            <SettingToggle icon={Moon} label="Sub-atomic Dark Mode" desc="Optimized for deep-space visualization" enabled={true} />
            <SettingToggle icon={Bell} label="Cortex Notifications" desc="Real-time skill drift alerts" enabled={true} />
            <SettingToggle icon={Shield} label="Protocol Isolation" desc="Enable biometric skill authentication" enabled={false} />
         </SettingsSection>

         <div className="p-6 bg-slate-950/50 flex justify-end gap-4">
            <button className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Revert Sync</button>
            <NeonButton className="py-2 px-10">Push Changes</NeonButton>
         </div>
      </GlassCard>

      <div className="mt-8 grid grid-cols-2 gap-6">
         <GlassCard className="p-6 border-red-500/20 active:bg-red-500/5 group text-center flex flex-col items-center">
            <h4 className="text-xs font-bold uppercase text-red-400 mb-2 font-inter tracking-widest">Danger Zone</h4>
            <p className="text-[10px] text-slate-500 mb-6">Irreversibly delete your neural profile and skill vectors.</p>
            <button className="text-[10px] font-bold text-red-400 border border-red-400/30 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white transition-all uppercase tracking-widest">Terminate Account</button>
         </GlassCard>
         <GlassCard className="p-6 text-center flex flex-col items-center justify-center">
            <Globe className="text-blue-400 mb-3" size={24} />
            <p className="text-xs font-bold text-white mb-1">Global Scale System</p>
            <p className="text-[10px] text-slate-500">v2.4.0 (Stable)</p>
         </GlassCard>
      </div>
    </motion.div>
  );
};
