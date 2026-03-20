import { useState, useRef, useEffect } from 'react';
import { Search, Bell, User, Sun, Moon, Check, Trash2, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const searchRef = useRef(null);
  const notifRef = useRef(null);

  const suggestions = [
    { label: 'Neural Nets Module', type: 'Skill', path: '/dashboard' },
    { label: 'Distributed Systems', type: 'Gap', path: '/analytics' },
    { label: 'Export Roadmap', type: 'Action', path: '/export' },
    { label: 'Profile Settings', type: 'Page', path: '/settings' }
  ].filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase()));

  const [notifications, setNotifications] = useState([
    { id: 1, text: "Resume analyzed successfully", time: "2m ago", read: false },
    { id: 2, text: "New roadmap generated", time: "1h ago", read: false },
    { id: 3, text: "Security clearance updated", time: "3h ago", read: true }
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) setShowSearch(false);
      if (notifRef.current && !notifRef.current.contains(event.target)) setShowNotifications(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`h-20 border-b px-8 flex items-center justify-between sticky top-0 z-50 transition-colors duration-500 ${theme === 'dark' ? 'border-white/10 bg-background/30 backdrop-blur-md' : 'border-slate-200 bg-white/70 backdrop-blur-md'}`}>
      <div className="relative w-96" ref={searchRef}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value); setShowSearch(true); }}
          onFocus={() => setShowSearch(true)}
          placeholder="Search skill vectors..." 
          className={`w-full border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
        />
        
        <AnimatePresence>
          {showSearch && searchQuery.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`absolute top-full left-0 right-0 mt-2 border rounded-xl shadow-2xl overflow-hidden z-[100] ${theme === 'dark' ? 'bg-[#0B1220] border-white/10' : 'bg-white border-slate-200'}`}
            >
              {suggestions.length > 0 ? suggestions.map((s, i) => (
                <div 
                  key={i} 
                  onClick={() => { navigate(s.path); setShowSearch(false); }}
                  className={`px-4 py-3 flex items-center justify-between cursor-pointer transition-colors ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}
                >
                  <span className="text-sm font-medium">{s.label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-0.5 rounded bg-primary/10">{s.type}</span>
                </div>
              )) : (
                <div className="px-4 py-6 text-center text-xs text-slate-500">No vectors found for "{searchQuery}"</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={(e) => toggleTheme(e)}
          className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${theme === 'dark' ? 'text-yellow-400 bg-yellow-400/10' : 'text-indigo-600 bg-indigo-600/10'}`}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative p-2 transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <Bell size={20} />
            {notifications.some(n => !n.read) && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full shadow-neon-indigo animate-pulse"></span>
            )}
          </button>
          
          <AnimatePresence>
            {showNotifications && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className={`absolute top-full right-0 mt-2 w-80 border rounded-2xl shadow-2xl overflow-hidden z-[100] ${theme === 'dark' ? 'bg-[#0B1220] border-white/10' : 'bg-white border-slate-200'}`}
              >
                <div className={`px-4 py-3 border-b flex justify-between items-center ${theme === 'dark' ? 'border-white/5 bg-white/5' : 'border-slate-100 bg-slate-50'}`}>
                  <h4 className="text-xs font-bold uppercase tracking-widest">Neural Alerts</h4>
                  <button 
                    onClick={() => setNotifications(n => n.map(x => ({ ...x, read: true })))}
                    className="text-[10px] text-primary font-bold hover:underline"
                  >
                    Mark all read
                  </button>
                </div>
                <div className="max-h-[300px] overflow-auto">
                  {notifications.map((n) => (
                    <div key={n.id} className={`px-4 py-4 border-b flex gap-3 transition-colors ${theme === 'dark' ? 'border-white/5 hover:bg-white/5' : 'border-slate-50 hover:bg-slate-50'} ${!n.read ? 'bg-primary/5' : ''}`}>
                      <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${!n.read ? 'bg-primary shadow-neon-indigo' : 'bg-slate-700'}`}></div>
                      <div className="flex-1">
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'} ${!n.read ? 'font-bold' : ''}`}>{n.text}</p>
                        <p className="text-[10px] text-slate-500 mt-1">{n.time}</p>
                      </div>
                      <button onClick={() => setNotifications(prev => prev.filter(x => x.id !== n.id))} className="text-slate-600 hover:text-red-400"><Trash2 size={12} /></button>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center">
                   <button className="text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">View System Logs</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/10"></div>

        <div 
          onClick={() => navigate('/profile')}
          className="flex items-center gap-3 ps-2 cursor-pointer group"
        >
          <div className="text-right hidden md:block">
            <p className={`text-sm font-semibold transition-colors ${theme === 'dark' ? 'text-white group-hover:text-primary' : 'text-slate-900 group-hover:text-primary'}`}>Dr. Elias Vance</p>
            <p className="text-[10px] text-slate-500 font-bold tracking-tighter uppercase">Senior Neural Architect</p>
          </div>
          <div className="w-10 h-10 rounded-full border border-primary/50 p-0.5 shadow-neon-indigo transition-transform group-hover:scale-105">
            <img src="https://i.pravatar.cc/150?u=drvance" alt="User" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>
    </nav>
  );
};
