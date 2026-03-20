import React from 'react';
import { Calendar, Clock, BookOpen, ExternalLink, AlertTriangle, CheckCircle, Video, Code } from 'lucide-react';
import styles from './Roadmap.module.css';

const roadmapData = [
  {
    week: 1,
    title: 'Foundations & Critical Gaps',
    courses: [
      {
        id: 'c1',
        title: 'Docker for React Developers',
        type: 'Video + Hands-on Lab',
        icon: Video,
        duration: '4 hours',
        priority: 'High',
        description: 'Addresses the critical missing gap identified in the DevOps domain.',
        status: 'required'
      },
      {
        id: 'c2',
        title: 'Advanced Node.js Patterns',
        type: 'Interactive Coding',
        icon: Code,
        duration: '6 hours',
        priority: 'Medium',
        description: 'Bridges the gap between candidate\'s current intermediate knowledge and required advanced API design.',
        status: 'required'
      }
    ]
  },
  {
    week: 2,
    title: 'Domain Specialization',
    courses: [
      {
        id: 'c3',
        title: 'GraphQL API Integration',
        type: 'Project',
        icon: Code,
        duration: '8 hours',
        priority: 'High',
        description: 'Required capability for the specific project candidate is assigned to.',
        status: 'required'
      }
    ]
  },
  {
    week: 3,
    title: 'Validation & Internal Tooling',
    courses: [
      {
        id: 'c4',
        title: 'Company Security Practices',
        type: 'Reading & Assessment',
        icon: BookOpen,
        duration: '2 hours',
        priority: 'Mandatory',
        description: 'Standard security onboarding. Bypassed foundational HR modules due to candidate seniority.',
        status: 'required'
      }
    ]
  }
];

export const Roadmap = () => {
  return (
    <div className={styles.roadmapContainer}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <Calendar size={32} className={styles.headerIcon} />
          <div>
            <h1>Personalized Learning Roadmap</h1>
            <p>Optimized pathway adapted to the candidate's existing proficiencies.</p>
          </div>
        </div>
        
        <div className={styles.metricsBox}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Total Duration</span>
            <span className={styles.metricValue}>20 Hours</span>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Time Saved</span>
            <span className={styles.metricValueSuccess}>-35 Hours</span>
          </div>
        </div>
      </header>

      <div className={styles.infoBanner}>
        <CheckCircle size={20} className={styles.successIcon} />
        <div>
          <h4>Redundant Training Bypassed</h4>
          <p>By mapping your resume, the adaptive engine bypassed "Intro to React", "Git Basics", and "Standard Agile practices", accelerating your onboarding by 64%.</p>
        </div>
      </div>

      <div className={styles.timelineWrapper}>
        <div className={styles.timelineLine}></div>
        
        {roadmapData.map((phase) => (
          <div key={phase.week} className={styles.timelineSection}>
            <div className={styles.timelineMarker}>
              <div className={styles.markerBadge}>Week {phase.week}</div>
            </div>
            
            <div className={styles.timelineContent}>
              <h3 className={styles.phaseTitle}>{phase.title}</h3>
              
              <div className={styles.courseList}>
                {phase.courses.map((course) => {
                  const Icon = course.icon;
                  return (
                    <div key={course.id} className={styles.courseCard}>
                      <div className={styles.courseCardColor}></div>
                      <div className={styles.courseBody}>
                        <div className={styles.courseHeader}>
                          <h4 className={styles.courseTitle}>{course.title}</h4>
                          <span className={`${styles.priorityBadge} ${styles[course.priority.toLowerCase()]}`}>
                            {course.priority} Priority
                          </span>
                        </div>
                        
                        <p className={styles.courseDesc}>{course.description}</p>
                        
                        <div className={styles.courseMeta}>
                          <div className={styles.metaItem}>
                            <Icon size={14} /> {course.type}
                          </div>
                          <div className={styles.metaItem}>
                            <Clock size={14} /> {course.duration}
                          </div>
                        </div>
                      </div>
                      <div className={styles.courseAction}>
                        <button className={styles.startBtn}>
                          Start Module <ExternalLink size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
