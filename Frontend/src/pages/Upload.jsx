import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard, NeonButton } from '../components/ui';
import { CloudUpload, File, CheckCircle2, ChevronRight, Wand2, Shield, Activity, X, FileText, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Upload = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobFile, setJobFile] = useState(null);
  const [jobText, setJobText] = useState('');
  const [jdMode, setJdMode] = useState('file'); // 'file' or 'text'
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  
  const resumeInputRef = useRef(null);
  const jobInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'resume') setResumeFile(file);
      else setJobFile(file);
      setError('');
    }
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      if (type === 'resume') setResumeFile(file);
      else setJobFile(file);
      setError('');
    }
  };

  const handleAnalyze = () => {
    const isJdProvided = jdMode === 'file' ? !!jobFile : jobText.trim().length > 50;
    
    if (!resumeFile) {
      setError('Please upload your resume to continue.');
      return;
    }
    
    if (!isJdProvided) {
      setError(jdMode === 'file' ? 'Please upload a job description.' : 'Please provide a more detailed job description (min 50 chars).');
      return;
    }
    
    setIsUploading(true);
    // Simulate AI processing transition
    setTimeout(() => {
      navigate('/processing');
    }, 1500);
  };

  const formatSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const FilePreview = ({ file, onRemove }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mt-4 w-full flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        <FileText size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold truncate transition-colors duration-500 text-slate-200 dark:text-white">{file.name}</p>
        <p className="text-[10px] text-slate-500 font-inter">{formatSize(file.size)}</p>
      </div>
      <button onClick={(e) => { e.stopPropagation(); onRemove(); }} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
        <X size={14} className="text-slate-500" />
      </button>
    </motion.div>
  );

  return (
    <div className="max-w-5xl mx-auto pb-20">
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-black mb-4 tracking-tighter">Neural <span className="text-primary font-manrope">Alignment</span></h1>
          <p className="text-slate-400 max-w-2xl font-inter">Synchronize your professional DNA with institutional protocols via Aetheris Intelligence.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resume Upload */}
          <GlassCard 
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              console.log("Resume Dropped:", file);
              setResumeFile(file);
              setError('');
            }}
            className={`flex flex-col items-center justify-center p-0 text-center border-dashed border-2 cursor-pointer transition-all group overflow-hidden ${
              resumeFile ? 'border-primary/50 bg-primary/5' : 'border-white/10 bg-white/5 hover:border-primary/50'
            }`}
          >
            <label 
              htmlFor="resume-upload" 
              className="w-full h-full p-12 flex flex-col items-center justify-center cursor-pointer"
            >
              <input 
                type="file" 
                id="resume-upload"
                className="hidden" 
                accept=".pdf,.docx,.txt"
                onChange={(e) => {
                  const file = e.target.files[0];
                  console.log("Resume Selected:", file);
                  setResumeFile(file);
                  setError('');
                }}
              />
              
              {resumeFile ? (
                <div className="w-full flex flex-col items-center">
                   <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 shadow-neon-indigo">
                      <CheckCircle2 className="text-primary" size={32} />
                   </div>
                   <h3 className="text-xl font-bold mb-2">Resume Captured</h3>
                   <FilePreview file={resumeFile} onRemove={() => {
                     console.log("Resume Removed");
                     setResumeFile(null);
                   }} />
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-neon-indigo mx-auto">
                    <CloudUpload className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Upload Resume</h3>
                  <p className="text-sm text-slate-500 mb-6 font-inter">Drag professional record or <span className="text-primary font-bold">Browse</span></p>
                  <div className="w-full h-px bg-white/5 mb-6"></div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-widest justify-center">
                    <Shield size={12} /> Encrypted Transmission Active
                  </div>
                </>
              )}
            </label>
          </GlassCard>

          {/* Job Description Upload */}
          <GlassCard 
            className={`flex flex-col p-8 transition-all relative ${
              (jdMode === 'file' ? !!jobFile : jobText.length > 50) ? 'border-secondary/50 bg-secondary/5' : 'border-white/10 bg-white/5'
            }`}
          >
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <File size={20} />
                   </div>
                   <h3 className="text-lg font-bold">Target Spec</h3>
                </div>
                <div className="flex bg-black/20 p-1 rounded-lg border border-white/5">
                   <button 
                    onClick={() => setJdMode('file')}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${jdMode === 'file' ? 'bg-secondary text-white shadow-neon-purple' : 'text-slate-500 hover:text-slate-300'}`}
                   >
                    FILE
                   </button>
                   <button 
                    onClick={() => setJdMode('text')}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${jdMode === 'text' ? 'bg-secondary text-white shadow-neon-purple' : 'text-slate-500 hover:text-slate-300'}`}
                   >
                    TEXT
                   </button>
                </div>
             </div>

             {jdMode === 'file' ? (
                <div 
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files[0];
                    console.log("JD Dropped:", file);
                    setJobFile(file);
                    setError('');
                  }}
                  className="flex-1 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center p-0 cursor-pointer hover:border-secondary/50 transition-colors group overflow-hidden"
                >
                  <label htmlFor="job-upload" className="w-full h-full p-6 flex flex-col items-center justify-center cursor-pointer">
                    <input 
                      type="file" 
                      id="job-upload"
                      className="hidden" 
                      accept=".pdf,.docx,.txt"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        console.log("JD Selected:", file);
                        setJobFile(file);
                        setError('');
                      }}
                    />
                    {jobFile ? (
                      <div className="w-full">
                         <div className="flex flex-col items-center mb-4">
                            <CheckCircle2 className="text-secondary mb-2" size={24} />
                            <p className="text-xs font-bold font-manrope">Spec Captured</p>
                         </div>
                         <FilePreview file={jobFile} onRemove={() => {
                           console.log("JD Removed");
                           setJobFile(null);
                         }} />
                      </div>
                    ) : (
                      <>
                        <CloudUpload className="text-slate-500 group-hover:text-secondary mb-3 transition-colors" size={32} />
                        <p className="text-xs text-slate-500 font-inter">Drop PDF or <span className="text-secondary font-bold">Browse</span></p>
                      </>
                    )}
                  </label>
                </div>
             ) : (
                <textarea 
                  value={jobText}
                  onChange={(e) => setJobText(e.target.value)}
                  placeholder="Paste the job description here (requirements, responsibilities, etc)..."
                  className="flex-1 w-full bg-black/20 border border-white/10 rounded-xl p-4 text-xs font-inter focus:outline-none focus:border-secondary/50 resize-none transition-colors min-h-[180px]"
                />
             )}

             <div className="mt-6 flex items-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                <Activity size={12} /> Neural Analysis Mode: Active
             </div>
          </GlassCard>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 flex items-center gap-2 text-accent-error bg-accent-error/10 p-4 rounded-xl border border-accent-error/20"
            >
              <AlertCircle size={20} />
              <p className="text-sm font-bold">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <NeonButton 
            onClick={handleAnalyze} 
            disabled={isUploading}
            className={`w-80 flex items-center justify-center gap-3 py-6 text-xl translate-y-0 active:scale-95 transition-all ${
              (!resumeFile || (jdMode === 'file' ? !jobFile : jobText.length < 50)) ? 'opacity-50 grayscale cursor-not-allowed' : 'hover:-translate-y-1'
            }`}
          >
             {isUploading ? (
               <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
             ) : (
               <>
                 <Wand2 size={24} /> Analyze with AI
               </>
             )}
          </NeonButton>
          
          <div className="flex -space-x-3 overflow-hidden">
            {[1,2,3].map(i => (
              <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-slate-800" src={`https://i.pravatar.cc/150?u=${i}`} alt="" />
            ))}
            <div className="flex items-center justify-center h-8 px-3 rounded-full bg-slate-800 ring-2 ring-background text-[10px] font-bold text-slate-400">
               +12.8k Neural Links Formed Today
            </div>
          </div>
        </motion.div>
    </div>
  );
};
