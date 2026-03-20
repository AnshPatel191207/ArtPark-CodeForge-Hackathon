import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Upload, 
  Zap, 
  BarChart3, 
  Settings, 
  FileText, 
  LogOut,
  User,
  Globe,
  Users,
  Video
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const SidebarItem = ({ to, icon: Icon, label }) => {
  const { theme } = useTheme();
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
        ${isActive 
          ? 'bg-primary/20 text-primary border border-primary/30 shadow-neon-indigo' 
          : theme === 'dark' 
            ? 'text-slate-400 hover:text-white hover:bg-white/5' 
            : 'text-slate-500 hover:text-primary hover:bg-slate-100'}
      `}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </NavLink>
  );
};

export const Sidebar = () => {
  const { theme } = useTheme();

  return (
    <div className={`w-64 h-screen border-r p-6 flex flex-col transition-colors duration-500 ${theme === 'dark' ? 'border-white/10 bg-background/50 backdrop-blur-xl' : 'border-slate-200 bg-white'}`}>
      <NavLink to="/" className="flex items-center gap-3 mb-10 px-2 group">
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-neon-indigo group-hover:scale-110 transition-transform">
          <Zap className="text-white" size={18} fill="currentColor" />
        </div>
        <h1 className={`text-xl font-extrabold tracking-tight transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          SkillPath <span className="text-primary">AI</span>
        </h1>
      </NavLink>

      <nav className="flex-1 space-y-2">
        <SidebarItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
        <SidebarItem to="/upload" icon={Upload} label="Upload & Analyze" />
        <SidebarItem to="/analytics" icon={BarChart3} label="Analytics" />
        <SidebarItem to="/export" icon={FileText} label="Reports" />
        <SidebarItem to="/demo" icon={Globe} label="Cross-Domain" />
        <SidebarItem to="/manager" icon={Users} label="HR Dashboard" />
        <SidebarItem to="/interview" icon={Video} label="Mock Interview" />
      </nav>

      <div className={`mt-auto space-y-2 pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
        <SidebarItem to="/settings" icon={Settings} label="Settings" />
        <SidebarItem to="/profile" icon={User} label="My Profile" />
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors uppercase text-xs font-bold tracking-widest mt-4">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};
