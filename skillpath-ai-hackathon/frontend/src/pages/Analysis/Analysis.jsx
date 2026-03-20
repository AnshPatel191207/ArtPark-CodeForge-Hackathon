import React, { useState } from 'react';
import { ShieldCheck, BarChart2, Activity, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import styles from './Analysis.module.css';
import { ReasoningTrace } from '../../components/reasoning/ReasoningTrace/ReasoningTrace';

const mockRadarData = [
  { subject: 'Frontend', A: 85, B: 95, fullMark: 100 },
  { subject: 'Backend', A: 65, B: 80, fullMark: 100 },
  { subject: 'DevOps', A: 40, B: 70, fullMark: 100 },
  { subject: 'Database', A: 50, B: 75, fullMark: 100 },
  { subject: 'Testing', A: 70, B: 85, fullMark: 100 },
];

const mockBarData = [
  { name: 'React', current: 90, required: 95 },
  { name: 'Node.js', current: 60, required: 85 },
  { name: 'Docker', current: 30, required: 70 },
  { name: 'SQL', current: 55, required: 80 },
  { name: 'GraphQL', current: 20, required: 75 },
];

export const Analysis = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className={styles.analysisContainer}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Skill Profile Analysis</h1>
          <p className={styles.subtitle}>AI-generated comparison between Candidate capabilities and Target Role requirements.</p>
        </div>
        <div className={styles.matchScoreCard}>
          <div className={styles.scoreText}>
            <span className={styles.scoreValue}>72</span>
            <span className={styles.scorePercent}>%</span>
          </div>
          <p className={styles.scoreLabel}>Role Compatibility Match</p>
        </div>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'overview' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <BarChart2 size={18} /> Gap Visualization
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'reasoning' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('reasoning')}
        >
          <Activity size={18} /> AI Reasoning Trace
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'verification' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('verification')}
        >
          <ShieldCheck size={18} /> Grounding & Logs
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'overview' && (
          <div className={styles.overviewGrid}>
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Domain Proficiency Radar</h3>
              <p className={styles.chartDesc}>Candidate vs Required across core technical domains.</p>
              <div className={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mockRadarData}>
                    <PolarGrid stroke="#E2E8F0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94A3B8' }} />
                    <Radar name="Candidate" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.4} />
                    <Radar name="Required" dataKey="B" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className={styles.legend}>
                <span className={styles.legendItem}><div className={styles.legendColor} style={{ backgroundColor: '#3B82F6' }}></div> Candidate</span>
                <span className={styles.legendItem}><div className={styles.legendColor} style={{ backgroundColor: '#8B5CF6' }}></div> Required</span>
              </div>
            </div>

            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Critical Skill Gaps</h3>
              <p className={styles.chartDesc}>Specific technologies requiring upskilling training.</p>
              <div className={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockBarData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 12, dy: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                    <Tooltip cursor={{ fill: '#F1F5F9' }} />
                    <Bar dataKey="current" name="Current Level" fill="#3B82F6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                    <Bar dataKey="required" name="Required Level" fill="#E2E8F0" radius={[4, 4, 0, 0]} maxBarSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className={styles.insightsCard}>
              <h3>Key AI Insights</h3>
              <ul className={styles.insightsList}>
                <li>
                  <CheckCircle size={16} className={styles.insightIconGreen} />
                  <span>Strong alignment in <strong>Frontend Development</strong>, specifically React.js lifecycle. Training redundacy reduced.</span>
                </li>
                <li>
                  <AlertTriangle size={16} className={styles.insightIconYellow} />
                  <span>Moderate gap in <strong>Backend Engineering</strong> (Node.js). Foundation exists but advanced concepts required.</span>
                </li>
                <li>
                  <Zap size={16} className={styles.insightIconRed} />
                  <span>Critical missing capability in <strong>Docker/DevOps</strong>. Suggested as Priority #1 for onboarding week 1.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'reasoning' && (
          <ReasoningTrace />
        )}
        
        {activeTab === 'verification' && (
          <div className={styles.verificationPanel}>
            <h3>Knowledge Base Grounding (15% Criteria)</h3>
            <p>To prevent AI hallucinations, all mapping rules strictly adhere to internal catalogs.</p>
            <div className={styles.logBox}>
              <pre>
{`[10:24:01] START: Entity Linking for "Docker"
[10:24:02] VALIDATE: Course ID: DevOps-101 exists in catalog.json.
[10:24:02] RESOLVED: Match Confidence 99.8%.
[10:24:03] START: Entity Linking for "GraphQL React"
[10:24:03] VALIDATE: Mapping to APIDesign-201.
[10:24:04] VALIDATION SUCESS: Pathing rules applied. Hallucination check passed.`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
