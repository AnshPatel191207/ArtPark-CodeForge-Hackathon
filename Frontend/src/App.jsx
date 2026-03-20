import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Navbar } from './components/layout/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import { Dashboard } from './pages/Dashboard';
import { Landing } from './pages/Landing';
import { Upload } from './pages/Upload';
import { Analytics } from './pages/Analytics';
import { Signup } from './pages/Signup';
import { Processing } from './pages/Processing';
import { Settings } from './pages/Settings';
import { Profile } from './pages/Profile';
import { RoadmapPreview } from './pages/RoadmapPreview';
import { ReportExport } from './pages/ReportExport';
import { CrossDomainDemo } from './pages/CrossDomainDemo';
import { ManagerDashboard } from './pages/ManagerDashboard';
import { MockInterview } from './pages/MockInterview';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { ChatWidget } from './components/ui/ChatWidget';

const AppLayout = ({ children }) => {
  const { theme, isRevealing, revealPosition } = useTheme();
  
  return (
    <div className={`flex h-screen overflow-hidden font-inter transition-colors duration-500 ${theme === 'dark' ? 'bg-background text-slate-200' : 'bg-[#F8FAFC] text-slate-800'}`}>
      {/* Theme Reveal Overlay */}
      <AnimatePresence mode="popLayout">
        {isRevealing && (
          <motion.div
            initial={{ 
              clipPath: `circle(0% at ${revealPosition.x}px ${revealPosition.y}px)`,
              opacity: 1
            }}
            animate={{ 
              clipPath: `circle(150% at ${revealPosition.x}px ${revealPosition.y}px)`,
              opacity: 1
            }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.4 }
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.19, 1, 0.22, 1] // Custom ease-out
            }}
            className={`fixed inset-0 z-[9999] pointer-events-none ${theme === 'dark' ? 'bg-[#F8FAFC]' : 'bg-[#05070F]'}`}
          />
        )}
      </AnimatePresence>

      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8 relative">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
          
          {/* Background Decorative Glows */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </main>
      </div>
      <ChatWidget />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
            {/* Full Screen Pages */}
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/processing" element={<Processing />} />

            {/* Layout Pages */}
            <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
            <Route path="/upload" element={<AppLayout><Upload /></AppLayout>} />
            <Route path="/analytics" element={<AppLayout><Analytics /></AppLayout>} />
            <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
            <Route path="/export" element={<AppLayout><ReportExport /></AppLayout>} />
            <Route path="/demo" element={<AppLayout><CrossDomainDemo /></AppLayout>} />
            <Route path="/profile" element={<AppLayout><Profile /></AppLayout>} />
            <Route path="/roadmap-preview" element={<AppLayout><RoadmapPreview /></AppLayout>} />
            <Route path="/manager" element={<AppLayout><ManagerDashboard /></AppLayout>} />
            <Route path="/interview" element={<AppLayout><MockInterview /></AppLayout>} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;

