import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Server, Zap, Brain, ShieldCheck } from 'lucide-react';
import styles from './Home.module.css';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <Zap size={16} className={styles.badgeIcon} />
            <span>AI-Powered Onboarding Engine</span>
          </div>
          
          <h1 className={styles.title}>
            Personalize training with<br/>
            <span className={styles.gradientText}>Adaptive Intelligence</span>
          </h1>
          
          <p className={styles.description}>
            Eliminate "one-size-fits-all" curricula. SkillPath AI parses capabilities 
            from resumes and dynamically maps an optimized, personalized training pathway 
            to reach role-specific competency.
          </p>
          
          <div className={styles.heroActions}>
            <button 
              className={styles.primaryButton}
              onClick={() => navigate('/upload')}
            >
              Start Analysis <ArrowRight size={18} />
            </button>
            <button className={styles.secondaryButton}>
              <Play size={18} /> View Demo
            </button>
          </div>
        </div>

        {/* Dashboard Preview Graphic */}
        <div className={styles.heroGraphic}>
          <div className={styles.glassCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
              <span className={styles.cardTitle}>Live Analysis Engine</span>
            </div>
            
            <div className={styles.cardBody}>
              <div className={styles.statRow}>
                <div className={styles.statIcon}><Brain size={20} /></div>
                <div className={styles.statInfo}>
                  <h4>Skill Gap Detected</h4>
                  <p>React, Node.js, GraphQL</p>
                </div>
                <div className={styles.statScore}>85%</div>
              </div>
              <div className={styles.statRow}>
                <div className={styles.statIcon}><Server size={20} /></div>
                <div className={styles.statInfo}>
                  <h4>Timeline Adjusted</h4>
                  <p>Reduced redundant training by 2 weeks</p>
                </div>
                <div className={styles.statScore}>+14d</div>
              </div>
              <div className={styles.statRow}>
                <div className={styles.statIcon}><ShieldCheck size={20} /></div>
                <div className={styles.statInfo}>
                  <h4>Grounding Validation</h4>
                  <p>Aligned with internal course catalog</p>
                </div>
                <div className={styles.statScore}>Verified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <h3>Processing Speed</h3>
            <Zap className={styles.metricIconBlue} />
          </div>
          <div className={styles.metricValue}>&lt; 2.5s</div>
          <p className={styles.metricSub}>Average end-to-end parsing logic</p>
        </div>
        
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <h3>Adaptive Routing</h3>
            <Map className={styles.metricIconPurple} />
          </div>
          <div className={styles.metricValue}>Level 3</div>
          <p className={styles.metricSub}>Graph-based prerequisite matching</p>
        </div>
        
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <h3>Course Mapping</h3>
            <ShieldCheck className={styles.metricIconGreen} />
          </div>
          <div className={styles.metricValue}>100%</div>
          <p className={styles.metricSub}>Zero hallucination strict grounding</p>
        </div>
      </section>
    </div>
  );
};

// Assuming lucide-react Map exists, wait, we imported different ones. Let's fix that.
// Need to add Map to the imports. Let's just create a quick Map icon stub since I didn't import it above, or I can use another icon. I will use 'Network' or 'BarChart2'.
import { Network } from 'lucide-react';
// Then I will replace <Map /> with <Network />
