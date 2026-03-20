import React from 'react';
import { Users, TrendingUp, AlertCircle, Download } from 'lucide-react';
import styles from './ManagerDashboard.module.css';

export const ManagerDashboard = () => {
  const employees = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Fullstack Developer',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=10B981&color=fff',
      currentModule: 'Advanced GraphQL APIs',
      progress: 75,
      status: 'On Track'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'DevOps Engineer',
      avatar: 'https://ui-avatars.com/api/?name=Marcus+Johnson&background=F59E0B&color=fff',
      currentModule: 'Kubernetes Orchestration',
      progress: 30,
      status: 'Behind'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Frontend Architect',
      avatar: 'https://ui-avatars.com/api/?name=Elena+Rodriguez&background=3B82F6&color=fff',
      currentModule: 'Micro-frontends Integration',
      progress: 100,
      status: 'Completed'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Backend Developer',
      avatar: 'https://ui-avatars.com/api/?name=David+Kim&background=8B5CF6&color=fff',
      currentModule: 'Redis Caching Strategies',
      progress: 60,
      status: 'On Track'
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'On Track': return styles.onTrack;
      case 'Behind': return styles.behind;
      case 'Completed': return styles.completed;
      default: return '';
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.header}>
        <div>
          <h1>HR & Management View</h1>
          <p>Monitor employee onboarding progress and skill gap closure rates.</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.iconWrapper} ${styles.blue}`}>
            <Users size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3>142</h3>
            <p>Active Learners</p>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={`${styles.iconWrapper} ${styles.green}`}>
            <TrendingUp size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3>89%</h3>
            <p>Avg. Gap Closure Rate</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.iconWrapper} ${styles.orange}`}>
            <AlertCircle size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3>12</h3>
            <p>Require Assistance</p>
          </div>
        </div>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <h3>Cohort Progress (Engineering Team)</h3>
          <button className={styles.primaryButton}>
            <Download size={16} /> Export Report
          </button>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.employeeTable}>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Current Focus Module</th>
                <th>Overall Completion</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>
                    <div className={styles.employeeInfo}>
                      <img src={emp.avatar} alt={emp.name} className={styles.employeeAvatar} />
                      <div>
                        <div className={styles.employeeName}>{emp.name}</div>
                        <div className={styles.employeeRole}>{emp.role}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                    {emp.currentModule}
                  </td>
                  <td>
                    <div className={styles.progressWrapper}>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${emp.progress}%`, backgroundColor: emp.status === 'Behind' ? 'var(--color-warning)' : 'var(--color-primary)' }}
                        ></div>
                      </div>
                      <span className={styles.progressText}>{emp.progress}%</span>
                    </div>
                  </td>
                  <td>
                    <span className={`${styles.statusBadge} ${getStatusClass(emp.status)}`}>
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
