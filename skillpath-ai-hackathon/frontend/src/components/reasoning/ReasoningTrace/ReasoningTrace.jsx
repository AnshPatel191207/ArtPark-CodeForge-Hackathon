import React from 'react';
import { Search, Brain, Map as MapIcon, ShieldCheck, ChevronRight } from 'lucide-react';
import styles from './ReasoningTrace.module.css';

export const ReasoningTrace = () => {
  const steps = [
    {
      id: 1,
      title: 'Context Parsing',
      icon: Search,
      time: '0.4s',
      description: 'Extracted 14 technical skills from Candidate Resume (PDF). Identified missing "Docker" capability required in Job Description.',
      confidence: 96,
      status: 'complete'
    },
    {
      id: 2,
      title: 'Semantic Matching',
      icon: Brain,
      time: '1.2s',
      description: 'Mapped extracted terms against O*NET taxonomy. Identified "React.js" and "Next.js" as highly homologous, adjusting gap severity.',
      confidence: 92,
      status: 'complete'
    },
    {
      id: 3,
      title: 'Pathing Algorithm',
      icon: MapIcon,
      time: '0.8s',
      description: 'Calculated optimal learning trajectory using directed acyclic graph. Bypassed intro modules based on existing proficiency.',
      confidence: 89,
      status: 'complete'
    },
    {
      id: 4,
      title: 'Catalog Grounding',
      icon: ShieldCheck,
      time: '0.3s',
      description: 'Verified all recommended modules exist in internal training catalog. Zero-hallucination check passed.',
      confidence: 100,
      status: 'complete'
    }
  ];

  return (
    <div className={styles.traceContainer}>
      <div className={styles.header}>
        <h3>AI Decision Trace</h3>
        <p>Transparent view of the adaptive engine's processing pipeline.</p>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className={styles.step}>
              <div className={styles.stepIconWrapper}>
                <div className={styles.stepIcon}>
                  <Icon size={20} />
                </div>
                {index < steps.length - 1 && <div className={styles.connector}></div>}
              </div>
              
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <span className={styles.stepTime}>{step.time}</span>
                </div>
                
                <p className={styles.stepDesc}>{step.description}</p>
                
                <div className={styles.confidenceBar}>
                  <div className={styles.confidenceLabel}>
                    <span>Confidence Score</span>
                    <span>{step.confidence}%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div 
                      className={styles.progressFill} 
                      style={{ 
                        width: `${step.confidence}%`,
                        backgroundColor: step.confidence > 90 ? 'var(--color-success)' : 'var(--color-warning)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className={styles.summaryBox}>
        <div className={styles.summaryIcon}><Brain size={24} /></div>
        <div className={styles.summaryContent}>
          <h4>Engine Conclusion</h4>
          <p>Candidate requires targeted upskilling in <strong>DevOps (Docker)</strong> and <strong>Backend (Advanced Node.js)</strong>. Generating 3-week adaptive learning path. Grounding 100% verified.</p>
        </div>
      </div>
    </div>
  );
};
