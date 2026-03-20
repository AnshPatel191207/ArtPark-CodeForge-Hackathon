import React, { useState } from 'react';
import { DragDropZone } from '../../components/upload/DragDropZone/DragDropZone';
import { ArrowRight, Settings, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Upload.module.css';

export const Upload = () => {
  const navigate = useNavigate();
  const [resumeFile, setResumeFile] = useState(null);
  const [jdFile, setJdFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const canAnalyze = resumeFile && jdFile;

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate API call for parsing and analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate('/analysis');
    }, 2000);
  };

  return (
    <div className={styles.uploadContainer}>
      <header className={styles.header}>
        <div className={styles.headerIcon}>
          <FileCheck size={28} />
        </div>
        <div>
          <h1 className={styles.title}>Document Upload</h1>
          <p className={styles.description}>
            Upload the candidate's resume and the target job description to begin the AI skill gap analysis.
          </p>
        </div>
      </header>

      <div className={styles.uploadGrid}>
        <div className={styles.uploadCard}>
          <div className={styles.cardHeader}>
            <div className={styles.badge}>Step 1</div>
            <h3>Candidate Resume</h3>
          </div>
          <p className={styles.cardHelp}>Upload the latest version of the resume to extract existing skill proficiencies.</p>
          <div className={styles.dropArea}>
            <DragDropZone 
              title="Resume File"
              accept={{
                'application/pdf': ['.pdf'],
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
                'application/json': ['.json']
              }}
              onFileDrop={setResumeFile}
              file={resumeFile}
              onRemove={() => setResumeFile(null)}
            />
          </div>
        </div>

        <div className={styles.uploadCard}>
          <div className={styles.cardHeader}>
            <div className={styles.badge}>Step 2</div>
            <h3>Target Job Description</h3>
          </div>
          <p className={styles.cardHelp}>Upload the JD to map the required capabilities and calculate the skill gap distance.</p>
          <div className={styles.dropArea}>
            <DragDropZone 
              title="Job Description File"
              accept={{
                'application/pdf': ['.pdf'],
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
                'application/json': ['.json']
              }}
              onFileDrop={setJdFile}
              file={jdFile}
              onRemove={() => setJdFile(null)}
            />
          </div>
        </div>
      </div>

      <div className={styles.actionsBox}>
        <div className={styles.actionsInfo}>
          <Settings className={styles.spinIcon} size={20} style={{ animation: isAnalyzing ? 'spin 2s linear infinite' : 'none', color: isAnalyzing ? 'var(--color-primary)' : 'inherit' }} />
          <span>
            {isAnalyzing 
              ? 'AI Engine is extracting capabilities and mapping the learning pathway...' 
              : 'Upload both files to generate the adaptive learning roadmap.'}
          </span>
        </div>
        <button 
          className={`${styles.analyzeBtn} ${(!canAnalyze || isAnalyzing) ? styles.disabled : ''}`}
          onClick={handleAnalyze}
          disabled={!canAnalyze || isAnalyzing}
        >
          {isAnalyzing ? 'Processing...' : 'Generate Roadmap'} 
          {!isAnalyzing && <ArrowRight size={18} />}
        </button>
      </div>
    </div>
  );
};
// Add a quick animation locally for spin if needed, but css handles UI
